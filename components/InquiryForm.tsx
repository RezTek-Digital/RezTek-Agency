import React from 'react';
import { Service } from '../types';

interface InquiryFormProps {
  items: Service[];
  onBack: () => void;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ items, onBack }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F5F2EB] animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div>
            <h1 className="text-3xl font-serif text-[#2C2A26] mb-4">Project Inquiry</h1>
            <p className="text-sm text-[#5D5A53] mb-12">Tell us about your vision. We'll get back to you within 48 hours.</p>
            
            <div className="space-y-12">
              {/* Section 1: Contact */}
              <div>
                <h2 className="text-xl font-serif text-[#2C2A26] mb-6">Contact Information</h2>
                <div className="space-y-4">
                   <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                   <input type="email" placeholder="Email address" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                   <input type="text" placeholder="Company / Organization" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                </div>
              </div>

              {/* Section 2: Project Details */}
              <div>
                <h2 className="text-xl font-serif text-[#2C2A26] mb-6">Project Details</h2>
                <div className="space-y-4">
                   <textarea 
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..." 
                    rows={4}
                    className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors resize-none"
                   />
                   <div className="flex items-center gap-2">
                     <input type="checkbox" id="nda" className="accent-[#EF4444]" />
                     <label htmlFor="nda" className="text-sm text-[#5D5A53]">I require a non-disclosure agreement (NDA)</label>
                   </div>
                </div>
              </div>

              <div>
                <button 
                    className="w-full py-5 bg-[#EF4444] text-white uppercase tracking-widest text-sm font-bold hover:bg-[#DC2626] transition-colors"
                >
                    Submit Inquiry
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:pl-12 lg:border-l border-[#D6D1C7]">
            <h2 className="text-xl font-serif text-[#2C2A26] mb-8">Selected Services</h2>
            
            <div className="space-y-6 mb-8">
               {items.map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="w-16 h-16 bg-[#EBE7DE] relative">
                       <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                       <h3 className="font-serif text-[#2C2A26] text-base">{item.name}</h3>
                       <p className="text-xs text-[#A8A29E]">{item.category}</p>
                    </div>
                    <span className="text-sm text-[#5D5A53]">${item.price}</span>
                 </div>
               ))}
            </div>

            <div className="border-t border-[#D6D1C7] pt-6 space-y-2">
              <div className="flex justify-between text-sm text-[#5D5A53]">
                 <span>Estimated Subtotal</span>
                 <span>${subtotal}</span>
              </div>
            </div>
            
            <div className="border-t border-[#D6D1C7] mt-6 pt-6">
               <div className="flex justify-between items-center">
                 <span className="font-serif text-xl text-[#2C2A26]">Estimated Total</span>
                 <div className="flex items-end gap-2">
                   <span className="text-xs text-[#A8A29E] mb-1">USD</span>
                   <span className="font-serif text-2xl text-[#2C2A26]">${subtotal}</span>
                 </div>
               </div>
               <p className="text-xs text-[#A8A29E] mt-4 italic">
                * This is an estimate based on base pricing. Final project scope and pricing will be determined after a consultation.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
