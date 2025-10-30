'use client'

import { ShoppingCart } from 'lucide-react';
import type { Product } from '../types/product';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const router = useRouter();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 px-5 sm:px-10 lg:px-20 py-8 sm:py-12 lg:py-16">
      <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-xl overflow-hidden bg-product-image-bg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-subheading">{product.subheading}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-body">{product.description}</p>
        <button 
          type="button"
          onClick={() => router.push('/cart')}
          className="bg-product-button-bg text-product-button-text py-3 sm:py-4 rounded-md text-sm sm:text-base font-inter font-medium hover:opacity-90 hover:scale-105 transition-all duration-200 w-full flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to cart
        </button>
        <p className="product-fine-print">{product.additionalInfo}</p>
      </div>
    </section>
  );
}