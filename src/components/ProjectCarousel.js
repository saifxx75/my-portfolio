import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Play, Pause } from 'lucide-react';
import SkillBadge from './SkillBadge';

function ProjectCarousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, projects.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  if (!projects || projects.length === 0) return null;

  const currentProject = projects[currentIndex];

  return (
    <div className="relative bg-light-400 dark:bg-dark-400 rounded-xl shadow-lg overflow-hidden border border-light-300 dark:border-dark-300">
      {/* Main Content */}
      <div className="relative h-96 md:h-80">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col md:flex-row"
          >
            {/* Project Visual */}
            <div className="md:w-1/2 h-48 md:h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
              <currentProject.icon className="h-20 w-20 text-white" />
              
              {/* Overlay with project type */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                  {currentProject.category}
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-light-100 dark:text-dark-100 mb-3">
                  {currentProject.title}
                </h3>
                
                <p className="text-light-200 dark:text-dark-200 mb-4 text-sm leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentProject.technologies.slice(0, 4).map((tech) => (
                    <SkillBadge key={tech} skill={tech} className="text-xs" />
                  ))}
                  {currentProject.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-light-300 dark:bg-dark-500 text-light-200 dark:text-dark-200 text-xs font-medium rounded-full">
                      +{currentProject.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-light-100 dark:text-dark-100 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {currentProject.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="text-xs text-light-200 dark:text-dark-200 flex items-start">
                        <span className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {currentProject.github && (
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 bg-light-300 dark:bg-dark-500 text-light-100 dark:text-dark-100 rounded-lg hover:bg-light-200 dark:hover:bg-dark-300 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                )}
                {currentProject.live && (
                  <a
                    href={currentProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-light-300/80 dark:bg-dark-500/80 backdrop-blur-sm text-light-100 dark:text-dark-100 rounded-full flex items-center justify-center hover:bg-light-200/80 dark:hover:bg-dark-400 transition-colors duration-200 z-10"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-light-300/80 dark:bg-dark-500/80 backdrop-blur-sm text-light-100 dark:text-dark-100 rounded-full flex items-center justify-center hover:bg-light-200/80 dark:hover:bg-dark-400 transition-colors duration-200 z-10"
          aria-label="Next project"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Bottom Controls */}
      <div className="bg-light-300 dark:bg-dark-500 px-6 py-4 flex items-center justify-between">
        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-primary' : 'bg-light-200 dark:bg-dark-300'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Project Counter and Auto-play Toggle */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-light-200 dark:text-dark-200">
            {currentIndex + 1} / {projects.length}
          </span>
          
          <button
            onClick={toggleAutoPlay}
            className="w-8 h-8 bg-light-200 dark:bg-dark-400 text-light-100 dark:text-dark-100 rounded-full flex items-center justify-center hover:bg-light-100 dark:hover:bg-dark-300 transition-colors duration-200"
            aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCarousel;