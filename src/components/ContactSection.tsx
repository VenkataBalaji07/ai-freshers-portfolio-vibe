
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'venkatabalaji00007@gmail.com',
      href: 'mailto:venkatabalaji00007@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Venkata Balaji Boppudi',
      href: 'https://www.linkedin.com/in/venkata-balaji-boppudi-632b5b248'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'VenkataBalaji07',
      href: 'https://github.com/VenkataBalaji07'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@Balaji420',
      href: 'https://x.com/Balaji420'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Cyan spotlight background */}
      <div className="absolute inset-0 bg-gradient-radial from-magic-cyan/5 via-transparent to-transparent opacity-30"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="magic-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-magic-white mb-16 golden-glow">
            Get In Touch
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-lg text-magic-gray mb-6 leading-relaxed">
              I'm actively seeking opportunities in AI and Data Science. Whether you're a recruiter, 
              hiring manager, or fellow AI enthusiast, I'd love to connect and discuss potential collaborations.
            </p>
            <p className="text-magic-light-gray">
              📍 Currently based in Hyderabad, India
            </p>
            <p className="text-magic-light-gray">
              📞 +91 6303612803
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center space-x-4 p-6 rounded-lg border border-magic-border hover:border-magic-cyan/30 transition-all duration-300 hover:bg-magic-golden/5 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-magic-cyan/10 rounded-full group-hover:bg-magic-cyan/20 transition-colors">
                    <IconComponent size={24} className="text-magic-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-magic-white group-hover:text-magic-cyan transition-colors">
                      {contact.label}
                    </h3>
                    <p className="text-magic-gray">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
          
          <div className="text-center">
            <a 
              href="https://drive.google.com/file/d/1Ho5cYcYEE6GJwBw1gjBAo6oNZtu_FtV8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="magic-button inline-block px-8 py-3 text-magic-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
