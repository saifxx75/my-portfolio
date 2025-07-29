import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:saifkhan0409.sk@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.footer 
      className="bg-light-500 dark:bg-dark-500 text-light-100 dark:text-dark-100 border-t border-light-300/30 dark:border-dark-300/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-primary to-secondary p-2 rounded-xl">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-light-100 dark:text-dark-100 group-hover:text-primary transition-colors duration-300">Saif Khan</span>
                <span className="text-sm text-light-200 dark:text-dark-300 font-medium">Software Developer</span>
              </div>
            </Link>
            <p className="text-light-200 dark:text-dark-200 mb-8 max-w-md leading-relaxed text-base">
              Software Developer with professional experience in Java, Node.js, Spring Boot, 
              Express.js, and PHP. Specialized in building scalable backends, REST APIs, 
              secure authentication, and database optimization. Passionate about delivering 
              robust solutions in an Agile environment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-12 h-12 bg-light-400 dark:bg-dark-400 rounded-xl flex items-center justify-center text-light-200 dark:text-dark-200 hover:text-primary hover:bg-light-300 dark:hover:bg-dark-300 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-light-300 dark:bg-dark-300 text-light-100 dark:text-dark-100 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {social.label}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-6 text-light-100 dark:text-dark-100">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-light-200 dark:text-dark-200 hover:text-primary transition-colors duration-300 text-base hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-xl mb-6 text-light-100 dark:text-dark-100">Get In Touch</h3>
            <div className="space-y-4 text-light-200 dark:text-dark-200">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-base">saifkhan0409.sk@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-4 w-4 flex items-center justify-center flex-shrink-0">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                </div>
                <p className="text-base">Pune, Maharashtra</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-4 w-4 flex items-center justify-center flex-shrink-0">
                  <div className="h-2 w-2 bg-secondary rounded-full"></div>
                </div>
                <p className="text-base">India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-light-300/50 dark:border-dark-300/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-200 dark:text-dark-200 text-base font-medium">
            © {currentYear} Saif Khan. All rights reserved.
          </p>
          <p className="text-light-200 dark:text-dark-200 text-base flex items-center mt-4 md:mt-0">
            
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;