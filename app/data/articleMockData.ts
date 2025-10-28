// Mock data for Article page
import type { ArticlePageProps } from '../types/article';

export const mockArticlePageProps: ArticlePageProps = {
  article: {
    id: "article-1",
    title: "Article or post title",
    subheading: "Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading",
    heroImage: "/images/article-hero.png",
    content: [
      {
        type: "text" as const,
        text: "Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:\n\nExcepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.\n\nExquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris."
      },
      {
        type: "images" as const,
        images: ["/images/landing-v2-section-1.png", "/images/landing-v2-feature-2.png"]
      },
      {
        type: "text" as const,
        text: "Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.\n\nExquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl."
      }
    ]
  },
  relatedArticles: [
    {
      id: "related-1",
      title: "Title",
      author: "Author",
      image: "/images/article-related-1.jpg"
    },
    {
      id: "related-2",
      title: "Title",
      author: "Author",
      image: "/images/article-related-2.jpg"
    },
    {
      id: "related-3",
      title: "Title",
      author: "Author",
      image: "/images/article-related-3.jpg"
    }
  ]
};