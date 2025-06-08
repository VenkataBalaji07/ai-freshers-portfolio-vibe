
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { PremiumButton } from './ui/premium-button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0)',
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.2,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative cyber-background">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto mb-6 rounded-full p-1 cyber-float relative group">
            <div className="w-full h-full rounded-full overflow-hidden glass-panel border-2 border-cyber-electric-purple/40 transition-all duration-500 group-hover:border-cyber-electric-purple/80">
              <img 
                src="/lovable-uploads/c9e0b8fb-d408-4917-aa3d-509979658162.png" 
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-electric-purple/30 to-cyber-indigo-glow/30 blur-2xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>
        
        <motion.div 
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 premium-floating-name">
            Venkata Balaji Boppudi
          </h1>
          <h2 className="text-xl md:text-2xl text-cyber-electric-purple mb-4 font-medium animate-glow-pulse">
            Aspiring AI Engineer | AI & Data Science Enthusiast
          </h2>
          <p className="text-lg text-cyber-indigo-glow mb-8 flex items-center justify-center gap-2">
            <span className="text-cyber-rose-flash animate-pulse">📍</span>
            Hyderabad, India
          </p>
        </motion.div>

        <motion.div 
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-lg text-cyber-soft-white max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate fresher in the AI field, eager to contribute and grow in data science and artificial intelligence. 
            Actively seeking opportunities to apply my skills and knowledge in real-world projects.
          </p>
        </motion.div>

        <motion.div 
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center space-x-6 mb-8"
        >
          <a 
            href="https://github.com/VenkataBalaji07" 
            target="_blank" 
            rel="noopener noreferrer"
            className="premium-social-link group"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/venkata-balaji-boppudi-632b5b248" 
            target="_blank" 
            rel="noopener noreferrer"
            className="premium-social-link premium-social-linkedin group"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:venkatabalaji00007@gmail.com"
            className="premium-social-link premium-social-mail group"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://x.com/Balaji420" 
            target="_blank" 
            rel="noopener noreferrer"
            className="premium-social-link premium-social-twitter group"
          >
            <Twitter size={24} />
          </a>
        </motion.div>

        <motion.div 
          custom={4}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <PremiumButton
            size="lg"
            onClick={() => window.open('https://drive.google.com/file/d/1Ho5cYcYEE6GJwBw1gjBAo6oNZtu_FtV8/view?usp=sharing', '_blank')}
            className="relative z-10 premium-hero-button"
          >
            Download Resume
          </PremiumButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
