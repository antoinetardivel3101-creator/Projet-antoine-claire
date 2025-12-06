import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  author: string;
  text: string;
  context: string; // e.g., "Séance individuelle"
}

export type PageId = 'home' | 'concept' | 'about' | 'services' | 'pricing' | 'testimonials' | 'contact' | 'legal';

export interface NavItem {
  label: string;
  id: PageId;
}

export interface NavigationProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}