
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in-up">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-portfolio-cyan to-portfolio-cyan-light p-1 animate-float">
            <div className="w-full h-full rounded-full bg-portfolio-gray flex items-center justify-center text-6xl font-bold text-portfolio-cyan">
              VB
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl font-bold text-portfolio-text mb-4">
            Venkata Balaji Boppudi
          </h1>
          <h2 className="text-xl md:text-2xl text-portfolio-cyan mb-4">
            Aspiring AI Engineer | AI & Data Science Enthusiast
          </h2>
          <p className="text-lg text-portfolio-text-secondary mb-8">
            📍 Bengaluru, India
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-portfolio-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate fresher in the AI field, eager to contribute and grow in data science and artificial intelligence. 
            Actively seeking opportunities to apply my skills and knowledge in real-world projects.
          </p>
        </div>

        <div className="animate-fade-in-up flex justify-center space-x-6" style={{ animationDelay: '0.6s' }}>
          <a 
            href="https://github.com/VenkataBalaji07" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-portfolio-gray hover:bg-portfolio-cyan transition-all duration-300 rounded-full text-portfolio-text hover:text-white hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/venkata-balaji-boppudi-632b5b248" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-portfolio-gray hover:bg-portfolio-cyan transition-all duration-300 rounded-full text-portfolio-text hover:text-white hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:venkatabalaji00007@gmail.com"
            className="p-3 bg-portfolio-gray hover:bg-portfolio-cyan transition-all duration-300 rounded-full text-portfolio-text hover:text-white hover:scale-110"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://x.com/Balaji420" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-portfolio-gray hover:bg-portfolio-cyan transition-all duration-300 rounded-full text-portfolio-text hover:text-white hover:scale-110"
          >
            <Twitter size={24} />
          </a>
        </div>

        <div className="animate-fade-in-up mt-8" style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://drive.google.com/file/d/1Ho5cYcYEE6GJwBw1gjBAo6oNZtu_FtV8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-portfolio-cyan to-portfolio-cyan-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-portfolio-cyan/25 transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
