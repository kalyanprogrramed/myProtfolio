import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Dashboard from './components/Dashboard';
import PersonalInfo from './components/PersonalInfo';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 50 },
        ease: "power2.inOut"
      });
    }
  };

  useEffect(() => {
    // Smooth scrolling setup
    gsap.registerPlugin(ScrollTrigger);
    
    // Add scroll-based animations
    gsap.utils.toArray('.animate-on-scroll').forEach((element: Element) => {
      gsap.fromTo(element, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Intersection Observer for navigation dots
    const sections = document.querySelectorAll('section[id]');
    const navDots = document.querySelectorAll('.nav-dot');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('data-section') === sectionId) {
              dot.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Preloader />
      <Dashboard scrollToSection={scrollToSection} />
      <PersonalInfo />
      <TechnicalSkills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      
      {/* Enhanced Fixed Navigation */}
      <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-lg rounded-full px-8 py-4 border border-purple-500/30 shadow-2xl shadow-purple-500/10 z-40">
        <div className="flex gap-6">
          <button
            onClick={() => scrollToSection('personal')}
            data-section="personal"
            className="nav-dot w-4 h-4 rounded-full bg-purple-600/50 hover:bg-purple-500 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-purple-500/50 relative group"
          >
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Personal
            </span>
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            data-section="skills"
            className="nav-dot w-4 h-4 rounded-full bg-purple-600/50 hover:bg-purple-500 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-purple-500/50 relative group"
          >
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Skills
            </span>
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            data-section="experience"
            className="nav-dot w-4 h-4 rounded-full bg-purple-600/50 hover:bg-purple-500 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-purple-500/50 relative group"
          >
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Experience
            </span>
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            data-section="projects"
            className="nav-dot w-4 h-4 rounded-full bg-purple-600/50 hover:bg-purple-500 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-purple-500/50 relative group"
          >
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Projects
            </span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            data-section="contact"
            className="nav-dot w-4 h-4 rounded-full bg-purple-600/50 hover:bg-purple-500 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-purple-500/50 relative group"
          >
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Contact
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;