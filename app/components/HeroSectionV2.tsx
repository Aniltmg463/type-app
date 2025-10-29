'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface HeroSectionV2Props {
  title: string;
  subheading: string;
  buttonText: string;
  heroImage: string;
}

export default function HeroSectionV2({ 
  title, 
  subheading, 
  buttonText,
  heroImage 
}: HeroSectionV2Props) {
  const router = useRouter();

  return (
    <>
      <section className="px-5 sm:px-10 lg:px-20 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 max-w-[844px]">
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            <h1 className="landing-hero-title">
              {title}
            </h1>
            <p className="landing-hero-subheading">
              {subheading}
            </p>
          </div>
          <button 
            type="button"
            onClick={() => router.push('/')}
            className="bg-product-button-bg text-product-button-text px-6 sm:px-7 lg:px-8 py-2.5 sm:py-3 rounded-md text-lg sm:text-xl lg:text-2xl font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200 w-fit"
          >
            {buttonText}
          </button>
        </div>
      </section>

      <section className="px-5 sm:px-10 lg:px-20 pb-8 sm:pb-12 lg:pb-16">
        <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[640px] rounded-lg overflow-hidden">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
    </>
  );
}