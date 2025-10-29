'use client'

import type { ContentItemV2, ButtonConfig } from '../types/landing';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  return (
    <section className="px-5 sm:px-10 lg:px-20 py-8 sm:py-12 lg:py-16">
      <h2 className="landing-section-heading mb-6 sm:mb-8 lg:mb-12">
        {heading}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
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
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {buttons.map((button, index) => (
              <button
                key={index}
                type="button"
                onClick={() => router.push('/')}
                className={
                  button.variant === 'primary'
                    ? 'bg-product-button-bg text-product-button-text px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-lg sm:text-xl lg:text-2xl font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200'
                    : 'bg-gray-200 text-black/90 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-lg sm:text-xl lg:text-2xl font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200'
                }
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
        <div className="relative w-full h-[350px] sm:h-[500px] lg:h-[704px] rounded-lg overflow-hidden">
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