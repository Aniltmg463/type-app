// Type definitions for Shop page

export interface ShopHero {
  title: string;
  subheading: string;
  backgroundImage: string;
}

export interface ShopSection {
  id: string;
  heading: string;
  subheading: string;
  image: string;
  imagePosition: "left" | "right";
}

export interface ShopProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface ShopFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ShopPageProps {
  hero: ShopHero;
  sections: ShopSection[];
  featuredProduct: ShopProduct;
  products: ShopProduct[];
  features: ShopFeature[];
}