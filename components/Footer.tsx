/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import Logo from './Logo';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-[#EBE7DE] pt-24 pb-12 px-6 text-[#5D5A53]">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <Logo variant="dark" className="h-16 w-auto mb-6" />
          <p className="max-w-xs font-light leading-relaxed">
            The work speaks. We just write the code.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Explore</h4>
          <ul className="space-y-4 font-light">
            <li><a href="#portfolio" onClick={(e) => onLinkClick(e, 'portfolio')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Our Work</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Who We Are</a></li>
            <li><a href="#services" onClick={(e) => onLinkClick(e, 'services')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Care Plans</a></li>
            <li><a href="#" className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Privacy</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-6">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Land Acknowledgement</h4>
          <p className="text-[10px] font-light leading-relaxed max-w-2xl">
            Operating on Treaty One Territory and the National Homeland of the Red River Métis, in Wiiniibak, Manido Abi. We acknowledge these are the ancestral lands of the Anishinaabeg, Anisininew, Ininiwak/Nehethowuk, Oceti Sakowin/Dakota Oyate, and Michif (Métis) Peoples. This territory is also a place of significance for the Denesuline and the Inuit, some of whom have been living here for generations.
          </p>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-[#D6D1C7] flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-60">
        <p>© 2026 RezTek Digital. Stay True.</p>
      </div>
    </footer>
  );
};

export default Footer;
