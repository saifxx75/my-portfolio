import React from 'react';
import { motion } from 'framer-motion';

const TechCard = ({ 
  children, 
  className = '', 
  variant = 'default',
  glowEffect = false,
  hoverScale = 1.02,
  ...props 
}) => {
  const variants = {
    default: 'bg-light-400 dark:bg-dark-400 border-light-300 dark:border-dark-300',
    primary: 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20',
    secondary: 'bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20',
    accent: 'bg-gradient-to-br from-light-400 dark:from-dark-400 to-light-500 dark:to-dark-500 border-primary/30'
  };

  const glowVariants = {
    default: '',
    primary: 'shadow-primary/20',
    secondary: 'shadow-secondary/20',
    accent: 'shadow-primary/30'
  };

  return (
    <motion.div
      className={`
        relative rounded-xl border backdrop-blur-sm
        ${variants[variant]}
        ${glowEffect ? `shadow-lg ${glowVariants[variant]}` : 'shadow-md'}
        ${className}
        overflow-hidden group
      `}
      whileHover={{ 
        scale: hoverScale,
        boxShadow: glowEffect ? '0 20px 40px rgba(139, 92, 246, 0.15)' : '0 10px 30px rgba(0, 0, 0, 0.2)'
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props}
    >
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id={`tech-card-pattern-${variant}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="0.5" fill="#8B5CF6" />
              <path d="M0,5 L10,5 M5,0 L5,10" stroke="#10B981" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill={`url(#tech-card-pattern-${variant})`} />
        </svg>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-secondary/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default TechCard;