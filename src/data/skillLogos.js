import {
  SiAngular,
  SiBootstrap,
  SiCelery,
  SiChartdotjs,
  SiCloudflare,
  SiCodeigniter,
  SiCpanel,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFirebase,
  SiFastapi,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiJsonwebtokens,
  SiLaravel,
  SiKubernetes,
  SiMinio,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiOwasp,
  SiOllama,
  SiPaypal,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiReactbootstrap,
  SiRedis,
  SiRender,
  SiSocketdotio,
  SiSpringboot,
  SiStripe,
  SiTailwindcss,
  SiVuedotjs
} from 'react-icons/si';
import {
  FaAws,
  FaBolt,
  FaCloudArrowUp,
  FaCode,
  FaGaugeHigh,
  FaGitAlt,
  FaLink,
  FaMobileScreenButton,
  FaPlug,
  FaServer,
  FaShieldHalved,
  FaUniversalAccess
} from 'react-icons/fa6';
import { BrainCircuit, DatabaseZap, Mail, Network, PanelsTopLeft, Search, Settings, Webhook } from 'lucide-react';

export const normalizeSkillName = (skill = '') =>
  skill.toLowerCase().replace(/[^a-z0-9]+/g, '');

const logo = (icon, iconClassName, aliases) => ({
  icon,
  iconClassName,
  aliases
});

