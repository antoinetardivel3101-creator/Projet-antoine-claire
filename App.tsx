
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Concept } from './components/Concept';
import { Legal } from './components/Legal';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { PageId } from './types';
import { CalendarCheck } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showStickyBtn, setShowStickyBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher le bouton sticky seulement après avoir scrollé un peu (passé le hero)
      setShowStickyBtn(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home currentPage={currentPage} onNavigate={setCurrentPage} />;
      case 'concept':
        return <Concept currentPage={currentPage} onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'pricing':
        return <Pricing currentPage={currentPage} onNavigate={setCurrentPage} />;
      case 'testimonials':
        return <Testimonials currentPage={currentPage} onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      case 'legal':
        return <Legal />;
      default:
        return <Home currentPage={currentPage} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans text-text-main bg-sand-50 min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow pb-20 md:pb-0"> {/* Padding bottom pour mobile */}
        {renderPage()}
      </main>
      
      {/* Assistance ChatBot */}
      <ChatBot />

      <Footer currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* STICKY MOBILE CTA BUTTON - CONVERSION BOOSTER */}
      <div 
        className={`fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-sand-200 z-40 md:hidden transition-transform duration-300 ${
          showStickyBtn ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button 
          onClick={() => { setCurrentPage('contact'); window.scrollTo(0,0); }}
          className="w-full bg-sand-200 text-gray-900 font-bold py-3.5 px-4 rounded-full shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <CalendarCheck className="w-5 h-5" />
          Prendre Rendez-vous
        </button>
      </div>
    </div>
  );
};

export default App;