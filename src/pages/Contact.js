import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TechBackground from '../components/TechBackground';
import TechCard from '../components/TechCard';
import TechButton from '../components/TechButton';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageSquare,
  Clock,
  CheckCircle,
  Terminal,
  User,
  AtSign
} from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saifkhan0409.sk@gmail.com',
      href: 'mailto:saifkhan0409.sk@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8423290835',
      href: '#'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/saifxx75',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-blue-400'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-light-600 dark:bg-dark-600 py-12 relative overflow-hidden">
      <TechBackground variant="circuit" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-light-400/50 dark:bg-dark-400/50 rounded-full border border-primary/20 mb-6"
          >
            <Terminal className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm text-primary font-mono">./connect --with=saif</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-light-100 dark:text-dark-100 mb-6 section-heading"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-light-200 dark:text-dark-200 max-w-3xl mx-auto"
          >
            Have a software development idea or need help with a project in mind or want to discuss opportunities? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <TechCard variant="primary" glowEffect={true} className="p-8">
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-primary/20 rounded-lg mr-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-light-100 dark:text-dark-100 section-heading">Let's Connect</h2>
                </div>
                <p className="text-lg text-light-200 dark:text-dark-200">
                  I'm always interested in discussing new backend development opportunities, 
                  challenging projects, or collaborating on innovative solutions. Let's connect 
                  and explore how we can work together!
                </p>
              </motion.div>
            </TechCard>

            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TechCard variant="default" className="p-4 group cursor-pointer">
                    <a href={info.href} className="flex items-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/30 transition-colors duration-200">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-light-100 dark:text-dark-100 group-hover:text-primary transition-colors duration-200">
                          {info.label}
                        </h3>
                        <p className="text-light-200 dark:text-dark-200">{info.value}</p>
                      </div>
                    </a>
                  </TechCard>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <TechCard variant="accent" className="p-6">
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-secondary/20 rounded-lg mr-3">
                    <Github className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-light-100 dark:text-dark-100">Follow Me</h3>
                </div>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-light-500 dark:bg-dark-500/50 rounded-lg shadow-md flex items-center justify-center text-light-200 dark:text-dark-200 hover:text-primary transition-all duration-200 hover:shadow-lg border border-light-300/50 dark:border-dark-300/50 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <social.icon className="h-6 w-6" />
                      
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-dark-300 text-light-100 dark:text-dark-100 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {social.label}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </TechCard>

            {/* Availability */}
            <motion.div 
              variants={itemVariants}
              className="bg-secondary/10 border border-secondary/30 rounded-xl p-6"
            >
              <div className="flex items-center mb-3">
                <Clock className="h-5 w-5 text-secondary mr-2" />
                <h3 className="font-semibold text-secondary">Current Availability</h3>
              </div>
              <p className="text-light-100 dark:text-dark-100">
                ✅ Available for new backend projects and opportunities
              </p>
              <p className="text-sm text-light-200 dark:text-dark-200 mt-2">
                Typically respond within 24 hours
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <TechCard variant="accent" glowEffect={true} className="p-8">
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-primary/20 rounded-lg mr-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-light-100 dark:text-dark-100 section-heading">Send Message</h2>
                </div>

              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-secondary/10 border border-secondary/30 rounded-lg flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                  <span className="text-light-100 dark:text-dark-100">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-light-100 dark:text-dark-100 mb-2 flex items-center">
                      <User className="h-4 w-4 text-primary mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-light-300/50 dark:border-dark-300/50 bg-light-500 dark:bg-dark-500/50 text-light-100 dark:text-dark-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary/50 transition-all duration-200 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-light-100 dark:text-dark-100 mb-2 flex items-center">
                      <AtSign className="h-4 w-4 text-primary mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-light-300/50 dark:border-dark-300/50 bg-light-500 dark:bg-dark-500/50 text-light-100 dark:text-dark-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary/50 transition-all duration-200 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-light-100 dark:text-dark-100 mb-2 flex items-center">
                    <MessageSquare className="h-4 w-4 text-primary mr-2" />
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-light-300/50 dark:border-dark-300/50 bg-light-500 dark:bg-dark-500/50 text-light-100 dark:text-dark-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary/50 transition-all duration-200 backdrop-blur-sm"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-light-100 dark:text-dark-100 mb-2 flex items-center">
                    <MessageSquare className="h-4 w-4 text-primary mr-2" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-light-300/50 dark:border-dark-300/50 bg-light-500 dark:bg-dark-500/50 text-light-100 dark:text-dark-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary/50 transition-all duration-200 resize-none backdrop-blur-sm"
                    placeholder="Tell me about your backend project or opportunity..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <TechButton
                    type="submit"
                    variant="primary"
                    size="large"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    icon={Send}
                    className="w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </TechButton>
                </motion.div>
              </form>
            </motion.div>
            </TechCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
