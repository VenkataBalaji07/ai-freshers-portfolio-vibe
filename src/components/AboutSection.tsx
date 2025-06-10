
import { motion } from 'framer-motion';

const AboutSection = () => {
  const educationData = [
    {
      degree: "B.Tech in Artificial Intelligence and Machine Learning",
      institution: "Kallam Haranadhareddy Institute of Technology",
      cgpa: "7.2/10.0",
      duration: "2020 – 2024",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      degree: "Intermediate in MPC",
      institution: "Sims Junior College",
      cgpa: "7.4/10.0",
      duration: "2018 – 2020",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      degree: "SSC",
      institution: "Nagarjuna High School",
      cgpa: "8.8/10.0",
      duration: "2017 – 2018",
      gradient: "from-cyan-400 to-pink-500"
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-purple-400 hover:text-purple-300 hover:shadow-[0_0_10px_#c084fc] transition-all duration-300"
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am a passionate fresher in the AI field from Hyderabad, India, eager to contribute and grow in data science and artificial intelligence. 
                I am actively seeking opportunities to apply my skills and knowledge in real-world projects and make meaningful impacts 
                in tech-driven environments.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
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
                    className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">
                Education
              </h3>
              
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300"
                >
                  <h4 className={`text-lg font-semibold mb-2 bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                    {edu.degree}
                  </h4>
                  <p className="text-gray-300 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-300 mb-1 font-medium">
                    CGPA: {edu.cgpa}
                  </p>
                  <p className="text-blue-400 font-mono text-sm">
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
