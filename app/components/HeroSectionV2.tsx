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
      <section className="px-20 py-16">
        <div className="flex flex-col gap-10 max-w-[844px]">
          <div className="flex flex-col gap-6">
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
            className="bg-product-button-bg text-product-button-text px-8 py-3 rounded-md landing-button-primary hover:opacity-90 hover:scale-105 transition-all duration-200 w-fit"
          >
            {buttonText}
          </button>
        </div>
      </section>

      <section className="px-20 pb-16">
        <div className="relative w-full h-[640px] rounded-lg overflow-hidden">
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