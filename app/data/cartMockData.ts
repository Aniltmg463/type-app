// Mock data for Cart page
import type { CartPageProps } from '../types/cart';

export const mockCartPageProps: CartPageProps = {
  header: {
    siteName: "Grocery Shop",
    navigationLinks: ["Article", "Shop", "Product Detail", "Cart"]
  },
  cartItems: [
    {
      id: "1",
      name: "Premium Organic Salmon Fillet",
      price: 24.99,
      image: "/images/product-main.jpg",
      quantity: 1,
      description: "Wild-caught Atlantic salmon, sustainably sourced"
    },
    {
      id: "2", 
      name: "Organic Quinoa Blend",
      price: 12.99,
      image: "/images/product-1.jpg",
      quantity: 2,
      description: "Tri-color quinoa mix with red, white, and black varieties"
    },
    {
      id: "3",
      name: "Extra Virgin Olive Oil",
      price: 18.99,
      image: "/images/product-2.jpg", 
      quantity: 1,
      description: "Cold-pressed Mediterranean olive oil with rich flavor"
    }
  ],
  cartSummary: {
    subtotal: 69.96,
    shipping: 5.99,
    tax: 6.12,
    total: 82.07
  },
  footer: {
    siteName: "Grocery Shop",
    navigationLinks: [
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
    ],
    socialIcons: [
      { name: "facebook", icon: "facebook" },
      { name: "linkedin", icon: "linkedin" },
      { name: "youtube", icon: "youtube" },
      { name: "instagram", icon: "instagram" }
    ]
  }
};