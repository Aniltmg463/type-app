import type { RelatedArticle } from '../types/article';
import Image from 'next/image';

interface ArticleCardProps {
  article: RelatedArticle;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-[404/346] rounded-lg overflow-hidden bg-gray-100">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="article-card-title">{article.title}</h3>
        <p className="article-card-author">{article.author}</p>
      </div>
    </div>
  );
}