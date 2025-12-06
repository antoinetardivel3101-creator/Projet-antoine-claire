import React, { useState } from 'react';
import { Section } from './Section';
import { generateDailyZen } from '../services/geminiService';
import { Sparkles, Loader2, RefreshCw, Wind, BatteryLow, CloudRain, Leaf, Sun, Coffee } from 'lucide-react';
import { Button } from './Button';

export const DailyZen: React.FC = () => {
  const [affirmation, setAffirmation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { label: 'Stressé', icon: Wind, id: 'stressé' },
    { label: 'Fatigué', icon: BatteryLow, id: 'fatigué' },
    { label: 'Anxieux', icon: CloudRain, id: 'anxieux' },
    { label: 'Surchargé', icon: Coffee, id: 'surchargé' }, // Ajout pour équilibrer
    { label: 'Besoin de calme', icon: Leaf, id: 'calme' },
    { label: 'Positif', icon: Sun, id: 'positif' },
  ];

  const handleGenerate = async () => {
    if (!selectedMood) return;
    setLoading(true);
    const result = await generateDailyZen(selectedMood);
    setAffirmation(result);
    setLoading(false);
  };

  return (
    <Section id="daily-zen" className="relative overflow-hidden py-32 bg-[#F5F7F6]">
      {/* Organic Background Shapes */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-primary-100/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div className="absolute top-20 right-0 w-[30rem] h-[30rem] bg-sand-200/50 rounded-full blur-[80px] pointer-events-none mix-blend-multiply animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
      <div className="absolute bottom-0 left-1/3 w-[25rem] h-[25rem] bg-white rounded-full blur-[60px] pointer-events-none opacity-60"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Text Context */}
        <div className="text-center lg:text-left sticky top-32">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/50 mb-8 shadow-sm">
             <Sparkles className="w-4 h-4 text-primary-500" />
             <span className="text-xs font-bold uppercase tracking-widest text-primary-700">L'Instant Présent</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-main mb-6 leading-tight">
            Une pause <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 italic">sérénité</span>
          </h2>
          
          <p className="text-text-light mb-10 text-lg font-light leading-relaxed max-w-md mx-auto lg:mx-0">
            Prenez quelques secondes pour vous. Dites-moi comment vous vous sentez, et laissez l'IA vous offrir une pensée apaisante sur-mesure.
          </p>

          {!affirmation && (
             <div className="hidden lg:block relative pl-8 border-l-2 border-primary-200/50">
                <p className="text-sm text-text-muted italic max-w-xs font-serif leading-relaxed">
                  "La respiration est l'ancrage de votre sérénité. Inspirez le calme, expirez les tensions."
                </p>
             </div>
          )}

           {selectedMood && !affirmation && (
            <div className="mt-8 animate-fade-in flex justify-center lg:justify-start">
               <Button onClick={handleGenerate} disabled={loading} className="w-full sm:w-auto min-w-[240px] shadow-xl shadow-primary-900/10 py-4 text-base">
                {loading ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="animate-spin mr-2 h-5 w-5" /> Création de votre bulle...
                  </span>
                ) : (
                  "Recevoir ma pensée"
                )}
              </Button>
            </div>
           )}
        </div>

        {/* Right: Interactive Glass Card / Grid */}
        <div className="relative">
            {/* Inner Content */}
            {!affirmation ? (
              <div className="space-y-6 animate-fade-in">
                <div className="flex justify-center mb-2 lg:hidden">
                    <p className="text-primary-800 text-center font-serif text-xl italic">Mon état d'esprit actuel...</p>
                </div>
                
                {/* Grille 2 colonnes style Services */}
                <div className="grid grid-cols-2 gap-4">
                  {moods.map((mood) => {
                    const isSelected = selectedMood === mood.label;
                    return (
                      <button
                        key={mood.id}
                        onClick={() => setSelectedMood(mood.label)}
                        className={`group aspect-[3/2] p-4 rounded-[1.5rem] border transition-all duration-300 flex flex-col items-center justify-center text-center relative overflow-hidden ${
                          isSelected 
                            ? 'bg-primary-600 border-primary-600 shadow-md scale-[1.02]' 
                            : 'bg-white border-sand-200 hover:bg-primary-500 hover:border-primary-500 hover:shadow-card'
                        }`}
                      >
                         {/* Cercle décoratif en background */}
                        <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-[100%] -mr-8 -mt-8 transition-all duration-500 ${
                            isSelected ? 'bg-white/10' : 'bg-primary-50 group-hover:bg-white/10 group-hover:scale-110'
                        }`}></div>

                        <div className={`relative z-10 w-10 h-10 bg-sand-50 rounded-xl flex items-center justify-center mb-3 transition-colors duration-300 shadow-sm ${
                           isSelected ? 'bg-white text-primary-600' : 'text-primary-600 group-hover:bg-white group-hover:text-primary-500'
                        }`}>
                          <mood.icon className="w-5 h-5" />
                        </div>
                        
                        <span className={`relative z-10 font-serif text-lg transition-colors ${
                          isSelected ? 'text-white' : 'text-text-main group-hover:text-white'
                        }`}>
                          {mood.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="bg-white/30 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-[0_8px_32px_rgba(82,112,94,0.1)] border border-white/60 text-center py-4 animate-fade-in-up flex flex-col items-center justify-center min-h-[400px]">
                <QuoteIcon className="w-10 h-10 text-primary-200 mb-6 opacity-80" />
                <p className="font-serif text-2xl md:text-3xl text-text-main italic mb-10 leading-relaxed drop-shadow-sm max-w-md">
                  "{affirmation}"
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary-300 to-transparent mb-8"></div>
                <button 
                  onClick={() => { setAffirmation(null); setSelectedMood(null); }}
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors font-medium text-sm uppercase tracking-wider group px-6 py-3 bg-white/50 rounded-full hover:bg-white"
                >
                  <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-700" />
                  Nouvelle inspiration
                </button>
              </div>
            )}
          
          {/* Decorative floating elements */}
          {!affirmation && (
            <>
                <div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 bg-sand-300/60 rounded-full blur-2xl animate-[bounce_6s_infinite]"></div>
                <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 bg-primary-200/60 rounded-full blur-2xl animate-[bounce_7s_infinite_reverse]"></div>
            </>
          )}
        </div>

      </div>
    </Section>
  );
};

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
  </svg>
);