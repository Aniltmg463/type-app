import type { FeatureV2 } from '../types/landing';
import FeatureCardV2 from './FeatureCardV2';

interface FeatureGridSectionProps {
  heading: string;
  features: FeatureV2[];
  columns?: 2 | 3;
}

export default function FeatureGridSection({ 
  heading, 
  features,
  columns = 3 
}: FeatureGridSectionProps) {
  const gridClass = columns === 3 
    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
    : 'grid grid-cols-1 md:grid-cols-2 gap-8';

  return (
    <section className="px-20 py-16">
      <h2 className="landing-section-heading mb-12">
        {heading}
      </h2>
      <div className={gridClass}>
        {features.map((feature) => (
          <FeatureCardV2 key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}