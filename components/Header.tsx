import React, { useState, useEffect } from 'react';
import { Menu, X, Flower2, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { NavItem, NavigationProps, PageId } from '../types';

const navItems: NavItem[] = [
  { label: 'Accueil', id: 'home' },
  { label: 'La Sophrologie', id: 'concept' },
  { label: 'À Propos', id: 'about' },
  { label: 'Séances', id: 'services' },
  { label: 'Tarifs', id: 'pricing' },
  { label: 'Avis', id: 'testimonials' },
];

export const Header: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const isTransparent = currentPage === 'home' && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          !isTransparent ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button onClick={() => handleNavClick('home')} className="flex items-center space-x-2 group focus:outline-none z-50 relative">
              <div className={`p-2 rounded-full transition-colors ${!isTransparent || isMobileMenuOpen ? 'bg-primary-50' : 'bg-white/30 backdrop-blur-sm'}`}>
                <Flower2 className={`h-6 w-6 ${!isTransparent || isMobileMenuOpen ? 'text-primary-500' : 'text-primary-600'}`} />
              </div>
              <span className={`font-serif text-xl md:text-2xl font-medium tracking-wide transition-colors duration-300 ${
                !isTransparent || isMobileMenuOpen ? 'text-text-main' : 'text-text-main'
              }`}>
                Claire Cheriez
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex space-x-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.id)}
                    className={`font-medium transition-all duration-300 text-sm uppercase tracking-widest px-4 py-2 rounded-full ${
                      currentPage === item.id 
                        ? 'text-primary-700 bg-primary-50 font-semibold shadow-sm' 
                        : (!isTransparent 
                            ? 'text-text-main hover:bg-primary-50 hover:text-primary-700' 
                            : 'text-text-main hover:bg-white/80 hover:text-primary-700')
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <Button 
                variant="primary" 
                className="px-6 py-2 text-sm"
                onClick={() => handleNavClick('contact')}
              >
                Prendre RDV
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`lg:hidden p-2 z-50 relative transition-colors ${isMobileMenuOpen ? 'text-text-main' : 'text-text-main'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </header>

      {/* Immersive Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-sand-50/95 backdrop-blur-xl z-40 lg:hidden transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center p-8 relative overflow-hidden">
          {/* Cercles décoratifs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand-200 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <nav className="flex flex-col space-y-6 text-center w-full max-w-sm relative z-10">
            {navItems.map((item, idx) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className={`font-serif text-3xl md:text-4xl transition-all duration-300 hover:scale-105 ${
                  currentPage === item.id 
                    ? 'text-primary-600 font-bold italic' 
                    : 'text-text-main font-medium hover:text-primary-500'
                }`}
                style={{ 
                  transitionDelay: `${idx * 50}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {item.label}
              </button>
            ))}
            
            <div className="w-16 h-1 bg-primary-200 rounded-full mx-auto my-6 opacity-50"></div>
            
            <div 
              style={{ 
                transitionDelay: '300ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionProperty: 'all',
                transitionDuration: '500ms'
              }}
            >
              <Button 
                className="w-full text-lg py-4 shadow-lg flex items-center justify-center gap-2 group" 
                onClick={() => handleNavClick('contact')}
              >
                Prendre Rendez-vous
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div 
              className="mt-8 text-sm text-text-muted font-light"
              style={{ 
                transitionDelay: '400ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transitionProperty: 'opacity',
                transitionDuration: '500ms'
              }}
            >
              12 Rue de la Paix, Paris<br/>
              01 23 45 67 89
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};