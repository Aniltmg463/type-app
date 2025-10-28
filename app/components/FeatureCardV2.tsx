import type { FeatureV2 } from '../types/landing';
import Image from 'next/image';

interface FeatureCardV2Props {
  feature: FeatureV2;
}

export default function FeatureCardV2({ feature }: FeatureCardV2Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-square rounded-lg overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="landing-feature-title">
          {feature.title}
        </h3>
        <p className="landing-feature-description">
          {feature.description}
        </p>
      </div>
    </div>
  );
}