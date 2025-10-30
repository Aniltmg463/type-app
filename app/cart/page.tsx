import { mockCartPageProps } from "../data/cartMockData";
import CartPage from './../components/CartPage';

export default function Page() {
  return <CartPage {...mockCartPageProps} />;
}