import type { LandingPageV2Props } from '../types/landing';

export const mockLandingV2Data: LandingPageV2Props = {
  header: {
    siteName: "Grocery Shop",
    navigationLinks: ["Article", "Shop", "Product Detail"]
  },
  hero: {
    title: "Fresh Groceries Delivered to Your Door in 30 Minutes",
    subheading: "Experience the convenience of premium quality groceries delivered fresh to your doorstep. Shop from our extensive collection of organic produce, pantry essentials, and specialty items with same-day delivery.",
    buttonText: "Start Shopping Now",
    heroImage: "/images/landing-v2-hero.png"
  },
  featureSection1: {
    heading: "Why Choose Our Grocery Delivery Service?",
    features: [
      {
        id: "feature-1",
        image: "/images/landing-v2-feature-1.png",
        title: "Farm-Fresh Quality",
        description: "Handpicked produce from local farms, ensuring maximum freshness and nutritional value for your family."
      },
      {
        id: "feature-2",
        image: "/images/landing-v2-feature-2.png",
        title: "Lightning-Fast Delivery",
        description: "Get your groceries delivered in 30 minutes or less with our express delivery service across the city."
      },
      {
        id: "feature-3",
        image: "/images/landing-v2-feature-3.png",
        title: "Best Price Guarantee",
        description: "Competitive prices with exclusive deals and discounts. Save more while getting premium quality groceries."
      }
    ]
  },
  contentSection: {
    heading: "Your Healthy Lifestyle Starts Here",
    contentItems: [
      {
        title: "Organic & Sustainable",
        description: "We partner with certified organic farms to bring you pesticide-free produce that's good for you and the planet."
      },
      {
        title: "Freshness Guaranteed",
        description: "Our cold-chain delivery system ensures your groceries arrive as fresh as if you picked them yourself from the farm."
      },
      {
        title: "Convenient Shopping",
        description: "Browse thousands of products, track your order in real-time, and enjoy contactless delivery right to your doorstep."
      }
    ],
    image: "/images/landing-v2-content.png",
    buttons: [
      { text: "Browse Products", variant: "primary" as const },
      { text: "Learn About Quality", variant: "secondary" as const }
    ]
  },
  featureSection2: {
    heading: "Premium Shopping Experience",
    features: [
      {
        id: "feature-4",
        image: "/images/landing-v2-section-1.png",
        title: "Smart Shopping Lists",
        description: "Create and manage multiple shopping lists, share with family members, and never forget an item again."
      },
      {
        id: "feature-5",
        image: "/images/landing-v2-section-2.png",
        title: "24/7 Customer Support",
        description: "Our dedicated support team is here to help you with any questions, from product selection to delivery updates."
      }
    ]
  },
  testimonialSection: {
    heading: "What Our Customers Say",
    testimonials: [
      {
        id: "testimonial-1",
        quote: "\"Amazing quality and super fast delivery! The produce is always fresh and the ordering process is so simple. Highly recommend!\"",
        name: "Sarah Johnson",
        description: "Busy Mom of 3",
        avatar: "/images/landing-v2-avatar-1.png"
      },
      {
        id: "testimonial-2",
        quote: "\"Best grocery delivery service I've ever used. Their customer service is outstanding and they always go the extra mile.\"",
        name: "Michael Chen",
        description: "Working Professional",
        avatar: "/images/landing-v2-avatar-2.png"
      },
      {
        id: "testimonial-3",
        quote: "\"The organic selection is incredible and everything arrives perfectly fresh. It's completely changed how we shop for groceries.\"",
        name: "Emma Rodriguez",
        description: "Health Enthusiast",
        avatar: "/images/landing-v2-avatar-3.jpg"
      }
    ]
  },
  ctaSection: {
    heading: "Ready to Transform Your Grocery Shopping?",
    buttons: [
      { text: "Start Shopping Today", variant: "primary" as const },
      { text: "View Our Story", variant: "secondary" as const }
    ]
  },
  footer: {
    siteName: "Grocery Shop",
    navigationLinks: [
      {
        topic: "Shop",
        links: ["Fresh Produce", "Dairy & Eggs", "Pantry Essentials"]
      },
      {
        topic: "Company",
        links: ["About Us", "Our Farms", "Sustainability"]
      },
      {
        topic: "Support",
        links: ["Help Center", "Contact Us", "Delivery Info"]
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