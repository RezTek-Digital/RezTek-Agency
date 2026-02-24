import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

// Example: To use your own image in Logo.tsx
return (
  <img 
    src="/components/logo.png" 
    className={className} 
    alt="RezTek Logo" 
  />
);
const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto", variant = 'dark' }) => {
  // For now, we use a stylized text-based logo with a graphic element
  // This is better than a random Unsplash image for a logo.
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <div className={`relative w-8 h-8 flex items-center justify-center border-2 ${variant === 'light' ? 'border-white' : 'border-[#2C2A26]'}`}>
        <span className={`text-lg font-bold font-mono ${variant === 'light' ? 'text-white' : 'text-[#2C2A26]'}`}>R</span>
        <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${variant === 'light' ? 'bg-[#EF4444]' : 'bg-[#EF4444]'}`}></div>
      </div>
      <span className={`text-xl font-serif font-bold uppercase tracking-tighter ${variant === 'light' ? 'text-white' : 'text-[#2C2A26]'}`}>
        RezTek<span className="text-[#EF4444]">.</span>
      </span>
    </div>
  );
};

export default Logo;
