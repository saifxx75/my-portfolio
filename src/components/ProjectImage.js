import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Cloud, Globe, Smartphone, Monitor } from 'lucide-react';

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
      cloud: Cloud
    };
    return icons[type] || Code2;
  };

  const ProjectIcon = getProjectIcon(projectType);

  const gradients = {
    web: 'from-blue-500/20 to-purple-500/20',
    mobile: 'from-green-500/20 to-blue-500/20',
    desktop: 'from-purple-500/20 to-pink-500/20',
    backend: 'from-primary/20 to-secondary/20',
    database: 'from-orange-500/20 to-red-500/20',
    api: 'from-cyan-500/20 to-blue-500/20',
    cloud: 'from-gray-500/20 to-blue-500/20'
  };

  return (
    <motion.div
      className={`
        ${sizeClasses[size]} 
        relative rounded-xl bg-gradient-to-br ${gradients[projectType]} 
        border border-primary/20 overflow-hidden group cursor-pointer
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Tech pattern background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id={`project-pattern-${projectType}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#8B5CF6" opacity="0.4" />
              <path d="M0,10 L20,10 M10,0 L10,20" stroke="#10B981" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill={`url(#project-pattern-${projectType})`} />
        </svg>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ProjectIcon className={`${iconSizes[size]} text-primary mx-auto mb-2`} />
          {size === 'full' && (
            <div>
              <p className="text-sm text-light-200 dark:text-dark-200 font-medium mb-1">{title}</p>
              <p className="text-xs text-light-300 dark:text-dark-300 capitalize">{projectType} Project</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Floating elements for full size */}
      {size === 'full' && (
        <>
          <motion.div
            className="absolute top-2 right-2 w-2 h-2 bg-primary/60 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-secondary/60 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </>
      )}
    </motion.div>
  );
};

export default ProjectImage;