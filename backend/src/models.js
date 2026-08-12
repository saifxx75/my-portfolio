import mongoose from 'mongoose';

const options = {
  timestamps: true,
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform: (_document, value) => {
      delete value._id;
      return value;
    }
  }
};

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['admin'], default: 'admin' }
}, options);

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, index: true },
  description: { type: String, required: true, trim: true },
  category: { type: String, enum: ['ai', 'fullstack', 'platform'], required: true },
  categoryLabel: { type: String, required: true },
  technologies: [{ type: String, trim: true }],
  features: [{ type: String, trim: true }],
  live: String,
  repository: String,
  accessLabel: String,
  iconKey: { type: String, default: 'Code2' },
  imageUrl: String,
  status: { type: String, enum: ['draft', 'published'], default: 'draft', index: true },
  sortOrder: { type: Number, default: 0 }
}, options);

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, index: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  tags: [{ type: String, trim: true }],
  readTime: { type: String, default: '5 min read' },
  iconKey: { type: String, default: 'BookOpen' },
  coverImageUrl: String,
  featured: { type: Boolean, default: false },
  status: { type: String, enum: ['draft', 'published'], default: 'draft', index: true },
  publishedAt: Date
}, options);

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  subject: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  status: { type: String, enum: ['new', 'read', 'replied', 'archived'], default: 'new', index: true },
  reply: String,
  repliedAt: Date,
  ip: String
}, options);

const settingsSchema = new mongoose.Schema({
  key: { type: String, unique: true, default: 'site' },
  name: String,
  headline: String,
  bio: String,
  email: String,
  phone: String,
  location: String,
  github: String,
  linkedin: String,
  availability: String
}, options);

export const User = mongoose.model('User', userSchema);
export const Project = mongoose.model('Project', projectSchema);
export const Blog = mongoose.model('Blog', blogSchema);
export const Contact = mongoose.model('Contact', contactSchema);
export const Settings = mongoose.model('Settings', settingsSchema);
