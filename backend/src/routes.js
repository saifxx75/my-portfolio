import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import slugify from 'slugify';
import { config } from './config.js';
import { Blog, Contact, Project, Settings, User } from './models.js';
import { requireAdmin, upload } from './middleware.js';
import { blogSchema, contactSchema, loginSchema, projectSchema } from './validation.js';

export const api = Router();
const asyncRoute = handler => (req, res, next) => Promise.resolve(handler(req, res, next)).catch(next);
const parseBody = body => {
  const parsed = { ...body };
  for (const key of ['technologies', 'features', 'tags']) if (typeof parsed[key] === 'string') parsed[key] = parsed[key].split(',').map(value => value.trim()).filter(Boolean);
  return parsed;
};

api.get('/health', (_req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));
api.post('/auth/login', asyncRoute(async (req, res) => {
  const input = loginSchema.parse(req.body);
  const user = await User.findOne({ email: input.email.toLowerCase() });
  if (!user || !(await bcrypt.compare(input.password, user.passwordHash))) return res.status(401).json({ message: 'Invalid email or password' });
  const token = jwt.sign({ sub: user.id, role: user.role }, config.jwtSecret, { expiresIn: config.jwtExpiresIn });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
}));
api.get('/auth/me', requireAdmin, (req, res) => res.json({ user: req.user }));

api.get('/projects', asyncRoute(async (_req, res) => res.json({ items: await Project.find({ status: 'published' }).sort({ sortOrder: 1, createdAt: -1 }) })));
api.get('/blogs', asyncRoute(async (_req, res) => res.json({ items: await Blog.find({ status: 'published' }).sort({ publishedAt: -1, createdAt: -1 }) })));
api.get('/blogs/:slug', asyncRoute(async (req, res) => {
  const item = await Blog.findOne({ slug: req.params.slug, status: 'published' });
  if (!item) return res.status(404).json({ message: 'Blog post not found' });
  res.json({ item });
}));
api.get('/settings', asyncRoute(async (_req, res) => res.json({ item: await Settings.findOne({ key: 'site' }) })));
api.post('/contacts', asyncRoute(async (req, res) => {
  const input = contactSchema.parse(req.body);
  const item = await Contact.create({ ...input, ip: req.ip });
  res.status(201).json({ item: { id: item.id }, message: 'Message received' });
}));

api.use('/admin', requireAdmin);
api.get('/admin/dashboard', asyncRoute(async (_req, res) => {
  const [projects, blogs, unread, recent] = await Promise.all([
    Project.countDocuments(), Blog.countDocuments(), Contact.countDocuments({ status: 'new' }), Contact.find().sort({ createdAt: -1 }).limit(5)
  ]);
  res.json({ counts: { projects, blogs, unread }, recent });
}));

for (const [pathName, Model, schema, imageField] of [
  ['projects', Project, projectSchema, 'imageUrl'], ['blogs', Blog, blogSchema, 'coverImageUrl']
]) {
  api.get(`/admin/${pathName}`, asyncRoute(async (req, res) => {
    const filter = req.query.status ? { status: req.query.status } : {};
    res.json({ items: await Model.find(filter).sort({ updatedAt: -1 }) });
  }));
  api.post(`/admin/${pathName}`, upload.single('image'), asyncRoute(async (req, res) => {
    const input = schema.parse(parseBody(req.body));
    const slug = slugify(input.slug || input.title, { lower: true, strict: true });
    if (pathName === 'projects' && !input.categoryLabel) input.categoryLabel = ({ ai: 'AI System', fullstack: 'Full-Stack Product', platform: 'Platform & API' })[input.category];
    if (req.file) input[imageField] = `${config.publicApiUrl}/uploads/${req.file.filename}`;
    if (pathName === 'blogs' && input.status === 'published' && !input.publishedAt) input.publishedAt = new Date();
    const item = await Model.create({ ...input, slug });
    res.status(201).json({ item });
  }));
  api.put(`/admin/${pathName}/:id`, upload.single('image'), asyncRoute(async (req, res) => {
    const input = schema.partial().parse(parseBody(req.body));
    if (input.title || input.slug) input.slug = slugify(input.slug || input.title, { lower: true, strict: true });
    if (req.file) input[imageField] = `${config.publicApiUrl}/uploads/${req.file.filename}`;
    const item = await Model.findByIdAndUpdate(req.params.id, input, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: 'Record not found' });
    res.json({ item });
  }));
  api.delete(`/admin/${pathName}/:id`, asyncRoute(async (req, res) => {
    const item = await Model.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Record not found' });
    res.status(204).end();
  }));
}

api.get('/admin/contacts', asyncRoute(async (req, res) => {
  const filter = req.query.status ? { status: req.query.status } : {};
  res.json({ items: await Contact.find(filter).sort({ createdAt: -1 }) });
}));
api.patch('/admin/contacts/:id', asyncRoute(async (req, res) => {
  const status = ['new', 'read', 'replied', 'archived'].includes(req.body.status) ? req.body.status : null;
  if (!status) return res.status(400).json({ message: 'Invalid status' });
  const item = await Contact.findByIdAndUpdate(req.params.id, { status }, { new: true });
  if (!item) return res.status(404).json({ message: 'Message not found' });
  res.json({ item });
}));
api.post('/admin/contacts/:id/reply', asyncRoute(async (req, res) => {
  const reply = String(req.body.reply || '').trim();
  if (reply.length < 2 || reply.length > 5000) return res.status(400).json({ message: 'Reply must be between 2 and 5000 characters' });
  const item = await Contact.findById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Message not found' });
  if (!config.smtp.host) return res.status(503).json({ message: 'SMTP is not configured' });
  const transport = nodemailer.createTransport({ host: config.smtp.host, port: config.smtp.port, secure: config.smtp.secure, auth: { user: config.smtp.user, pass: config.smtp.pass } });
  await transport.sendMail({ from: config.smtp.from, to: item.email, subject: `Re: ${item.subject}`, text: reply });
  item.reply = reply; item.repliedAt = new Date(); item.status = 'replied'; await item.save();
  res.json({ item });
}));
api.put('/admin/settings', asyncRoute(async (req, res) => {
  const allowed = ['name', 'headline', 'bio', 'email', 'phone', 'location', 'github', 'linkedin', 'availability'];
  const update = Object.fromEntries(Object.entries(req.body).filter(([key]) => allowed.includes(key)));
  const item = await Settings.findOneAndUpdate({ key: 'site' }, update, { new: true, upsert: true, runValidators: true });
  res.json({ item });
}));
