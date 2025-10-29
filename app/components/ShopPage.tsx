import type { ShopPageProps } from '../types/shop';
import Header from './Header';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';
import ShopProductCard from './ShopProductCard';
import FeatureList from './FeatureList';
import Footer from './Footer';

export default function ShopPage({
  hero,
  sections,
  featuredProduct,
  products,
  features,
}: ShopPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header navigationLinks={["Page", "Page", "Page"]} />
      </div>
      
      <main>
        <HeroSection
          title={hero.title}
          subheading={hero.subheading}
          backgroundImage={hero.backgroundImage}
          showButton={true}
          hasOverlay={true}
        />

        {sections.map((section) => (
          <ContentSection
            key={section.id}
            heading={section.heading}
            subheading={section.subheading}
            image={section.image}
            imagePosition={section.imagePosition}
            showButtons={true}
          />
        ))}

        <section className="px-5 sm:px-10 lg:px-20 py-12 lg:py-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-semibold tracking-[-0.96px] text-product-text-primary mb-8 lg:mb-12">
            Section heading
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8">
            <ShopProductCard product={featuredProduct} featured={true} />
            <div className="flex flex-col gap-6 lg:gap-10">
              {products.map((product) => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-10 lg:px-20 py-12 lg:py-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-semibold tracking-[-0.96px] text-product-text-primary mb-8 lg:mb-12">
            Section heading
          </h2>
          <FeatureList features={features} />
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