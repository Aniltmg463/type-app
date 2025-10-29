'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ContentSectionProps {
  heading: string;
  subheading: string;
  image: string;
  imagePosition: "left" | "right";
  showButtons?: boolean;
}

export default function ContentSection({ 
  heading, 
  subheading, 
  image, 
  imagePosition,
  showButtons = false 
}: ContentSectionProps) {
  const router = useRouter();

  const content = (
    <div className="flex flex-col gap-4 lg:gap-6 max-w-xl">
      <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-inter font-semibold lg:leading-[48px] text-product-text-primary">{heading}</h2>
      <p className="text-lg sm:text-xl lg:text-2xl font-inter font-normal leading-relaxed lg:leading-9 text-product-text-secondary">
        {subheading}
      </p>
      {showButtons && (
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
          <button 
            type="button"
            onClick={() => router.push('/')}
            className="bg-product-button-bg text-product-button-text px-5 lg:px-6 py-3 lg:py-4 rounded-lg text-lg lg:text-2xl font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            Button
          </button>
          <button 
            type="button"
            onClick={() => router.push('/')}
            className="bg-gray-200 text-product-text-primary px-5 lg:px-6 py-3 lg:py-4 rounded-lg text-lg lg:text-2xl font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            Secondary button
          </button>
        </div>
      )}
    </div>
  );

  const imageElement = (
    <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={heading}
        fill
        className="object-cover"
      />
    </div>
  );

  return (
    <section className="px-5 sm:px-10 lg:px-20 py-12 lg:py-16">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
        {imagePosition === 'left' ? (
          <>
            {imageElement}
            {content}
          </>
        ) : (
          <>
            {content}
            {imageElement}
          </>
        )}
      </div>
    </section>
  );
}