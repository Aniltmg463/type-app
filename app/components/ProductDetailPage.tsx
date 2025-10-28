import type { ProductDetailPageProps } from '../types/product';
import Header from './Header';
import ProductDetail from './ProductDetail';
import RelatedProducts from './RelatedProducts';
import Footer from './Footer';

export default function ProductDetailPage({
  product,
  relatedProducts,
  navigation,
  socialIcons,
}: ProductDetailPageProps) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header navigationLinks={navigation.header} />
      <main>
        <ProductDetail product={product} />
        <RelatedProducts products={relatedProducts} />
      </main>
      <Footer navigationLinks={navigation.footer} socialIcons={socialIcons} />
    </div>
  );
}