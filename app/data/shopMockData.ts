// Mock data for Shop page
import type { ShopPageProps } from '../types/shop';

export const mockShopPageProps: ShopPageProps = {
  hero: {
    title: "Shop title",
    subheading: "Subheading with description of your shopping site",
    backgroundImage: "https://images.unsplash.com/photo-1730126145199-350b13aa5d3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxwZWFycyUyMGZydWl0JTIwZm9vZCUyMGdsYXNzfGVufDB8MHx8fDE3NjE2NDUwOTh8MA&ixlib=rb-4.1.0&q=85"
  },
  sections: [
    {
      id: "section-1",
      heading: "Heading",
      subheading: "A subheading for this section, as long or as short as you like",
      image: "/images/shop-section-1.png",
      imagePosition: "right" as const
    },
    {
      id: "section-2",
      heading: "Heading",
      subheading: "A subheading for this section, as long or as short as you like",
      image: "/images/shop-section-2.png",
      imagePosition: "left" as const
    }
  ],
  featuredProduct: {
    id: "featured-1",
    name: "Featured product",
    description: "Description of featured product",
    price: 10.99,
    image: "/images/shop-featured.jpg"
  },
  products: [
    {
      id: "prod-1",
      name: "Product",
      description: "Description of top product",
      price: 10.99,
      image: "/images/shop-product-1.jpg"
    },
    {
      id: "prod-2",
      name: "Product",
      description: "Description of lower product",
      price: 10.99,
      image: "/images/shop-product-2.jpg"
    }
  ],
  features: [
    {
      id: "feat-1",
      icon: "globe",
      title: "Subheading",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
    },
    {
      id: "feat-2",
      icon: "lock",
      title: "Subheading",
      description: "Body text for whatever you'd like to claim. Add main takeaway points, quotes, anecdotes, or even a very very short story."
    },
    {
      id: "feat-3",
      icon: "user",
      title: "Subheading",
      description: "Body text for whatever you'd like to suggest. Add main takeaway points, quotes, anecdotes, or even a very very short story."
    },
    {
      id: "feat-4",
      icon: "calendar",
      title: "Subheading",
      description: "Body text for whatever you'd like to type. Add main takeaway points, quotes, anecdotes, or even a very very short story."
    }
  ]
};