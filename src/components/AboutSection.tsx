
import { motion } from 'framer-motion';

const AboutSection = () => {
  const educationData = [
    {
      degree: "B.Tech in Artificial Intelligence and Machine Learning",
      institution: "Kallam Haranadhareddy Institute of Technology",
      cgpa: "7.2/10.0",
      duration: "2020 – 2024",
      gradient: "from-cyber-electric-purple to-cyber-indigo-glow"
    },
    {
      degree: "Intermediate in MPC",
      institution: "Sims Junior College",
      cgpa: "7.4/10.0",
      duration: "2018 – 2020",
      gradient: "from-cyber-indigo-glow to-cyber-neon-cyan"
    },
    {
      degree: "SSC",
      institution: "Nagarjuna High School",
      cgpa: "8.8/10.0",
      duration: "2017 – 2018",
      gradient: "from-cyber-neon-cyan to-cyber-rose-flash"
    }
  ];

  const skillsData = ['Machine Learning', 'Deep Learning', 'Data Analysis', 'Python Programming', 'Neural Networks'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0)',
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative section-reveal">
      <div className="absolute inset-0 bg-gradient-radial from-cyber-electric-purple/5 via-transparent to-transparent opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-16 premium-gradient-text"
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-cyber-soft-white leading-relaxed mb-6">
                I am a passionate fresher in the AI field from Hyderabad, India, eager to contribute and grow in data science and artificial intelligence. 
                I am actively seeking opportunities to apply my skills and knowledge in real-world projects and make meaningful impacts 
                in tech-driven environments.
              </p>
              <p className="text-lg text-cyber-soft-white leading-relaxed mb-6">
                My journey in AI and Data Science has been driven by curiosity and a desire to solve complex problems using technology. 
                I enjoy working with machine learning algorithms, data visualization, and building intelligent systems.
              </p>
              <div className="flex flex-wrap gap-3">
                {skillsData.map((skill, index) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="premium-skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-cyber-soft-white mb-6 premium-section-title">
                Education
              </h3>
              
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.02, 
                    rotateY: 5,
                    rotateX: 2,
                    transition: { duration: 0.3 }
                  }}
                  className="premium-education-card group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="premium-education-glow"></div>
                  <h4 className={`text-lg font-semibold mb-2 bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent group-hover:animate-pulse`}>
                    {edu.degree}
                  </h4>
                  <p className="text-cyber-soft-white mb-1 group-hover:text-cyber-neon-cyan transition-colors duration-300">
                    {edu.institution}
                  </p>
                  <p className="text-cyber-soft-white mb-1 font-medium">
                    CGPA: {edu.cgpa}
                  </p>
                  <p className="text-cyber-indigo-glow font-mono text-sm">
                    {edu.duration}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
