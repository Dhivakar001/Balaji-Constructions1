export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'industrial' | 'infrastructure';
  location: string;
  area: string;
  duration: string;
  client: string;
  description: string;
  image: string;
  completionYear: number;
  highlights: string[];
  safetyHours: number;
}

export interface Service {
  id: string;
  title: string;
  iconName: string; // Used to look up Lucide icons
  shortDescription: string;
  fullDescription: string;
  features: string[];
  costIndicator: string;
  avgTimeline: string;
  targetAudience: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
  projectType: string;
  avatarSeed: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  projectType: string;
  propertyType: 'homeowner' | 'commercial' | 'developer';
  areaSize: number;
  budgetTier: 'standard' | 'premium' | 'luxury';
  calculatedEstimate?: number;
  message: string;
  timestamp: string;
  status: 'new' | 'contacted' | 'proposal_sent' | 'contracted' | 'completed';
}

export interface TrustFactor {
  id: string;
  number: string;
  label: string;
  sublabel: string;
  iconName: string;
}
