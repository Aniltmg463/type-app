import type { Feature } from '../types/landing';
import Image from 'next/image';

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-[405/405] rounded-lg overflow-hidden bg-gray-100">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-inter font-medium text-product-text-primary">
          {feature.title}
        </h3>
        <p className="text-2xl font-inter font-normal leading-9 text-product-text-secondary">
          {feature.description}
        </p>
      </div>
    </div>
  );
}