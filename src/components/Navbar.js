import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
          ? 'bg-light-600/95 dark:bg-dark-500/95 backdrop-blur-md border-b border-light-300/50 dark:border-dark-300/50 shadow-lg shadow-primary/5' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-primary to-secondary p-2 rounded-xl">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-light-100 dark:text-dark-100 group-hover:text-primary transition-colors duration-300 leading-tight">
                  Saif Khan
                </span>
                <span className="text-xs text-light-300 dark:text-dark-300 font-medium tracking-wider uppercase opacity-80">
                  Software Developer
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                        : 'text-light-200 dark:text-dark-200 hover:text-light-100 dark:hover:text-dark-100 hover:bg-light-400/50 dark:hover:bg-dark-400/50'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {!isActive(item.path) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <a 
                  href="/Saif_Khan_Resume.pdf" 
                  download="Saif_Khan_Resume.pdf"
                  className="ml-4 px-6 py-3 bg-gradient-to-r from-secondary to-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Resume</span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-light-200 dark:text-dark-200 hover:text-light-100 dark:hover:text-dark-100 hover:bg-light-400/50 dark:hover:bg-dark-400/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
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
                          ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
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
                    className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-secondary to-primary text-white font-semibold rounded-xl shadow-lg"
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
