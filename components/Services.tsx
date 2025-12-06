
import React, { useState } from 'react';
import { Section } from './Section';
import { Brain, Moon, Baby, HeartHandshake, Briefcase, GraduationCap, ArrowRight, Repeat, ArrowLeft, X, CheckCircle2, Sparkles, MessageCircle, Wind, Heart, ChevronDown, HelpCircle, Plus } from 'lucide-react';
import { Button } from './Button';

// Définition enrichie des services pour la modale
interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  icon: any;
  problem: string;
  solution: string;
  benefits: string[];
}

const services: ServiceDetail[] = [
  {
    id: "stress",
    title: "Gestion du Stress",
    shortDesc: "Identifier vos tensions et les évacuer.",
    image: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=2053&auto=format&fit=crop",
    icon: Brain,
    problem: "Vous vous sentez submergé(e), irritable, vous avez la sensation d'avoir une boule au ventre ou la gorge serrée ?",
    solution: "Nous travaillerons sur l'évacuation des tensions inutiles par le relâchement musculaire et la respiration contrôlée.",
    benefits: ["Apaisement immédiat du système nerveux", "Meilleure gestion des émotions", "Retour au calme mental"]
  },
  {
    id: "sommeil",
    title: "Sommeil Réparateur",
    shortDesc: "Fini les insomnies. Rituels d'endormissement.",
    image: "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?q=80&w=2000&auto=format&fit=crop", // Image fiable (Lit/Livre/Calme)
    icon: Moon,
    problem: "Difficultés d'endormissement, réveils nocturnes, pensées qui tournent en boucle au moment de dormir ?",
    solution: "Mise en place de rituels de coucher et techniques pour mettre le cerveau 'en pause' et favoriser la récupération.",
    benefits: ["Endormissement plus rapide", "Sommeil profond et continu", "Réveil avec plus d'énergie"]
  },
  {
    id: "confiance",
    title: "Confiance en Soi",
    shortDesc: "Renforcez vos capacités, osez.",
    image: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=2070&auto=format&fit=crop", // Nouvelle image fiable (Femme confiante)
    icon: HeartHandshake,
    problem: "Peur du jugement, difficulté à dire non, syndrome de l'imposteur ou timidité excessive ?",
    solution: "Renforcement des capacités personnelles et ancrage de souvenirs positifs pour oser s'affirmer.",
    benefits: ["Meilleure estime de soi", "Aisance à l'oral", "Capacité à s'affirmer sereinement"]
  },
  {
    id: "maternite",
    title: "Maternité Sereine",
    shortDesc: "Vivez votre grossesse sereinement.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop",
    icon: Baby,
    problem: "Appréhensions liées à l'accouchement, changements corporels, fatigue ou stress durant la grossesse ?",
    solution: "Accompagnement doux pour gérer la douleur, visualiser positivement la naissance et créer un lien avec bébé.",
    benefits: ["Confiance en son corps", "Gestion de la douleur des contractions", "Lien mère-enfant renforcé"]
  },
  {
    id: "qvt",
    title: "Vie au Travail",
    shortDesc: "Prévenir le burn-out et la pression.",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop",
    icon: Briefcase,
    problem: "Surcharge mentale, perte de sens, fatigue chronique liée au travail ou tensions entre collègues ?",
    solution: "Exercices courts et discrets (flash) à faire au bureau pour relâcher la pression instantanément.",
    benefits: ["Meilleure concentration", "Détachement émotionnel", "Prévention de l'épuisement"]
  },
  {
    id: "prepa",
    title: "Préparation Mentale",
    shortDesc: "Examens, permis, compétitions.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    icon: GraduationCap,
    problem: "Peur de l'échec, perte de moyens le jour J, stress paralysant avant une épreuve ?",
    solution: "Programmation mentale de la réussite par la visualisation pour conditionner le cerveau au succès.",
    benefits: ["Capacités optimisées le jour J", "Gestion du trac", "Concentration maximale"]
  }
];

const sessionSteps = [
  {
    id: 1,
    title: "L'Échange",
    description: "La séance débute toujours par un temps de dialogue bienveillant. C'est un moment pour faire le point sur votre météo intérieure, vos besoins du jour et définir l'objectif de la pratique.",
    icon: MessageCircle
  },
  {
    id: 2,
    title: "La Pratique",
    description: "Nous passons à l'action avec des exercices de relaxation dynamique (mouvements doux associés à la respiration) suivis d'une sophronisation (visualisation positive guidée par ma voix).",
    icon: Wind
  },
  {
    id: 3,
    title: "Le Ressenti",
    description: "Après la pratique, vous prenez un temps pour accueillir vos sensations corporelles et mentales, sans jugement. C'est l'étape clé pour prendre conscience de vos ressources.",
    icon: Heart
  },
  {
    id: 4,
    title: "L'Ancrage",
    description: "Nous clôturons la séance en définissant comment intégrer ces bienfaits dans votre quotidien. Je vous transmets souvent l'enregistrement pour pratiquer chez vous.",
    icon: Repeat
  }
];

