import React from 'react';

const projects = [
  {
    id: 1,
    title: "business 1",
    category: "Community Enterprise",
    description: "A clean, functional digital ecosystem built for local impact.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    year: "2025"
  },
  {
    id: 2,
    title: "business 2",
    category: "Indigenous Business",
    description: "Reliable digital tools for a growing business.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    year: "2024"
  },
  {
    id: 3,
    title: "business 3",
    category: "Local Service",
    description: "No-nonsense web development that gets the job done.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    year: "2025"
  },
  {
    id: 4,
    title: "business 4",
    category: "Community Project",
    description: "Built with performance and accessibility in mind.",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
    year: "2024"
  },
  {
    id: 5,
    title: "business 5",
    category: "Small Business",
    description: "A digital shopfront that's easy to run and built to last.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
    year: "2025"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="min-h-screen flex items-center py-24 px-6 md:px-12 bg-[#1A1A1A] text-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#EF4444] mb-6 block">Past Projects</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold uppercase tracking-tighter leading-none">
              Less talk, <br /> <span className="text-white/40">more work.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-sm font-light leading-relaxed">
            A look at the digital ecosystems we’ve built for brands with a pulse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-zinc-900 border border-white/5">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale contrast-125 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <span className="px-8 py-3 bg-[#EF4444] text-white text-xs font-bold uppercase tracking-widest">View Case Study</span>
                </div>
              </div>
              
              <div className="flex justify-between items-start border-t border-white/10 pt-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold uppercase tracking-tight mb-2 group-hover:text-[#EF4444] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-medium">{project.category}</p>
                </div>
                <span className="text-xs font-mono text-white/20">{project.year}</span>
              </div>
              <p className="mt-6 text-white/60 font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
