import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'Tech Solutions Inc.',
      content: 'Saif delivered exceptional backend architecture for our e-commerce platform. His expertise in Java SpringBoot and database optimization resulted in a 40% performance improvement.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'Working with Saif on our API development was fantastic. His attention to security and clean code practices made our integration seamless and robust.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Lead Developer',
      company: 'Digital Innovations',
      content: 'Saif\'s expertise in Node.js and microservices architecture helped us scale our application to handle 10x more traffic. Highly recommended!',
      rating: 5,
      avatar: '/api/placeholder/60/60'
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
    <section className="py-16 bg-dark-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-dark-100 mb-4 section-heading"
          >
            What Clients Say
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-dark-200 max-w-2xl mx-auto"
          >
            Feedback from clients and colleagues I've worked with
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-dark-400 rounded-xl p-6 shadow-lg border border-dark-300 relative"
            >
              <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
              
              <p className="text-dark-200 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-100">{testimonial.name}</h4>
                  <p className="text-sm text-dark-200">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;