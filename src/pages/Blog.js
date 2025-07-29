import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag,
  Search,
  BookOpen,
  Database,
  Shield,
  Server,
  Cloud
} from 'lucide-react';

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Building Secure REST APIs with Spring Boot and JWT',
      excerpt: 'Learn how to implement robust authentication and authorization in your Spring Boot applications using JWT tokens and Spring Security.',
      content: 'In this comprehensive guide, we\'ll explore the implementation of secure REST APIs...',
      category: 'Backend',
      tags: ['Spring Boot', 'JWT', 'Security', 'REST API'],
      date: '2024-01-15',
      readTime: '8 min read',
      icon: Shield,
      featured: true
    },
    {
      id: 2,
      title: 'Database Optimization Techniques for High-Traffic Applications',
      excerpt: 'Discover advanced database optimization strategies to handle millions of requests efficiently using PostgreSQL and MongoDB.',
      content: 'When your application starts handling thousands of concurrent users...',
      category: 'Database',
      tags: ['PostgreSQL', 'MongoDB', 'Performance', 'Optimization'],
      date: '2024-01-10',
      readTime: '12 min read',
      icon: Database,
      featured: true
    },
    {
      id: 3,
      title: 'Microservices Architecture with Node.js and Docker',
      excerpt: 'A practical guide to building scalable microservices using Node.js, Express.js, and containerization with Docker.',
      content: 'Microservices architecture has become the go-to solution for building scalable applications...',
      category: 'Architecture',
      tags: ['Node.js', 'Docker', 'Microservices', 'Express.js'],
      date: '2024-01-05',
      readTime: '10 min read',
      icon: Server,
      featured: false
    },
    {
      id: 4,
      title: 'API Security Best Practices: From Development to Production',
      excerpt: 'Essential security measures every Software Developer should implement to protect APIs from common vulnerabilities.',
      content: 'API security is crucial in today\'s interconnected world...',
      category: 'Security',
      tags: ['API Security', 'OWASP', 'Authentication', 'Best Practices'],
      date: '2023-12-28',
      readTime: '15 min read',
      icon: Shield,
      featured: false
    },
    {
      id: 5,
      title: 'Deploying Node.js Applications to the Cloud: A Complete Guide',
      excerpt: 'Step-by-step guide to deploying your Node.js applications using modern cloud platforms and CI/CD pipelines.',
      content: 'Deploying applications to the cloud can seem daunting at first...',
      category: 'DevOps',
      tags: ['Node.js', 'Cloud', 'Deployment', 'CI/CD'],
      date: '2023-12-20',
      readTime: '11 min read',
      icon: Cloud,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', count: blogPosts.length },
    { id: 'Backend', label: 'Backend', count: blogPosts.filter(post => post.category === 'Backend').length },
    { id: 'Database', label: 'Database', count: blogPosts.filter(post => post.category === 'Database').length },
    { id: 'Security', label: 'Security', count: blogPosts.filter(post => post.category === 'Security').length },
    { id: 'Architecture', label: 'Architecture', count: blogPosts.filter(post => post.category === 'Architecture').length },
    { id: 'DevOps', label: 'DevOps', count: blogPosts.filter(post => post.category === 'DevOps').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

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
    <div className="min-h-screen bg-light-600 dark:bg-dark-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-light-100 dark:text-dark-100 mb-6 section-heading"
          >
            Technical Blog
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-light-200 dark:text-dark-200 max-w-3xl mx-auto"
          >
            Insights, tutorials, and best practices from my backend development journey
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <motion.div variants={itemVariants} className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-light-200 dark:text-dark-200" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-dark-400 border border-dark-300 rounded-lg text-light-100 dark:text-dark-100 placeholder-dark-200 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </motion.div>

            {/* Categories */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-dark-400 text-light-200 dark:text-dark-200 hover:bg-dark-300 hover:text-primary border border-dark-300'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Featured Posts */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <motion.div 
            className="mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-light-100 dark:text-dark-100 mb-8 flex items-center"
            >
              <BookOpen className="h-6 w-6 text-primary mr-3" />
              Featured Posts
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="bg-dark-400 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-dark-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                        <post.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-light-100 dark:text-dark-100 mb-3 hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    
                    <p className="text-light-200 dark:text-dark-200 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-light-500 dark:bg-dark-500 text-primary text-xs font-medium rounded-full flex items-center"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-light-200 dark:text-dark-200">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Posts */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-dark-400 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-dark-300 group cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <post.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-light-100 dark:text-dark-100 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-light-200 dark:text-dark-200 mb-4 text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-light-500 dark:bg-dark-500 text-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 bg-light-500 dark:bg-dark-500 text-light-200 dark:text-dark-200 text-xs font-medium rounded-full">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-light-200 dark:text-dark-200">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-primary/80 transition-colors">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <BookOpen className="h-16 w-16 text-light-300 dark:text-dark-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-light-100 dark:text-dark-100 mb-2">No posts found</h3>
            <p className="text-light-200 dark:text-dark-200">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-12 border border-primary/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-light-100 dark:text-dark-100 mb-4">
              Want to Discuss These Topics?
            </h2>
            <p className="text-xl text-light-200 dark:text-dark-200 mb-8 max-w-2xl mx-auto">
              I'm always excited to discuss backend development, share knowledge, and collaborate on interesting projects.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Blog;