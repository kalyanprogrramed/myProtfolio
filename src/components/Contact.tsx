import React, { useEffect, useRef } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';

// Extend HTML elements to include vanillaTilt property
declare global {
  interface HTMLDivElement {
    vanillaTilt?: {
      destroy: () => void;
    };
  }
  interface HTMLAnchorElement {
    vanillaTilt?: {
      destroy: () => void;
    };
  }
}

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contactCardsRef = useRef<HTMLAnchorElement[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'makefrend28@gmail.com',
      href: 'mailto:kalyansinghchandawat183@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '8430993485',
      href: 'tel:***********',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Kalyan Singh Rathore',
      href: 'https://www.linkedin.com/in/kalyan-singh-rathore-50163b2bb/',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'kalyanprogrramd',
      href: 'https://github.com/kalyanprogrramed',
      color: 'from-gray-600 to-gray-800'
    }
  ];

  useEffect(() => {
    // Animate contact cards
    if (sectionRef.current) {
      gsap.fromTo(contactCardsRef.current,
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

    // Add tilt effect to contact cards
    const cards = contactCardsRef.current;
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

    // Animate form
    if (formRef.current) {
      gsap.fromTo(formRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      cards.forEach(card => {
        if (card && card.vanillaTilt) {
          card.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Get In <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  ref={el => el && (contactCardsRef.current[index] = el)}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 group block transform-gpu"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-4 bg-gradient-to-r ${contact.color} rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className="text-white group-hover:animate-pulse">
                        {contact.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-1 group-hover:text-purple-300 transition-colors duration-300">{contact.label}</h4>
                      <p className="text-white text-lg group-hover:text-gray-200 transition-colors duration-300">{contact.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div>
              <form ref={formRef} className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-purple-400 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-purple-400 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-purple-400 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-5 h-5 group-hover:animate-pulse" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-400 text-lg mb-4">
              Let's collaborate and build something amazing together!
            </p>
            <div className="flex items-center justify-center gap-2 text-purple-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Available for remote work worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;