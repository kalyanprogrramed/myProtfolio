import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black py-8 border-t border-purple-500/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by</span>
            <span className="text-purple-400 font-semibold">Kalyan Singh Rathore</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="mailto:makefrend28@gmail.com"
              className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 group"
            >
              <Mail className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </a>
            <a
              href="https://github.com/kalyanprogrramd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 group"
            >
              <Github className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/kalyan-singh-rathore"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 group"
            >
              <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-6 pt-6 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © 2025 Kalyan Singh Rathore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;