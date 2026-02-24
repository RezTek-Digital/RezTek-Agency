import React from 'react';
import { Service } from '../types';

interface InquiryFormProps {
  service?: Service;
  onBack: () => void;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ service, onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F5F2EB] animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Home
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Left Column: Info */}
          <div className="md:col-span-4 space-y-12">
            <div>
              <h1 className="text-4xl font-serif text-[#2C2A26] mb-6 uppercase tracking-tighter font-bold">Let’s Work It <br/><span className="text-[#EF4444]">Out Together.</span></h1>
              <p className="text-[#5D5A53] font-light leading-relaxed">
                If you've got a project in mind — big, small, half-formed — throw us a line. We'll sort through it together.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#2C2A26] mb-2">Email Us</h4>
                <p className="text-[#5D5A53] font-light">hello@reztek.digital</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#2C2A26] mb-2">Land Acknowledgement</h4>
                <p className="text-[#5D5A53] text-[10px] font-light leading-relaxed">
                  Operating on Treaty One Territory and the National Homeland of the Red River Métis, in Wiiniibak, Manido Abi. We acknowledge these are the ancestral lands of the Anishinaabeg, Anisininew, Ininiwak/Nehethowuk, Oceti Sakowin/Dakota Oyate, and Michif (Métis) Peoples. This territory is also a place of significance for the Denesuline and the Inuit, some of whom have been living here for generations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-8 bg-white p-8 md:p-12 shadow-sm border border-[#D6D1C7]/30">
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#2C2A26]">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E]/50 outline-none focus:border-[#EF4444] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#2C2A26]">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E]/50 outline-none focus:border-[#EF4444] transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#2C2A26]">Subject</label>
                <input 
                  type="text" 
                  defaultValue={service ? `Inquiry: ${service.name}` : ''} 
                  placeholder="How can we help?" 
                  className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E]/50 outline-none focus:border-[#EF4444] transition-colors" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#2C2A26]">Message</label>
                <textarea 
                  placeholder="Tell us about your goals, timeline, and any specific requirements..." 
                  rows={5}
                  className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E]/50 outline-none focus:border-[#EF4444] transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-[#EF4444] text-white uppercase tracking-widest text-sm font-bold hover:bg-[#DC2626] transition-colors"
              >
                Send the Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
