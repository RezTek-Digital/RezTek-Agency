/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Manual scroll calculation to account for fixed header
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL hash without jumping, safely ignoring errors in sandboxed environments
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError in restricted environments
      }
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#D6D1C7]">
      
      {/* Background Image - Serene Nature */}
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
            alt="Serene misty landscape" 
            className="w-full h-full object-cover grayscale contrast-[0.7] brightness-[0.95] animate-[pulse_15s_ease-in-out_infinite_alternate]"
        />
        {/* Warmer Brown Overlay for Richness */}
        <div className="absolute inset-0 bg-[#433E38]/40 mix-blend-multiply"></div>
        {/* Deep Sepia Tone for Shadow Depth */}
        <div className="absolute inset-0 bg-[#313030]/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-left md:items-center md:text-center px-6">
        <div className="animate-fade-in-up w-full md:w-auto">
          <span className="block text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white/90 mb-6 backdrop-blur-md bg-black/20 px-6 py-2 rounded-none border border-white/20 mx-0 md:mx-auto w-fit">
            High-Performance Web Solutions
          </span>
          <img 
            src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400" 
            alt="RezTek Digital Logo" 
            className="h-32 md:h-48 w-auto object-contain mb-8 mx-0 md:mx-auto brightness-0 invert drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <p className="max-w-xl mx-0 md:mx-auto text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-12 text-shadow-lg">
            Technical excellence meets intentional design. <br/>
            Building high-performance digital solutions for the bold.
          </p>
          
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, 'services')}
            className="group relative px-12 py-5 bg-[#EF4444] text-white rounded-none text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#DC2626] transition-all duration-500 overflow-hidden shadow-2xl inline-block"
          >
            <span className="relative z-10">Start Your Project</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
