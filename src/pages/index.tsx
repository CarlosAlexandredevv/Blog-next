import { HeroSection } from '@/components/hero-section';
import { FeatureSection } from '@/components/feature-section';
export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
      </article>
    </>
  );
}
