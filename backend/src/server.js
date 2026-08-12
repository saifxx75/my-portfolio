import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import path from 'node:path';
import { config } from './config.js';
import { api } from './routes.js';
import { errorHandler, notFound } from './middleware.js';

const app = express();
app.set('trust proxy', 1);
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({ origin: config.clientOrigins, credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(morgan(config.nodeEnv === 'production' ? 'combined' : 'dev'));
app.use('/uploads', express.static(path.resolve('uploads')));
app.use('/api', rateLimit({ windowMs: 15 * 60 * 1000, limit: 500, standardHeaders: 'draft-8' }), api);
app.use(notFound);
app.use(errorHandler);

await mongoose.connect(config.mongoUri);
app.listen(config.port, () => console.log(`Portfolio API listening on port ${config.port}`));
