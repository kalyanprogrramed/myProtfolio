import React, { useEffect, useRef } from 'react';
import { Smartphone, Code, Globe, Settings, ExternalLink, Github } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';

// Extend HTMLDivElement to include vanillaTilt property
declare global {
  interface HTMLDivElement {
    vanillaTilt?: {
      destroy: () => void;
    };
  }
}

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement[]>([]);

  const projectCategories = [
    {
      title: 'Flutter Projects',
      icon: <Smartphone className="w-8 h-8" />,
      projects: [
        { name: 'Blinkit Clone', description: 'Grocery delivery app with real-time tracking' },
        { name: 'LFAi App', description: 'AI-powered learning and fitness application' },
        { name: 'Monkey Clone', description: 'Social media app with unique features' }
      ],
      description: 'Cross-platform mobile applications built with Flutter framework',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-900/20 to-cyan-900/20'
    },
    {
      title: 'Python Projects',
      icon: <Code className="w-8 h-8" />,
      projects: [
        { name: 'Streamlit Rain Water Accumulation', description: 'Data visualization for weather analysis' },
        { name: 'AIML Project', description: 'Machine learning model for predictive analysis' },
        { name: 'Linear Regression & Matplotlib', description: 'Statistical analysis and data visualization' }
      ],
      description: 'Data science and machine learning projects using Python',
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-900/20 to-emerald-900/20'
    },
    {
      title: 'Full Stack Projects',
      icon: <Globe className="w-8 h-8" />,
      projects: [
        { name: 'JavaScript Email Sender', description: 'Automated email service with templates' },
        { name: 'Location & Destination Finder', description: 'GPS-based navigation and mapping' },
        { name: 'WhatsApp SMS Integration', description: 'Messaging service with API integration' }
      ],
      description: 'Complete web applications with frontend and backend integration',
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-900/20 to-pink-900/20'
    },
    {
      title: 'DevOps Projects',
      icon: <Settings className="w-8 h-8" />,
      projects: [
        { name: 'Docker-Menu Base Project', description: 'Containerized application deployment' },
        { name: 'Jenkins CI/CD', description: 'Automated build and deployment pipeline' },
        { name: 'Streamlit via Docker', description: 'Containerized data science applications' },
        { name: 'Docker inside Docker', description: 'Advanced containerization techniques' }
      ],
      description: 'Infrastructure and deployment automation projects',
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-900/20 to-red-900/20'
    }
  ];

  useEffect(() => {
    // Animate project cards on scroll
    if (sectionRef.current) {
      gsap.fromTo(projectsRef.current,
        { opacity: 0, y: 100, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Add tilt effect to project cards
    const projects = projectsRef.current;
    projects.forEach(project => {
      if (project) {
        VanillaTilt.init(project, {
          max: 20,
          speed: 400,
          glare: true,
          "max-glare": 0.3,
        });
      }
    });

    return () => {
      projects.forEach(project => {
        if (project && project.vanillaTilt) {
          project.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          My <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectCategories.map((category, index) => (
            <div
              key={index}
              ref={el => el && (projectsRef.current[index] = el)}
              className={`bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 group transform-gpu relative overflow-hidden`}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white group-hover:animate-pulse">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{category.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{category.description}</p>
                
                <div className="space-y-3">
                  {category.projects.map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:bg-gray-700/50 group/project cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-sm mb-1 group-hover/project:text-purple-300 transition-colors duration-300">{project.name}</h4>
                          <p className="text-gray-400 text-xs group-hover/project:text-gray-300 transition-colors duration-300">{project.description}</p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button className="p-2 bg-purple-600 rounded-full hover:bg-purple-500 transition-colors duration-300 opacity-0 group-hover/project:opacity-100 transform scale-75 group-hover/project:scale-100">
                            <ExternalLink className="w-3 h-3 text-white" />
                          </button>
                          <button className="p-2 bg-gray-600 rounded-full hover:bg-gray-500 transition-colors duration-300 opacity-0 group-hover/project:opacity-100 transform scale-75 group-hover/project:scale-100">
                            <Github className="w-3 h-3 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;