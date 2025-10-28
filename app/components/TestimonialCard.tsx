import type { Testimonial } from '../types/landing';
import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-12 p-8 border border-product-border rounded-xl">
      <p className="text-2xl font-inter font-medium text-product-text-primary">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-4">
        <div className="relative w-11 h-11 rounded-full overflow-hidden">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-base font-inter font-medium text-product-text-primary">
            {testimonial.name}
          </p>
          <p className="text-base font-inter font-medium text-product-text-secondary">
            {testimonial.description}
          </p>
        </div>
      </div>
    </div>
  );
}