// Type definitions for Cart page

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description?: string;
}

export interface CartSummary {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export interface HeaderConfig {
  siteName: string;
  navigationLinks: string[];
}

export interface FooterLink {
  topic: string;
  links: string[];
}

export interface SocialIcon {
  name: string;
  icon: string;
}

export interface CartPageProps {
  header: HeaderConfig;
  cartItems: CartItem[];
  cartSummary: CartSummary;
  footer: {
    siteName: string;
    navigationLinks: FooterLink[];
    socialIcons: SocialIcon[];
  };
}