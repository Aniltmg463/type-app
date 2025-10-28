import type { ShopProduct } from '../types/shop';
import Image from 'next/image';

interface ShopProductCardProps {
  product: ShopProduct;
  featured?: boolean;
}

export default function ShopProductCard({ product, featured = false }: ShopProductCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className={`relative ${featured ? 'h-[735px]' : 'h-[284px]'} rounded-lg overflow-hidden bg-gray-100`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-description">{product.description}</p>
        <p className="product-card-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}