import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to('.preloader', {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => setLoading(false)
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-purple-500/20 rounded-full animate-spin">
            <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-purple-400 animate-pulse">K</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2 animate-pulse">Kalyan Singh Rathore</h2>
        <p className="text-purple-400 animate-pulse">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default Preloader;