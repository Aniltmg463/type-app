// Mock data for the product detail page
import type { ProductDetailPageProps } from '../types/product';

export const mockRootProps: ProductDetailPageProps = {
  product: {
    id: "1",
    name: "Product name",
    subheading: "Subheading",
    price: 10.99,
    description: "Body text for describing what this product is and why this product is simply a must-buy.",
    image: "/images/product-main.jpg",
    additionalInfo: "Text box for additional details or fine print"
  },
  relatedProducts: [
    {
      id: "2",
      name: "Product",
      description: "Description of first product",
      price: 10.99,
      image: "/images/product-1.jpg"
    },
    {
      id: "3",
      name: "Product",
      description: "Description of second product",
      price: 10.99,
      image: "/images/product-2.jpg"
    },
    {
      id: "4",
      name: "Product",
      description: "Description of third product",
      price: 10.99,
      image: "/images/product-3.jpg"
    },
    {
      id: "5",
      name: "Product",
      description: "Description of fourth product",
      price: 10.99,
      image: "/images/product-4.jpg"
    },
    {
      id: "6",
      name: "Product",
      description: "Description of fifth product",
      price: 10.99,
      image: "/images/product-5.jpg"
    },
    {
      id: "7",
      name: "Product",
      description: "Description of sixth product",
      price: 10.99,
      image: "/images/product-6.jpg"
    }
  ],
  navigation: {
    header: ["Page", "Page", "Page"],
    footer: [
      {
        topic: "Topic",
        links: ["Page", "Page", "Page"]
      },
      {
        topic: "Topic",
        links: ["Page", "Page", "Page"]
      },
      {
        topic: "Topic",
        links: ["Page", "Page", "Page"]
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