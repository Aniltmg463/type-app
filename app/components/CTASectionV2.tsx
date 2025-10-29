'use client'

import type { ButtonConfig } from '../types/landing';
import { useRouter } from 'next/navigation';

interface CTASectionV2Props {
  heading: string;
  buttons: ButtonConfig[];
}

export default function CTASectionV2({ heading, buttons }: CTASectionV2Props) {
  const router = useRouter();

  return (
    <section className="px-5 sm:px-10 lg:px-20 py-10 sm:py-14 lg:py-20 bg-[#f7f7f7] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
      <h2 className="landing-section-heading">
        {heading}
      </h2>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
        {buttons.map((button, index) => (
          <button
            key={index}
            type="button"
            onClick={() => router.push('/')}
            className={
              button.variant === 'primary'
                ? 'bg-product-button-bg text-product-button-text px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-lg sm:text-xl lg:text-2xl font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200'
                : 'bg-white text-black/90 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-lg sm:text-xl lg:text-2xl font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200'
            }
          >
            {button.text}
          </button>
        ))}
      </div>
    </section>
  );
}