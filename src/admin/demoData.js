import { projects as publicProjects } from '../data/siteData';

export const demoProjects = publicProjects.map((project, index) => ({
  ...project,
  status: index === 0 ? 'draft' : 'published',
  updatedAt: new Date(Date.now() - index * 86400000).toISOString(),
}));

export const demoPosts = [
  { id: 'api-contracts', title: 'Designing API Contracts That Last', slug: 'designing-api-contracts', excerpt: 'Practical notes on durable service boundaries.', content: 'Start with the consumer and model failure states explicitly.', category: 'Backend', tags: ['REST', 'Node.js'], readTime: '7 min', featured: true, status: 'published', updatedAt: '2026-08-02T09:30:00Z' },
  { id: 'react-systems', title: 'Building Calm React Systems', slug: 'building-calm-react-systems', excerpt: 'Patterns for interfaces that stay maintainable.', content: 'A system becomes calm when state ownership is obvious.', category: 'Frontend', tags: ['React', 'Accessibility'], readTime: '6 min', featured: false, status: 'draft', updatedAt: '2026-08-01T12:20:00Z' },
];

export const demoMessages = [
  { id: 'm1', name: 'Aarav Mehta', email: 'aarav@example.com', subject: 'Product engineering collaboration', message: 'We are planning a new analytics product and would like to discuss the frontend and API architecture.', status: 'new', createdAt: '2026-08-04T07:45:00Z' },
  { id: 'm2', name: 'Nisha Rao', email: 'nisha@example.com', subject: 'React consulting', message: 'Could you help us improve performance and accessibility in an existing React application?', status: 'read', createdAt: '2026-08-03T14:10:00Z' },
];

export const demoSettings = { name: 'Saif Khan', role: 'Full-Stack Developer', email: 'saifkhan0409.sk@gmail.com', phone: '+91 84232 90835', location: 'Pune, Maharashtra, India', github: 'https://github.com/saifxx75', linkedin: 'https://www.linkedin.com/in/saif-khan-b6099920a/', availability: 'Available for selected projects' };
