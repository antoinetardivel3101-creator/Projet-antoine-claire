
import React from 'react';
import { Section } from './Section';
import { Brain, Heart, Wind, Star, ArrowLeft, ArrowDown } from 'lucide-react';
import { Button } from './Button';
import { NavigationProps } from '../types';

const features = [
  {
    id: "01",
    title: "La Respiration",
    description: "Le pilier fondamental. Elle permet d'apaiser le système nerveux, de réguler le rythme cardiaque et de se reconnecter instantanément à l'instant présent.",
    icon: Wind,
  },
  {
    id: "02",
    title: "Le Relâchement",
    description: "Une détente musculaire profonde, zone par zone. Apprenez à identifier vos tensions inutiles et à les évacuer consciemment pour alléger le corps.",
    icon: Heart,
  },
  {
    id: "03",
    title: "La Visualisation",
    description: "Le cerveau ne fait pas la différence entre ce qui est vécu et ce qui est imaginé intensément. Nous activons vos ressources positives par l'imagerie mentale.",
    icon: Brain,
  },
  {
    id: "04",
    title: "L'Harmonie",
    description: "L'objectif final : un équilibre durable entre vos émotions, vos pensées et vos comportements. Vous devenez autonome dans votre bien-être.",
    icon: Star,
  }
];

export const Concept: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen relative bg-sand-50">
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

      <Section id="concept-intro" bg="light" className="!pt-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-primary-500 font-bold tracking-widest uppercase text-xs mb-4 block animate-fade-in">La Méthode</span>
          <h1 className="font-serif text-5xl md:text-6xl text-text-main mb-8 leading-tight animate-fade-in-up">
            L'alliance du corps <br/> et de l'esprit
          </h1>
          <p className="text-text-light text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto animate-fade-in-up">
            Ni magie, ni croyance. La sophrologie est une science de la conscience, une pédagogie de l'existence inspirée du yoga et de la relaxation occidentale.
          </p>
          <div className="flex justify-center animate-bounce opacity-50">
            <ArrowDown className="w-6 h-6 text-primary-400" />
          </div>
        </div>

        {/* GRILLE MODERNE DÉSTRUCTURÉE (Waterfall / Bento) */}
        <div className="max-w-6xl mx-auto mb-32 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-sand-100 hover:border-primary-600 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden min-h-[320px] ${
                  // Décalage d'une colonne sur deux pour l'effet "Cascade" moderne
                  index % 2 !== 0 ? 'md:translate-y-16' : ''
                }`}
              >
                {/* Numéro géant en arrière-plan */}
                <span className="absolute -right-4 -top-6 text-[140px] font-serif text-sand-100/50 group-hover:text-primary-100/50 transition-colors duration-500 select-none z-0 leading-none">
                  {feature.id}
                </span>

                {/* Contenu */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 bg-white border border-sand-100 group-hover:border-primary-200 group-hover:bg-primary-50`}>
                    <feature.icon className="w-8 h-8 text-primary-600 group-hover:text-primary-800 transition-colors" />
                  </div>
                  
                  <h3 className="font-serif text-3xl text-text-main mb-4 group-hover:text-primary-800 transition-colors font-medium">
                    {feature.title}
                  </h3>
                  
                  {/* Ligne décorative qui fonce au survol */}
                  <div className="w-12 h-1 bg-sand-200 group-hover:bg-primary-600 transition-colors mb-6 rounded-full"></div>

                  <p className="text-text-light text-lg leading-relaxed font-light group-hover:text-text-main transition-colors">
                    {feature.description}
                  </p>
                </div>
                
                {/* Petit accent décoratif en bas */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            ))}

          </div>
        </div>

        {/* Section Finale Contrastée */}
        <div className="bg-primary-700 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden mx-4 md:mx-0 shadow-2xl mt-16 md:mt-0">
          {/* Cercles déco */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[80px] opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-800 rounded-full blur-[80px] opacity-50"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">
              Une pratique adaptable à tous
            </h2>
            <p className="text-primary-100 text-lg md:text-xl mb-10 font-light leading-relaxed">
              La sophrologie se pratique debout ou assis, en tenue de ville. Aucune aptitude physique n'est requise. C'est une méthode verbale et non tactile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => { onNavigate('services'); window.scrollTo(0,0); }}
                className="bg-sand-200 text-gray-900 hover:bg-white hover:text-black border-none font-bold px-8 py-4 shadow-lg transition-all"
              >
                Voir les applications
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
