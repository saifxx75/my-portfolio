import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillBadge from '../components/SkillBadge';
import TechBackground from '../components/TechBackground';
import TechCard from '../components/TechCard';
import TechButton from '../components/TechButton';
import ProjectImage from '../components/ProjectImage';
import { projects } from '../data/siteData';
import {
  pageHeaderVariants,
  sectionVariants as containerVariants,
  revealItemVariants as itemVariants,
  revealViewport
} from '../utils/motion';
import { 
  ExternalLink, 
  Code, 
  MessageSquare,
  Zap,
  Terminal,
  Filter
} from 'lucide-react';

function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work', count: projects.length },
    { id: 'ai', label: 'AI Systems', count: projects.filter(p => p.category === 'ai').length },
    { id: 'fullstack', label: 'Full-Stack Products', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'platform', label: 'Platform & APIs', count: projects.filter(p => p.category === 'platform').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-light-600 dark:bg-dark-600 py-12 relative overflow-hidden">
      <TechBackground variant="grid" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={pageHeaderVariants}
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
            End-to-end applications spanning responsive interfaces, APIs, enterprise AI, data, security, and deployment
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-col min-[375px]:flex-row min-[375px]:flex-wrap min-[375px]:justify-center gap-3 sm:gap-4 mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="inline-flex w-full min-[375px]:w-auto min-h-[44px] items-center px-4 py-2 bg-light-400/50 dark:bg-dark-400/50 rounded-lg border border-primary/20 sm:mr-2">
            <Filter className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm text-primary font-mono">filter:</span>
          </div>
          
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="w-full min-[375px]:w-auto"
              variants={itemVariants}
            >
              <TechButton
                variant={filter === category.id ? 'primary' : 'ghost'}
                size="medium"
                onClick={() => setFilter(category.id)}
                className={`w-full min-[375px]:w-auto ${filter === category.id ? 'pulse-glow' : ''}`}
              >
                {category.label} ({category.count})
              </TechButton>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
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
                    projectType={project.category === 'ai' ? 'ai' : project.category === 'platform' ? 'api' : 'web'}
                    title={project.title}
                    size="full"
                  />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 dark:bg-dark-400/90 backdrop-blur-sm rounded-full border border-primary/25 shadow-sm">
                    <span className="text-xs text-primary font-mono">{project.categoryLabel}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-light-100 dark:text-dark-100 mb-3 flex items-center">
                    <project.icon className="h-5 w-5 text-primary mr-2" />
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-light-200 dark:text-dark-200 mb-4 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={false}
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
                          initial={false}
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
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live site in a new tab`}
                      >
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
                    {!project.live && project.accessLabel && (
                      <span className="inline-flex min-h-[36px] items-center rounded-lg border border-light-300 bg-light-500 px-3 py-2 text-xs font-semibold text-light-200 dark:border-dark-300 dark:bg-dark-500 dark:text-dark-200">
                        {project.accessLabel}
                      </span>
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
          viewport={revealViewport}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-light-100 dark:text-dark-100 mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-light-200 dark:text-dark-200 mb-8 max-w-2xl mx-auto">
              Let's collaborate on a complete web product—from the interface and application logic to data and deployment.
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
