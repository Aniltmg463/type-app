import ArticlePage from '../components/ArticlePage';
import { mockArticlePageProps } from '../data/articleMockData';

export default function ArticlePageRoute() {
  return <ArticlePage {...mockArticlePageProps} />;
}