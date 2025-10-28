import LandingPage from '../components/LandingPage';
import { mockLandingPageProps } from '../data/landingMockData';

export default function Landing() {
  return <LandingPage {...mockLandingPageProps} />;
}