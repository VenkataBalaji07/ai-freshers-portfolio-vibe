
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Golden spotlight background */}
      <div className="absolute inset-0 bg-gradient-radial from-magic-golden/10 via-transparent to-transparent opacity-30"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 magic-fade-in">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full p-1 magic-float relative">
            <div className="w-full h-full rounded-full overflow-hidden glass-card border-2 border-magic-golden/30">
              <img 
                src="/lovable-uploads/c9e0b8fb-d408-4917-aa3d-509979658162.png" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-magic-golden/20 to-magic-cyan/20 blur-xl -z-10"></div>
          </div>
        </div>
        
        <div className="magic-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl font-bold text-magic-white mb-4 golden-glow transition-all duration-300 hover:scale-105">
            Venkata Balaji Boppudi
          </h1>
          <h2 className="text-xl md:text-2xl text-magic-light-gray mb-4 font-medium">
            Aspiring AI Engineer | AI & Data Science Enthusiast
          </h2>
          <p className="text-lg text-magic-gray mb-8">
            📍 Hyderabad, India
          </p>
        </div>

        <div className="magic-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-magic-gray max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate fresher in the AI field, eager to contribute and grow in data science and artificial intelligence. 
            Actively seeking opportunities to apply my skills and knowledge in real-world projects.
          </p>
        </div>

        <div className="magic-fade-in flex justify-center space-x-6 mb-8" style={{ animationDelay: '0.6s' }}>
          <a 
            href="https://github.com/VenkataBalaji07" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-magic-golden/10 transition-all duration-300 rounded-full text-magic-light-gray hover:text-magic-golden hover:scale-110 cyan-glow"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/venkata-balaji-boppudi-632b5b248" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-magic-golden/10 transition-all duration-300 rounded-full text-magic-light-gray hover:text-magic-golden hover:scale-110 cyan-glow"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:venkatabalaji00007@gmail.com"
            className="p-3 glass-card hover:bg-magic-golden/10 transition-all duration-300 rounded-full text-magic-light-gray hover:text-magic-golden hover:scale-110 cyan-glow"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://x.com/Balaji420" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-magic-golden/10 transition-all duration-300 rounded-full text-magic-light-gray hover:text-magic-golden hover:scale-110 cyan-glow"
          >
            <Twitter size={24} />
          </a>
        </div>

        <div className="magic-fade-in" style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://drive.google.com/file/d/1Ho5cYcYEE6GJwBw1gjBAo6oNZtu_FtV8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="magic-button inline-block px-8 py-3 text-magic-white font-semibold rounded-full transition-all duration-300 hover:scale-105 relative z-10"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
