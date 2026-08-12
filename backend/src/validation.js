import { z } from 'zod';

export const loginSchema = z.object({ email: z.email(), password: z.string().min(8).max(128) });
export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(200),
  subject: z.string().trim().min(3).max(200),
  message: z.string().trim().min(10).max(5000)
});
export const projectSchema = z.object({
  title: z.string().trim().min(2).max(160), description: z.string().trim().min(10).max(3000),
  slug: z.string().trim().max(180).optional(), category: z.enum(['ai', 'fullstack', 'platform']),
  categoryLabel: z.string().trim().min(2).max(80).optional(), technologies: z.array(z.string()).default([]),
  features: z.array(z.string()).default([]), live: z.string().optional(), repository: z.string().optional(),
  accessLabel: z.string().optional(), iconKey: z.string().default('Code2'), imageUrl: z.string().optional(),
  status: z.enum(['draft', 'published']).default('draft'), sortOrder: z.coerce.number().default(0)
});
export const blogSchema = z.object({
  title: z.string().trim().min(2).max(200), slug: z.string().trim().max(220).optional(),
  excerpt: z.string().trim().min(10).max(600), content: z.string().trim().min(20),
  category: z.string().trim().min(2).max(80), tags: z.array(z.string()).default([]),
  readTime: z.string().default('5 min read'), iconKey: z.string().default('BookOpen'),
  coverImageUrl: z.string().optional(), featured: z.coerce.boolean().default(false),
  status: z.enum(['draft', 'published']).default('draft'), publishedAt: z.coerce.date().optional()
});
