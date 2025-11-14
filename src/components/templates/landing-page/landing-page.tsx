import {
  HeroSection,
  FeatureSection,
  SupportSection,
  CustomerStorySection,
} from './sections';

export function LandingPage() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
    </article>
  );
}
