import type { ArticlePageProps } from '../types/article';
import Header from './Header';
import ArticleCard from './ArticleCard';
import Footer from './Footer';
import Image from 'next/image';

export default function ArticlePage({ header, article, relatedArticles }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        siteName={header.siteName}
        navigationLinks={header.navigationLinks}
      />
      
      <main>
        <section className="px-5 sm:px-10 lg:px-20 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 max-w-3xl">
            <h1 className="article-title">
              {article.title}
            </h1>
            <p className="article-subheading">
              {article.subheading}
            </p>
          </div>
        </section>

        <section className="px-5 sm:px-10 lg:px-20 pb-8 sm:pb-12 lg:pb-16">
          <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[650px] rounded-lg overflow-hidden">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="px-5 sm:px-10 lg:px-20 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto">
            {article.content.map((block, index) => {
              if (block.type === 'text') {
                return (
                  <div key={index} className="mb-8 sm:mb-10 lg:mb-12">
                    {block.text?.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="article-body mb-4 sm:mb-5 lg:mb-6">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                );
              }
              
              if (block.type === 'images' && block.images) {
                return (
                  <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 my-8 sm:my-10 lg:my-12">
                    {block.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="relative h-[250px] sm:h-[300px] lg:h-[436px] rounded-lg overflow-hidden">
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

        <section className="px-5 sm:px-10 lg:px-20 py-8 sm:py-12 lg:py-16">
          <h2 className="article-related-heading mb-6 sm:mb-8 lg:mb-12">Related articles or posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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