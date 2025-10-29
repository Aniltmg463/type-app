import type { RelatedProduct } from '../types/product';
import ProductCard from './ProductCard';

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="px-5 sm:px-10 lg:px-20 py-8 sm:py-12 lg:py-16">
      <h2 className="product-heading mb-6 sm:mb-8 lg:mb-12">Related products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-12 lg:gap-y-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}