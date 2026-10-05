export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  originalPrice?: string;
  domainBadge?: string;
  period?: string;
  badge?: string;
  isPopular?: boolean;
  tagline: string;
  duration: string;
  revision: string;
  features: string[];
  waMessage: string;
  accentColor?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Kuliner' | 'Kerajinan' | 'Jasa' | 'Fashion & Retail' | 'Otomotif' | 'Kesehatan' | string;
  isLiveClient?: boolean;
  location: string;
  tagline: string;
  description: string;
  features: string[];
  liveUrl?: string;
  previewTheme: {
    bg: string;
    accent: string;
    badgeBg: string;
  };
  mockupData: {
    headline: string;
    subheadline: string;
    ctaText: string;
    rating: string;
    reviewCount: string;
    priceSample: string;
    keyPoints: string[];
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  businessName: string;
  businessType: string;
  city: string;
  quote: string;
  rating: number;
  isPlaceholderNotice?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  durationTag: string;
}

export interface WhyReason {
  id: string;
  iconName: string;
  title: string;
  tagline: string;
  description: string;
  statsHighlight: string;
  solutionDiff: {
    withoutWeb: string;
    withWeb: string;
  };
}

export interface ConceptFormData {
  clientName: string;
  clientPhone: string;
  businessName: string;
  businessCategory: string;
  businessType: 'umkm-produk' | 'usaha-jasa' | 'keduanya';
  city: string;
  selectedPackage: string;
  desiredFeatures: string[];
  designVibe: string;
  notes: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'harga' | 'proses' | 'teknis' | 'garansi';
}

export interface PaymentMethod {
  name: string;
  category: 'Bank Transfer' | 'QRIS & E-Wallet';
  iconCode: string;
}

export interface AddOnItem {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  badge?: string;
  description: string;
  unit: string;
  iconName: string;
  isPopular?: boolean;
}
