import type { ArticlePageProps } from '../types/article';
import Header from './Header';
import ArticleCard from './ArticleCard';
import Footer from './Footer';
import Image from 'next/image';

export default function ArticlePage({ article, relatedArticles }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header navigationLinks={["Page", "Page", "Page"]} />
      
      <main>
        <section className="px-20 py-16">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="article-title">
              {article.title}
            </h1>
            <p className="article-subheading">
              {article.subheading}
            </p>
          </div>
        </section>

        <section className="px-20 pb-16">
          <div className="relative w-full h-[650px] rounded-lg overflow-hidden">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="px-20 py-8">
          <div className="max-w-4xl mx-auto">
            {article.content.map((block, index) => {
              if (block.type === 'text') {
                return (
                  <div key={index} className="mb-12">
                    {block.text?.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="article-body mb-6">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                );
              }
              
              if (block.type === 'images' && block.images) {
                return (
                  <div key={index} className="grid grid-cols-2 gap-8 my-12">
                    {block.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="relative h-[436px] rounded-lg overflow-hidden">
                        <Image
                          src={img}
                          alt={`Article image ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                );
              }
              
              return null;
            })}
          </div>
        </section>

        <section className="px-20 py-16">
          <h2 className="article-related-heading mb-12">Related articles or posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </main>

      <Footer 
        navigationLinks={[
          { topic: "Topic", links: ["Page", "Page", "Page"] },
          { topic: "Topic", links: ["Page", "Page", "Page"] },
          { topic: "Topic", links: ["Page", "Page", "Page"] }
        ]}
        socialIcons={[
          { name: "facebook", icon: "facebook" },
          { name: "linkedin", icon: "linkedin" },
          { name: "youtube", icon: "youtube" },
          { name: "instagram", icon: "instagram" }
        ]}
      />
    </div>
  );
}