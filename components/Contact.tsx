
import React from 'react';
import { Section } from './Section';
import { MapPin, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC<{onNavigate?: any}> = ({onNavigate}) => {
  return (
    <div className="pt-24 min-h-screen relative">
      {/* Back Button */}
      {onNavigate && (
        <div className="absolute top-24 left-4 md:left-8 z-20">
          <button 
            onClick={() => { onNavigate('home'); window.scrollTo(0,0); }}
            className="flex items-center gap-2 text-primary-500 hover:text-primary-700 transition-colors font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden md:inline">Retour accueil</span>
          </button>
        </div>
      )}

      <Section id="contact" bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div className="order-2 lg:order-1">
            <span className="text-primary-500 font-bold tracking-widest uppercase text-xs mb-3 block">Contact</span>
            <h1 className="font-serif text-4xl md:text-5xl text-text-main mb-8">Parlons de vous</h1>
            <p className="text-text-light mb-12 text-lg font-normal leading-relaxed">
              Vous avez une question sur le déroulement d'une séance ? Vous souhaitez savoir si la sophrologie peut répondre à votre besoin spécifique ? N'hésitez pas à me contacter via le formulaire ou par téléphone.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-sand-50 p-5 rounded-2xl mr-6 group-hover:bg-primary-50 transition-colors border border-sand-200">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-text-main mb-2">Le Cabinet</h4>
                  <p className="text-text-light font-normal">12 Rue de la Paix<br/>75000 Paris</p>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-sm text-primary-600 underline mt-2 block hover:text-primary-800">Voir sur la carte</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-sand-50 p-5 rounded-2xl mr-6 group-hover:bg-primary-50 transition-colors border border-sand-200">
                  <Phone className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-text-main mb-2">Téléphone</h4>
                  <p className="text-text-light font-normal text-lg">01 23 45 67 89</p>
                  <p className="text-xs text-text-muted mt-1">Du lundi au samedi, 9h - 19h</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-sand-50 p-5 rounded-2xl mr-6 group-hover:bg-primary-50 transition-colors border border-sand-200">
                  <Mail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-text-main mb-2">Email</h4>
                  <a href="mailto:contact@claire-cheriez.com" className="text-text-light font-normal hover:text-primary-600 transition-colors">contact@claire-cheriez.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="order-1 lg:order-2 bg-sand-50 p-8 md:p-12 rounded-[2.5rem] shadow-card border border-sand-200">
            <h3 className="font-serif text-2xl text-text-main mb-6">Envoyer un message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstname" className="block text-sm font-bold text-text-main mb-2 tracking-wide">Prénom</label>
                  <input type="text" id="firstname" className="w-full px-5 py-3 rounded-xl bg-white border border-sand-200 text-text-main focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all placeholder:text-gray-400" placeholder="Votre prénom" />
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-bold text-text-main mb-2 tracking-wide">Nom</label>
                  <input type="text" id="lastname" className="w-full px-5 py-3 rounded-xl bg-white border border-sand-200 text-text-main focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all placeholder:text-gray-400" placeholder="Votre nom" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-text-main mb-2 tracking-wide">Email</label>
                <input type="email" id="email" className="w-full px-5 py-3 rounded-xl bg-white border border-sand-200 text-text-main focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all placeholder:text-gray-400" placeholder="votre@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-text-main mb-2 tracking-wide">Message</label>
                <textarea id="message" rows={5} className="w-full px-5 py-3 rounded-xl bg-white border border-sand-200 text-text-main focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all placeholder:text-gray-400" placeholder="Comment puis-je vous aider ?"></textarea>
              </div>
              <Button type="submit" className="w-full py-4 text-lg">
                Envoyer ma demande
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};
