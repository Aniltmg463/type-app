import type { LandingPageProps } from '../types/landing';
import Header from './Header';
import FeatureCard from './FeatureCard';
import TestimonialCard from './TestimonialCard';
import Footer from './Footer';
import Image from 'next/image';

export default function LandingPage({
  hero,
  featureSections,
  testimonials,
  ctaSection,
}: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header navigationLinks={["Page", "Page", "Page"]} />
      
      <main>
        <section className="px-20 py-16">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6 max-w-4xl">
              <h1 className="font-inter text-[64px] font-bold leading-[77px] tracking-[-1.28px] text-product-text-primary">
                {hero.title}
              </h1>
              <p className="text-2xl font-inter font-normal leading-9 text-black/75">
                {hero.subheading}
              </p>
            </div>
            <button className="bg-product-button-bg text-product-button-text px-6 py-4 rounded-md text-2xl font-inter font-medium hover:opacity-90 transition-opacity w-fit">
              Button
            </button>
          </div>
        </section>

        <section className="px-20 pb-16">
          <div className="relative w-full h-[640px] rounded-lg overflow-hidden">
            <Image
              src={hero.heroImage}
              alt={hero.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {featureSections.map((section) => (
          <section key={section.id} className="px-20 py-16">
            <h2 className="text-5xl font-inter font-semibold tracking-[-0.96px] text-product-text-primary mb-12">
              {section.heading}
            </h2>
            
            {section.features && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.features.map((feature) => (
                  <FeatureCard key={feature.id} feature={feature} />
                ))}
              </div>
            )}

            {section.content && section.image && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="flex flex-col gap-8">
                  {section.content.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <h3 className="text-2xl font-inter font-medium text-product-text-primary">
                        {item.title}
                      </h3>
                      <p className="text-xl font-inter font-normal leading-[30px] text-product-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  ))}
                  <div className="flex gap-4 mt-4">
                    <button className="bg-product-button-bg text-product-button-text px-6 py-4 rounded-lg text-2xl font-inter font-medium hover:opacity-90 transition-opacity">
                      Button
                    </button>
                    <button className="bg-gray-200 text-product-text-primary px-6 py-4 rounded-lg text-2xl font-inter font-medium hover:opacity-90 transition-opacity">
                      Secondary button
                    </button>
                  </div>
                </div>
                <div className="relative w-full h-[704px] rounded-l-lg overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.heading}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </section>
        ))}

        <section className="px-20 py-16">
          <h2 className="text-5xl font-inter font-semibold tracking-[-0.96px] text-product-text-primary mb-12">
            Section heading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>

        <section 
          className="px-20 py-20 flex items-center justify-between"
          style={{ backgroundColor: ctaSection.backgroundColor }}
        >
          <h2 className="text-5xl font-inter font-semibold tracking-[-0.96px] text-product-text-primary">
            {ctaSection.heading}
          </h2>
          <div className="flex gap-4">
            <button className="bg-product-button-bg text-product-button-text px-6 py-4 rounded-md text-2xl font-inter font-medium hover:opacity-90 transition-opacity">
              Button
            </button>
            <button className="bg-white text-black/90 px-6 py-4 rounded-md text-2xl font-inter font-medium hover:opacity-90 transition-opacity">
              Secondary button
            </button>
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