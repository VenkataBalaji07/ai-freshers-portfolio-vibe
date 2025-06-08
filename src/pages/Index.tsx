
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections with reveal animation
    const sections = document.querySelectorAll('.section-reveal');
    sections.forEach((section) => observer.observe(section));

    // Custom cursor following
    const updateCursor = (e: MouseEvent) => {
      const cursor = document.body;
      cursor.style.setProperty('--cursor-x', `${e.clientX}px`);
      cursor.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div className="cyber-background min-h-screen text-cyber-soft-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
