import React, { useEffect, useRef } from 'react';
import { GraduationCap, BookOpen, Heart, Code } from 'lucide-react';
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

// Extend HTMLDivElement to include vanillaTilt property
declare global {
  interface HTMLDivElement {
    vanillaTilt?: {
      destroy: () => void;
    };
  }
}

gsap.registerPlugin(ScrollTrigger);

const PersonalInfo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate cards on scroll
    if (sectionRef.current) {
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 100, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.3,
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

    // Add tilt effect to cards
    const cards = cardsRef.current;
    cards.forEach(card => {
      if (card) {
        VanillaTilt.init(card, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        });
      }
    });

    return () => {
      cards.forEach(card => {
        if (card && card.vanillaTilt) {
          card.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="personal" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          About <span className="text-purple-400 animate-pulse">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div
            ref={el => el && (cardsRef.current[0] = el)}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform-gpu"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full animate-pulse">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4 hover:border-purple-400 transition-colors duration-300">
                <h4 className="text-lg font-semibold text-purple-400">College</h4>
                <p className="text-gray-300">Computer Science Engineering</p>
                <p className="text-gray-400 text-sm">Pursuing Bachelor's Degree</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4 hover:border-purple-400 transition-colors duration-300">
                <h4 className="text-lg font-semibold text-purple-400">School</h4>
                <p className="text-gray-300">High School Graduate</p>
                <p className="text-gray-400 text-sm">Strong foundation in Mathematics & Science</p>
              </div>
            </div>
          </div>
          
          <div
            ref={el => el && (cardsRef.current[1] = el)}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform-gpu"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full animate-pulse">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Hobbies</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                <BookOpen className="w-6 h-6 text-purple-400" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Reading Books</h4>
                  <p className="text-gray-400 text-sm">Passionate about technology, self-improvement, and fiction</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                <Code className="w-6 h-6 text-purple-400" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Coding</h4>
                  <p className="text-gray-400 text-sm">Always exploring new technologies and building projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;