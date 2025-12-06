
import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Check, Building2, User, Users, Info, Sparkles, ArrowLeft } from 'lucide-react';
import { NavigationProps } from '../types';

export const Pricing: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen relative">
      {/* Back Button */}
      <div className="absolute top-24 left-4 md:left-8 z-20">
        <button 
          onClick={() => { onNavigate('home'); window.scrollTo(0,0); }}
          className="flex items-center gap-2 text-primary-500 hover:text-primary-700 transition-colors font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden md:inline">Retour accueil</span>
        </button>
      </div>

      <Section id="tarifs" bg="white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-500 font-bold tracking-widest uppercase text-xs mb-3 block">Investir sur soi</span>
          <h1 className="font-serif text-4xl md:text-5xl text-text-main mb-6">Tarifs & Offres</h1>
          <p className="text-text-light text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Des formules claires et transparentes.
            <br/>
            <span className="text-sm bg-sand-100 px-4 py-2 rounded-full mt-4 inline-block text-text-main font-medium border border-sand-200">
              <Info className="w-4 h-4 inline mr-2 text-primary-500" /> Certaines mutuelles remboursent la sophrologie
            </span>
          </p>
        </div>

        {/* Grille 3 Colonnes - Offres Particuliers */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* 1. Séance Individuelle */}
            <div 
              className="group bg-white hover:bg-primary-600 border border-sand-200 hover:border-primary-500 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center text-center relative h-full"
              onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }}
            >
               <div className="w-16 h-16 bg-sand-50 text-text-main rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-white group-hover:text-primary-600">
                 <User className="w-8 h-8" />
               </div>
               
               <h3 className="font-serif text-2xl text-text-main group-hover:text-white mb-2 transition-colors">Séance unique</h3>
               <div className="flex items-baseline justify-center mb-4">
                 <span className="text-4xl font-serif text-text-main group-hover:text-white font-medium transition-colors">60€</span>
               </div>
               <p className="text-text-muted group-hover:text-primary-100 text-sm mb-8 leading-relaxed transition-colors">
                 Idéal pour découvrir la méthode ou pour un besoin ponctuel (examen, stress passager).
               </p>
               
               <ul className="space-y-3 w-full text-left mb-8">
                 <li className="flex items-center text-sm text-text-light group-hover:text-primary-50 transition-colors"><Check className="w-4 h-4 text-primary-500 group-hover:text-white mr-2 flex-shrink-0" /> Durée 1h - 1h15</li>
                 <li className="flex items-center text-sm text-text-light group-hover:text-primary-50 transition-colors"><Check className="w-4 h-4 text-primary-500 group-hover:text-white mr-2 flex-shrink-0" /> Bilan personnalisé</li>
                 <li className="flex items-center text-sm text-text-light group-hover:text-primary-50 transition-colors"><Check className="w-4 h-4 text-primary-500 group-hover:text-white mr-2 flex-shrink-0" /> Exercices enregistrés</li>
               </ul>

               <Button variant="outline" className="w-full mt-auto group-hover:!bg-white group-hover:!text-black group-hover:border-white transition-all">Choisir</Button>
            </div>

            {/* 2. Pack Sérénité (Best Seller - Mis en avant) */}
            <div 
              className="group bg-primary-600 text-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center text-center relative transform border-4 border-primary-500 hover:border-primary-400"
              onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }}
            >
               {/* Badge Promo */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white text-primary-700 text-xs font-bold px-6 py-1.5 rounded-b-xl uppercase tracking-widest shadow-sm z-20">
                 Recommandé
               </div>

               <div className="w-20 h-20 bg-white/10 text-white rounded-3xl flex items-center justify-center mb-6 mt-4 backdrop-blur-sm group-hover:bg-white group-hover:text-primary-600 transition-colors">
                 <Sparkles className="w-10 h-10" />
               </div>
               
               <h3 className="font-serif text-3xl text-white mb-2">Pack Sérénité</h3>
               <div className="flex items-baseline justify-center mb-1">
                 <span className="text-5xl font-serif font-bold">270€</span>
               </div>
               <p className="text-primary-200 text-sm mb-6 font-medium">soit 54€ la séance</p>

               <p className="text-primary-100 text-sm mb-8 leading-relaxed border-b border-primary-500 pb-6">
                 Un accompagnement complet sur 5 séances pour ancrer des changements durables dans votre quotidien.
               </p>
               
               <ul className="space-y-4 w-full text-left mb-8">
                 <li className="flex items-center text-sm font-medium"><div className="bg-white/20 p-1 rounded-full mr-3"><Check className="w-3 h-3 text-white" /></div> Économisez 30€</li>
                 <li className="flex items-center text-sm font-medium"><div className="bg-white/20 p-1 rounded-full mr-3"><Check className="w-3 h-3 text-white" /></div> Suivi progression</li>
                 <li className="flex items-center text-sm font-medium"><div className="bg-white/20 p-1 rounded-full mr-3"><Check className="w-3 h-3 text-white" /></div> Enregistrements audio</li>
                 <li className="flex items-center text-sm font-medium"><div className="bg-white/20 p-1 rounded-full mr-3"><Check className="w-3 h-3 text-white" /></div> Support prioritaire</li>
               </ul>

               <Button className="w-full mt-auto bg-white !text-black hover:bg-sand-100 hover:!text-black border-none shadow-lg font-bold !text-gray-900">Prendre le Pack</Button>
            </div>

            {/* 3. Tarif Étudiant/Solidaire */}
            <div 
              className="group bg-white hover:bg-primary-600 border border-sand-200 hover:border-primary-500 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center text-center relative h-full"
              onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }}
            >
               <div className="w-16 h-16 bg-sand-50 text-text-main rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-white group-hover:text-primary-600">
                 <Users className="w-8 h-8" />
               </div>
               
               <h3 className="font-serif text-2xl text-text-main group-hover:text-white mb-2 transition-colors">Tarif Solidaire</h3>
               <div className="flex items-baseline justify-center mb-4">
                 <span className="text-4xl font-serif text-text-main group-hover:text-white font-medium transition-colors">50€</span>
               </div>
               <p className="text-text-muted group-hover:text-primary-100 text-sm mb-8 leading-relaxed transition-colors">
                 Parce que le bien-être doit être accessible à tous. Étudiants et demandeurs d'emploi.
               </p>
               
               <ul className="space-y-3 w-full text-left mb-8">
                 <li className="flex items-center text-sm text-text-light group-hover:text-primary-50 transition-colors"><Check className="w-4 h-4 text-primary-500 group-hover:text-white mr-2 flex-shrink-0" /> Même qualité de soin</li>
                 <li className="flex items-center text-sm text-text-light group-hover:text-primary-50 transition-colors"><Check className="w-4 h-4 text-primary-500 group-hover:text-white mr-2 flex-shrink-0" /> Durée 1h</li>
                 <li className="flex items-center text-sm text-text-light group-hover:text-primary-50 transition-colors"><Check className="w-4 h-4 text-primary-500 group-hover:text-white mr-2 flex-shrink-0" /> Sur justificatif</li>
               </ul>

               <Button variant="outline" className="w-full mt-auto group-hover:!bg-white group-hover:!text-black group-hover:border-white transition-all">Choisir</Button>
            </div>

          </div>
        </div>

        {/* Section Entreprise */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-sand-50 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-sand-200">
            <div className="flex items-start gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm hidden sm:block">
                <Building2 className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-text-main mb-2">Offre Entreprises & QVT</h3>
                <p className="text-text-light max-w-lg leading-relaxed">
                  Intervention sur site pour vos équipes : gestion du stress, cohésion d'équipe, ateliers thématiques.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end">
               <span className="text-2xl font-serif text-primary-700 font-bold mb-2 block w-full text-center md:text-right">Sur Devis</span>
               <Button onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }} className="whitespace-nowrap">
                 Demander un devis
               </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
