import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2 } from 'lucide-react';

const ProfileAvatar = ({ size = 'large', showBorder = true }) => {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32',
    xlarge: 'w-48 h-48'
  };

  const iconSizes = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16',
    xlarge: 'h-24 w-24'
  };

  return (
    <div className="relative">
      {/* Main avatar container */}
      <motion.div
        className={`${sizeClasses[size]} relative rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 ${
          showBorder ? 'border-primary/30' : 'border-transparent'
        } overflow-hidden group cursor-pointer`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Professional Photo */}
        <motion.img
          src="/saif-profile.jpg"
          alt="Saif Khan - Software Developer"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />

        {/* Fallback placeholder (hidden by default) */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-400 to-dark-500" style={{ display: 'none' }}>
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <pattern id="tech-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="#8B5CF6" opacity="0.3" />
                  <path d="M0,10 L20,10 M10,0 L10,20" stroke="#10B981" strokeWidth="0.5" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#tech-pattern)" />
            </svg>
          </div>
          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <User className={`${iconSizes[size]} text-primary mx-auto mb-1`} />
            {size === 'xlarge' && (
              <p className="text-xs text-dark-200 font-medium">Professional Photo</p>
            )}
          </motion.div>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />

        {/* Tech elements overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Code2 className="absolute top-2 right-2 h-3 w-3 text-secondary" />
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </motion.div>

      {/* Floating tech elements around avatar */}
      {size === 'xlarge' && (
        <>
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded border border-primary/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary/20 rounded border border-secondary/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 -left-4 w-2 h-2 bg-primary rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/4 -right-4 w-2 h-2 bg-secondary rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </>
      )}

      {/* Status indicator */}
      {showBorder && (
        <motion.div
          className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-dark-600 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </motion.div>
      )}
    </div>
  );
};

export default ProfileAvatar;