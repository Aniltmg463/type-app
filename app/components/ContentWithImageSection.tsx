import type { ContentItemV2, ButtonConfig } from '../types/landing';
import Image from 'next/image';

interface ContentWithImageSectionProps {
  heading: string;
  contentItems: ContentItemV2[];
  image: string;
  buttons: ButtonConfig[];
}

export default function ContentWithImageSection({ 
  heading, 
  contentItems,
  image,
  buttons 
}: ContentWithImageSectionProps) {
  return (
    <section className="px-20 py-16">
      <h2 className="landing-section-heading mb-12">
        {heading}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-12">
          {contentItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="landing-feature-title">
                {item.title}
              </h3>
              <p className="landing-feature-description">
                {item.description}
              </p>
            </div>
          ))}
          <div className="flex gap-4">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={
                  button.variant === 'primary'
                    ? 'bg-product-button-bg text-product-button-text px-6 py-3 rounded-md landing-button-primary hover:opacity-90 transition-opacity'
                    : 'bg-gray-200 text-black/90 px-6 py-3 rounded-md landing-button-secondary hover:opacity-90 transition-opacity'
                }
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
        <div className="relative w-full h-[704px] rounded-l-lg overflow-hidden">
          <Image
            src={image}
            alt={heading}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}