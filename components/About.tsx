import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#EBE7DE]">
      
      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] leading-tight uppercase">
            Technical <br/> Excellence.
          </h2>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg md:text-xl text-[#5D5A53] font-medium leading-relaxed mb-8">
            RezTek Digital was born from the intersection of high-performance engineering and intentional design. We don't just build websites; we engineer digital ecosystems that drive results.
          </p>
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8">
            In a world of generic templates, we stand for custom-built excellence. Our approach combines cutting-edge technology with a deep understanding of user behavior, ensuring your digital presence is as powerful as it is intuitive.
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

      {/* Philosophy Blocks (Formerly Features) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
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
             Engineered for <br/> Speed.
           </h3>
           <p className="text-lg text-[#5D5A53] font-light leading-relaxed mb-12 max-w-md">
             We prioritize performance at every level. From optimized assets to clean, efficient code, we ensure your digital solutions load instantly and perform flawlessly across all devices.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#1A1A1A] text-white">
           <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#EF4444] mb-6">Innovation</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-white leading-tight uppercase">
             Future-Proof <br/> Solutions.
           </h3>
           <p className="text-lg text-white/70 font-light leading-relaxed mb-12 max-w-md">
             Our solutions are built to evolve. We use modern frameworks and scalable architectures, ensuring your digital presence remains at the forefront of innovation for years to come.
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
