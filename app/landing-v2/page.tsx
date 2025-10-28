import LandingPageV2 from '../components/LandingPageV2';
import { mockLandingV2Data } from '../data/landingV2MockData';

export default function LandingV2Page() {
  return <LandingPageV2 {...mockLandingV2Data} />;
}