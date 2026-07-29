import { BarChart3, BrainCircuit, Megaphone, ShieldCheck, ShoppingBag } from 'lucide-react';

export const contactLinks = {
  github: 'https://github.com/saifxx75',
  linkedin: 'https://www.linkedin.com/in/saif-khan-b6099920a/',
  email: 'mailto:saifkhan0409.sk@gmail.com',
  emailDisplay: 'saifkhan0409.sk@gmail.com',
  phone: 'tel:+918423290835',
  phoneDisplay: '+91 84232 90835'
};

export const projects = [
  {
    id: 'enterprise-ai-system',
    title: 'Enterprise AI System',
    description: 'An enterprise AI platform built around private LLM workflows, retrieval-augmented generation, vector search, asynchronous processing, object storage, and containerized deployment.',
    technologies: ['Python', 'FastAPI', 'LLMs', 'Ollama', 'RAG', 'Pinecone', 'Vector Databases', 'MinIO', 'Celery', 'Docker', 'Kubernetes'],
    category: 'ai',
    categoryLabel: 'Enterprise AI Platform',
    accessLabel: 'Private system',
    features: [
      'Private and local LLM workflows with Ollama',
      'RAG pipelines and semantic retrieval',
      'Pinecone and vector-database search',
      'Asynchronous processing with Celery',
      'MinIO object storage',
      'Containerized deployment with Docker and Kubernetes'
    ],
    icon: BrainCircuit
  },
  {
    id: 'smartqc',
    title: 'SmartQC',
    description: 'A data-quality platform that helps teams verify leads, strengthen sales pipelines, and improve marketing efforts with clean, validated data and CRM-ready workflows.',
    technologies: ['React.js', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Integrations'],
    category: 'fullstack',
    categoryLabel: 'Full-Stack Product',
    live: 'https://smartqc.io/',
    features: [
      'Lead verification workflows',
      'Duplicate and data-quality checks',
      'Sales-pipeline support',
      'CRM integration'
    ],
    icon: BarChart3
  },
  {
    id: 'edgelinking',
    title: 'EdgeLinking',
    description: 'A B2B demand-generation and marketing platform combining editorial and advertorial content, consultancy, funnel optimization, audience targeting, and campaigns across APAC and other markets.',
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Firebase', 'AWS Amplify'],
    category: 'fullstack',
    categoryLabel: 'Full-Stack Product',
    live: 'https://edgelinking.com/',
    features: [
      'Editorial and media network',
      'Campaign and audience experiences',
      'Marketing funnel optimization',
      'Responsive content delivery'
    ],
    icon: Megaphone
  },
  {
    id: 'kitecyber',
    title: 'KiteCyber',
    description: 'An endpoint-native security platform focused on SaaS and GenAI visibility, contextual policy enforcement, endpoint data protection, and data-loss prevention across data at rest, in use, and in motion.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'REST APIs'],
    category: 'platform',
    categoryLabel: 'Platform & APIs',
    live: 'https://kitecyber.com/',
    features: [
      'SaaS and GenAI visibility',
      'Contextual security controls',
      'Endpoint and DLP protection',
      'Secure application and API workflows'
    ],
    icon: ShieldCheck
  },
  {
    id: 'kidocart',
    title: 'KidoCart',
    description: 'A premium online store for children’s toys, clothing, feeding products, furniture, books, and other safe, comfortable, and educational essentials.',
    technologies: ['React.js', 'Node.js', 'REST APIs', 'Responsive UI', 'Integrations'],
    category: 'fullstack',
    categoryLabel: 'Full-Stack Product',
    live: 'https://www.kidocart.shop/',
    features: [
      'Responsive storefront',
      'Category browsing and search',
      'Wishlist, cart, and account flows',
      'Offers and order experience'
    ],
    icon: ShoppingBag
  }
];
