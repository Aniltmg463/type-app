import type { TestimonialV2 } from '../types/landing';
import TestimonialCardV2 from './TestimonialCardV2';

interface TestimonialSectionProps {
  heading: string;
  testimonials: TestimonialV2[];
}

export default function TestimonialSection({ 
  heading, 
  testimonials 
}: TestimonialSectionProps) {
  return (
    <section className="px-20 py-16">
      <h2 className="landing-section-heading mb-12">
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {testimonials.map((testimonial) => (
          <TestimonialCardV2 key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}