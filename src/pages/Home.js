import React from 'react';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SkillBadge from '../components/SkillBadge';
import Testimonials from '../components/Testimonials';
import ProjectCarousel from '../components/ProjectCarousel';
import TechBackground from '../components/TechBackground';
import TechCard from '../components/TechCard';
import TechButton from '../components/TechButton';
import { contactLinks, projects } from '../data/siteData';
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
  Zap
} from 'lucide-react';

function Home() {
  const techStack = [
    { category: 'Frontend', items: ['React.js', 'Next.js', 'Angular', 'Vue.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'], icon: Layers },
    { category: 'Backend', items: ['Java', 'Spring Boot', 'Spring WebFlux', 'Node.js', 'Express.js', 'PHP Laravel', 'CodeIgniter'], icon: Server },
    { category: 'Databases & Tools', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'GitLab', 'Postman'], icon: Database },
    { category: 'UI Engineering', items: ['Responsive Design', 'Tailwind CSS', 'Bootstrap', 'React-Bootstrap', 'Accessibility'], icon: Code2 },
    { category: 'DevOps & Cloud', items: ['AWS Amplify', 'AWS S3', 'Cloudflare', 'Render', 'GitHub', 'Jira'], icon: Cloud },
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
      position: 'Fullstack Developer',
      company: 'Alltake Ites Pvt. Ltd.',
      location: 'Kharadi, Pune',
      duration: 'June 2024 – Present',
      description: 'Develop and maintain complete web applications with React.js, Next.js, Tailwind CSS, Node.js, Express.js, Java Spring Boot, and PHP Laravel—from responsive interfaces and API integration through data, security, third-party services, and cloud deployment.'
    },
    {
      position: 'Software Developer',
      company: 'Correct Cloud Pvt. Ltd.',
      location: 'Kondhwa, Pune',
      duration: 'April 2023 – May 2024',
      description: 'Built a full-stack GitHub analytics application with Java Spring Boot, Spring WebFlux, Angular, Vue.js, PostgreSQL, and JDBC, including secure reactive APIs and real-time collaboration metrics.'
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
        className="relative pt-6 pb-14 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-light-600 dark:bg-dark-600 overflow-hidden border-b border-light-400 dark:border-dark-400"
        initial={false}
        animate="visible"
        variants={containerVariants}
      >
        <TechBackground variant="circuit" />
        
        <div className="max-w-7xl mx-auto relative z-10 w-full grid lg:grid-cols-[1.25fr_.75fr] gap-14 lg:gap-16 xl:gap-24 items-start">
          <motion.div variants={itemVariants} className="text-left">
            <div className="inline-flex items-center gap-3 mb-6 sm:mb-8 font-mono text-xs uppercase tracking-[0.18em] text-light-300 dark:text-dark-200">
              <span className="w-8 h-px bg-primary" />
              Fullstack Developer
            </div>
            <h1 className="text-[2.65rem] min-[360px]:text-5xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] font-display font-bold text-light-100 dark:text-dark-100 mb-6 sm:mb-8 leading-[0.98]">
              Building complete
              <span className="gradient-text block">digital products.</span>
            </h1>

            <p className="text-xl md:text-2xl text-light-200 dark:text-dark-200 max-w-2xl leading-relaxed mb-4">
              I'm Saif Khan, a Fullstack Developer crafting responsive interfaces and dependable systems for complete web applications.
            </p>
            <p className="text-base md:text-lg text-light-300 dark:text-dark-200 max-w-2xl leading-relaxed">
              From React and Next.js experiences to APIs, databases, integrations, and cloud deployment—built for production.
            </p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 mb-8 sm:mb-10">
              <Link to="/projects" className="w-full sm:w-auto">
                <TechButton variant="primary" size="large" icon={ArrowRight} className="w-full sm:w-auto">View selected work</TechButton>
              </Link>
              <a href="/Saif_Khan_Resume.pdf" download="Saif_Khan_Resume.pdf" className="w-full sm:w-auto">
                <TechButton variant="outline" size="large" icon={Download} iconPosition="left" className="w-full sm:w-auto">Download résumé</TechButton>
              </a>
            </motion.div>

            <div className="grid grid-cols-1 min-[360px]:grid-cols-3 border-y border-light-400 dark:border-dark-400 max-w-2xl">
              {[
                ['Based in', 'Pune, India'],
                ['Experience', '2023 — Present'],
                ['Focus', 'Frontend + Backend']
              ].map(([label, value]) => (
                <div key={label} className="py-3 min-[360px]:py-4 pr-3 border-b last:border-b-0 min-[360px]:border-b-0 border-light-400 dark:border-dark-400">
                  <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-light-300 dark:text-dark-300 mb-1">{label}</span>
                  <span className="text-xs sm:text-sm font-semibold text-light-100 dark:text-dark-100">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside variants={itemVariants} className="relative max-w-xl lg:max-w-none mx-auto w-full border border-light-400 dark:border-dark-400 bg-light-500/90 dark:bg-dark-500/90 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
            <div className="absolute -top-6 left-0 text-xs font-mono text-primary tracking-widest">01 / ENGINEERING PROFILE</div>
            <div className="p-5 min-[360px]:p-7 sm:p-9">
              <div className="flex flex-col min-[360px]:flex-row items-start justify-between gap-4 min-[360px]:gap-5 pb-7 border-b border-light-400 dark:border-dark-400">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-light-300 dark:text-dark-300 mb-3">Saif Khan</p>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-light-100 dark:text-dark-100 leading-tight">
                    Fullstack Developer
                  </h2>
                  <p className="text-sm text-light-300 dark:text-dark-200 mt-2">Pune, Maharashtra, India</p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-light-200 dark:text-dark-200 whitespace-nowrap">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" /> Available
                </span>
              </div>

              <dl className="divide-y divide-light-400 dark:divide-dark-400">
                {[
                  ['Specialization', 'End-to-end web products'],
                  ['Frontend', 'React · Next.js · Angular · Vue'],
                  ['Backend', 'Spring Boot · Node.js · Laravel'],
                  ['Data + cloud', 'PostgreSQL · MongoDB · AWS'],
                  ['Experience', '3+ years · 2023—Present']
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-1 min-[360px]:grid-cols-[6.75rem_1fr] sm:grid-cols-[7.5rem_1fr] gap-1 min-[360px]:gap-3 sm:gap-4 py-4">
                    <dt className="text-[11px] uppercase tracking-widest text-light-300 dark:text-dark-300">{label}</dt>
                    <dd className="text-sm font-semibold text-light-100 dark:text-dark-100">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex items-center justify-between gap-3 px-5 min-[360px]:px-7 sm:px-9 py-5 bg-light-400/50 dark:bg-dark-400/50 border-t border-light-400 dark:border-dark-400">
              <span className="text-xs font-mono tracking-widest text-light-300 dark:text-dark-300">CONNECT</span>
              <div className="flex gap-2">
              {[
                { href: contactLinks.github, icon: Github, label: "GitHub" },
                { href: contactLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: contactLinks.email, icon: Mail, label: "Email" }
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('mailto:') ? undefined : "_blank"}
                  rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                  className="p-3 border border-light-400 dark:border-dark-400 text-light-200 dark:text-dark-200 hover:text-primary hover:border-primary">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.section>

      {/* Experience & Education Section */}
      <motion.section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-light-500 dark:bg-dark-500 overflow-hidden"
        initial={false}
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <TechBackground variant="grid" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={itemVariants} className="mb-16 border-t border-light-400 dark:border-dark-400 pt-6 md:grid md:grid-cols-[1fr_2fr] gap-10">
            <div className="text-xs text-primary font-mono tracking-[0.18em] mb-4 md:mb-0">02 / EXPERIENCE</div>
            <div>
            <h2 className="text-4xl font-bold text-light-100 dark:text-dark-100 mb-4">Experience & Education</h2>
            <p className="text-lg text-light-200 dark:text-dark-200 max-w-2xl">
              My professional journey and academic background
            </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="p-2 bg-primary/20 rounded-lg mr-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-light-100 dark:text-dark-100">Work Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <TechCard 
                    key={index} 
                    variant="primary" 
                    glowEffect={true}
                    className="p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-1">{job.position}</h4>
                        <p className="text-light-100 dark:text-dark-100 font-medium">{job.company}</p>
                        <p className="text-light-300 dark:text-dark-300 text-sm mt-1">{job.location}</p>
                      </div>
                      <div className="flex items-center self-start px-3 py-1 bg-primary/10 rounded-full">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
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
                <h3 className="text-2xl font-semibold text-light-100 dark:text-dark-100">Education</h3>
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
                        <div className="w-2 h-2 bg-secondary rounded-full mr-2" />
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
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-light-600 dark:bg-dark-600 overflow-hidden"
        initial={false}
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
                initial={false}
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
                        initial={false}
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
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-primary overflow-hidden"
        initial={false}
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
        initial={false}
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
              Explore full-stack work spanning responsive interfaces, secure services, data, and production delivery
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ProjectCarousel projects={projects} />
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
