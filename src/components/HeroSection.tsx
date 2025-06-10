
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { PremiumButton } from './ui/premium-button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.2,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto mb-6 rounded-full p-1 relative group">
            <div className="w-full h-full rounded-full overflow-hidden glass-panel border-2 border-purple-400/40 transition-all duration-500 group-hover:border-purple-400/80 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              <img 
                src="/lovable-uploads/9473f8c7-b6c4-48e0-a68e-c90c5063ff64.png" 
                alt="Venkata Balaji Boppudi - Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300">
            Venkata Balaji Boppudi
          </h1>
          <h2 className="text-xl md:text-2xl text-purple-400 mb-4 font-medium">
            Aspiring AI Engineer | AI & Data Science Enthusiast
          </h2>
          <p className="text-lg text-cyan-400 mb-8 flex items-center justify-center gap-2">
            <span>📍</span>
            Hyderabad, India
          </p>
        </motion.div>

        <motion.div 
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
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
            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/venkata-balaji-boppudi-632b5b248" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:venkatabalaji00007@gmail.com"
            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(244,63,94,0.5)] transition-all duration-300"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://x.com/Balaji420" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,224,0.5)] transition-all duration-300"
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
          <button
            onClick={() => window.open('https://drive.google.com/file/d/1Ho5cYcYEE6GJwBw1gjBAo6oNZtu_FtV8/view?usp=sharing', '_blank')}
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full hover:scale-105 hover:shadow-[0_0_20px_#fb7185] transition-all duration-300 font-medium"
            aria-label="Download My Resume"
          >
            Download My Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
