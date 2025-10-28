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

// Type definitions for Landing page V2

export interface HeaderConfig {
  siteName: string;
  navigationLinks: string[];
}

export interface HeroV2 {
  title: string;
  subheading: string;
  buttonText: string;
  heroImage: string;
}

export interface FeatureV2 {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface FeatureSectionV2 {
  heading: string;
  features: FeatureV2[];
}

export interface ContentItemV2 {
  title: string;
  description: string;
}

export interface ButtonConfig {
  text: string;
  variant: 'primary' | 'secondary';
}

export interface ContentSectionV2 {
  heading: string;
  contentItems: ContentItemV2[];
  image: string;
  buttons: ButtonConfig[];
}

export interface TestimonialV2 {
  id: string;
  quote: string;
  name: string;
  description: string;
  avatar: string;
}

export interface TestimonialSectionV2 {
  heading: string;
  testimonials: TestimonialV2[];
}

export interface CTASectionV2 {
  heading: string;
  buttons: ButtonConfig[];
}

export interface FooterConfig {
  siteName: string;
  navigationLinks: Array<{
    topic: string;
    links: string[];
  }>;
  socialIcons: Array<{
    name: string;
    icon: string;
  }>;
}

export interface LandingPageV2Props {
  header: HeaderConfig;
  hero: HeroV2;
  featureSection1: FeatureSectionV2;
  contentSection: ContentSectionV2;
  featureSection2: FeatureSectionV2;
  testimonialSection: TestimonialSectionV2;
  ctaSection: CTASectionV2;
  footer: FooterConfig;
}