import React from 'react';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import SkillBadge from '../components/SkillBadge';
import TechBackground from '../components/TechBackground';
import ProfileAvatar from '../components/ProfileAvatar';
import TechCard from '../components/TechCard';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
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

function About() {
  const skills = [
    { name: 'Java', level: 95, color: 'bg-primary' },
    { name: 'Node.js', level: 90, color: 'bg-primary' },
    { name: 'Spring Boot', level: 95, color: 'bg-primary' },
    { name: 'PHP', level: 85, color: 'bg-primary' },
    { name: 'JavaScript', level: 85, color: 'bg-secondary' },
    { name: 'C/C++', level: 80, color: 'bg-secondary' },
    { name: 'PostgreSQL', level: 90, color: 'bg-secondary' },
    { name: 'MongoDB', level: 85, color: 'bg-secondary' },
    { name: 'REST APIs', level: 95, color: 'bg-secondary' },
    { name: 'Security & Auth', level: 90, color: 'bg-secondary' }
  ];

  const experience = [
    {
      title: 'Backend Developer',
      company: 'Alltake Ites Pvt. Ltd.',
      period: '2023 - Present',
      description: 'Building secure, scalable backend applications with Java SpringBoot, Node.js, and PHP. Leading development of REST APIs, database optimization, and third-party service integrations.',
      achievements: [
        'Developed secure REST APIs serving 10,000+ daily requests',
        'Implemented JWT authentication and authorization systems',
        'Integrated payment gateways (Stripe, PayPal) with 99.9% uptime',
        'Optimized database queries reducing response time by 40%',
        'Built microservices architecture for scalable applications'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Correct Cloud Pvt. Ltd.',
      period: '2022 - 2023',
      description: 'Focused on full-stack development with emphasis on backend security, API testing, and cloud integration. Worked with Agile methodologies and DevOps practices.',
      achievements: [
        'Developed security-focused web applications',
        'Implemented automated API testing with Postman',
        'Worked with cloud platforms and deployment strategies',
        'Collaborated in Agile environment using Jira',
        'Contributed to code reviews and security audits'
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
    { category: 'Languages', items: ['Java', 'C/C++', '.NET', 'JavaScript', 'HTML/CSS', 'MySQL', 'Postgres'], icon: Code2 },
    { category: 'Frameworks', items: ['NodeJs', 'ExpressJs', 'SpringBoot', 'Spring Reactive', 'ReactJs', 'NextJs', 'Angular', 'PHP CodeIgniter'], icon: Server },
    { category: 'Databases & Tools', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'GitLab', 'Postman'], icon: Database },
    { category: 'Styling & UI', items: ['Tailwind CSS', 'Bootstrap', 'React-Bootstrap'], icon: Layers },
    { category: 'DevOps & Cloud', items: ['Cpanel', 'Render', 'Jira', 'Cloudflare', 'Nikto'], icon: Cloud }
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
          initial="hidden"
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
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <TechCard 
              variant="primary" 
              glowEffect={true}
              className="p-8 mb-8"
            >
              <motion.div variants={itemVariants}>
                <div className="text-center mb-8">
                  <ProfileAvatar size="large" />
                  <h2 className="text-2xl font-bold text-light-100 dark:text-dark-100 mb-2 mt-4">Saif Khan</h2>
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                    <p className="text-primary font-semibold text-sm">Backend Developer</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Briefcase, text: "2.5+ Years Experience", color: "text-primary" },
                    { icon: GraduationCap, text: "MCA Student", color: "text-secondary" },
                    { icon: Award, text: "BCA Graduate", color: "text-primary" }
                  ].map(({ icon: Icon, text, color }, index) => (
                    <motion.div 
                      key={text}
                      className="flex items-center p-3 bg-light-500 dark:bg-dark-500/50 rounded-lg border border-light-300/50 dark:border-dark-300/50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="p-2 bg-primary/20 rounded-lg mr-3">
                        <Icon className={`h-4 w-4 ${color}`} />
                      </div>
                      <span className="text-light-200 dark:text-dark-200">{text}</span>
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
                    { value: "2.5+", label: "Years", color: "text-secondary", delay: 0.2 },
                    { value: "15+", label: "Technologies", color: "text-primary", delay: 0.3 },
                    { value: "3+", label: "Major Projects", color: "text-secondary", delay: 0.4 }
                  ].map(({ value, label, color, delay }) => (
                    <motion.div 
                      key={label}
                      className="text-center p-4 bg-light-500 dark:bg-dark-500/50 rounded-lg border border-light-300/50 dark:border-dark-300/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay }}
                    >
                      <motion.div 
                        className={`text-3xl font-bold ${color} mb-1`}
                        initial={{ opacity: 0 }}
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
            initial="hidden"
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
                  I'm a passionate backend developer with professional experience in Java, Node.js, Spring Boot, 
                  Express.js, and PHP. My expertise lies in building scalable backends, designing robust REST APIs, 
                  implementing secure authentication systems, and optimizing database performance for high-traffic applications.
                </p>
                <p>
                  I have demonstrated expertise in database design with MongoDB, MySQL, and PostgreSQL, along with 
                  extensive experience integrating third-party services like PayPal, Stripe, SendGrid, Firebase, and Cloudflare. 
                  My focus on secure coding practices and API testing ensures reliable, production-ready solutions.
                </p>
                <p>
                  Currently pursuing my Master's in Computer Applications while working as a Backend Developer at 
                  Alltake Ites Pvt. Ltd. I've successfully delivered projects like SmartQC (lead generation platform), 
                  Kitecyber (IT security application), and Market40 (news platform), contributing to both backend 
                  architecture and full-stack development in an Agile environment.
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div 
              variants={itemVariants}
              className="bg-light-500 dark:bg-dark-400 rounded-xl shadow-lg p-8 mb-8 border border-light-300 dark:border-dark-300"
            >
              <h3 className="text-2xl font-bold text-light-100 dark:text-dark-100 mb-6 flex items-center section-heading">
                <Zap className="h-6 w-6 text-yellow-500 mr-3" />
                Skills & Expertise
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-light-100 dark:text-dark-100">{skill.name}</span>
                      <span className="text-sm text-light-200 dark:text-dark-200">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-light-500 dark:bg-dark-500 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience & Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Experience */}
              <motion.div 
                variants={itemVariants}
                className="bg-light-500 dark:bg-dark-400 rounded-xl shadow-lg p-8 border border-light-300 dark:border-dark-300"
              >
                <h3 className="text-xl font-bold text-light-100 dark:text-dark-100 mb-6 flex items-center section-heading">
                  <Briefcase className="h-6 w-6 text-primary mr-3" />
                  Experience
                </h3>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary">{exp.title}</h4>
                        <p className="text-light-100 dark:text-dark-100 font-medium">{exp.company}</p>
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
                <div className="space-y-6">
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
