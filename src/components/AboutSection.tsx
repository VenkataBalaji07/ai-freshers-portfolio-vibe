
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-text mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-portfolio-text-secondary leading-relaxed mb-6">
                I am a passionate fresher in the AI field, eager to contribute and grow in data science and artificial intelligence. 
                I am actively seeking opportunities to apply my skills and knowledge in real-world projects and make meaningful impacts 
                in tech-driven environments.
              </p>
              <p className="text-lg text-portfolio-text-secondary leading-relaxed mb-6">
                My journey in AI and Data Science has been driven by curiosity and a desire to solve complex problems using technology. 
                I enjoy working with machine learning algorithms, data visualization, and building intelligent systems.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Machine Learning', 'Deep Learning', 'Data Analysis', 'Python Programming', 'Neural Networks'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-portfolio-gray text-portfolio-cyan rounded-full text-sm font-medium border border-portfolio-cyan/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-portfolio-text mb-6">Education</h3>
              
              <div className="bg-portfolio-gray/30 p-6 rounded-lg border border-portfolio-gray/20">
                <h4 className="text-lg font-semibold text-portfolio-cyan mb-2">
                  B.Tech in Artificial Intelligence and Machine Learning
                </h4>
                <p className="text-portfolio-text-secondary mb-1">Kallam Haranadhareddy Institute of Technology</p>
                <p className="text-portfolio-text-secondary mb-1">CGPA: 7.2/10.0</p>
                <p className="text-portfolio-text-secondary">2020 – 2024</p>
              </div>
              
              <div className="bg-portfolio-gray/30 p-6 rounded-lg border border-portfolio-gray/20">
                <h4 className="text-lg font-semibold text-portfolio-cyan mb-2">
                  Intermediate in MPC
                </h4>
                <p className="text-portfolio-text-secondary mb-1">Sims Junior College</p>
                <p className="text-portfolio-text-secondary mb-1">CGPA: 7.4/10.0</p>
                <p className="text-portfolio-text-secondary">2018 – 2020</p>
              </div>
              
              <div className="bg-portfolio-gray/30 p-6 rounded-lg border border-portfolio-gray/20">
                <h4 className="text-lg font-semibold text-portfolio-cyan mb-2">
                  SSC
                </h4>
                <p className="text-portfolio-text-secondary mb-1">Nagarjuna High School</p>
                <p className="text-portfolio-text-secondary mb-1">CGPA: 8.8/10.0</p>
                <p className="text-portfolio-text-secondary">2017 – 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
