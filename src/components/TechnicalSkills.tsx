import React, { useEffect, useRef, useMemo } from 'react';
import { Smartphone, Code, Database, Globe, Settings } from 'lucide-react';
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

const TechnicalSkills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);

  const skills = useMemo(() => [
    {
      name: 'Flutter',
      icon: <Smartphone className="w-12 h-12" />,
      description: 'Cross-platform mobile app development',
      level: 90,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Python',
      icon: <Code className="w-12 h-12" />,
      description: 'Data science, AI/ML, and backend development',
      level: 85,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Kotlin',
      icon: <Database className="w-12 h-12" />,
      description: 'Android native development',
      level: 80,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Frontend',
      icon: <Globe className="w-12 h-12" />,
      description: 'React, JavaScript, HTML, CSS',
      level: 85,
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'DevOps',
      icon: <Settings className="w-12 h-12" />,
      description: 'Docker, Jenkins, CI/CD pipelines',
      level: 75,
      color: 'from-indigo-500 to-blue-500'
    }
  ], []);

  useEffect(() => {
    // Animate skills on scroll
    if (sectionRef.current) {
      gsap.fromTo(skillsRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Add tilt effect and hover animations
    const skillsElements = skillsRef.current;
    skillsElements.forEach((skill, index) => {
      if (skill) {
        VanillaTilt.init(skill, {
          max: 25,
          speed: 400,
          glare: true,
          "max-glare": 0.3,
        });

        // Animate progress bars
        const progressBar = skill.querySelector('.progress-bar');
        if (progressBar) {
          gsap.fromTo(progressBar,
            { width: '0%' },
            {
              width: `${skills[index].level}%`,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: skill,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      }
    });

    return () => {
      skillsElements.forEach(skill => {
        if (skill && skill.vanillaTilt) {
          skill.vanillaTilt.destroy();
        }
      });
    };
  }, [skills]);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/20 to-transparent animate-pulse"></div>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Technical <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={el => el && (skillsRef.current[index] = el)}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 transform-gpu group cursor-pointer"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 bg-gradient-to-r ${skill.color} rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white group-hover:animate-pulse">
                      {skill.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">{skill.name}</h3>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">{skill.description}</p>
                
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`progress-bar bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ width: '0%' }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                <p className="text-purple-400 text-sm mt-2 font-bold group-hover:text-purple-300 transition-colors duration-300">{skill.level}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;