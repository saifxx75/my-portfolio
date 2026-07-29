import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Database, Server, Cloud, Globe, Smartphone, Monitor } from 'lucide-react';

const ProjectImage = ({ 
  projectType = 'web', 
  title = 'Project', 
  size = 'medium',
  className = '' 
}) => {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32',
    full: 'w-full h-48'
  };

  const iconSizes = {
    small: 'h-6 w-6',
    medium: 'h-8 w-8',
    large: 'h-12 w-12',
    full: 'h-16 w-16'
  };

  const getProjectIcon = (type) => {
    const icons = {
      web: Globe,
      mobile: Smartphone,
      desktop: Monitor,
      backend: Server,
      database: Database,
      api: Code2,
      cloud: Cloud,
      ai: BrainCircuit
    };
    return icons[type] || Code2;
  };

  const ProjectIcon = getProjectIcon(projectType);
  const projectTypeLabel = projectType === 'ai' ? 'AI system' : `${projectType} project`;

  return (
    <motion.div
      className={`
        ${sizeClasses[size]} 
        relative rounded-lg bg-light-500 dark:bg-dark-400
        border border-light-400 dark:border-dark-300 overflow-hidden group
        ${className}
      `}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <motion.div
          className="text-center"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ProjectIcon className={`${iconSizes[size]} text-primary mx-auto mb-2`} />
          {size === 'full' && (
            <div>
              <p className="text-sm text-light-200 dark:text-dark-200 font-medium mb-1">{title}</p>
              <p className="text-xs text-light-300 dark:text-dark-300 capitalize">{projectTypeLabel}</p>
            </div>
          )}
        </motion.div>
      </div>

    </motion.div>
  );
};

export default ProjectImage;
