import React from 'react';
import { motion } from 'framer-motion';
import { cardTransition } from '../utils/motion';

const TechCard = ({
  children,
  className = '',
  variant = 'default',
  glowEffect = false,
  hoverScale = false,
  whileHover,
  transition,
  ...props
}) => {
  const variants = {
    default: 'bg-white dark:bg-dark-500 border-light-400 dark:border-dark-400',
    primary: 'bg-white dark:bg-dark-500 border-primary/25',
    secondary: 'bg-white dark:bg-dark-500 border-secondary/25',
    accent: 'bg-light-600 dark:bg-dark-500 border-light-400 dark:border-dark-400'
  };

  const hoverState = whileHover || {
    y: -4,
    scale: hoverScale ? 1.01 : 1,
    boxShadow: glowEffect
      ? '0 20px 44px rgba(37, 99, 235, 0.14)'
      : '0 18px 38px rgba(15, 23, 42, 0.11)'
  };

  return (
    <motion.div
      className={`tech-card relative rounded-lg border shadow-[0_8px_24px_rgba(15,23,42,0.06)] ${variants[variant]} ${glowEffect ? 'tech-card--glow' : ''} ${className}`}
      initial={false}
      whileHover={hoverState}
      transition={transition || cardTransition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default TechCard;
