import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 border text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300 disabled:opacity-50 disabled:cursor-not-allowed font-sans tracking-wide";
  
  const variants = {
    primary: "border-transparent text-white bg-primary-400 hover:bg-primary-500 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline: "border-primary-300 text-primary-600 bg-transparent hover:bg-primary-50 hover:text-primary-700 hover:border-primary-400",
    text: "border-transparent text-primary-600 hover:text-primary-800 px-4 hover:bg-primary-50/50",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};