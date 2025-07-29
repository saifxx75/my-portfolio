import React from 'react';
import { motion } from 'framer-motion';

const TechBackground = ({ variant = 'circuit' }) => {
  const circuitVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.1
      }
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.3,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.6,
      transition: {
        duration: 0.5,
        delay: 1
      }
    }
  };

  if (variant === 'circuit') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          initial="hidden"
          animate="visible"
          variants={circuitVariants}
        >
          {/* Circuit lines */}
          <motion.path
            d="M0,100 L200,100 L200,200 L400,200 L400,300 L600,300"
            stroke="url(#circuitGradient1)"
            strokeWidth="2"
            fill="none"
            variants={lineVariants}
          />
          <motion.path
            d="M1200,150 L1000,150 L1000,250 L800,250 L800,350 L600,350"
            stroke="url(#circuitGradient2)"
            strokeWidth="2"
            fill="none"
            variants={lineVariants}
          />
          <motion.path
            d="M100,800 L100,600 L300,600 L300,400 L500,400 L500,200"
            stroke="url(#circuitGradient1)"
            strokeWidth="2"
            fill="none"
            variants={lineVariants}
          />
          <motion.path
            d="M1100,800 L1100,650 L900,650 L900,450 L700,450 L700,250"
            stroke="url(#circuitGradient2)"
            strokeWidth="2"
            fill="none"
            variants={lineVariants}
          />

          {/* Circuit nodes */}
          <motion.circle cx="200" cy="100" r="4" fill="#8B5CF6" variants={nodeVariants} />
          <motion.circle cx="400" cy="200" r="4" fill="#10B981" variants={nodeVariants} />
          <motion.circle cx="600" cy="300" r="4" fill="#8B5CF6" variants={nodeVariants} />
          <motion.circle cx="1000" cy="150" r="4" fill="#10B981" variants={nodeVariants} />
          <motion.circle cx="800" cy="250" r="4" fill="#8B5CF6" variants={nodeVariants} />
          <motion.circle cx="100" cy="600" r="4" fill="#10B981" variants={nodeVariants} />
          <motion.circle cx="300" cy="400" r="4" fill="#8B5CF6" variants={nodeVariants} />
          <motion.circle cx="900" cy="650" r="4" fill="#10B981" variants={nodeVariants} />

          {/* Gradients */}
          <defs>
            <linearGradient id="circuitGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Floating code elements */}
        <div className="absolute top-10 left-10 opacity-10 text-primary font-mono text-sm">
          {'{ code: "beautiful" }'}
        </div>
        <div className="absolute top-32 right-20 opacity-10 text-secondary font-mono text-sm">
          {'function() { return innovation; }'}
        </div>
        <div className="absolute bottom-20 left-20 opacity-10 text-primary font-mono text-sm">
          {'<Developer />'}
        </div>
        <div className="absolute bottom-32 right-10 opacity-10 text-secondary font-mono text-sm">
          {'const skills = [...experience];'}
        </div>
      </div>
    );
  }

  // Grid pattern variant
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-light-600 via-light-500 to-light-600 dark:from-dark-600 dark:via-dark-500 dark:to-dark-600">
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-primary/10 rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 3,
                  delay: i * 0.02,
                  repeat: Infinity,
                  repeatDelay: 5
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechBackground;