import type { RelatedProduct } from '../types/product';
import Image from 'next/image';

interface ProductCardProps {
  product: RelatedProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-[17/10] rounded-lg overflow-hidden bg-gray-100">
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