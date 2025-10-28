import type { LandingPageV2Props } from '../types/landing';
import Header from './Header';
import HeroSectionV2 from './HeroSectionV2';
import FeatureGridSection from './FeatureGridSection';
import ContentWithImageSection from './ContentWithImageSection';
import TestimonialSection from './TestimonialSection';
import CTASectionV2 from './CTASectionV2';
import Footer from './Footer';

export default function LandingPageV2({
  header,
  hero,
  featureSection1,
  contentSection,
  featureSection2,
  testimonialSection,
  ctaSection,
  footer,
}: LandingPageV2Props) {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        siteName={header.siteName}
        navigationLinks={header.navigationLinks}
      />
      
      <main>
        <HeroSectionV2 
          title={hero.title}
          subheading={hero.subheading}
          buttonText={hero.buttonText}
          heroImage={hero.heroImage}
        />

        <FeatureGridSection 
          heading={featureSection1.heading}
          features={featureSection1.features}
        />

        <ContentWithImageSection 
          heading={contentSection.heading}
          contentItems={contentSection.contentItems}
          image={contentSection.image}
          buttons={contentSection.buttons}
        />

        <FeatureGridSection 
          heading={featureSection2.heading}
          features={featureSection2.features}
          columns={2}
        />

        <TestimonialSection 
          heading={testimonialSection.heading}
          testimonials={testimonialSection.testimonials}
        />

        <CTASectionV2 
          heading={ctaSection.heading}
          buttons={ctaSection.buttons}
        />
      </main>

      <Footer 
        siteName={footer.siteName}
        navigationLinks={footer.navigationLinks}
        socialIcons={footer.socialIcons}
      />
    </div>
  );
}