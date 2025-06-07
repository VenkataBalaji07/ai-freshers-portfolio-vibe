
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
      title: "Data Science Libraries",
      skills: [
        { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy/013243' },
        { name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas/150458' },
        { name: 'Matplotlib', icon: 'https://cdn.simpleicons.org/plotly/3F4F75' },
        { name: 'Seaborn', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      ]
    },
    {
      title: "Machine Learning / Deep Learning",
      skills: [
        { name: 'Scikit-learn', icon: 'https://cdn.simpleicons.org/scikitlearn/F7931E' },
        { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
        { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
      ]
    },
    {
      title: "Specialized Tools",
      skills: [
        { name: 'OpenCV', icon: 'https://cdn.simpleicons.org/opencv/5C3EE8' },
        { name: 'Jupyter', icon: 'https://cdn.simpleicons.org/jupyter/F37626' },
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
        { name: 'Feature Engineering', icon: 'https://cdn.simpleicons.org/databricks/FF3621' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Golden spotlight background */}
      <div className="absolute inset-0 bg-gradient-radial from-magic-golden/5 via-transparent to-transparent opacity-40"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="magic-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-magic-white mb-16 golden-glow">
            Skills & Technologies
          </h2>
          
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="text-center">
                <h3 className="text-xl font-semibold text-magic-light-gray mb-8">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {category.skills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="magic-skill-icon magic-float flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-400 cursor-pointer"
                      style={{ 
                        animationDelay: `${(categoryIndex * 0.5) + (index * 0.1)}s`,
                        width: '120px',
                        height: '120px'
                      }}
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        width={64}
                        height={64}
                        className="mb-3 transition-all duration-400"
                      />
                      <span className="text-sm text-magic-light-gray font-medium text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
