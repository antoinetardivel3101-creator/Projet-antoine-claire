
import React from 'react';
import { Hero } from './Hero';
import { DailyZen } from './DailyZen';
import { Button } from './Button';
import { NavigationProps } from '../types';
import { Quote, ArrowRight, Star, Check, Sparkles, User, Brain, HeartHandshake, Baby, Wind, Heart } from 'lucide-react';
import { CLAIRE_IMAGE_URL, FALLBACK_IMAGE_URL } from '../constants';

export const Home: React.FC<NavigationProps> = ({ onNavigate, currentPage }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} currentPage={currentPage} />
      
      {/* --- 1. A PROPOS (Teaser Humanisé) --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image avec cadre organique en Arche */}
            <div className="relative order-1 lg:order-1 flex justify-center">
               <div className="relative w-72 h-96 group">
                 {/* Formes décoratives arrière-plan */}
                 <div className="absolute inset-0 bg-primary-100/50 rounded-t-full rounded-b-[3rem] rotate-3 transform transition-transform duration-700 group-hover:rotate-6"></div>
                 <div className="absolute inset-0 bg-sand-200/50 rounded-t-full rounded-b-[3rem] -rotate-2 transform transition-transform duration-700 group-hover:-rotate-4"></div>
                 
                 {/* Photo principale */}
                 <img 
                   src={CLAIRE_IMAGE_URL}
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.onerror = null; // empêche la boucle infinie
                     target.src = FALLBACK_IMAGE_URL;
                   }}
                   alt="Claire Cheriez - Sophrologue"
                   className="absolute inset-0 w-full h-full object-cover object-center rounded-t-full rounded-b-[3rem] shadow-lg shadow-primary-900/5 z-10 hover:scale-[1.02] transition-transform duration-500"
                 />
                 
                 {/* Badge flottant */}
                 <div className="absolute bottom-8 -right-6 z-20 bg-white px-5 py-3 rounded-xl shadow-card border border-sand-100 flex items-center gap-3 animate-fade-in-up">
                    <div className="bg-primary-50 p-2 rounded-full">
                      <User className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <span className="block font-serif text-primary-800 text-sm font-bold leading-none mb-0.5">Claire Cheriez</span>
                      <span className="block text-text-muted text-[10px] uppercase tracking-wider">Certifiée RNCP</span>
                    </div>
                 </div>
               </div>
            </div>

            {/* Texte */}
            <div className="order-2 lg:order-2 text-center lg:text-left">
              <span className="text-primary-500 font-bold tracking-widest uppercase text-xs mb-4 block">Rencontre</span>
              <h2 className="font-serif text-4xl md:text-5xl text-text-main mb-6 leading-tight">
                Je suis <span className="text-primary-600 italic">Claire Cheriez</span>
              </h2>
              <div className="w-12 h-0.5 bg-primary-300 mb-8 mx-auto lg:mx-0"></div>
              <p className="text-text-light text-lg mb-8 leading-relaxed font-light">
                "Mon approche est fondée sur l'écoute active et la bienveillance absolue. Je ne vous apprends pas seulement à vous détendre, je vous donne des outils concrets pour devenir autonome face au stress et aux émotions de la vie."
              </p>
              <Button variant="outline" onClick={() => { onNavigate('about'); window.scrollTo(0,0); }} className="gap-2 group text-sm px-6 py-3">
                En savoir plus sur mon parcours <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. LA METHODE (Teaser Concept) --- */}
      <section className="py-20 bg-sand-50/50 relative border-y border-sand-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-primary-500 font-bold tracking-widest uppercase text-xs mb-3 block">La Sophrologie</span>
          <h2 className="font-serif text-3xl md:text-4xl text-text-main mb-6">L'harmonie Corps & Esprit</h2>
          <p className="text-lg text-text-light font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Une méthode psychocorporelle naturelle qui combine respiration, relâchement musculaire et visualisation positive.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {/* Respirer */}
            <div className="group aspect-[3/2] bg-white hover:bg-primary-500 p-6 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-soft border border-sand-200 hover:border-primary-500 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center relative overflow-hidden" onClick={() => { onNavigate('concept'); window.scrollTo(0,0); }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 group-hover:bg-white/10 rounded-bl-[100%] -mr-8 -mt-8 transition-all group-hover:scale-110 duration-500"></div>
                <div className="relative z-10 w-12 h-12 bg-sand-50 text-primary-600 rounded-2xl flex items-center justify-center mb-4 transition-colors group-hover:bg-white group-hover:text-primary-500 shadow-sm border border-sand-100 group-hover:border-transparent">
                  <Wind className="w-6 h-6" />
                </div>
                <h3 className="relative z-10 font-serif text-xl text-text-main group-hover:text-white mb-2 transition-colors">Respirer</h3>
                <p className="relative z-10 text-text-muted group-hover:text-primary-50 text-sm leading-relaxed text-center transition-colors">Apaiser le système nerveux</p>
            </div>

            {/* Relâcher */}
            <div className="group aspect-[3/2] bg-white hover:bg-primary-500 p-6 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-soft border border-sand-200 hover:border-primary-500 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center relative overflow-hidden" onClick={() => { onNavigate('concept'); window.scrollTo(0,0); }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 group-hover:bg-white/10 rounded-bl-[100%] -mr-8 -mt-8 transition-all group-hover:scale-110 duration-500"></div>
                <div className="relative z-10 w-12 h-12 bg-sand-50 text-primary-600 rounded-2xl flex items-center justify-center mb-4 transition-colors group-hover:bg-white group-hover:text-primary-500 shadow-sm border border-sand-100 group-hover:border-transparent">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="relative z-10 font-serif text-xl text-text-main group-hover:text-white mb-2 transition-colors">Relâcher</h3>
                <p className="relative z-10 text-text-muted group-hover:text-primary-50 text-sm leading-relaxed text-center transition-colors">Éliminer les tensions</p>
            </div>

            {/* Visualiser */}
            <div className="group aspect-[3/2] bg-white hover:bg-primary-500 p-6 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-soft border border-sand-200 hover:border-primary-500 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center relative overflow-hidden" onClick={() => { onNavigate('concept'); window.scrollTo(0,0); }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 group-hover:bg-white/10 rounded-bl-[100%] -mr-8 -mt-8 transition-all group-hover:scale-110 duration-500"></div>
                <div className="relative z-10 w-12 h-12 bg-sand-50 text-primary-600 rounded-2xl flex items-center justify-center mb-4 transition-colors group-hover:bg-white group-hover:text-primary-500 shadow-sm border border-sand-100 group-hover:border-transparent">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="relative z-10 font-serif text-xl text-text-main group-hover:text-white mb-2 transition-colors">Visualiser</h3>
                <p className="relative z-10 text-text-muted group-hover:text-primary-50 text-sm leading-relaxed text-center transition-colors">Activer le positif</p>
            </div>
          </div>
          
          <Button variant="text" onClick={() => { onNavigate('concept'); window.scrollTo(0,0); }} className="text-primary-600 hover:text-primary-800 underline-offset-4 decoration-primary-300 text-sm">
            Découvrir la méthode en détail
          </Button>
        </div>
      </section>

      {/* --- 3. SERVICES (Teaser Résumé - Grille Rectangulaire 2x2 Large) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-bold tracking-widest uppercase text-xs mb-3 block">Accompagnements</span>
            <h2 className="font-serif text-3xl md:text-4xl text-text-main">Je vous aide à...</h2>
          </div>
          
          {/* Container élargi pour occuper plus d'espace */}
          <div className="max-w-5xl mx-auto">
            {/* Grille forcée en 2 colonnes avec plus d'espace */}
            <div className="grid grid-cols-2 gap-6 md:gap-8 mb-12">
               {/* Card 1 */}
               <div className="group aspect-[3/2] bg-white hover:bg-primary-500 p-6 md:p-8 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-soft border border-sand-200 hover:border-primary-500 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center relative overflow-hidden" onClick={() => onNavigate('services')}>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 group-hover:bg-white/10 rounded-bl-[100%] -mr-12 -mt-12 transition-all group-hover:scale-110 duration-500"></div>
                 
                 <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-sand-50 text-primary-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-colors group-hover:bg-white group-hover:text-primary-500 shadow-sm border border-sand-100 group-hover:border-transparent">
                   <Brain className="w-6 h-6 md:w-8 md:h-8" />
                 </div>
                 <h3 className="relative z-10 font-serif text-xl md:text-3xl text-text-main group-hover:text-white mb-2 md:mb-3 transition-colors">Stress</h3>
                 <p className="relative z-10 text-text-muted group-hover:text-primary-50 text-sm md:text-base leading-relaxed max-w-[200px] text-center hidden sm:block transition-colors mb-4">Lâcher prise et charge mentale.</p>
                 
                 <span className="relative z-10 inline-block px-4 py-1.5 bg-sand-50 text-primary-600 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm group-hover:bg-white group-hover:text-primary-600 transition-colors">En savoir plus</span>
               </div>
               
               {/* Card 2 */}
               <div className="group aspect-[3/2] bg-white hover:bg-primary-500 p-6 md:p-8 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-soft border border-sand-200 hover:border-primary-500 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center relative overflow-hidden" onClick={() => onNavigate('services')}>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 group-hover:bg-white/10 rounded-bl-[100%] -mr-12 -mt-12 transition-all group-hover:scale-110 duration-500"></div>

                 <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-sand-50 text-primary-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-colors group-hover:bg-white group-hover:text-primary-500 shadow-sm border border-sand-100 group-hover:border-transparent">
                   <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
                 </div>
                 <h3 className="relative z-10 font-serif text-xl md:text-3xl text-text-main group-hover:text-white mb-2 md:mb-3 transition-colors">Sommeil</h3>
                 <p className="relative z-10 text-text-muted group-hover:text-primary-50 text-sm md:text-base leading-relaxed max-w-[200px] text-center hidden sm:block transition-colors mb-4">Stop insomnies et fatigue.</p>
                 
                 <span className="relative z-10 inline-block px-4 py-1.5 bg-sand-50 text-primary-600 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm group-hover:bg-white group-hover:text-primary-600 transition-colors">En savoir plus</span>
               </div>
               
               {/* Card 3 */}
               <div className="group aspect-[3/2] bg-white hover:bg-primary-500 p-6 md:p-8 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-soft border border-sand-200 hover:border-primary-500 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center relative overflow-hidden" onClick={() => onNavigate('services')}>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 group-hover:bg-white/10 rounded-bl-[100%] -mr-12 -mt-12 transition-all group-hover:scale-110 duration-500"></div>

                 <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-sand-50 text-primary-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-colors group-hover:bg-white group-hover:text-primary-500 shadow-sm border border-sand-100 group-hover:border-transparent">
                   <HeartHandshake className="w-6 h-6 md:w-8 md:h-8" />
                 </div>
                 <h3 className="relative z-10 font-serif text-xl md:text-3xl text-text-main group-hover:text-white mb-2 md:mb-3 transition-colors">Confiance</h3>
                 <p className="relative z-10 text-text-muted group-hover:text-primary-50 text-sm md:text-base leading-relaxed max-w-[200px] text-center hidden sm:block transition-colors mb-4">Examens et prise de parole.</p>
                 
                 <span className="relative z-10 inline-block px-4 py-1.5 bg-sand-50 text-primary-600 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm group-hover:bg-white group-hover:text-primary-600 transition-colors">En savoir plus</span>
               </div>

               {/* Card 4 */}
               <div className="group aspect-[3/2] bg-white hover:bg-primary-500 p-6 md:p-8 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-soft border border-sand-200 hover:border-primary-500 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center relative overflow-hidden" onClick={() => onNavigate('services')}>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 group-hover:bg-white/10 rounded-bl-[100%] -mr-12 -mt-12 transition-all group-hover:scale-110 duration-500"></div>

                 <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-sand-50 text-primary-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-colors group-hover:bg-white group-hover:text-primary-500 shadow-sm border border-sand-100 group-hover:border-transparent">
                   <Baby className="w-6 h-6 md:w-8 md:h-8" />
                 </div>
                 <h3 className="relative z-10 font-serif text-xl md:text-3xl text-text-main group-hover:text-white mb-2 md:mb-3 transition-colors">Maternité</h3>
                 <p className="relative z-10 text-text-muted group-hover:text-primary-50 text-sm md:text-base leading-relaxed max-w-[200px] text-center hidden sm:block transition-colors mb-4">Grossesse sereine.</p>
                 
                 <span className="relative z-10 inline-block px-4 py-1.5 bg-sand-50 text-primary-600 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm group-hover:bg-white group-hover:text-primary-600 transition-colors">En savoir plus</span>
               </div>
            </div>

            <div className="text-center">
              <Button onClick={() => { onNavigate('services'); window.scrollTo(0,0); }} className="px-10 py-4 text-base">
                Voir tous les services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. TARIFS (Teaser Bandeau) --- */}
      <section className="py-20 bg-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[80px] opacity-40"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left max-w-xl">
             <span className="text-primary-300 font-bold tracking-widest uppercase text-xs mb-2 block">Tarifs & Offres</span>
             <h2 className="font-serif text-3xl md:text-4xl mb-4">Investissez sur votre bien-être</h2>
             <p className="text-primary-100 text-lg mb-8 font-light leading-relaxed">
               Des séances à la carte ou des forfaits avantageux pour un accompagnement dans la durée. Remboursé par certaines mutuelles.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  variant="primary" 
                  className="!bg-white !text-primary-700 hover:!bg-sand-50 border-none px-8 font-semibold shadow-lg" 
                  onClick={() => { onNavigate('pricing'); window.scrollTo(0,0); }}
                >
                   Consulter les tarifs
                </Button>
             </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 text-center min-w-[260px] transform hover:scale-105 transition-transform duration-300 shadow-xl">
             <p className="text-primary-100 uppercase tracking-widest text-xs mb-2">Séance à l'unité</p>
             <div className="flex justify-center items-baseline gap-1 mb-2">
                <span className="font-serif text-5xl font-medium">60€</span>
             </div>
             <p className="text-sm text-primary-200 mb-6 font-light">1 heure d'accompagnement</p>
             <div className="w-full h-px bg-white/20 mb-4"></div>
             <div className="flex items-center gap-2 text-sm justify-center text-primary-50">
                <Check className="w-4 h-4" /> Bilan complet inclus
             </div>
          </div>
        </div>
      </section>

      {/* --- 5. AVIS (Teaser Social Proof) --- */}
      <section className="py-24 bg-sand-50 border-t border-sand-100">
         <div className="max-w-3xl mx-auto px-6 text-center">
           <Quote className="w-10 h-10 text-primary-200 mx-auto mb-6" />
           <h2 className="font-serif text-3xl md:text-4xl text-text-main mb-8">Ce qu'ils en pensent</h2>
           
           <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-sand-100 mb-10 relative">
             <div className="flex justify-center mb-6 gap-1">
               {[...Array(5)].map((_,i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
             </div>
             <p className="text-text-light text-lg italic leading-relaxed mb-6 font-serif">
               "Une expérience transformatrice. Claire a su m'écouter avec beaucoup de douceur. Je dors enfin mieux après des années d'insomnie. Sa voix est un guide précieux."
             </p>
             <p className="font-bold text-text-main text-sm uppercase tracking-wide">— Marie Laurent</p>
           </div>
           
           <Button variant="outline" onClick={() => { onNavigate('testimonials'); window.scrollTo(0,0); }} className="text-sm px-6">
             Lire les autres témoignages
           </Button>
         </div>
      </section>

      {/* --- 6. DAILY ZEN (Fonctionnalité Phare) --- */}
      <DailyZen />

      {/* --- 7. CONTACT FINAL --- */}
      <section className="py-24 bg-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sand-50 rounded-full blur-[100px] -z-10 opacity-60"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl text-text-main mb-6">Prêt(e) à commencer ?</h2>
          <p className="text-text-light text-xl mb-10 font-light max-w-xl mx-auto">
            Le changement commence par une première étape. Contactez-moi pour échanger simplement sur vos besoins.
          </p>
          <Button onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }} className="px-10 py-4 text-lg shadow-xl shadow-primary-900/10 hover:shadow-primary-900/20">
            Prendre rendez-vous
          </Button>
        </div>
      </section>
    </>
  );
};
