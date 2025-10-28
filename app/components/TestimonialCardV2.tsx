import type { TestimonialV2 } from '../types/landing';
import Image from 'next/image';

interface TestimonialCardV2Props {
  testimonial: TestimonialV2;
}

export default function TestimonialCardV2({ testimonial }: TestimonialCardV2Props) {
  return (
    <div className="flex flex-col gap-12 p-8 border border-product-border rounded-xl">
      <p className="landing-feature-title">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-4">
        <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="product-button-text text-product-text-primary">
            {testimonial.name}
          </p>
          <p className="product-button-text text-product-text-secondary">
            {testimonial.description}
          </p>
        </div>
      </div>
    </div>
  );
}