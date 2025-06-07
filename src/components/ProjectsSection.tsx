
import { Github } from 'lucide-react';

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

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Cyan spotlight background */}
      <div className="absolute inset-0 bg-gradient-radial from-magic-cyan/5 via-transparent to-transparent opacity-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="magic-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-magic-white mb-16 golden-glow">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="magic-project-card rounded-lg overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-magic-dark/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-magic-white hover:text-magic-cyan transition-colors"
                      >
                        <Github size={20} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-magic-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-magic-gray mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-magic-golden/10 text-magic-golden text-xs rounded-full border border-magic-golden/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-magic-cyan hover:text-magic-golden transition-colors font-medium"
                  >
                    <Github size={16} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
