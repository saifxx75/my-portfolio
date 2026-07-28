import React from 'react';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import SkillBadge from '../components/SkillBadge';
import TechBackground from '../components/TechBackground';
import TechCard from '../components/TechCard';
import { getSkillLogo } from '../data/skillLogos';
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Database,
  Server,
  Cloud,
  Zap,
  Heart,
  Code2,
  Layers,
  Terminal,
  Cpu
} from 'lucide-react';

const mernTechnologies = ['MongoDB', 'Express.js', 'React.js', 'Node.js'];

function SkillLogo({ skill }) {
  const logoNames = skill === 'MERN Stack' ? mernTechnologies : [skill];

  return (
    <span
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-light-300/70 bg-light-500 shadow-sm dark:border-dark-300/70 dark:bg-dark-400 ${
        logoNames.length > 1 ? 'grid-cols-2 gap-0.5 p-1.5' : ''
      }`}
      aria-hidden="true"
    >
      {logoNames.map((logoName) => {
        const { icon: LogoIcon, iconClassName } = getSkillLogo(logoName);

        return (
          <LogoIcon
            key={logoName}
            className={`${logoNames.length > 1 ? 'h-3.5 w-3.5' : 'h-5 w-5'} ${iconClassName}`}
            focusable="false"
          />
        );
      })}
    </span>
  );
}

function About() {
  const skills = [
    { name: 'MERN Stack', level: 94 },
    { name: 'Python', level: 92 },
    { name: 'React.js', level: 90, color: 'bg-primary' },
    { name: 'JavaScript', level: 90, color: 'bg-primary' },
    { name: 'Node.js', level: 90, color: 'bg-primary' },
    { name: 'Spring Boot', level: 95, color: 'bg-primary' },
    { name: 'Next.js', level: 85, color: 'bg-primary' },
    { name: 'Tailwind CSS', level: 90, color: 'bg-secondary' },
    { name: 'PostgreSQL', level: 90, color: 'bg-secondary' },
    { name: 'MongoDB', level: 85, color: 'bg-secondary' },
    { name: 'REST APIs', level: 95, color: 'bg-secondary' },
    { name: 'Security & Auth', level: 90, color: 'bg-secondary' }
  ];

  const experience = [
    {
      title: 'Fullstack Developer',
      company: 'Alltake Ites Pvt. Ltd.',
      location: 'Kharadi, Pune',
      period: 'June 2024 – Present',
      description: 'Develop and maintain complete web applications using React.js, Next.js, Tailwind CSS, Node.js, Express.js, Java Spring Boot, and PHP Laravel. Build responsive interfaces, connect them to secure services and data stores, integrate third-party platforms, and deploy production applications through AWS and Cloudflare.',
      achievements: [
        'Built responsive, interactive React.js interfaces and integrated them with backend APIs.',
        'Delivered consistent UI experiences using React-Bootstrap and Tailwind CSS.',
        'Developed scalable services with Node.js, Express.js, Spring Boot, and Laravel.',
        'Designed REST APIs and microservices connecting frontend experiences, services, and data stores.',
        'Tuned PostgreSQL and MongoDB schemas, indexes, and queries, reducing load times by up to 40%.',
        'Implemented JWT authentication, RBAC, and security hardening informed by vulnerability scanning.',
        'Integrated PayPal, Stripe, SendGrid, Firebase, and IPStack.',
        'Deployed and managed applications with AWS Amplify, S3, RDS, and Cloudflare.',
        'Collaborated through Agile planning, code reviews, and retrospectives; monitored systems with Kibana and Grafana.'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Correct Cloud Pvt. Ltd.',
      location: 'Kondhwa, Pune',
      period: 'April 2023 – May 2024',
      description: 'Built a full-stack GitHub analytics application using Java Spring Boot, Spring WebFlux, Angular, Vue.js, PostgreSQL, and JDBC, with secure reactive APIs and real-time collaboration metrics.',
      achievements: [
        'Developed interfaces and data visualizations using Angular and Vue.js.',
        'Built non-blocking reactive REST APIs with Spring Boot and Spring WebFlux.',
        'Implemented persistence using Spring Data JPA and JDBC with sound transaction and relationship handling.',
        'Secured login and registration endpoints with JWT authentication and authorization.',
        'Managed Git workflows and validated APIs through Postman test suites.',
        'Visualized GitHub repository and team collaboration metrics for project-health insights.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'PA Inamdar University',
      period: '2023 - 2025',
      location: 'Pune, Maharashtra'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Pune University',
      period: '2020 - 2023',
      location: 'Pune, Maharashtra'
    }
  ];

  const techStack = [
    { category: 'Frontend', items: ['React.js', 'Next.js', 'Angular', 'Vue.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'], icon: Layers },
    { category: 'Backend', items: ['Java', 'Spring Boot', 'Spring WebFlux', 'Node.js', 'Express.js', 'PHP Laravel', 'CodeIgniter'], icon: Server },
    { category: 'Databases & Tools', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'GitLab', 'Postman'], icon: Database },
    { category: 'UI Engineering', items: ['Responsive Design', 'Bootstrap', 'React-Bootstrap', 'Accessibility'], icon: Code2 },
    { category: 'DevOps & Cloud', items: ['AWS Amplify', 'AWS S3', 'Cloudflare', 'Render', 'Git', 'Jira'], icon: Cloud }
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
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen bg-light-600 dark:bg-dark-600 py-12 relative overflow-hidden">
      <TechBackground variant="circuit" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={false}
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-light-400/50 dark:bg-dark-400/50 rounded-full border border-primary/20 mb-6"
          >
            <Terminal className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm text-primary font-mono">whoami --verbose</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-light-100 dark:text-dark-100 mb-6 section-heading"
          >
            About Me
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-light-200 dark:text-dark-200 max-w-3xl mx-auto"
          >
            Passionate about creating innovative solutions and building scalable applications
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Personal Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={false}
            animate="visible"
            variants={containerVariants}
          >
            <TechCard 
              variant="primary" 
              glowEffect={true}
              className="p-8 mb-8"
            >
              <motion.div variants={itemVariants}>
                <div className="mb-8 pb-7 border-b border-light-300/60 dark:border-dark-300/60">
                  <p className="text-xs font-mono tracking-[0.18em] text-primary mb-4">PROFILE / 01</p>
                  <h2 className="text-3xl font-bold text-light-100 dark:text-dark-100 mb-2">Saif Khan</h2>
                  <p className="text-primary font-semibold">Fullstack Developer</p>
                  <p className="text-sm text-light-300 dark:text-dark-300 mt-2">Pune, Maharashtra, India</p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Briefcase, label: "Experience", text: "3+ years · 2023—Present", color: "text-primary" },
                    { icon: Code2, label: "Specialization", text: "Frontend + Backend", color: "text-secondary" },
                    { icon: GraduationCap, label: "Education", text: "MCA · 2023—2025", color: "text-primary" }
                  ].map(({ icon: Icon, label, text, color }, index) => (
                    <motion.div 
                      key={label}
                      className="flex items-center p-3 bg-light-500 dark:bg-dark-500/50 rounded-lg border border-light-300/50 dark:border-dark-300/50"
                      initial={false}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="p-2 bg-primary/20 rounded-lg mr-3">
                        <Icon className={`h-4 w-4 ${color}`} />
                      </div>
                      <span>
                        <span className="block text-[10px] uppercase tracking-widest text-light-300 dark:text-dark-300">{label}</span>
                        <span className="text-sm font-medium text-light-100 dark:text-dark-100">{text}</span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TechCard>

            {/* Quick Stats */}
            <TechCard 
              variant="accent" 
              glowEffect={true}
              className="p-8"
            >
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-primary/20 rounded-lg mr-3">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-light-100 dark:text-dark-100 section-heading">Quick Stats</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "10+", label: "Projects", color: "text-primary", delay: 0.1 },
                    { value: "3+", label: "Years", color: "text-secondary", delay: 0.2 },
                    { value: "15+", label: "Technologies", color: "text-primary", delay: 0.3 },
                    { value: "3+", label: "Major Projects", color: "text-secondary", delay: 0.4 }
                  ].map(({ value, label, color, delay }) => (
                    <motion.div 
                      key={label}
                      className="text-center p-4 bg-light-500 dark:bg-dark-500/50 rounded-lg border border-light-300/50 dark:border-dark-300/50"
                      initial={false}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay }}
                    >
                      <motion.div 
                        className={`text-3xl font-bold ${color} mb-1`}
                        initial={false}
                        animate={{ opacity: 1 }}
                        transition={{ delay: delay + 0.2 }}
                      >
                        {value}
                      </motion.div>
                      <div className="text-sm text-light-200 dark:text-dark-200">{label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TechCard>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div 
            className="lg:col-span-2"
            initial={false}
            animate="visible"
            variants={containerVariants}
          >
            {/* About Description */}
            <motion.div 
              variants={itemVariants}
              className="bg-light-500 dark:bg-dark-400 rounded-xl shadow-lg p-8 mb-8 border border-light-300 dark:border-dark-300"
            >
              <h3 className="text-2xl font-bold text-light-100 dark:text-dark-100 mb-6 flex items-center section-heading">
                <Heart className="h-6 w-6 text-red-500 mr-3" />
                My Story
              </h3>
              <div className="space-y-4 text-light-200 dark:text-dark-200">
                <p>
                  I'm a Fullstack Developer who builds complete web applications—from accessible, responsive interfaces with
                  React, Next.js, Angular, Vue.js, and Tailwind CSS to secure services with Spring Boot, Node.js, Express.js,
                  and Laravel.
                </p>
                <p>
                  I connect polished frontend experiences to REST APIs, PostgreSQL and MongoDB, JWT and RBAC security, and
                  integrations including PayPal, Stripe, SendGrid, and Firebase. I take features through deployment with AWS
                  and Cloudflare, with equal attention to usability, maintainability, and production performance.
                </p>
                <p>
                  My academic background includes an MCA completed across 2023–2025 and a BCA completed in 2023. Alongside my role at
                  Alltake Ites Pvt. Ltd., my portfolio includes SmartQC, EdgeLinking, KiteCyber, and KidoCart—work spanning
                  data-quality workflows, demand-generation experiences, security platforms, and commerce. My contributions
                  cover interface development, application architecture, APIs, data, and delivery in an Agile environment.
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div 
              variants={itemVariants}
              className="bg-light-500 dark:bg-dark-400 rounded-xl shadow-lg p-5 sm:p-8 mb-8 border border-light-300 dark:border-dark-300"
            >
              <h3 className="text-2xl font-bold text-light-100 dark:text-dark-100 mb-6 flex items-center section-heading">
                <Zap className="h-6 w-6 text-yellow-500 mr-3" />
                Skills & Expertise
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className="group min-w-0 rounded-lg border border-light-300/70 bg-light-600/70 p-3.5 transition-colors duration-300 hover:border-primary/45 dark:border-dark-300/70 dark:bg-dark-500/55 dark:hover:border-primary/55"
                    initial={false}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <SkillLogo skill={skill.name} />
                      <span className="min-w-0 flex-1 truncate font-semibold text-light-100 dark:text-dark-100">
                        {skill.name}
                      </span>
                      <span className="shrink-0 rounded-md border border-primary/20 bg-primary/10 px-2 py-1 font-mono text-xs font-semibold tabular-nums text-primary dark:border-primary/30 dark:bg-primary/15">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="mt-3 h-2.5 w-full overflow-hidden rounded-full border border-light-300/80 bg-light-400/80 shadow-inner dark:border-dark-300/80 dark:bg-dark-600/80"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow={skill.level}
                    >
                      <motion.div
                        className="relative h-full rounded-full bg-gradient-to-r from-primary via-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.35)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      >
                        <span className="absolute right-1 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-white/90 shadow-sm" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience & Education */}
            <div className="grid grid-cols-1 gap-8 mb-8">
              {/* Experience */}
              <motion.div 
                variants={itemVariants}
                className="bg-light-500 dark:bg-dark-400 rounded-xl shadow-lg p-8 border border-light-300 dark:border-dark-300"
              >
                <h3 className="text-xl font-bold text-light-100 dark:text-dark-100 mb-6 flex items-center section-heading">
                  <Briefcase className="h-6 w-6 text-primary mr-3" />
                  Experience
                </h3>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary">{exp.title}</h4>
                        <p className="text-light-100 dark:text-dark-100 font-medium">{exp.company}</p>
                        <p className="text-sm text-light-300 dark:text-dark-300">{exp.location}</p>
                        <p className="text-sm text-light-200 dark:text-dark-200 mb-3">{exp.period}</p>
                        <p className="text-light-200 dark:text-dark-200 mb-4 text-sm">{exp.description}</p>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-light-200 dark:text-dark-200 flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div 
                variants={itemVariants}
                className="bg-light-500 dark:bg-dark-400 rounded-xl shadow-lg p-8 border border-light-300 dark:border-dark-300"
              >
                <h3 className="text-xl font-bold text-light-100 dark:text-dark-100 mb-6 flex items-center section-heading">
                  <GraduationCap className="h-6 w-6 text-secondary mr-3" />
                  Education
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-secondary">{edu.degree}</h4>
                        <p className="text-light-100 dark:text-dark-100 font-medium">{edu.institution}</p>
                        <p className="text-sm text-light-200 dark:text-dark-200 mb-2">{edu.period}</p>
                        <p className="text-light-200 dark:text-dark-200 text-sm">{edu.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Tech Stack */}
            <motion.div 
              variants={itemVariants}
              className="bg-light-500 dark:bg-dark-400 rounded-xl shadow-lg p-8 border border-light-300 dark:border-dark-300"
            >
              <h3 className="text-2xl font-bold text-light-100 dark:text-dark-100 mb-6 flex items-center section-heading">
                <Code className="h-6 w-6 text-primary mr-3" />
                Tech Stack
              </h3>
              <div className="space-y-6">
                {techStack.map((tech) => (
                  <div key={tech.category} className="mb-4">
                    <div className="flex items-center mb-3">
                      <tech.icon className="h-5 w-5 text-primary mr-2" />
                      <h4 className="text-lg font-semibold text-light-100 dark:text-dark-100">{tech.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item) => (
                        <SkillBadge key={item} skill={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
    </LazyMotion>
  );
}

export default About;
