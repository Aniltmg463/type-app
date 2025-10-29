import ProductDetailPage from "../components/ProductDetailPage";
import { mockRootProps } from "../data/productMockData";

export default function Home() {
  return (
    <>
      <ProductDetailPage {...mockRootProps} />
    </>
  );
}