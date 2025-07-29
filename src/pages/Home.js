import React from 'react';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SkillBadge from '../components/SkillBadge';
import Testimonials from '../components/Testimonials';
import ProjectCarousel from '../components/ProjectCarousel';
import TechBackground from '../components/TechBackground';
import ProfileAvatar from '../components/ProfileAvatar';
import TechCard from '../components/TechCard';
import TechButton from '../components/TechButton';
import { 
  Code2, 
  Database, 
  Server, 
  Cloud, 
  ArrowRight, 
  Download,
  Github,
  Linkedin,
  Mail,
  Briefcase,
  GraduationCap,
  Layers,
  Terminal,
  Cpu,
  Zap
} from 'lucide-react';

function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: 'SmartQC',
      description: 'Lead generation and data quality assurance platform built with Java SpringBoot and PostgreSQL. Features automated data validation, real-time analytics, and secure API integrations.',
      category: 'Backend Platform',
      technologies: ['Java', 'SpringBoot', 'PostgreSQL', 'REST APIs', 'JWT'],
      features: [
        'Automated lead validation and scoring system',
        'Real-time data quality monitoring dashboard',
        'Secure API integrations with third-party services'
      ],
      icon: Database,
      github: 'https://github.com/saifkhan',
      live: 'https://smartqc-demo.com'
    },
    {
      id: 2,
      title: 'KiteCyber',
      description: 'IT Security application with vulnerability assessment and penetration testing tools. Built using Node.js, Express.js, and MongoDB with advanced security features.',
      category: 'Security Platform',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Security APIs', 'Nikto'],
      features: [
        'Automated vulnerability scanning and reporting',
        'Penetration testing toolkit integration',
        'Secure authentication and role-based access control'
      ],
      icon: Server,
      github: 'https://github.com/saifkhan',
      live: 'https://kitecyber-demo.com'
    },
    {
      id: 3,
      title: 'Market40',
      description: 'News platform built with PHP CodeIgniter, MySQL, and Vue.js. Features content management, user authentication, and real-time news aggregation.',
      category: 'Web Platform',
      technologies: ['PHP CodeIgniter', 'MySQL', 'Vue.js', 'REST APIs'],
      features: [
        'Dynamic content management system',
        'Real-time news aggregation from multiple sources',
        'User authentication and personalized news feeds'
      ],
      icon: Cloud,
      github: 'https://github.com/saifkhan',
      live: 'https://market40-demo.com'
    }
  ];

  const techStack = [
    { category: 'Languages', items: ['Java', 'C/C++', '.NET', 'JavaScript', 'HTML/CSS', 'MySQL', 'Postgres'], icon: Code2 },
    { category: 'Frameworks', items: ['NodeJs', 'ExpressJs', 'SpringBoot', 'Spring Reactive', 'ReactJs', 'NextJs', 'Angular', 'PHP CodeIgniter'], icon: Server },
    { category: 'Databases & Tools', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'GitLab', 'Postman'], icon: Database },
    { category: 'Styling & UI', items: ['Tailwind CSS', 'Bootstrap', 'React-Bootstrap'], icon: Layers },
    { category: 'DevOps & Cloud', items: ['Cpanel', 'Render', 'Jira', 'Cloudflare', 'Nikto'], icon: Cloud },
    { category: 'Integrations', items: ['PayPal', 'Stripe', 'SendGrid', 'Firebase', 'JWT Auth'], icon: Briefcase }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'PA Inamdar University',
      year: '2023-2025',
      location: 'Pune',
      CGPA : 9.29/10
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Pune University',
      year: '2023',
      location: 'Pune'
    }
  ];

  const experience = [
    {
      position: 'Software Developer',
      company: 'Alltake Ites Pvt. Ltd.',
      duration: '2023 - Present',
      description: 'Building secure, scalable backend applications with Java SpringBoot, Node.js, and PHP. Specialized in REST APIs, database optimization, and third-party integrations.'
    },
    {
      position: 'Software Developer',
      company: 'Correct Cloud Pvt. Ltd.',
      duration: '2022 - 2023',
      description: 'Developed full-stack applications with focus on backend security, API testing, and cloud integration. Worked with microservices architecture and DevOps practices.'
    }
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative pb-32 px-4 sm:px-6 lg:px-8 bg-light-600 dark:bg-dark-600 overflow-hidden min-h-screen flex items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <TechBackground variant="circuit" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <motion.div variants={itemVariants} className="mb-12">
            {/* Profile Avatar */}
            <motion.div 
              className="mb-10 flex justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <ProfileAvatar size="xlarge" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-light-100 dark:text-dark-100 mb-8 leading-tight">
              <span className="block mb-2">Hi, I'm</span>
              <span className="gradient-text block">
                Saif Khan
              </span>
              <span className="wave inline-block ml-4">👋</span>
            </h1>
            
            {/* Tech-themed subtitle with typing effect */}
            <div className="mb-8">
              <motion.div 
                className="inline-flex items-center px-6 py-3 bg-light-400/50 dark:bg-dark-400/50 rounded-full border border-primary/20 mb-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Terminal className="h-5 w-5 text-primary mr-3" />
                <span className="text-base text-primary font-mono font-semibold">./developer --mode=backend</span>
              </motion.div>
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl text-light-200 dark:text-light-200 dark:text-dark-200 max-w-4xl mx-auto leading-relaxed mb-4">
              <span className="font-bold text-primary">Software Developer</span> building secure, scalable applications in Java, Node.js, and PHP.
            </p>
            <p className="text-lg md:text-xl text-light-300 dark:text-light-300 dark:text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Experienced in REST APIs, database optimization, security hardening, and cloud integration.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects">
                <TechButton 
                  variant="primary" 
                  size="large" 
                  icon={ArrowRight}
                  className="shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
                >
                  View My Work
                </TechButton>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/Saif_Khan_Resume.pdf" download="Saif_Khan_Resume.pdf">
                <TechButton 
                  variant="outline" 
                  size="large" 
                  icon={Download}
                  iconPosition="left"
                  className="shadow-lg hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300"
                >
                  Download Resume
                </TechButton>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            {[
              { href: "https://github.com/saifxx75", icon: Github, label: "GitHub", color: "hover:text-primary" },
              { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
              { href: "mailto:saifkhan0409.sk@gmail.com", icon: Mail, label: "Email", color: "hover:text-secondary" }
            ].map(({ href, icon: Icon, label, color }, index) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : "_blank"}
                rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className={`relative p-4 bg-light-400/50 dark:bg-light-400/50 dark:bg-dark-400/50 backdrop-blur-sm rounded-xl border border-light-300/50 dark:border-light-300/50 dark:border-dark-300/50 shadow-md hover:shadow-lg transition-all duration-300 text-light-200 dark:text-light-200 dark:text-dark-200 ${color} group`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Icon className="h-6 w-6" />
                
                {/* Tech accent corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-light-300 dark:bg-dark-300 text-light-100 dark:text-light-100 dark:text-dark-100 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {label}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Experience & Education Section */}
      <motion.section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-light-500 dark:bg-light-500 dark:bg-dark-500 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <TechBackground variant="grid" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-light-400/50 dark:bg-light-400/50 dark:bg-dark-400/50 rounded-full border border-primary/20 mb-4">
              <Cpu className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-primary font-mono">journey.map(experience ={'>'} growth)</span>
            </div>
            <h2 className="text-4xl font-bold text-light-100 dark:text-light-100 dark:text-dark-100 mb-4 section-heading">Experience & Education</h2>
            <p className="text-xl text-light-200 dark:text-light-200 dark:text-dark-200 max-w-2xl mx-auto">
              My professional journey and academic background
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="p-2 bg-primary/20 rounded-lg mr-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-light-100 dark:text-light-100 dark:text-dark-100">Work Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <TechCard 
                    key={index} 
                    variant="primary" 
                    glowEffect={true}
                    className="p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-1">{job.position}</h4>
                        <p className="text-light-100 dark:text-dark-100 font-medium">{job.company}</p>
                      </div>
                      <div className="flex items-center px-3 py-1 bg-primary/10 rounded-full">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                        <p className="text-primary text-sm font-mono">{job.duration}</p>
                      </div>
                    </div>
                    <p className="text-light-200 dark:text-dark-200 text-sm leading-relaxed">{job.description}</p>
                  </TechCard>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="p-2 bg-secondary/20 rounded-lg mr-3">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold text-light-100 dark:text-light-100 dark:text-dark-100">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <TechCard 
                    key={index} 
                    variant="secondary" 
                    glowEffect={true}
                    className="p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-secondary mb-1">{edu.degree}</h4>
                        <p className="text-light-100 dark:text-dark-100 font-medium">{edu.institution}</p>
                        <p className="text-light-200 dark:text-dark-200 text-sm mt-1">{edu.location}</p>
                      </div>
                      <div className="flex items-center px-3 py-1 bg-secondary/10 rounded-full">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse" />
                        <p className="text-secondary text-sm font-mono">{edu.year}</p>
                      </div>
                    </div>
                  </TechCard>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-dark-600 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <TechBackground variant="circuit" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-light-400/50 dark:bg-dark-400/50 rounded-full border border-primary/20 mb-4">
              <Zap className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-primary font-mono">const skills = await loadTechStack()</span>
            </div>
            <h2 className="text-4xl font-bold text-light-100 dark:text-dark-100 mb-4 section-heading">Tech Stack</h2>
            <p className="text-xl text-light-200 dark:text-dark-200 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.category}
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TechCard 
                  variant="accent" 
                  glowEffect={true}
                  className="p-8 h-full tech-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className="p-2 bg-primary/20 rounded-lg mr-3">
                      <tech.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-light-100 dark:text-dark-100">{tech.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                      >
                        <SkillBadge skill={item} />
                      </motion.div>
                    ))}
                  </div>
                </TechCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/90 to-secondary/90 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Tech pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="circuit-pattern w-full h-full" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Terminal className="h-4 w-4 text-white mr-2" />
              <span className="text-sm text-white font-mono">ready ? collaborate() : explore()</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's collaborate and create innovative solutions that make a difference. 
              I'm always excited to work on challenging projects.
            </p>
            
            <Link to="/contact">
              <TechButton 
                variant="tech" 
                size="large" 
                icon={ArrowRight}
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                Get In Touch
              </TechButton>
            </Link>
          </motion.div>
        </div>
        
        {/* Floating tech elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-white/20 rounded border border-white/30 tech-float" />
        <div className="absolute top-20 right-20 w-3 h-3 bg-white/20 rounded border border-white/30 tech-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-white/30 rounded-full tech-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 right-10 w-5 h-5 bg-white/20 rounded border border-white/30 tech-float" style={{ animationDelay: '0.5s' }} />
      </motion.section>

      {/* Featured Projects Carousel */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-light-500 dark:bg-dark-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-light-100 dark:text-dark-100 mb-4 section-heading">
              Featured Projects
            </h2>
            <p className="text-xl text-light-200 dark:text-dark-200 max-w-2xl mx-auto">
              Explore some of my key backend development projects showcasing scalable architecture and secure implementations
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ProjectCarousel projects={featuredProjects} />
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <Testimonials />


    </div>
    </LazyMotion>
  );
}

export default Home;
