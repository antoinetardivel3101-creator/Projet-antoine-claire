
import React from 'react';
import { Button } from './Button';
import { ArrowDown, CheckCircle2 } from 'lucide-react';
import { NavigationProps } from '../types';

export const Hero: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image - Salon / Plantes / Zen */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2080&auto=format&fit=crop" 
          alt="Cabinet apaisant avec plantes" 
          className="w-full h-full object-cover"
        />
        {/* Overlay BLANC ajusté pour que le texte NOIR soit lisible sans bulle autour du texte */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center flex flex-col items-center">
        <div className="animate-fade-in-up">
          
          {/* BADGE CERTIFICATION MIS EN AVANT */}
          <div className="inline-flex items-center space-x-2 bg-primary-700 text-white px-5 py-2 rounded-full mb-8 shadow-lg mx-auto transform hover:scale-105 transition-transform cursor-default border border-primary-600">
            <CheckCircle2 className="w-4 h-4 text-green-300" />
            <span className="font-bold tracking-wider uppercase text-xs">
              Sophrologue Certifiée RNCP • Paris
            </span>
          </div>
          
          {/* TITRE EN NOIR PROFOND POUR CONTRASTE MAXIMAL */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-gray-900 mb-8 leading-[1.1] font-medium text-balance drop-shadow-sm">
            Révélez votre <br />
            <span className="italic text-primary-800 font-light relative inline-block">
              sérénité intérieure
              {/* Soulignement organique */}
              <svg className="absolute w-[110%] h-3 -bottom-2 -left-[5%] text-primary-600/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
            </span>
          </h1>
          
          {/* SOUS-TITRE (Bulle supprimée, texte pur) */}
          <p className="text-xl md:text-2xl text-gray-900 font-medium mb-12 max-w-2xl mx-auto leading-relaxed text-balance drop-shadow-sm">
            Accompagnement bienveillant et sur-mesure pour transformer le stress en force et retrouver un sommeil paisible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button className="w-full sm:w-auto px-10 py-4 text-lg shadow-xl shadow-primary-900/20 hover:shadow-2xl transition-shadow bg-primary-600 hover:bg-primary-700 text-white border-none" onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }}>
              Réserver ma séance
            </Button>
            <Button variant="outline" className="w-full sm:w-auto px-10 py-4 text-lg bg-white/90 border-primary-600 text-primary-800 hover:bg-white backdrop-blur-md font-semibold" onClick={() => { onNavigate('concept'); window.scrollTo(0,0); }}>
              Découvrir la méthode
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary-800 cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth'})}>
        <ArrowDown className="w-8 h-8 opacity-90 hover:opacity-100 transition-opacity drop-shadow-md" />
      </div>
    </div>
  );
};