// FAQ Data
const faqItems = [
  {
    question: "Est-ce que la sophrologie est remboursée ?",
    answer: "La Sécurité Sociale ne rembourse pas la sophrologie. Cependant, de plus en plus de mutuelles proposent une prise en charge (forfait annuel ou par séance). Je vous remets une facture à chaque séance pour vos démarches."
  },
  {
    question: "Comment dois-je m'habiller pour une séance ?",
    answer: "Aucune tenue de sport n'est nécessaire. Venez comme vous êtes, dans vos vêtements de tous les jours. Privilégiez simplement une tenue dans laquelle vous vous sentez à l'aise pour respirer et bouger légèrement."
  },
  {
    question: "Puis-je faire les séances en visio ?",
    answer: "Oui, tout à fait. La sophrologie est une méthode verbale qui se pratique très bien à distance. Nous utilisons Zoom ou WhatsApp, et vous avez juste besoin d'une chaise et d'un endroit calme."
  },
  {
    question: "Combien de séances sont nécessaires ?",
    answer: "Cela dépend de votre objectif. En général, un accompagnement complet dure entre 8 et 12 séances. Cependant, vous ressentirez des bienfaits (détente, apaisement) dès la première séance."
  }
];

export const Services: React.FC<{onNavigate?: any}> = ({onNavigate}) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [activeStep, setActiveStep] = useState<number | null>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
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

      <Section id="services" bg="sand">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-primary-500 font-bold tracking-widest uppercase text-xs mb-3 block">Mes Accompagnements</span>
          <h1 className="font-serif text-4xl md:text-5xl text-text-main mb-6 leading-tight">Pour quels besoins ?</h1>
          <p className="text-text-light font-normal max-w-xl mx-auto text-base md:text-lg">
            Passez votre souris sur une thématique pour avoir un aperçu.
          </p>
        </div>

        {/* --- GRILLE DES SERVICES (3 Colonnes avec Aperçu au survol) --- */}
        <div className="max-w-7xl mx-auto mb-32 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group aspect-[3/2] bg-white hover:bg-primary-500 rounded-[2rem] shadow-card hover:shadow-xl border border-sand-200 hover:border-primary-500 transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col items-center justify-center p-6"
              >
                {/* Forme décorative en arrière-plan */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 group-hover:bg-white/10 rounded-bl-[100%] -mr-10 -mt-10 transition-all group-hover:scale-[1.5] duration-500"></div>

                {/* Contenu qui bouge au survol */}
                <div className="relative z-10 flex flex-col items-center justify-center transition-all duration-500 group-hover:-translate-y-4">
                    {/* Icône */}
                    <div className="w-14 h-14 bg-sand-50 text-primary-600 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-white group-hover:text-primary-500 shadow-sm border border-sand-100 group-hover:border-transparent">
                    <service.icon className="w-7 h-7" />
                    </div>

                    {/* Titre */}
                    <h3 className="font-serif text-xl text-text-main group-hover:text-white transition-colors text-center font-medium">
                    {service.title}
                    </h3>
                </div>
                
                {/* Aperçu (Description courte) qui apparaît du bas */}
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col items-center justify-end">
                  <p className="text-white text-sm leading-relaxed text-center mb-4 font-light">
                    {service.shortDesc}
                  </p>
                  <span className="inline-block px-4 py-1.5 bg-white text-primary-600 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm hover:bg-primary-50 transition-colors">
                    Voir détails
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- MODALE DÉTAIL SERVICE (POP-UP AVEC PHOTO) --- */}
        {selectedService && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop flouté */}
            <div 
              className="absolute inset-0 bg-primary-900/60 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setSelectedService(null)}
            ></div>

            {/* Fenêtre Modale */}
            <div className="bg-white rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-fade-in-up flex flex-col md:flex-row overflow-hidden">
               {/* Bouton Fermer */}
               <button 
                 onClick={() => setSelectedService(null)}
                 className="absolute top-4 right-4 z-20 bg-white/50 hover:bg-white p-2 rounded-full backdrop-blur-md transition-colors text-gray-800 shadow-sm"
               >
                 <X className="w-6 h-6" />
               </button>

               {/* Colonne Image (Gauche) - L'image est ICI uniquement */}
               <div className="w-full md:w-2/5 h-64 md:h-auto md:min-h-full relative shrink-0">
                 <img 
                   src={selectedService.image} 
                   alt={selectedService.title} 
                   className="absolute inset-0 w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-primary-500/10 mix-blend-multiply"></div>
                 {/* Titre sur mobile (superposé à l'image) */}
                 <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full md:hidden">
                    <h2 className="text-3xl font-serif text-white">{selectedService.title}</h2>
                 </div>
               </div>

               {/* Colonne Contenu (Droite) */}
               <div className="w-full md:w-3/5 p-8 md:p-12 bg-white">
                  <div className="hidden md:flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                      <selectedService.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-text-main">{selectedService.title}</h2>
                  </div>

                  <div className="space-y-8">
                    {/* Le Problème */}
                    <div className="bg-sand-50 p-6 rounded-2xl border-l-4 border-sand-300">
                      <h4 className="font-bold text-text-main mb-2 flex items-center text-sm uppercase tracking-wide">
                        <span className="w-2 h-2 rounded-full bg-sand-400 mr-2"></span>Ce que vous ressentez
                      </h4>
                      <p className="text-text-light italic leading-relaxed">
                        "{selectedService.problem}"
                      </p>
                    </div>

                    {/* La Solution */}
                    <div>
                      <h4 className="font-bold text-primary-600 mb-3 flex items-center text-lg font-serif">
                        <Sparkles className="w-5 h-5 mr-2" /> L'apport de la sophrologie
                      </h4>
                      <p className="text-text-main leading-relaxed">
                        {selectedService.solution}
                      </p>
                    </div>

                    {/* Les Bénéfices */}
                    <div>
                      <h4 className="font-bold text-text-main mb-4 text-sm uppercase tracking-wide">Les bénéfices concrets</h4>
                      <ul className="space-y-3">
                        {selectedService.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-text-light">
                            <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                      <Button 
                        onClick={() => { setSelectedService(null); onNavigate('contact'); window.scrollTo(0,0); }}
                        className="w-full text-center justify-center bg-primary-600 hover:bg-primary-700 text-white"
                      >
                        Prendre rendez-vous
                      </Button>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        )}

        {/* --- DÉROULEMENT SÉANCE EN ACCORDÉON INTERACTIF --- */}
        <div className="max-w-4xl mx-auto mt-24 px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-text-main mb-4">Déroulement d'une séance</h2>
            <p className="text-text-light font-normal text-lg">Passez votre souris ou cliquez sur une étape pour découvrir le processus.</p>
          </div>

          <div className="space-y-6 pb-24 border-b border-sand-200">
            {sessionSteps.map((step) => {
              const isOpen = activeStep === step.id;
              
              return (
                <div 
                  key={step.id} 
                  onMouseEnter={() => setActiveStep(step.id)} // Interaction fluide au survol
                  onClick={() => setActiveStep(step.id)} // Interaction stable au clic (mobile)
                  className={`rounded-[2rem] border transition-all duration-500 ease-out overflow-hidden cursor-pointer ${
                    isOpen 
                      ? 'bg-white border-primary-200 shadow-xl scale-100 opacity-100' 
                      : 'bg-white/60 border-sand-200 opacity-70 scale-[0.98] hover:scale-[0.99] hover:bg-white/80'
                  }`}
                >
                  {/* Header de l'accordéon */}
                  <div className="p-6 md:p-8 flex items-center justify-between group">
                    <div className="flex items-center gap-6 md:gap-8">
                      {/* Numéro stylisé */}
                      <div className={`text-4xl md:text-5xl font-serif font-medium transition-colors duration-500 ${
                        isOpen ? 'text-primary-500' : 'text-sand-300 group-hover:text-sand-400'
                      }`}>
                        0{step.id}
                      </div>

                      {/* Titre */}
                      <h4 className={`text-xl md:text-2xl font-serif transition-colors duration-500 ${
                        isOpen ? 'text-text-main' : 'text-text-light group-hover:text-text-main'
                      }`}>
                        {step.title}
                      </h4>
                    </div>

                    {/* Chevron animé */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isOpen ? 'bg-primary-500 text-white rotate-180' : 'bg-sand-100 text-primary-400'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Contenu déroulant */}
                  <div 
                    className={`transition-[max-height,opacity] duration-500 ease-out ${
                      isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-8 pl-[5rem] md:pl-[7.5rem] pr-8 md:pr-12">
                      <div className="w-12 h-1 bg-primary-100 mb-4 rounded-full"></div>
                      <p className="text-text-light text-base md:text-lg leading-relaxed font-light">
                        {step.description}
                      </p>
                      
                      {/* Petit bonus visuel si ouvert */}
                      <div className="mt-4 flex items-center gap-2 text-primary-500 text-sm font-medium animate-fade-in">
                        <step.icon className="w-4 h-4" />
                        <span>Étape clé</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- SECTION FAQ (Questions Fréquentes) --- */}
        <div className="max-w-3xl mx-auto px-4 pb-24">
           <div className="text-center mb-12">
             <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
                <HelpCircle className="w-6 h-6 text-primary-500" />
             </div>
             <h2 className="font-serif text-3xl md:text-4xl text-text-main">Questions Fréquentes</h2>
           </div>

           <div className="space-y-4">
             {faqItems.map((item, index) => {
               const isOpen = openFaq === index;
               return (
                 <div key={index} className="bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                   <button 
                     onClick={() => toggleFaq(index)}
                     className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                   >
                     <span className="font-serif text-lg text-text-main font-medium">{item.question}</span>
                     <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-primary-100 text-primary-600' : 'bg-sand-50 text-text-muted'}`}>
                       <Plus className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                     </div>
                   </button>
                   
                   <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                     <div className="px-6 pb-6 text-text-light leading-relaxed">
                       {item.answer}
                     </div>
                   </div>
                 </div>
               )
             })}
           </div>

           <div className="text-center mt-12">
             <p className="text-text-muted mb-4">Vous avez d'autres questions ?</p>
             <Button variant="outline" onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }}>
               Me contacter
             </Button>
           </div>
        </div>

      </Section>
    </div>
  );
};
