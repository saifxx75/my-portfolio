import React from 'react';
import { motion } from 'framer-motion';

const TechButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  loading = false,
  ...props 
}) => {
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-white border-primary/50',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white border-secondary/50',
    outline: 'bg-transparent hover:bg-primary/10 text-primary border-primary hover:border-primary/70',
    ghost: 'bg-transparent hover:bg-light-300 dark:hover:bg-dark-400 text-light-200 dark:text-dark-200 hover:text-primary border-transparent',
    tech: 'bg-primary/5 hover:bg-primary/10 text-primary border-primary/30'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const iconSizes = {
    small: 'h-4 w-4',
    medium: 'h-5 w-5',
    large: 'h-6 w-6'
  };

  return (
    <motion.button
      className={`
        relative inline-flex items-center justify-center
        font-semibold rounded-lg border transition-all duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
        overflow-hidden group
      `}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
      disabled={disabled || loading}
      {...props}
    >
      {/* Content */}
      <div className="relative z-10 flex items-center">
        {Icon && iconPosition === 'left' && (
          <Icon className={`${iconSizes[size]} ${children ? 'mr-2' : ''}`} />
        )}
        
        {loading ? (
          <motion.div
            className={`${iconSizes[size]} border-2 border-current border-t-transparent rounded-full`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ) : (
          children
        )}
        
        {Icon && iconPosition === 'right' && !loading && (
          <motion.div
            className="flex items-center"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className={`${iconSizes[size]} ${children ? 'ml-2' : ''}`} />
          </motion.div>
        )}
      </div>

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
        initial={false}
        transition={{ duration: 0.3 }}
      />

      {/* Corner tech accents */}
      {variant === 'tech' && (
        <>
          <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </>
      )}
    </motion.button>
  );
};

export default TechButton;
