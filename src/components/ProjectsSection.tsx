
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: '🏠 Bengaluru House Price Prediction',
      description: 'Machine learning regression model for real estate price prediction with Streamlit deployment.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop',
      github: 'https://github.com/VenkataBalaji07/Bengaluru_house_price_prediction',
      technologies: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy']
    },
    {
      title: '📊 Exploratory Data Analysis Project',
      description: 'Comprehensive data exploration and visualization for actionable insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      github: 'https://github.com/VenkataBalaji07/Exploratory-Data-Analysis-Project',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter']
    },
    {
      title: '🤖 Language Learning Bot',
      description: 'NLP chatbot to support language learning through interactive conversations.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop',
      github: 'https://github.com/VenkataBalaji07/Language_Learning_Bot',
      technologies: ['Python', 'NLP', 'TensorFlow', 'NLTK', 'Chatbot']
    },
    {
      title: '🛒 E-Commerce Purchase Intention Model',
      description: 'Machine learning model analyzing customer buying behavior on e-commerce platforms.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      github: 'https://github.com/VenkataBalaji07/E-Commerce-Purchase-Intention-Model-',
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Scikit-learn']
    },
    {
      title: '📰 News Summarizer',
      description: 'Automated NLP tool for concise news article summaries.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop',
      github: 'https://github.com/VenkataBalaji07/News_Summarizer',
      technologies: ['Python', 'NLP', 'Text Processing', 'NLTK', 'Summarization']
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0)',
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <motion.section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative cyber-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-electric-purple mb-16 animated-name">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                className="cyber-project-card rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-deep-dark/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-soft-white hover:text-neon-cyan transition-colors"
                      >
                        <Github size={20} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-electric-purple mb-3">
                    {project.title}
                  </h3>
                  <p className="text-soft-white mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-cyber-indigo-glow/20 text-indigo-glow text-xs rounded-full border border-cyber-indigo-glow/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-rose-flash hover:text-neon-cyan transition-colors font-medium"
                  >
                    <Github size={16} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
