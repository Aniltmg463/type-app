// Mock data for Shop page
import type { ShopPageProps } from '../types/shop';

export const mockShopPageProps: ShopPageProps = {
  header: {
    siteName: "Grocery Shop",
    navigationLinks: ["Article", "Shop", "Product Detail"]
  },
  hero: {
    title: "Fresh Groceries at Your Fingertips",
    subheading: "Browse our extensive collection of organic produce, pantry essentials, and gourmet items. Quality guaranteed, delivered fresh to your door.",
    backgroundImage: "https://images.unsplash.com/photo-1730126145199-350b13aa5d3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxwZWFycyUyMGZydWl0JTIwZm9vZCUyMGdsYXNzfGVufDB8MHx8fDE3NjE2NDUwOTh8MA&ixlib=rb-4.1.0&q=85"
  },
  sections: [
    {
      id: "section-1",
      heading: "Farm-to-Table Excellence",
      subheading: "We partner directly with local farms to bring you the freshest organic produce. From crisp vegetables to juicy fruits, every item is carefully selected for quality and taste.",
      image: "/images/shop-section-1.png",
      imagePosition: "right" as const
    },
    {
      id: "section-2",
      heading: "Gourmet Pantry Essentials",
      subheading: "Stock your kitchen with premium ingredients from around the world. Artisanal oils, exotic spices, and specialty grains to elevate every meal you create.",
      image: "/images/shop-section-2.png",
      imagePosition: "left" as const
    }
  ],
  featuredProduct: {
    id: "featured-1",
    name: "Organic Avocado Pack",
    description: "Premium Hass avocados, perfectly ripe and ready to eat. Rich in healthy fats and nutrients.",
    price: 8.99,
    image: "/images/shop-featured.jpg"
  },
  products: [
    {
      id: "prod-1",
      name: "Fresh Organic Spinach",
      description: "Baby spinach leaves, perfect for salads and smoothies. Packed with iron and vitamins.",
      price: 4.99,
      image: "/images/shop-product-1.jpg"
    },
    {
      id: "prod-2",
      name: "Artisan Sourdough Bread",
      description: "Handcrafted sourdough with a perfect crust and tangy flavor. Made with organic flour.",
      price: 6.49,
      image: "/images/shop-product-2.jpg"
    }
  ],
  features: [
    {
      id: "feat-1",
      icon: "globe",
      title: "Global Sourcing",
      description: "We source the finest ingredients from trusted suppliers worldwide, bringing you authentic flavors and premium quality products from every corner of the globe."
    },
    {
      id: "feat-2",
      icon: "lock",
      title: "Secure Shopping",
      description: "Your personal information and payment details are protected with bank-level encryption. Shop with confidence knowing your data is safe and secure."
    },
    {
      id: "feat-3",
      icon: "user",
      title: "Personal Service",
      description: "Our dedicated customer service team is here to help with product recommendations, order tracking, and any questions you might have about your shopping experience."
    },
    {
      id: "feat-4",
      icon: "calendar",
      title: "Flexible Delivery",
      description: "Choose from same-day, next-day, or scheduled delivery options that fit your lifestyle. We work around your schedule to ensure convenience every time."
    }
  ]
};