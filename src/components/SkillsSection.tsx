import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
        { name: 'SQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
      ]
    },
    {
      title: "Data Analysis & Visualization",
      skills: [
        { name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas/150458' },
        { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy/013243' },
        { name: 'Matplotlib', icon: 'https://cdn.simpleicons.org/plotly/3F4F75' },
        { name: 'Seaborn', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: 'Scikit-learn', icon: 'https://cdn.simpleicons.org/scikitlearn/F7931E' },
        { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
        { name: 'Keras', icon: 'https://cdn.simpleicons.org/keras/D00000' },
        { name: 'SpaCy', icon: 'https://cdn.simpleicons.org/spacy/09A3D5' },
        { name: 'AI', icon: 'https://cdn.simpleicons.org/openai/412991' },
        { name: 'ML', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
        { name: 'NLP', icon: 'https://cdn.simpleicons.org/spacy/09A3D5' },
        { name: 'Gen AI', icon: 'https://cdn.simpleicons.org/openai/412991' },
      ]
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <motion.section 
      id="skills" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-16 hover:text-purple-300 hover:shadow-[0_0_10px_#c084fc] transition-all duration-300">
          Skills & Technologies
        </h2>
        
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title} 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-8 relative inline-block hover:text-cyan-300 transition-colors duration-300">
                {category.title}
                <span className="absolute bottom-[-4px] left-1/2 w-10 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 transform -translate-x-1/2"></span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="mb-3 transition-all duration-300"
                    />
                    <span className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
