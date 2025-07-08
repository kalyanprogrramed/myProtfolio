import React, { useEffect, useRef } from 'react';
import { Calendar, Award, Briefcase, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement[]>([]);

  const experiences = [
    {
      year: '2025',
      title: 'Creator Intern',
      company: 'LinuxWorld',
      description: 'Working on innovative projects and learning industry best practices in DevOps and cloud technologies',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      status: 'current'
    },
    {
      year: '2024',
      title: 'Java Programming',
      company: 'Vaultofcode',
      description: 'Completed comprehensive Java programming course and certification with hands-on projects',
      icon: <Award className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      status: 'completed'
    },
    {
      year: '2023',
      title: 'Started Programming Journey',
      company: 'Self-Taught',
      description: 'Began learning programming and software development, focusing on mobile app development',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      status: 'milestone'
    }
  ];

  useEffect(() => {
    // Animate timeline line
    if (timelineRef.current) {
      gsap.fromTo(timelineRef.current,
        { height: '0%' },
        {
          height: '100%',
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animate experience cards
    experiencesRef.current.forEach((exp, index) => {
      if (exp) {
        gsap.fromTo(exp,
          { opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: 15 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 1,
            delay: index * 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: exp,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          My <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-700 rounded-full">
              <div 
                ref={timelineRef}
                className="w-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 rounded-full"
                style={{ height: '0%' }}
              ></div>
            </div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={el => el && (experiencesRef.current[index] = el)}
                  className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ml-20 transform-gpu group"
                >
                  {/* Timeline node */}
                  <div className={`absolute -left-24 top-8 w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center border-4 border-black shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {exp.icon}
                    </div>
                    {exp.status === 'current' && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-ping opacity-75"></div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-6 py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-bold shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      {exp.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{exp.title}</h3>
                    {exp.status === 'current' && (
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
                        <span className="text-yellow-400 text-sm font-semibold">Current</span>
                      </div>
                    )}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors duration-300">{exp.company}</h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;