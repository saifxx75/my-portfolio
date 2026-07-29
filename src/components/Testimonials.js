import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import {
  sectionVariants as containerVariants,
  revealItemVariants as itemVariants,
  revealViewport,
  professionalCardHover
} from '../utils/motion';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Shahbaz Ahmad',
      role: 'Software Developer',
      company: 'Hexlan Technologies',
      content: 'Saif built our fullstack features end-to-end without missing a beat — clean API design on the backend, smooth integration on the frontend. Reliable to work with and easy to hand off tasks to.',
      rating: 5,
      avatarInitial: 'S'
    },
    {
      id: 2,
      name: 'Yaqoob Ansari',
      role: 'Oracle DBA',
      company: 'UnionSys Technologies',
      content: "Saif has a solid grip on database design and query performance. He optimized our schema and queries in a way that noticeably improved response times, and he's careful about data integrity.",
      rating: 5,
      avatarInitial: 'Y'
    },
    {
      id: 3,
      name: 'Zeeshan Khan',
      role: 'Frontend Developer',
      company: 'Excite System',
      content: "Saif's frontend work is clean and pixel-accurate — he translates designs into responsive, polished UI without cutting corners, and he's quick to iterate on feedback.",
      rating: 5,
      avatarInitial: 'Z'
    }
  ];

  return (
    <section className="py-16 bg-light-500 dark:bg-dark-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-light-100 dark:text-dark-100 mb-4 section-heading"
          >
            What Clients Say
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-light-200 dark:text-dark-200 max-w-2xl mx-auto"
          >
            Feedback from clients and colleagues I've worked with
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={containerVariants}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={professionalCardHover}
              className="motion-card bg-white dark:bg-dark-400 rounded-xl p-6 shadow-lg border border-light-400 dark:border-dark-300 relative"
            >
              <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
              
              <p className="text-light-200 dark:text-dark-200 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.avatarInitial}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-light-100 dark:text-dark-100">{testimonial.name}</h4>
                  <p className="text-sm text-light-200 dark:text-dark-200">{testimonial.role}</p>
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
