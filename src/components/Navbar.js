import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-light-600/95 dark:bg-dark-600/95 border-b border-light-400 dark:border-dark-400 shadow-sm'
          : 'bg-light-600/90 dark:bg-dark-600/90'
      }`}
      initial={false}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group min-w-0">
              <div className="relative">
                <div className="relative bg-primary p-2 rounded-md">
                  <Code2 className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl sm:text-2xl text-light-100 dark:text-dark-100 group-hover:text-primary transition-colors duration-300 leading-tight">
                  Saif Khan
                </span>
                <span className="hidden min-[360px]:block text-[10px] sm:text-xs text-light-300 dark:text-dark-300 font-medium tracking-wider uppercase opacity-80">
                  Fullstack Developer
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <motion.div 
              className="flex items-center space-x-2"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                      isActive(item.path)
                        ? 'text-primary'
                        : 'text-light-200 dark:text-dark-200 hover:text-primary'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {!isActive(item.path) && (
                      <div className="absolute inset-x-4 bottom-1 h-px bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                    {isActive(item.path) && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-white rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        layoutId="activeIndicator"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              
              {/* CTA Button */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <a 
                  href="/Saif_Khan_Resume.pdf" 
                  download="Saif_Khan_Resume.pdf"
                    className="ml-4 px-5 py-2.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm transition-colors duration-200 flex items-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Resume</span>
                </a>
              </motion.div>
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex min-w-[44px] min-h-[44px] items-center justify-center rounded-xl text-light-200 dark:text-dark-200 hover:text-light-100 dark:hover:text-dark-100 hover:bg-light-400/50 dark:hover:bg-dark-400/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              whileTap={{ scale: 0.95 }}
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 pt-4 pb-6 space-y-2 bg-light-600/95 dark:bg-dark-500/95 backdrop-blur-md border-t border-light-300/50 dark:border-dark-300/50 rounded-b-2xl">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-primary text-white'
                          : 'text-light-200 dark:text-dark-200 hover:text-light-100 dark:hover:text-dark-100 hover:bg-light-400/50 dark:hover:bg-dark-400/50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4 border-t border-light-300/50 dark:border-dark-300/50"
                >
                  <a 
                    href="/Saif_Khan_Resume.pdf" 
                    download="Saif_Khan_Resume.pdf"
                    className="flex items-center justify-center space-x-2 px-4 py-3 bg-primary text-white font-semibold rounded-md shadow-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Resume</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;
