import LandingPageV2 from './components/LandingPageV2';
import ProductDetailPage from './components/ProductDetailPage';
import { mockLandingV2Data } from './data/landingV2MockData';
import { mockRootProps } from './data/productMockData';

export default function Home() {
  return (
    <>
      <LandingPageV2 {...mockLandingV2Data}/>
    </>
  );
}