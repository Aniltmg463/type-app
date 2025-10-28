// Mock data for Landing page
import type { LandingPageProps } from '../types/landing';

export const mockLandingPageProps: LandingPageProps = {
  hero: {
    title: "Landing page title",
    subheading: "Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.",
    heroImage: "/images/landing-hero.png"
  },
  featureSections: [
    {
      id: "features-1",
      heading: "Section heading",
      features: [
        {
          id: "f1",
          image: "/images/landing-feature-1.png",
          title: "Subheading",
          description: "Body text for whatever you'd like to add more to the subheading."
        },
        {
          id: "f2",
          image: "/images/landing-feature-2.png",
          title: "Subheading",
          description: "Body text for whatever you'd like to expand on the main point."
        },
        {
          id: "f3",
          image: "/images/landing-feature-3.png",
          title: "Subheading",
          description: "Body text for whatever you'd like to share more."
        }
      ]
    },
    {
      id: "features-2",
      heading: "Section heading",
      content: [
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
      image: "/images/landing-detail.png"
    },
    {
      id: "features-3",
      heading: "Section heading",
      features: [
        {
          id: "f4",
          image: "/images/landing-card-1.png",
          title: "Subheading",
          description: "Body text for whatever you'd like to add more to the subheading."
        },
        {
          id: "f5",
          image: "/images/landing-card-2.png",
          title: "Subheading",
          description: "Body text for whatever you'd like to expand on the main point."
        }
      ]
    }
  ],
  testimonials: [
    {
      id: "test-1",
      quote: "\"A terrific piece of praise\"",
      name: "Name",
      description: "Description",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: "test-2",
      quote: "\"A fantastic bit of feedback\"",
      name: "Name",
      description: "Description",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      id: "test-3",
      quote: "\"A genuinely glowing review\"",
      name: "Name",
      description: "Description",
      avatar: "https://i.pravatar.cc/150?img=3"
    }
  ],
  ctaSection: {
    heading: "Section heading",
    backgroundColor: "#f7f7f7"
  }
};