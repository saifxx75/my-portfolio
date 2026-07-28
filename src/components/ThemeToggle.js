import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

function ThemeToggle() {
  const { isDark, toggleTheme, isInitialized } = useTheme();
  
  // Don't render until theme is initialized
  if (!isInitialized) {
    return null;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="inline-flex min-w-[44px] min-h-[44px] items-center justify-center bg-light-400/70 dark:bg-dark-400 hover:bg-light-300 dark:hover:bg-dark-300 text-light-100 dark:text-dark-100 rounded-md border border-light-300/50 dark:border-dark-300/50 group cursor-pointer"
      aria-label="Toggle theme"
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {/* Icon with smooth transition */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="h-5 w-5 text-yellow-400" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Moon className="h-5 w-5 text-blue-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
    </motion.button>
  );
}

export default ThemeToggle;
