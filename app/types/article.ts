// Type definitions for Article page

export interface ArticleContent {
  type: "text" | "images";
  text?: string;
  images?: string[];
}

export interface Article {
  id: string;
  title: string;
  subheading: string;
  heroImage: string;
  content: ArticleContent[];
}

export interface RelatedArticle {
  id: string;
  title: string;
  author: string;
  image: string;
}

export interface ArticlePageProps {
  article: Article;
  relatedArticles: RelatedArticle[];
}