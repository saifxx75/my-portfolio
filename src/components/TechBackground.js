import React from 'react';

/**
 * A static alignment field that gives sections engineering precision without
 * competing with their content. It intentionally contains no motion or SVG.
 */
const TechBackground = () => (
  <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 opacity-[0.32] dark:opacity-[0.16] editorial-grid" />
    <div className="absolute top-0 bottom-0 left-[8%] w-px bg-light-400/60 dark:bg-dark-400/60" />
    <div className="absolute top-0 bottom-0 right-[8%] w-px bg-light-400/60 dark:bg-dark-400/60" />
  </div>
);

export default TechBackground;
