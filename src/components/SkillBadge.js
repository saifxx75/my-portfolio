import React from 'react';
import { getSkillLogo } from '../data/skillLogos';

function SkillBadge({ skill, className = "" }) {
  const { icon: IconComponent, iconClassName } = getSkillLogo(skill);
  
  return (
    <span className={`inline-flex items-center px-3 py-1 bg-primary/10 dark:bg-dark-500 text-light-200 dark:text-dark-100 text-sm font-medium rounded-full border border-primary/15 dark:border-primary/20 ${className}`}>
      <IconComponent
        aria-hidden="true"
        focusable="false"
        className={`h-4 w-4 shrink-0 mr-1.5 ${iconClassName}`}
      />
      {skill}
    </span>
  );
}

export default SkillBadge;
