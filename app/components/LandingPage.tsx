'use client'

import type { LandingPageProps } from '../types/landing';
import Header from './Header';
import FeatureCard from './FeatureCard';
import TestimonialCard from './TestimonialCard';
import Footer from './Footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LandingPage({
  hero,
  featureSections,
  testimonials,
  ctaSection,
}: LandingPageProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      <Header navigationLinks={["Page", "Page", "Page"]} />
      
      <main>
        <section className="px-5 sm:px-10 lg:px-20 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 max-w-4xl">
              <h1 className="landing-hero-title">
                {hero.title}
              </h1>
              <p className="landing-hero-subheading">
                {hero.subheading}
              </p>
            </div>
            <button 
              type="button"
              onClick={() => router.push('/')}
              className="bg-product-button-bg text-product-button-text px-5 sm:px-6 py-3 sm:py-4 rounded-md text-lg sm:text-xl lg:text-2xl font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200 w-fit"
            >
              Buttonssss
            </button>
          </div>
        </section>

        <section className="px-5 sm:px-10 lg:px-20 pb-8 sm:pb-12 lg:pb-16">
          <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[640px] rounded-lg overflow-hidden">
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
          <section key={section.id} className="px-5 sm:px-10 lg:px-20 py-8 sm:py-12 lg:py-16">
            <h2 className="landing-section-heading mb-6 sm:mb-8 lg:mb-12">
              {section.heading}
            </h2>
            
            {section.features && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {section.features.map((feature) => (
                  <FeatureCard key={feature.id} feature={feature} />
                ))}
              </div>
            )}

            {section.content && section.image && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                <div className="flex flex-col gap-6 sm:gap-8">
                  {section.content.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <h3 className="landing-feature-title">
                        {item.title}
                      </h3>
                      <p className="landing-feature-description">
                        {item.description}
                      </p>
                    </div>
                  ))}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4">
                    <button 
                      type="button"
                      onClick={() => router.push('/')}
                      className="bg-product-button-bg text-product-button-text px-5 sm:px-6 py-3 sm:py-4 rounded-lg text-lg sm:text-xl lg:text-2xl font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200"
                    >
                      Button
                    </button>
                    <button 
                      type="button"
                      onClick={() => router.push('/')}
                      className="bg-gray-200 text-product-text-primary px-5 sm:px-6 py-3 sm:py-4 rounded-lg text-lg sm:text-xl lg:text-2xl font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200"
                    >
                      Secondary button
                    </button>
                  </div>
                </div>
                <div className="relative w-full h-[350px] sm:h-[500px] lg:h-[704px] rounded-lg overflow-hidden">
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

        <section className="px-5 sm:px-10 lg:px-20 py-8 sm:py-12 lg:py-16">
          <h2 className="landing-section-heading mb-6 sm:mb-8 lg:mb-12">
            Section heading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>

        <section 
          className="px-5 sm:px-10 lg:px-20 py-10 sm:py-14 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8"
          style={{ backgroundColor: ctaSection.backgroundColor }}
        >
          <h2 className="landing-section-heading">
            {ctaSection.heading}
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
            <button 
              type="button"
              onClick={() => router.push('/')}
              className="bg-product-button-bg text-product-button-text px-5 sm:px-6 py-3 sm:py-4 rounded-md text-lg sm:text-xl lg:text-2xl font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              Button
            </button>
            <button 
              type="button"
              onClick={() => router.push('/')}
              className="bg-white text-black/90 px-5 sm:px-6 py-3 sm:py-4 rounded-md text-lg sm:text-xl lg:text-2xl font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
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