const logoDefinitions = [
  logo(SiReact, 'text-[#087ea4] dark:text-[#61dafb]', ['React', 'React.js', 'ReactJs']),
  logo(SiNextdotjs, 'text-light-100 dark:text-white', ['Next.js', 'NextJs']),
  logo(SiAngular, 'text-[#dd0031] dark:text-[#ff5b77]', ['Angular']),
  logo(SiVuedotjs, 'text-[#2f855a] dark:text-[#42d392]', ['Vue', 'Vue.js']),
  logo(SiJavascript, 'text-[#9a7b00] dark:text-[#f7df1e]', ['JavaScript', 'JS']),
  logo(SiHtml5, 'text-[#d94820] dark:text-[#ff6d42]', ['HTML', 'HTML5', 'HTML/CSS']),
  logo(SiTailwindcss, 'text-[#0284a8] dark:text-[#38bdf8]', ['Tailwind', 'Tailwind CSS']),

  logo(SiOpenjdk, 'text-[#e76f00] dark:text-[#f89820]', ['Java']),
  logo(SiSpringboot, 'text-[#3c8c2f] dark:text-[#6db33f]', [
    'Spring',
    'Spring Boot',
    'SpringBoot',
    'Spring WebFlux',
    'Spring Reactive',
    'Spring Cloud',
    'Spring Cloud Gateway'
  ]),
  logo(SiNodedotjs, 'text-[#3f873f] dark:text-[#68a063]', ['Node.js', 'NodeJs']),
  logo(SiExpress, 'text-light-100 dark:text-white', ['Express', 'Express.js', 'ExpressJs']),
  logo(SiLaravel, 'text-[#e3342f] dark:text-[#ff5d52]', ['Laravel', 'PHP Laravel']),
  logo(SiCodeigniter, 'text-[#dd4814] dark:text-[#ff7043]', ['CodeIgniter', 'PHP CodeIgniter']),
  logo(SiPhp, 'text-[#5865a7] dark:text-[#8993be]', ['PHP']),
  logo(SiPython, 'text-[#3776ab] dark:text-[#ffd43b]', ['Python']),
  logo(SiFastapi, 'text-[#087f6d] dark:text-[#20c997]', ['FastAPI']),
  logo(SiOllama, 'text-light-100 dark:text-white', ['Ollama']),
  logo(BrainCircuit, 'text-[#2563eb] dark:text-[#60a5fa]', ['LLM', 'LLMs']),
  logo(Search, 'text-[#0891b2] dark:text-[#67e8f9]', ['RAG']),
  logo(Network, 'text-[#2563eb] dark:text-[#60a5fa]', ['Pinecone']),
  logo(DatabaseZap, 'text-[#0f766e] dark:text-[#5eead4]', ['Vector Database', 'Vector Databases']),
  logo(SiMinio, 'text-[#c72c48] dark:text-[#f0526d]', ['MinIO']),
  logo(SiCelery, 'text-[#2f855a] dark:text-[#9acb5b]', ['Celery']),
  logo(SiDotnet, 'text-[#512bd4] dark:text-[#a88bfa]', ['.NET', 'Dotnet']),

  logo(SiMongodb, 'text-[#27893f] dark:text-[#47a248]', ['MongoDB']),
  logo(SiMysql, 'text-[#00618a] dark:text-[#4db5d6]', ['MySQL']),
  logo(SiPostgresql, 'text-[#336791] dark:text-[#6da3c8]', ['PostgreSQL', 'Postgres']),
  logo(SiRedis, 'text-[#c83232] dark:text-[#ff5a5a]', ['Redis']),
  logo(FaGitAlt, 'text-[#d94b2b] dark:text-[#f05032]', ['Git']),
  logo(SiGithub, 'text-light-100 dark:text-white', ['GitHub']),
  logo(SiGitlab, 'text-[#e24329] dark:text-[#fc6d26]', ['GitLab']),
  logo(SiPostman, 'text-[#e94e1b] dark:text-[#ff6c37]', ['Postman']),
  logo(SiDocker, 'text-[#0878c9] dark:text-[#2496ed]', ['Docker']),
  logo(SiKubernetes, 'text-[#326ce5] dark:text-[#7aa2f7]', ['Kubernetes', 'K8s']),
  logo(SiSocketdotio, 'text-light-100 dark:text-white', ['Socket.io', 'WebSocket']),

  logo(SiBootstrap, 'text-[#6441a5] dark:text-[#9b72e8]', ['Bootstrap']),
  logo(SiReactbootstrap, 'text-[#087ea4] dark:text-[#61dafb]', ['React-Bootstrap']),
  logo(FaMobileScreenButton, 'text-primary dark:text-blue-400', [
    'Responsive Design',
    'Responsive UI'
  ]),
  logo(FaUniversalAccess, 'text-[#7c3aed] dark:text-[#c4b5fd]', ['Accessibility']),

  logo(FaAws, 'text-[#b45309] dark:text-[#ff9900]', ['AWS', 'AWS Amplify', 'AWS S3']),
  logo(SiCloudflare, 'text-[#c2410c] dark:text-[#f48120]', ['Cloudflare']),
  logo(SiRender, 'text-light-100 dark:text-white', ['Render']),
  logo(SiJira, 'text-[#0759c7] dark:text-[#2684ff]', ['Jira']),
  logo(SiCpanel, 'text-[#d94e14] dark:text-[#ff6c2c]', ['Cpanel', 'cPanel']),
  logo(SiFirebase, 'text-[#c36b00] dark:text-[#ffca28]', [
    'Firebase',
    'Firebase Functions'
  ]),

  logo(SiPaypal, 'text-[#003087] dark:text-[#4fa5f9]', ['PayPal', 'PayPal API']),
  logo(SiStripe, 'text-[#635bff] dark:text-[#a5a0ff]', ['Stripe', 'Stripe API']),
  logo(Mail, 'text-[#0879b9] dark:text-[#60bfea]', ['SendGrid']),
  logo(SiJsonwebtokens, 'text-[#d72579] dark:text-[#fb5aa3]', ['JWT', 'JWT Auth']),
  logo(SiOwasp, 'text-[#1d4f91] dark:text-[#75aadb]', ['OWASP', 'OWASP ZAP']),
  logo(SiChartdotjs, 'text-[#d94e70] dark:text-[#ff6384]', ['Chart.js']),

  logo(FaCode, 'text-primary dark:text-blue-400', [
    'REST API',
    'REST APIs',
    'API',
    'APIs',
    'OpenWeather API',
    'C/C++'
  ]),
  logo(FaPlug, 'text-primary dark:text-blue-400', ['Integrations', 'Integration']),
  logo(FaShieldHalved, 'text-primary dark:text-blue-400', [
    'Security',
    'Security & Auth',
    'Security APIs',
    'API Security',
    'Nikto'
  ]),
  logo(FaCloudArrowUp, 'text-primary dark:text-blue-400', [
    'Cloud',
    'Deployment',
    'Cloud Deployment'
  ]),
  logo(FaGaugeHigh, 'text-primary dark:text-blue-400', [
    'Performance',
    'Optimization',
    'Performance Optimization'
  ]),
  logo(FaLink, 'text-primary dark:text-blue-400', ['JDBC']),
  logo(FaBolt, 'text-primary dark:text-blue-400', ['Reactive', 'Real-time']),
  logo(FaServer, 'text-primary dark:text-blue-400', ['Backend']),
  logo(PanelsTopLeft, 'text-primary dark:text-blue-400', ['Frontend', 'UI Engineering']),
  logo(Webhook, 'text-primary dark:text-blue-400', ['CI/CD']),
  logo(Settings, 'text-primary dark:text-blue-400', ['Tools', 'Architecture'])
];

export const skillLogoMap = logoDefinitions.reduce((mapping, definition) => {
  definition.aliases.forEach((alias) => {
    mapping[normalizeSkillName(alias)] = {
      icon: definition.icon,
      iconClassName: definition.iconClassName
    };
  });
  return mapping;
}, {});

export const fallbackSkillLogo = {
  icon: FaCode,
  iconClassName: 'text-primary dark:text-blue-400'
};

export const getSkillLogo = (skill) =>
  skillLogoMap[normalizeSkillName(skill)] || fallbackSkillLogo;

export const isSkillLogoMapped = (skill) =>
  Object.prototype.hasOwnProperty.call(skillLogoMap, normalizeSkillName(skill));
