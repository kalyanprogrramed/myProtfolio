import React, { useEffect, useRef } from 'react';
import { User, Mail, Github, Linkedin, MessageCircle, X } from 'lucide-react';
import { gsap } from 'gsap';

interface DashboardProps {
  scrollToSection: (sectionId: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ scrollToSection }) => {
  const luciferRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [showLucifer, setShowLucifer] = React.useState(true);

  useEffect(() => {
    // Animate hero section on load
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }

    // Floating animation for Lucifer
    if (luciferRef.current && showLucifer) {
      gsap.to(luciferRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }
  }, [showLucifer]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Lucifer Character */}
      {showLucifer && (
        <div
          ref={luciferRef}
          className="absolute top-20 right-20 w-32 h-32 z-10 hidden lg:block"
        >
          <div className="relative w-full h-full">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            {/* Character placeholder - in production, replace with actual 3D model or GIF */}
            <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-4xl shadow-2xl border-2 border-purple-400">
              😈
            </div>
          </div>
          <button
            onClick={() => setShowLucifer(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs hover:bg-red-400 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <div ref={heroRef} className="text-center z-20 relative">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Kalyan Singh
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-purple-400 mb-6 animate-pulse">
            Rathore
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Flutter Developer
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          <button
            onClick={() => scrollToSection('personal')}
            className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
          >
            <User className="w-5 h-5 group-hover:animate-bounce" />
            <span className="font-medium">Personal Info</span>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
          >
            <Mail className="w-5 h-5 group-hover:animate-bounce" />
            <span className="font-medium">Contact</span>
          </button>
          
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
            <span className="font-medium">Discord</span>
          </a>
          
          <a
            href="https://github.com/kalyanprogrramd"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
          >
            <Github className="w-5 h-5 group-hover:animate-bounce" />
            <span className="font-medium">GitHub</span>
          </a>
          
          <a
            href="https://linkedin.com/in/kalyan-singh-rathore"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
          >
            <Linkedin className="w-5 h-5 group-hover:animate-bounce" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
        
        <div className="animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-purple-400 to-transparent mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;