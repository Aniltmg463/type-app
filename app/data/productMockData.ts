// Mock data for the product detail page
import type { ProductDetailPageProps } from '../types/product';

export const mockRootProps: ProductDetailPageProps = {
  product: {
    id: "1",
    name: "Premium Organic Salmon Fillet",
    subheading: "Wild-caught Atlantic salmon, sustainably sourced",
    price: 24.99,
    description: "Experience the rich, buttery flavor of our premium wild-caught Atlantic salmon. Sustainably sourced from pristine waters, this salmon is packed with omega-3 fatty acids and protein. Perfect for grilling, baking, or pan-searing for a healthy and delicious meal.",
    image: "/images/product-main.jpg",
    additionalInfo: "Frozen for freshness. Thaw in refrigerator before cooking. Best consumed within 2 days of thawing."
  },
  relatedProducts: [
    {
      id: "2",
      name: "Organic Quinoa Blend",
      description: "Tri-color quinoa mix with red, white, and black varieties. High in protein and fiber.",
      price: 12.99,
      image: "/images/product-1.jpg"
    },
    {
      id: "3",
      name: "Extra Virgin Olive Oil",
      description: "Cold-pressed Mediterranean olive oil with rich flavor and antioxidants.",
      price: 18.99,
      image: "/images/product-2.jpg"
    },
    {
      id: "4",
      name: "Grass-Fed Beef Steaks",
      description: "Premium ribeye steaks from grass-fed cattle. Tender, juicy, and full of flavor.",
      price: 32.99,
      image: "/images/product-3.jpg"
    },
    {
      id: "5",
      name: "Organic Free-Range Eggs",
      description: "Farm-fresh eggs from pasture-raised hens. Rich golden yolks and superior taste.",
      price: 7.99,
      image: "/images/product-4.jpg"
    },
    {
      id: "6",
      name: "Artisan Cheese Selection",
      description: "Curated selection of European cheeses including aged cheddar, brie, and gouda.",
      price: 22.99,
      image: "/images/product-5.jpg"
    },
    {
      id: "7",
      name: "Himalayan Pink Salt",
      description: "Pure, unrefined pink salt with trace minerals. Perfect for seasoning and finishing.",
      price: 9.99,
      image: "/images/product-6.jpg"
    }
  ],
  navigation: {
    header: ["Article", "Shop", "Product Detail"],
    footer: [
      {
        topic: "Shop",
        links: ["Fresh Produce", "Meat & Seafood", "Dairy & Eggs"]
      },
      {
        topic: "Company",
        links: ["About Us", "Sustainability", "Our Farmers"]
      },
      {
        topic: "Support",
        links: ["Help Center", "Shipping Info", "Returns"]
      }
    ]
  },
  socialIcons: [
    { name: "facebook", icon: "facebook" },
    { name: "linkedin", icon: "linkedin" },
    { name: "youtube", icon: "youtube" },
    { name: "instagram", icon: "instagram" }
  ]
};