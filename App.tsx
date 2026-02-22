/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import About from './components/About';
import Journal from './components/Journal';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import JournalDetail from './components/JournalDetail';
import InquiryDrawer from './components/InquiryDrawer';
import InquiryForm from './components/InquiryForm';
import { Service, JournalArticle, ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [inquiryItems, setInquiryItems] = useState<Service[]>([]);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  // Handle navigation (clicks on Navbar or Footer links)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // If we are not home, go home first
    if (view.type !== 'home') {
      setView({ type: 'home' });
      // Allow state update to render Home before scrolling
      setTimeout(() => scrollToSection(targetId), 0);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
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

      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError in restricted environments
      }
    }
  };

  const addToInquiry = (service: Service) => {
    setInquiryItems([...inquiryItems, service]);
    setIsInquiryOpen(true);
  };

  const removeFromInquiry = (index: number) => {
    const newItems = [...inquiryItems];
    newItems.splice(index, 1);
    setInquiryItems(newItems);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] font-sans text-[#2C2A26] selection:bg-[#D6D1C7] selection:text-[#2C2A26]">
      {view.type !== 'inquiry' && (
        <Navbar 
            onNavClick={handleNavClick} 
            cartCount={inquiryItems.length}
            onOpenCart={() => setIsInquiryOpen(true)}
        />
      )}
      
      <main>
        {view.type === 'home' && (
          <>
            <Hero />
            <ServiceGrid onServiceClick={(s) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'service', service: s });
            }} />
            <About />
            <Journal onArticleClick={(a) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'journal', article: a });
            }} />
          </>
        )}

        {view.type === 'service' && (
          <ServiceDetail 
            service={view.service} 
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('services'), 50);
            }}
            onAddToInquiry={addToInquiry}
          />
        )}

        {view.type === 'journal' && (
          <JournalDetail 
            article={view.article} 
            onBack={() => setView({ type: 'home' })}
          />
        )}

        {view.type === 'inquiry' && (
            <InquiryForm 
                items={inquiryItems}
                onBack={() => setView({ type: 'home' })}
            />
        )}
      </main>

      {view.type !== 'inquiry' && <Footer onLinkClick={handleNavClick} />}
      
      <Assistant />
      
      <InquiryDrawer 
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        items={inquiryItems}
        onRemoveItem={removeFromInquiry}
        onCheckout={() => {
            setIsInquiryOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setView({ type: 'inquiry' });
        }}
      />
    </div>
  );
}

export default App;
