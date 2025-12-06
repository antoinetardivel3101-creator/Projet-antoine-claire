
import React, { useState, useRef } from 'react';
import { Section } from './Section';
import { Quote, Award, Heart, ArrowLeft, GraduationCap, ShieldCheck, ScrollText, Play, Pause, Volume2 } from 'lucide-react';
import { CLAIRE_IMAGE_URL, FALLBACK_IMAGE_URL } from '../constants';

export const About: React.FC<{onNavigate?: any}> = ({onNavigate}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Erreur lecture audio:", error);
      setIsPlaying(false);
    }
  };

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

      <Section id="about" bg="white" className="overflow-hidden">
        {/* Intro Centrée */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="text-primary-500 font-bold tracking-widest uppercase text-xs mb-4 block">À Propos</span>
          <h1 className="font-serif text-4xl md:text-5xl text-text-main mb-8 leading-tight">
            "Mon objectif est de vous rendre <span className="italic text-primary-500">autonome</span>."
          </h1>
          <div className="w-24 h-1 bg-primary-200 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Image Side - Updated to Perfect Arch Shape */}
          <div className="lg:col-span-5 relative order-1 lg:order-1 flex flex-col items-center sticky top-32">
            <div className="relative z-10 w-full max-w-md mb-8">
              {/* Photo avec forme en Arche parfaite */}
              <div className="aspect-[3/4] relative">
                <img 
                  src={CLAIRE_IMAGE_URL} 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Sécurité anti-boucle infinie
                    if (target.src !== FALLBACK_IMAGE_URL) {
                        target.src = FALLBACK_IMAGE_URL;
                    }
                  }}
                  alt="Claire Cheriez - Sophrologue" 
                  className="w-full h-full object-cover object-center rounded-t-full rounded-b-[3rem] shadow-soft"
                />
                 {/* Decorative border outline */}
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary-100 rounded-t-full rounded-b-[3rem] -z-10"></div>
              </div>

              <div className="absolute bottom-8 -right-4 bg-white p-6 rounded-3xl shadow-lg animate-fade-in hidden md:block border border-sand-100 max-w-[180px]">
                <p className="font-serif text-primary-700 text-lg font-medium leading-tight">Sophrologue <br/> <span className="text-sm font-sans font-normal text-text-muted">Certifiée RNCP</span></p>
              </div>
            </div>

            {/* --- LECTEUR AUDIO ROBUSTE (PIXABAY CDN) --- */}
            <div className="w-full max-w-md bg-primary-700 rounded-[2rem] p-6 text-white shadow-xl relative overflow-hidden group border border-primary-600">
               
               <div className="relative z-10 flex items-center gap-5 pb-8">
                 <button 
                   onClick={toggleAudio}
                   className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary-700 hover:scale-110 transition-transform shadow-lg flex-shrink-0 cursor-pointer"
                 >
                   {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                 </button>
                 <div>
                   <p className="text-xs text-primary-200 uppercase tracking-widest font-bold mb-1">Immersion Sonore</p>
                   <h4 className="font-serif text-xl leading-tight">Pause Sérénité</h4>
                   <p className="text-sm text-primary-100/80 font-light mt-1">Piano Doux & Relaxant</p>
                 </div>
                 <div className="ml-auto opacity-50 bg-primary-600/50 p-2 rounded-full">
                    <Volume2 className="w-5 h-5 text-primary-200" />
                 </div>
               </div>
               
               {/* Visualiseur (Onde sonore CSS uniquement - pas de JS audio context pour éviter les bugs) */}
               <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center gap-1 px-6 pb-4 opacity-40">
                  {[...Array(30)].map((_, i) => (
                    <div 
                        key={i} 
                        className={`w-1.5 bg-white rounded-t-full transition-all duration-300 ease-in-out ${isPlaying ? 'animate-pulse' : 'h-2'}`} 
                        style={{ 
                            height: isPlaying ? `${Math.max(10, Math.random() * 100)}%` : `${20 + Math.sin(i)*10}%`, 
                            animationDelay: `${i * 0.05}s`,
                            opacity: 0.6 + (i % 2) * 0.4
                        }}
                    ></div>
                  ))}
               </div>
               
               {/* Audio : Source Pixabay Rapide et Fiable (Piano Moment) */}
               <audio 
                 ref={audioRef} 
                 src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=main-c-major-7913.mp3"
                 onEnded={() => setIsPlaying(false)}
                 onError={(e) => {
                   console.error("Erreur technique audio:", e);
                   setIsPlaying(false);
                 }}
               /> 
            </div>
            
            {/* Background elements */}
            <div className="absolute top-20 -right-20 w-64 h-64 bg-primary-50 rounded-full blur-3xl -z-20 opacity-60"></div>
            <div className="absolute bottom-0 -left-20 w-64 h-64 bg-sand-100 rounded-full blur-3xl -z-20 opacity-60"></div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 order-2 lg:order-2">
            <h3 className="font-serif text-3xl text-text-main mb-6">
              Bienvenue au cabinet
            </h3>
            
            <div className="space-y-6 text-text-light text-lg font-normal leading-loose mb-10 text-justify md:text-left">
              <p>
                Je suis <strong className="text-text-main font-semibold">Claire Cheriez</strong>. Ma pratique est née d'une conviction profonde : chacun possède en soi la capacité de transformer son quotidien, pour peu qu'on lui donne les clés pour y accéder.
              </p>
              <p>
                Formée à l'Institut de Formation à la Sophrologie (IFS) de Paris, je vous accueille dans un cadre sécurisant pour vous aider à traverser les périodes de turbulences ou simplement pour vous offrir une parenthèse de calme. Mon approche est basée sur l'écoute active, sans jugement, et s'adapte strictement à vos besoins.
              </p>
            </div>

            {/* --- SECTION CERTIFICATIONS DÉTAILLÉE --- */}
            <div className="bg-sand-50 rounded-[2rem] p-8 mb-10 border border-sand-200">
               <h4 className="font-serif text-xl text-primary-700 mb-6 flex items-center">
                 <Award className="w-6 h-6 mr-3 text-primary-500" />
                 Certifications & Reconnaissance
               </h4>
               
               <div className="space-y-6">
                 {/* Item 1 */}
                 <div className="flex items-start gap-4">
                   <div className="p-2 bg-white rounded-xl shadow-sm text-primary-600">
                     <ScrollText className="w-6 h-6" />
                   </div>
                   <div>
                     <h5 className="font-bold text-text-main text-lg">Titre RNCP</h5>
                     <p className="text-text-light text-sm leading-relaxed">
                       Certification Professionnelle de Sophrologue inscrite au Répertoire National des Certifications Professionnelles (Niveau 5 reconnu par l'État).
                     </p>
                   </div>
                 </div>

                 {/* Item 2 */}
                 <div className="flex items-start gap-4">
                   <div className="p-2 bg-white rounded-xl shadow-sm text-primary-600">
                     <GraduationCap className="w-6 h-6" />
                   </div>
                   <div>
                     <h5 className="font-bold text-text-main text-lg">Diplômée IFS Paris</h5>
                     <p className="text-text-light text-sm leading-relaxed">
                       Institut de Formation à la Sophrologie (Catherine Aliotta). Formation initiale et spécialisations (Sommeil, Périnatalité).
                     </p>
                   </div>
                 </div>

                 {/* Item 3 */}
                 <div className="flex items-start gap-4">
                   <div className="p-2 bg-white rounded-xl shadow-sm text-primary-600">
                     <ShieldCheck className="w-6 h-6" />
                   </div>
                   <div>
                     <h5 className="font-bold text-text-main text-lg">Déontologie</h5>
                     <p className="text-text-light text-sm leading-relaxed">
                       Membre de la Chambre Syndicale de la Sophrologie. Je respecte le code de déontologie : confidentialité, bienveillance et non-jugement.
                     </p>
                   </div>
                 </div>
               </div>
            </div>

            <div className="relative pl-8 border-l-4 border-primary-300 bg-white p-6 rounded-r-2xl shadow-sm">
              <Quote className="w-8 h-8 text-primary-300 absolute -top-4 left-6" />
              <p className="italic text-text-main font-medium text-xl leading-relaxed">
                "La sophrologie est une boîte à outils que je vous transmets pour la vie. Vous repartez avec des techniques concrètes pour gérer votre stress en autonomie."
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
