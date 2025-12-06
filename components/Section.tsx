import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'white' | 'light' | 'sage' | 'sand';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-sand-50', 
    sage: 'bg-primary-50',    
    sand: 'bg-[#F9F7F2]', // Beige très doux pour alterner
  };

  return (
    <section id={id} className={`${bgColors[bg]} py-24 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};