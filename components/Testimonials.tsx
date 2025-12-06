
import React from 'react';
import { Section } from './Section';
import { Testimonial, NavigationProps } from '../types';
import { Star, Quote, ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from './Button';

const testimonials: Testimonial[] = [
  {
    author: "Marie Laurent",
    text: "Une expérience transformatrice. Claire a su m'écouter avec beaucoup de douceur. Je dors enfin mieux après des années d'insomnie. Sa voix est un guide précieux que je réécoute souvent.",
    context: "Gestion du sommeil"
  },
  {
    author: "Thomas Bernard",
    text: "J'ai consulté pour la préparation d'un oral important. Les techniques de respiration m'ont permis d'arriver serein et confiant. Je recommande vivement pour les étudiants.",
    context: "Préparation mentale"
  },
  {
    author: "Sophie Dubois",
    text: "Chaque séance est une parenthèse de bien-être absolu. Je ressors du cabinet légère, apaisée et rechargée. Merci Claire pour votre bienveillance et votre professionnalisme sans faille.",
    context: "Gestion du stress"
  },
  {
    author: "Émilie G.",
    text: "Une approche très humaine. Claire ne se contente pas de donner des exercices, elle explique le pourquoi du comment. J'ai beaucoup appris sur moi-même et je me sens plus forte.",
    context: "Confiance en soi"
  },
  {
    author: "Pierre D.",
    text: "J'étais sceptique au début, mais les résultats sont là. Moins de tensions au dos, un esprit plus clair au travail. Le format des séances est très adapté à ceux qui ont peu de temps.",
    context: "Qualité de vie"
  },
   {
    author: "Camille R.",
    text: "Un accompagnement en douceur pendant ma grossesse. J'ai appris à gérer mes émotions et à me connecter à mon bébé. L'accouchement s'est passé dans la sérénité.",
    context: "Maternité"
  }
];

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
};

const bgColors = ['bg-primary-200', 'bg-sand-300', 'bg-primary-300', 'bg-sand-200', 'bg-primary-400'];

export const Testimonials: React.FC<NavigationProps> = ({ onNavigate }) => {

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

      <Section id="testimonials" bg="sand" className="flex flex-col justify-center">
        <div className="text-center mb-12">
          <span className="text-primary-500 font-bold tracking-widest uppercase text-xs mb-3 block">Livre d'or</span>
          <h1 className="font-serif text-4xl text-text-main mb-6">Vos Retours d'Expérience</h1>
          <p className="text-text-light max-w-2xl mx-auto text-lg font-light">
            La confiance se construit à travers vos histoires.
          </p>
        </div>
        
        {/* Horizontal Scrollable Grid */}
        <div className="w-full overflow-x-auto pb-12 snap-x snap-mandatory px-4 md:px-0 scrollbar-hide">
          <div className="flex gap-6 w-max mx-auto">
            {testimonials.map((t, index) => (
              <div 
                key={index}
                className="w-[85vw] md:w-[45vw] lg:w-[30vw] max-w-[400px] snap-center bg-white p-8 rounded-[2rem] shadow-soft border border-white flex flex-col items-center text-center relative hover:-translate-y-2 transition-transform duration-300"
              >
                <Quote className="w-8 h-8 text-primary-100 absolute top-6 left-6" />
                
                {/* Avatar */}
                <div className={`w-14 h-14 ${bgColors[index % bgColors.length]} rounded-full flex items-center justify-center mb-4 text-lg font-serif font-bold text-white shadow-inner`}>
                  {getInitials(t.author)}
                </div>

                <div className="flex justify-center text-yellow-400 mb-4 gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                
                <p className="font-serif text-lg text-text-main leading-relaxed italic mb-6 relative z-10 line-clamp-4">
                  "{t.text}"
                </p>
                
                <div className="mt-auto">
                  <p className="font-bold text-text-main text-base">{t.author}</p>
                  <p className="text-xs text-primary-500 uppercase tracking-wide mt-1 font-bold bg-primary-50 inline-block px-3 py-1 rounded-full">{t.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center text-sm text-text-muted mt-4 animate-pulse mb-12">
           &larr; Glissez pour voir plus &rarr;
        </p>

        {/* Bouton Voir les autres avis Google */}
        <div className="flex justify-center">
            <a 
              href="https://www.google.com/search?q=Claire+Cheriez+Sophrologue+Paris" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-text-main font-medium py-3 px-6 rounded-full border border-gray-200 shadow-sm transition-all hover:shadow-md"
            >
              {/* Logo Google Simple */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Voir les autres avis sur Google
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
        </div>

      </Section>
    </div>
  );
};
