import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#EBE7DE]">
      
      {/* Introduction / Story */}
      <div className="min-h-screen flex items-center py-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-16 md:gap-32 w-full">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] leading-tight uppercase">
              Honest <br/> Tech.
            </h2>
          </div>
          <div className="md:w-2/3 max-w-2xl">
            <p className="text-lg md:text-xl text-[#5D5A53] font-medium leading-relaxed mb-8">
              RezTek Digital started because we were tired of the "disruptive" tech bros. We prefer the "reliable" approach. We treat web design like a craft—like woodworking or fixing up a classic car.
            </p>
            <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8">
              We’re a remote-first crew of digital nomads who value a handshake (even over Zoom) and a job well done. We don’t hide behind bots; we’re just real people building better tools for the bold.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="RezTek Digital Studio" 
              className="w-full h-[400px] object-cover grayscale contrast-[1.1] brightness-100 mt-12"
            />
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF4444] mt-4">
              RezTek HQ // Digital Engineering
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy Blocks (Formerly Features) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200" 
             alt="High-Tech Workspace" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
           />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-white">
           <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#EF4444] mb-6">Performance</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#1A1A1A] leading-tight uppercase">
             Performance is <br/> Politeness.
           </h3>
           <p className="text-lg text-[#5D5A53] font-light leading-relaxed mb-12 max-w-md">
             A slow site is rude to your customers. We make sure yours is lightning fast, prioritizing performance at every level of the engineering process.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#1A1A1A] text-white">
           <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#EF4444] mb-6">Innovation</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-white leading-tight uppercase">
             No <br/> Bloat.
           </h3>
           <p className="text-lg text-white/70 font-light leading-relaxed mb-12 max-w-md">
             If you don't need it, we won't build it. We focus on clean code and essential features that actually drive value for your business.
           </p>
        </div>
        <div className="relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200" 
             alt="Minimalist Design" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-90"
           />
        </div>
      </div>
    </section>
  );
};

export default About;
