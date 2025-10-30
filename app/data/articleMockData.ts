// Mock data for Article page
import type { ArticlePageProps } from '../types/article';

export const mockArticlePageProps: ArticlePageProps = {
  header: {
    siteName: "Grocery Shop",
    navigationLinks: ["Article", "Shop", "Product Detail"]
  },
  article: {
    id: "article-1",
    title: "5 Simple Tips for Eating Organic on a Budget",
    subheading: "Discover how to enjoy fresh, organic produce without breaking the bank. Learn insider secrets from nutrition experts and savvy shoppers.",
    heroImage: "/images/article-hero.png",
    content: [
      {
        type: "text" as const,
        text: "Eating organic doesn't have to drain your wallet. With smart shopping strategies and a little planning, you can enjoy pesticide-free, nutrient-rich foods while staying within your budget.\n\nStart by focusing on the 'Dirty Dozen' – the fruits and vegetables that are most important to buy organic due to high pesticide residues. These include strawberries, spinach, apples, and bell peppers. For produce on the 'Clean Fifteen' list like avocados and sweet corn, conventional options are perfectly fine.\n\nAnother game-changer is shopping seasonally. Organic strawberries cost significantly less in summer when they're in peak season. Join a Community Supported Agriculture (CSA) program or shop at farmers markets for the freshest organic produce at competitive prices."
      },
      {
        type: "images" as const,
        images: ["/images/landing-v2-section-1.png", "/images/landing-v2-feature-2.png"]
      },
      {
        type: "text" as const,
        text: "Don't overlook frozen organic options – they're often more affordable than fresh and retain their nutritional value. Buy in bulk when possible, especially for pantry staples like organic grains, beans, and spices.\n\nConsider growing your own herbs and simple vegetables like lettuce and tomatoes. Even a small windowsill garden can save you money while ensuring the freshest organic ingredients for your meals.\n\nFinally, compare prices across different stores and don't be afraid to mix conventional and organic purchases based on your priorities and budget. Remember, eating more fruits and vegetables – whether organic or conventional – is what matters most for your health."
      }
    ]
  },
  relatedArticles: [
    {
      id: "related-1",
      title: "The Ultimate Guide to Meal Prep for Busy Families",
      author: "Sarah Martinez",
      image: "/images/article-related-1.jpg"
    },
    {
      id: "related-2",
      title: "10 Superfoods You Should Add to Your Cart Today",
      author: "Dr. James Wilson",
      image: "/images/article-related-2.jpg"
    },
    {
      id: "related-3",
      title: "How to Store Fresh Produce to Make It Last Longer",
      author: "Emma Green",
      image: "/images/article-related-3.jpg"
    }
  ]
};