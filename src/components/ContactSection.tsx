
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-portfolio-gray/10">
      <div className="max-w-4xl mx-auto">
        <div className="section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-text mb-16">
            Get In Touch
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-lg text-portfolio-text-secondary mb-6 leading-relaxed">
              I'm actively seeking opportunities in AI and Data Science. Whether you're a recruiter, 
              hiring manager, or fellow AI enthusiast, I'd love to connect and discuss potential collaborations.
            </p>
            <p className="text-portfolio-text-secondary">
              📍 Currently based in Bengaluru, India
            </p>
            <p className="text-portfolio-text-secondary">
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
                  className="flex items-center space-x-4 p-6 bg-portfolio-gray/30 rounded-lg border border-portfolio-gray/20 hover:border-portfolio-cyan/30 transition-all duration-300 hover:bg-portfolio-gray/40 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-portfolio-cyan/10 rounded-full group-hover:bg-portfolio-cyan/20 transition-colors">
                    <IconComponent size={24} className="text-portfolio-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-portfolio-text group-hover:text-portfolio-cyan transition-colors">
                      {contact.label}
                    </h3>
                    <p className="text-portfolio-text-secondary">
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
              className="inline-block px-8 py-3 bg-gradient-to-r from-portfolio-cyan to-portfolio-cyan-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-portfolio-cyan/25 transition-all duration-300 hover:scale-105"
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
