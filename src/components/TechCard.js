import React from 'react';
import { motion } from 'framer-motion';

const TechCard = ({
  children,
  className = '',
  variant = 'default',
  glowEffect,
  hoverScale,
  ...props
}) => {
  const variants = {
    default: 'bg-white dark:bg-dark-500 border-light-400 dark:border-dark-400',
    primary: 'bg-white dark:bg-dark-500 border-primary/25',
    secondary: 'bg-white dark:bg-dark-500 border-secondary/25',
    accent: 'bg-light-600 dark:bg-dark-500 border-light-400 dark:border-dark-400'
  };

  return (
    <motion.div
      className={`relative rounded-lg border shadow-[0_8px_24px_rgba(15,23,42,0.06)] ${variants[variant]} ${className}`}
      initial={false}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default TechCard;
