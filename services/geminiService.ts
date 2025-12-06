import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateDailyZen = async (mood: string): Promise<string> => {
  if (!apiKey) {
    return "La respiration est l'ancrage de votre sérénité. Inspirez le calme, expirez les tensions.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Génère une courte phrase de sophrologie ou de pensée positive (maximum 2 phrases) pour une personne qui se sent : ${mood}. Le ton doit être apaisant, bienveillant et professionnel. En français.`,
    });
    return response.text || "Prenez un instant pour respirer profondément.";
  } catch (error) {
    console.error("Error generating zen content:", error);
    return "Connectez-vous à votre souffle, c'est votre ressource la plus précieuse.";
  }
};

export const chatWithAssistant = async (message: string, history: {role: string, text: string}[]) => {
  if (!apiKey) {
    return "Bonjour, je suis l'assistant virtuel. Je ne suis pas connecté pour le moment, mais n'hésitez pas à nous contacter via le formulaire !";
  }

  const context = `
    Tu es l'assistant virtuel du site de Claire Cheriez, Sophrologue certifiée à Paris.
    Ton rôle est d'accueillir les visiteurs, de répondre à leurs questions de manière brève, chaleureuse et apaisante.
    
    Informations clés à connaitre :
    - Adresse : 12 Rue de la Paix, 75000 Paris.
    - Téléphone : 01 23 45 67 89.
    - Tarifs : Séance unique à 60€, Pack Sérénité (5 séances) à 270€, Tarif Étudiant à 50€.
    - Méthode : Basée sur la respiration, la détente musculaire et la visualisation.
    - Besoins traités : Stress, Sommeil, Confiance, Maternité, Préparation mentale.
    - Prise de RDV : Incite poliment à utiliser le bouton "Prendre RDV" ou la page contact.
    
    Reste concis (max 3 phrases). Si tu ne sais pas, invite à utiliser la page Contact.
  `;

  try {
    // Construction de l'historique pour le chat
    // Note: Simplification pour l'exemple stateless, on envoie le contexte + le message
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `${context}\n\nHistorique de conversation:\n${history.map(h => `${h.role}: ${h.text}`).join('\n')}\n\nUser: ${message}\nAssistant:`,
    });
    return response.text || "Je n'ai pas bien compris, pouvez-vous reformuler ?";
  } catch (error) {
    console.error("Error chatting:", error);
    return "Je rencontre une petite difficulté technique. Veuillez m'excuser.";
  }
};
