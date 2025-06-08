
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', color: '#3776AB' },
        { name: 'SQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', color: '#4479A1' },
      ]
    },
    {
      title: "Data Analysis Skills",
      skills: [
        { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy/013243', color: '#013243' },
        { name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas/150458', color: '#150458' },
        { name: 'Matplotlib', icon: 'https://cdn.simpleicons.org/plotly/3F4F75', color: '#3F4F75' },
        { name: 'Seaborn', icon: 'https://cdn.simpleicons.org/python/3776AB', color: '#3776AB' },
      ]
    },
    {
      title: "Machine Learning / Deep Learning",
      skills: [
        { name: 'Scikit-learn', icon: 'https://cdn.simpleicons.org/scikitlearn/F7931E', color: '#F7931E' },
        { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00', color: '#FF6F00' },
        { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C', color: '#EE4C2C' },
      ]
    },
    {
      title: "Specialized Tools",
      skills: [
        { name: 'OpenCV', icon: 'https://cdn.simpleicons.org/opencv/5C3EE8', color: '#5C3EE8' },
        { name: 'Jupyter', icon: 'https://cdn.simpleicons.org/jupyter/F37626', color: '#F37626' },
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', color: '#F05032' },
        { name: 'Feature Engineering', icon: 'https://cdn.simpleicons.org/databricks/FF3621', color: '#FF3621' },
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section reveal animation
      gsap.fromTo(
        skillsRef.current,
        { 
          opacity: 0, 
          y: 40,
          filter: 'blur(4px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0)',
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for skill tiles
      skillsRef.current.forEach((skill, index) => {
        gsap.to(skill, {
          y: -8,
          duration: 2 + (index % 3) * 0.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !skillsRef.current.includes(el)) {
      skillsRef.current.push(el);
    }
  };

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
      ref={sectionRef} 
      id="skills" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-electric-purple mb-16 animated-name">
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
                <h3 className="text-xl font-semibold text-indigo-glow mb-8 relative inline-block">
                  {category.title}
                  <span className="absolute bottom-[-4px] left-1/2 w-10 h-0.5 bg-gradient-to-r from-cyber-electric-purple to-cyber-neon-cyan transform -translate-x-1/2"></span>
                </h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {category.skills.map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      ref={addToRefs}
                      className="cyber-skill-tile w-32 h-32 flex flex-col items-center justify-center group cursor-pointer"
                      style={{ 
                        '--skill-color': skill.color,
                        '--delay': `${(categoryIndex * 0.5) + (index * 0.1)}s`
                      } as React.CSSProperties}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        width={48}
                        height={48}
                        className="mb-3 transition-all duration-300 group-hover:scale-110"
                      />
                      <span className="text-sm font-medium text-soft-white group-hover:text-electric-purple transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
