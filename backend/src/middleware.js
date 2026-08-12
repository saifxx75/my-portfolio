import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'node:path';
import crypto from 'node:crypto';
import { config } from './config.js';
import { User } from './models.js';

export async function requireAdmin(req, res, next) {
  try {
    const token = req.headers.authorization?.replace(/^Bearer\s+/i, '');
    if (!token) return res.status(401).json({ message: 'Authentication required' });
    const payload = jwt.verify(token, config.jwtSecret);
    const user = await User.findById(payload.sub).select('-passwordHash');
    if (!user || user.role !== 'admin') return res.status(403).json({ message: 'Admin access required' });
    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid or expired session' });
  }
}

const storage = multer.diskStorage({
  destination: path.resolve('uploads'),
  filename: (_req, file, done) => done(null, `${Date.now()}-${crypto.randomUUID()}${path.extname(file.originalname).toLowerCase()}`)
});

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, done) => done(null, ['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.mimetype))
});

export const notFound = (_req, res) => res.status(404).json({ message: 'Route not found' });

export const errorHandler = (error, _req, res, _next) => {
  console.error(error);
  if (error.name === 'ZodError') return res.status(400).json({ message: 'Validation failed', errors: error.issues });
  if (error.code === 11000) return res.status(409).json({ message: 'A record with that slug or email already exists' });
  if (error instanceof multer.MulterError) return res.status(400).json({ message: error.message });
  return res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
};
