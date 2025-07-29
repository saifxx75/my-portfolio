import React from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Layers, 
  Cloud, 
  Briefcase,
  Shield,
  Zap,
  GitBranch,
  Settings
} from 'lucide-react';

const skillIcons = {
  // Languages
  'Java': Code2,
  'JavaScript': Code2,
  'C/C++': Code2,
  '.NET': Code2,
  'HTML/CSS': Layers,
  'MySQL': Database,
  'Postgres': Database,
  'PHP': Server,
  
  // Frameworks
  'NodeJs': Server,
  'ExpressJs': Server,
  'SpringBoot': Server,
  'Spring Reactive': Server,
  'ReactJs': Layers,
  'NextJs': Layers,
  'Angular': Layers,
  'PHP CodeIgniter': Server,
  'MongoDB': Database,
  
  // Tools
  'Git': GitBranch,
  'GitHub': GitBranch,
  'GitLab': GitBranch,
  'Postman': Settings,
  'Cpanel': Cloud,
  'Render': Cloud,
  'Jira': Settings,
  'Cloudflare': Cloud,
  'Nikto': Shield,
  
  // Styling
  'Tailwind CSS': Layers,
  'Bootstrap': Layers,
  'React-Bootstrap': Layers,
  
  // Integrations
  'PayPal': Briefcase,
  'Stripe': Briefcase,
  'SendGrid': Briefcase,
  'Firebase': Cloud,
  'JWT Auth': Shield,
  'JWT': Shield,
  'REST APIs': Zap,
  'Security APIs': Shield,
  'Stripe API': Briefcase,
  'PayPal API': Briefcase,
  'PostgreSQL': Database,
  'Redis': Database,
  'Docker': Cloud,
  'Socket.io': Server,
  'WebSocket': Server,
  'Spring Cloud': Server,
  'Spring Cloud Gateway': Server,
  'OWASP ZAP': Shield,
  'Chart.js': Layers,
  'OpenWeather API': Cloud,
  'Vue.js': Layers,
  'CodeIgniter': Server
};

function SkillBadge({ skill, className = "" }) {
  const IconComponent = skillIcons[skill] || Code2;
  
  return (
    <span className={`inline-flex items-center px-3 py-1 bg-light-300 dark:bg-dark-500 text-primary text-sm font-medium rounded-full ${className}`}>
      <IconComponent className="h-3 w-3 mr-1.5" />
      {skill}
    </span>
  );
}

export default SkillBadge;