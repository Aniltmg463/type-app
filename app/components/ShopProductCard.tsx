import type { ShopProduct } from '../types/shop';
import Image from 'next/image';

interface ShopProductCardProps {
  product: ShopProduct;
  featured?: boolean;
}

export default function ShopProductCard({ product, featured = false }: ShopProductCardProps) {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className={`relative ${featured ? 'h-[400px] sm:h-[500px] lg:h-[735px]' : 'h-[250px] sm:h-[284px]'} rounded-lg overflow-hidden bg-gray-100`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl lg:text-2xl font-inter font-medium text-product-text-primary">{product.name}</h3>
        <p className="text-lg lg:text-xl font-inter font-medium text-product-text-secondary">{product.description}</p>
        <p className="text-lg lg:text-xl font-inter font-medium text-product-text-primary">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}