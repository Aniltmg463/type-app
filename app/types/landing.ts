// Type definitions for Landing page

export interface LandingHero {
  title: string;
  subheading: string;
  heroImage: string;
}

export interface Feature {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface ContentItem {
  title: string;
  description: string;
}

export interface FeatureSection {
  id: string;
  heading: string;
  features?: Feature[];
  content?: ContentItem[];
  image?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  description: string;
  avatar: string;
}

export interface CTASection {
  heading: string;
  backgroundColor: string;
}

export interface LandingPageProps {
  hero: LandingHero;
  featureSections: FeatureSection[];
  testimonials: Testimonial[];
  ctaSection: CTASection;
}