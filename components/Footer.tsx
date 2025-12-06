import React from 'react';
import { Flower2, Instagram, Facebook, Linkedin } from 'lucide-react';
import { NavigationProps } from '../types';

export const Footer: React.FC<NavigationProps> = ({ onNavigate }) => {
  const handleLink = (id: any) => {
    window.scrollTo(0, 0);
    onNavigate(id);
  };

  return (
    <footer className="bg-primary-700 text-primary-50 py-20 rounded-t-[3rem] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <Flower2 className="h-8 w-8 text-primary-300" />
              <span className="font-serif text-2xl font-medium text-white">
                Claire Cheriez
              </span>
            </div>
            <p className="text-primary-100/90 max-w-sm mb-8 font-normal leading-relaxed text-base">
              Cabinet de Sophrologie certifié.<br/>
              Accompagnement individuel et ateliers collectifs pour un mieux-être durable à Paris.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-600 p-3 rounded-full hover:bg-primary-500 transition-colors text-white border border-primary-500"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="bg-primary-600 p-3 rounded-full hover:bg-primary-500 transition-colors text-white border border-primary-500"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="bg-primary-600 p-3 rounded-full hover:bg-primary-500 transition-colors text-white border border-primary-500"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Plan du site</h4>
            <ul className="space-y-3 font-light text-primary-100">
              <li><button onClick={() => handleLink('home')} className="hover:text-white transition-colors flex items-center text-left"><span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>Accueil</button></li>
              <li><button onClick={() => handleLink('about')} className="hover:text-white transition-colors flex items-center text-left"><span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>À Propos</button></li>
              <li><button onClick={() => handleLink('services')} className="hover:text-white transition-colors flex items-center text-left"><span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>Séances</button></li>
              <li><button onClick={() => handleLink('pricing')} className="hover:text-white transition-colors flex items-center text-left"><span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>Tarifs</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Informations</h4>
            <ul className="space-y-3 font-light text-primary-100">
              <li><button onClick={() => handleLink('legal')} className="hover:text-white transition-colors text-left">Mentions Légales</button></li>
              <li><button onClick={() => handleLink('legal')} className="hover:text-white transition-colors text-left">Politique de confidentialité</button></li>
              <li><button onClick={() => handleLink('contact')} className="hover:text-white transition-colors text-left">Contact</button></li>
              <li className="pt-4 text-primary-300 text-sm">SIRET : 123 456 789 00000</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-primary-600 mt-16 pt-8 text-center text-sm text-primary-200 font-light flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Claire Cheriez Sophrologie.</p>
          <p className="mt-2 md:mt-0">Fait avec sérénité.</p>
        </div>
      </div>
    </footer>
  );
};