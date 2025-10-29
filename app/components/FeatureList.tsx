import type { ShopFeature } from '../types/shop';
import GlobeIcon from './icons/GlobeIcon';
import LockIcon from './icons/LockIcon';
import UserIcon from './icons/UserIcon';
import CalendarIcon from './icons/CalendarIcon';

interface FeatureListProps {
  features: ShopFeature[];
}

const iconComponents = {
  globe: GlobeIcon,
  lock: LockIcon,
  user: UserIcon,
  calendar: CalendarIcon,
};

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 lg:gap-y-12">
      {features.map((feature) => {
        const IconComponent = iconComponents[feature.icon as keyof typeof iconComponents];
        return (
          <div key={feature.id} className="flex flex-col gap-2">
            {IconComponent && (
              <IconComponent width={24} height={24} color="#454545" />
            )}
            <h3 className="text-xl lg:text-2xl font-inter font-medium text-product-text-primary">
              {feature.title}
            </h3>
            <p className="text-lg lg:text-xl font-inter font-normal leading-relaxed lg:leading-[30px] text-product-text-secondary">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}