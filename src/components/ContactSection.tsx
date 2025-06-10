
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'venkatabalaji00007@gmail.com',
      href: 'mailto:venkatabalaji00007@gmail.com',
      gradient: 'from-pink-500 to-rose-500',
      hoverColor: 'rgba(244,63,94,0.5)'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Venkata Balaji Boppudi',
      href: 'https://www.linkedin.com/in/venkata-balaji-boppudi-632b5b248',
      gradient: 'from-blue-500 to-indigo-500',
      hoverColor: 'rgba(79,70,229,0.5)'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'VenkataBalaji07',
      href: 'https://github.com/VenkataBalaji07',
      gradient: 'from-purple-500 to-pink-500',
      hoverColor: 'rgba(168,85,247,0.5)'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@Balaji420',
      href: 'https://x.com/Balaji420',
      gradient: 'from-cyan-400 to-blue-500',
      hoverColor: 'rgba(0,255,224,0.5)'
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:shadow-[0_0_10px_#c084fc] transition-all duration-300"
          >
            Get In Touch
          </motion.h2>
          
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm actively seeking opportunities in AI and Data Science. Whether you're a recruiter, 
              hiring manager, or fellow AI enthusiast, I'd love to connect and discuss potential collaborations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300">
              <p className="flex items-center gap-2">
                <span className="text-pink-400">📍</span>
                Currently based in Hyderabad, India
              </p>
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">📞</span>
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
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/50 transition-all duration-300 group"
                  style={{ 
                    boxShadow: `0 0 0 rgba(168,85,247,0)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px ${contact.hoverColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 0 rgba(168,85,247,0)';
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${contact.gradient} bg-opacity-20 backdrop-blur-sm`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-gray-200 group-hover:bg-gradient-to-r group-hover:${contact.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                        {contact.label}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
          
          <motion.div variants={itemVariants} className="text-center">
            <button 
              onClick={() => window.open('https://drive.google.com/file/d/1Ho5cYcYEE6GJwBw1gjBAo6oNZtu_FtV8/view?usp=sharing', '_blank')}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full hover:scale-105 hover:shadow-[0_0_20px_#fb7185] transition-all duration-300 font-medium"
              aria-label="Download My Resume"
            >
              Download My Resume
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
