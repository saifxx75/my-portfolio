import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { config } from '../config.js';
import { User } from '../models.js';

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;
if (!email || !password || password.length < 12) throw new Error('Set ADMIN_EMAIL and an ADMIN_PASSWORD of at least 12 characters');
await mongoose.connect(config.mongoUri);
const passwordHash = await bcrypt.hash(password, 12);
await User.findOneAndUpdate({ email: email.toLowerCase() }, { name: 'Portfolio Admin', email: email.toLowerCase(), passwordHash, role: 'admin' }, { upsert: true });
console.log(`Admin ready: ${email}`);
await mongoose.disconnect();
