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
    <section className="px-20 py-20 bg-[#f7f7f7] flex items-center justify-between">
      <h2 className="landing-section-heading">
        {heading}
      </h2>
      <div className="flex gap-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            type="button"
            onClick={() => router.push('/')}
            className={
              button.variant === 'primary'
                ? 'bg-product-button-bg text-product-button-text px-6 py-3 rounded-md landing-button-primary hover:opacity-90 hover:scale-105 transition-all duration-200'
                : 'bg-white text-black/90 px-6 py-3 rounded-md landing-button-secondary hover:opacity-90 hover:scale-105 transition-all duration-200'
            }
          >
            {button.text}
          </button>
        ))}
      </div>
    </section>
  );
}