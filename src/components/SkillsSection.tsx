
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      title: "Data Science Libraries",
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
      // Staggered reveal animation
      gsap.fromTo(
        skillsRef.current,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation
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

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced gradient background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-radial from-magic-golden/8 via-magic-cyan/3 to-transparent opacity-40 skills-parallax"></div>
      <div className="absolute inset-0 bg-gradient-conic from-magic-golden/5 via-transparent to-magic-cyan/5 animate-spin-slow opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="magic-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-magic-white mb-16 golden-glow premium-heading">
            Skills & Technologies
          </h2>
          
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="text-center">
                <h3 className="text-xl font-semibold text-magic-light-gray mb-8 category-title">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {category.skills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      ref={addToRefs}
                      className="premium-skill-card group cursor-pointer"
                      style={{ 
                        '--skill-color': skill.color,
                        '--delay': `${(categoryIndex * 0.5) + (index * 0.1)}s`
                      } as React.CSSProperties}
                    >
                      <div className="skill-inner">
                        <div className="skill-glow-ring"></div>
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="skill-icon"
                        />
                        <span className="skill-label">
                          {skill.name}
                        </span>
                      </div>
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
