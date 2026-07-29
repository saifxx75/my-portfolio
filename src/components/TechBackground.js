import React from 'react';

const variantClasses = {
  circuit: 'tech-background--circuit',
  grid: 'tech-background--grid',
  default: 'tech-background--default'
};

const TechBackground = ({ variant = 'default' }) => (
  <div
    aria-hidden="true"
    className={`tech-background absolute inset-0 overflow-hidden pointer-events-none ${variantClasses[variant] || variantClasses.default}`}
  >
    <div className="absolute inset-0 opacity-[0.32] dark:opacity-[0.16] editorial-grid" />
    <div className="absolute top-0 bottom-0 left-[8%] w-px bg-light-400/60 dark:bg-dark-400/60" />
    <div className="absolute top-0 bottom-0 right-[8%] w-px bg-light-400/60 dark:bg-dark-400/60" />
    <div className="tech-background__scan absolute -left-1/3 top-[18%] h-px w-2/3 opacity-0" />
    <div className="tech-background__node absolute h-1.5 w-1.5 rounded-full bg-primary/40 shadow-[0_0_14px_rgba(37,99,235,0.5)]" />
  </div>
);

export default TechBackground;
