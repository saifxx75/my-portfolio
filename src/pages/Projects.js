import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillBadge from '../components/SkillBadge';
import TechBackground from '../components/TechBackground';
import TechCard from '../components/TechCard';
import TechButton from '../components/TechButton';
import ProjectImage from '../components/ProjectImage';
import { 
  ExternalLink, 
  Github, 
  Code, 
  Server, 
  Globe,
  ShoppingCart,
  MessageSquare,
  BarChart3,
  Shield,
  Zap,
  Terminal,
  Filter
} from 'lucide-react';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'SmartQC',
      description: 'Lead generation and data quality assurance platform built with Java SpringBoot backend and React frontend. Features advanced data validation, automated QC processes, and comprehensive reporting.',
      image: '/api/placeholder/400/250',
      technologies: ['Java', 'SpringBoot', 'React.js', 'PostgreSQL', 'JWT', 'REST APIs'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://demo.com',
      features: [
        'Automated data quality checks',
        'Lead generation pipeline',
        'Real-time data validation',
        'Comprehensive reporting dashboard',
        'Secure authentication system',
        'API integration for third-party services'
      ],
      icon: BarChart3
    },
    {
      id: 2,
      title: 'Kitecyber',
      description: 'IT Security application focused on vulnerability assessment and security monitoring. Built with Java SpringBoot backend with advanced security features and real-time threat detection.',
      image: '/api/placeholder/400/250',
      technologies: ['Java', 'SpringBoot', 'MySQL', 'Security APIs', 'JWT', 'Nikto'],
      category: 'backend',
      github: 'https://github.com',
      features: [
        'Vulnerability scanning and assessment',
        'Real-time security monitoring',
        'Threat detection algorithms',
        'Security report generation',
        'API security testing',
        'Compliance checking tools'
      ],
      icon: Shield
    },
    {
      id: 3,
      title: 'Market40',
      description: 'News platform built with PHP CodeIgniter backend, MySQL database, and Vue.js frontend. Features content management, user engagement, and real-time news updates.',
      image: '/api/placeholder/400/250',
      technologies: ['PHP', 'CodeIgniter', 'MySQL', 'Vue.js', 'Bootstrap', 'REST APIs'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://demo.com',
      features: [
        'Dynamic content management system',
        'User authentication and profiles',
        'Real-time news feed updates',
        'Search and filtering capabilities',
        'Responsive design with Bootstrap',
        'SEO optimized architecture'
      ],
      icon: Globe
    },
    {
      id: 4,
      title: 'E-Commerce Backend API',
      description: 'Scalable e-commerce backend service built with Node.js and Express.js. Features secure payment integration with Stripe and PayPal, inventory management, and order processing.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'PayPal API', 'JWT'],
      category: 'backend',
      github: 'https://github.com',
      features: [
        'Secure payment gateway integration',
        'Inventory management system',
        'Order processing and tracking',
        'User authentication with JWT',
        'RESTful API design',
        'Database optimization'
      ],
      icon: ShoppingCart
    },
    {
      id: 5,
      title: 'Microservices Architecture',
      description: 'Distributed microservices system built with Spring Boot and Spring Cloud. Features service discovery, API gateway, and centralized configuration management.',
      image: '/api/placeholder/400/250',
      technologies: ['Spring Boot', 'Spring Cloud', 'Docker', 'PostgreSQL', 'Redis', 'Cloudflare'],
      category: 'backend',
      github: 'https://github.com',
      features: [
        'Service discovery and registration',
        'API gateway with load balancing',
        'Centralized configuration management',
        'Circuit breaker pattern implementation',
        'Distributed caching with Redis',
        'Container orchestration with Docker'
      ],
      icon: Server
    },
    {
      id: 6,
      title: 'Real-time Chat System',
      description: 'Real-time messaging application with Node.js backend and React frontend. Features WebSocket communication, message encryption, and file sharing capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'Socket.io', 'React.js', 'MongoDB', 'JWT', 'Cloudflare'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://demo.com',
      features: [
        'Real-time messaging with WebSockets',
        'End-to-end message encryption',
        'File and media sharing',
        'Group chat functionality',
        'Online presence indicators',
        'Message history and search'
      ],
      icon: MessageSquare
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-light-600 dark:bg-dark-600 py-12 relative overflow-hidden">
      <TechBackground variant="grid" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-light-400/50 dark:bg-dark-400/50 rounded-full border border-primary/20 mb-6"
          >
            <Terminal className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm text-primary font-mono">ls -la ./projects/</span>
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-light-100 dark:text-dark-100 mb-6 section-heading"
          >
            My Projects
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-light-200 dark:text-dark-200 max-w-3xl mx-auto"
          >
            A showcase of my backend development expertise and full-stack applications
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="inline-flex items-center px-3 py-2 bg-light-400/50 dark:bg-dark-400/50 rounded-lg border border-primary/20 mr-4">
            <Filter className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm text-primary font-mono">filter:</span>
          </div>
          
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TechButton
                variant={filter === category.id ? 'primary' : 'ghost'}
                size="medium"
                onClick={() => setFilter(category.id)}
                className={filter === category.id ? 'pulse-glow' : ''}
              >
                {category.label} ({category.count})
              </TechButton>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TechCard 
                variant="default" 
                glowEffect={true}
                className="overflow-hidden h-full flex flex-col"
                hoverScale={1.03}
              >
                {/* Project Image/Icon */}
                <div className="relative">
                  <ProjectImage 
                    projectType={project.category === 'backend' ? 'backend' : 'web'}
                    title={project.title}
                    size="full"
                  />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-dark-400/80 backdrop-blur-sm rounded-full border border-primary/20">
                    <span className="text-xs text-primary font-mono capitalize">{project.category}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-light-100 dark:text-dark-100 mb-3 flex items-center">
                    <project.icon className="h-5 w-5 text-primary mr-2" />
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-light-200 dark:text-dark-200 mb-4 line-clamp-3 flex-1">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                      >
                        <SkillBadge skill={tech} className="text-xs" />
                      </motion.div>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-light-300 dark:text-dark-300 px-2 py-1 bg-light-500 dark:bg-dark-500 rounded">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-light-100 dark:text-dark-100 mb-2 flex items-center">
                      <Code className="h-4 w-4 text-secondary mr-2" />
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="text-sm text-light-200 dark:text-dark-200 flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (featureIndex * 0.1) }}
                        >
                          <Zap className="h-3 w-3 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <TechButton
                          variant="ghost"
                          size="small"
                          icon={Github}
                          iconPosition="left"
                          className="flex-1"
                        >
                          Code
                        </TechButton>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <TechButton
                          variant="primary"
                          size="small"
                          icon={ExternalLink}
                          iconPosition="left"
                          className="flex-1"
                        >
                          Live Demo
                        </TechButton>
                      </a>
                    )}
                  </div>
                </div>
              </TechCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-light-100 dark:text-dark-100 mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-light-200 dark:text-dark-200 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next backend project or discuss exciting opportunities.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Let's Connect
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
