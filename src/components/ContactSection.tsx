
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { PremiumButton } from './ui/premium-button';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'venkatabalaji00007@gmail.com',
      href: 'mailto:venkatabalaji00007@gmail.com',
      gradient: 'from-cyber-rose-flash to-cyber-electric-purple',
      hoverColor: 'cyber-rose-flash'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Venkata Balaji Boppudi',
      href: 'https://www.linkedin.com/in/venkata-balaji-boppudi-632b5b248',
      gradient: 'from-cyber-indigo-glow to-cyber-neon-cyan',
      hoverColor: 'cyber-indigo-glow'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'VenkataBalaji07',
      href: 'https://github.com/VenkataBalaji07',
      gradient: 'from-cyber-electric-purple to-cyber-rose-flash',
      hoverColor: 'cyber-electric-purple'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@Balaji420',
      href: 'https://x.com/Balaji420',
      gradient: 'from-cyber-neon-cyan to-cyber-electric-purple',
      hoverColor: 'cyber-neon-cyan'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0)',
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative section-reveal">
      {/* Enhanced premium background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-cyber-neon-cyan/8 via-transparent to-transparent opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-conic from-cyber-electric-purple/6 via-transparent to-cyber-rose-flash/6 animate-spin-slow opacity-20"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-16 premium-gradient-text-contact"
          >
            Get In Touch
          </motion.h2>
          
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="text-lg text-cyber-soft-white mb-6 leading-relaxed">
              I'm actively seeking opportunities in AI and Data Science. Whether you're a recruiter, 
              hiring manager, or fellow AI enthusiast, I'd love to connect and discuss potential collaborations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-cyber-soft-white">
              <p className="flex items-center gap-2">
                <span className="text-cyber-rose-flash animate-pulse">📍</span>
                Currently based in Hyderabad, India
              </p>
              <p className="flex items-center gap-2">
                <span className="text-cyber-neon-cyan animate-pulse">📞</span>
                +91 6303612803
              </p>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="premium-contact-card group"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className={`premium-contact-glow bg-gradient-to-r ${contact.gradient}`}></div>
                  <div className="premium-contact-border"></div>
                  <div className="flex items-center space-x-4 relative z-10">
                    <div className={`premium-contact-icon-wrapper bg-gradient-to-r ${contact.gradient}`}>
                      <IconComponent size={24} className="text-white relative z-10" />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-cyber-soft-white group-hover:bg-gradient-to-r group-hover:${contact.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                        {contact.label}
                      </h3>
                      <p className="text-cyber-soft-white/80 group-hover:text-cyber-soft-white transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
          
          <motion.div variants={itemVariants} className="text-center">
            <PremiumButton 
              size="lg"
              onClick={() => window.open('https://drive.google.com/file/d/1Ho5cYcYEE6GJwBw1gjBAo6oNZtu_FtV8/view?usp=sharing', '_blank')}
              className="premium-resume-button"
            >
              Download My Resume
            </PremiumButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
