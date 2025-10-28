// Type definitions for product detail page

export interface Product {
  id: string;
  name: string;
  subheading: string;
  price: number;
  description: string;
  image: string;
  additionalInfo: string;
}

export interface RelatedProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface NavigationLink {
  topic: string;
  links: string[];
}

export interface SocialIcon {
  name: string;
  icon: string;
}

// Props types
export interface ProductDetailPageProps {
  product: Product;
  relatedProducts: RelatedProduct[];
  navigation: {
    header: string[];
    footer: NavigationLink[];
  };
  socialIcons: SocialIcon[];
}