import type { LandingPageV2Props } from '../types/landing';

export const mockLandingV2Data: LandingPageV2Props = {
  header: {
    siteName: "Site name",
    navigationLinks: ["Article", "Shop", "Product Detail"]
  },
  hero: {
    title: "Landing page title",
    subheading: "Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.",
    buttonText: "Button",
    heroImage: "/images/landing-v2-hero.png"
  },
  featureSection1: {
    heading: "Section heading",
    features: [
      {
        id: "feature-1",
        image: "/images/landing-v2-feature-1.png",
        title: "Subheading",
        description: "Body text for whatever you'd like to add more to the subheading."
      },
      {
        id: "feature-2",
        image: "/images/landing-v2-feature-2.png",
        title: "Subheading",
        description: "Body text for whatever you'd like to expand on the main point."
      },
      {
        id: "feature-3",
        image: "/images/landing-v2-feature-3.png",
        title: "Subheading",
        description: "Body text for whatever you'd like to share more."
      }
    ]
  },
  contentSection: {
    heading: "Section heading",
    contentItems: [
      {
        title: "Subheading",
        description: "Body text for whatever you'd like to expand on the main point."
      },
      {
        title: "Subheading",
        description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes."
      },
      {
        title: "Subheading",
        description: "Body text for whatever you'd like to add more to the main point. It provides details, explanations, and context."
      }
    ],
    image: "/images/landing-v2-content.png",
    buttons: [
      { text: "Button", variant: "primary" as const },
      { text: "Secondary button", variant: "secondary" as const }
    ]
  },
  featureSection2: {
    heading: "Section heading",
    features: [
      {
        id: "feature-4",
        image: "/images/landing-v2-section-1.png",
        title: "Subheading",
        description: "Body text for whatever you'd like to add more to the subheading."
      },
      {
        id: "feature-5",
        image: "/images/landing-v2-section-2.png",
        title: "Subheading",
        description: "Body text for whatever you'd like to expand on the main point."
      }
    ]
  },
  testimonialSection: {
    heading: "Section heading",
    testimonials: [
      {
        id: "testimonial-1",
        quote: "\"A terrific piece of praise\"",
        name: "Name",
        description: "Description",
        avatar: "/images/landing-v2-avatar-1.png"
      },
      {
        id: "testimonial-2",
        quote: "\"A fantastic bit of feedback\"",
        name: "Name",
        description: "Description",
        avatar: "/images/landing-v2-avatar-2.png"
      },
      {
        id: "testimonial-3",
        quote: "\"A genuinely glowing review\"",
        name: "Name",
        description: "Description",
        avatar: "/images/landing-v2-avatar-3.jpg"
      }
    ]
  },
  ctaSection: {
    heading: "Section heading",
    buttons: [
      { text: "Button", variant: "primary" as const },
      { text: "Secondary button", variant: "secondary" as const }
    ]
  },
  footer: {
    siteName: "Site name",
    navigationLinks: [
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
    ],
    socialIcons: [
      { name: "facebook", icon: "facebook" },
      { name: "linkedin", icon: "linkedin" },
      { name: "youtube", icon: "youtube" },
      { name: "instagram", icon: "instagram" }
    ]
  }
};