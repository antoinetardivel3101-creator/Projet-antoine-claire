import React from 'react';
import { Section } from './Section';

export const Legal: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <Section bg="white">
        <div className="max-w-4xl mx-auto prose prose-stone">
          <h1 className="font-serif text-4xl text-text-main mb-12 text-center">Mentions Légales</h1>
          
          <div className="bg-sand-50 p-8 rounded-2xl mb-8">
            <h2 className="font-serif text-2xl text-text-main mb-4">Éditeur du site</h2>
            <p className="text-text-light leading-relaxed">
              <strong>Claire Cheriez Sophrologie</strong><br />
              12 Rue de la Paix, 75000 Paris<br />
              Téléphone : 01 23 45 67 89<br />
              Email : contact@claire-cheriez.com<br />
              SIRET : 123 456 789 00000
            </p>
          </div>

          <div className="mb-8">
            <h2 className="font-serif text-2xl text-text-main mb-4">Hébergement</h2>
            <p className="text-text-light leading-relaxed">
              Ce site est hébergé par [Nom de l'hébergeur], [Adresse de l'hébergeur].
            </p>
          </div>

          <div className="mb-8">
            <h2 className="font-serif text-2xl text-text-main mb-4">Propriété intellectuelle</h2>
            <p className="text-text-light leading-relaxed">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="font-serif text-2xl text-text-main mb-4">Données personnelles</h2>
            <p className="text-text-light leading-relaxed">
              Les informations recueillies via le formulaire de contact sont enregistrées dans un fichier informatisé par Claire Cheriez pour la gestion de la clientèle. Elles sont conservées pendant 3 ans et sont destinées uniquement au cabinet. Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : contact@claire-cheriez.com.
            </p>
          </div>
          
           <div className="mb-8">
            <h2 className="font-serif text-2xl text-text-main mb-4">Médiation</h2>
            <p className="text-text-light leading-relaxed">
              Conformément aux articles L.616-1 et R.616-1 du code de la consommation, nous proposons un dispositif de médiation de la consommation.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};