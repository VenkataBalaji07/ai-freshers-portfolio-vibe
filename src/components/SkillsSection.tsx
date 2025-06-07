
const SkillsSection = () => {
  const skills = [
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'SQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy/013243' },
    { name: 'Matplotlib', icon: 'https://cdn.simpleicons.org/plotly/3F4F75' },
    { name: 'Seaborn', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Scikit-learn', icon: 'https://cdn.simpleicons.org/scikitlearn/F7931E' },
    { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
    { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
    { name: 'OpenCV', icon: 'https://cdn.simpleicons.org/opencv/5C3EE8' },
    { name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas/150458' },
    { name: 'Jupyter', icon: 'https://cdn.simpleicons.org/jupyter/F37626' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-portfolio-gray/10">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-text mb-16">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="skill-icon flex flex-col items-center justify-center p-6 bg-portfolio-gray/30 rounded-lg border border-portfolio-gray/20 hover:border-portfolio-cyan/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="mb-3"
                />
                <span className="text-sm text-portfolio-text-secondary font-medium text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
