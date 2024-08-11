import { FAQSection } from '@/components/layout/sections/faq';
import { HeroSection } from '@/components/layout/sections/hero';
import { TeamSection } from '@/components/layout/sections/team';
import { FooterSection } from '@/components/layout/sections/footer';
import { PricingSection } from '@/components/layout/sections/pricing';
import { BenefitsSection } from '@/components/layout/sections/benefits';
import { FeaturesSection } from '@/components/layout/sections/features';
import { ServicesSection } from '@/components/layout/sections/services';
import { SponsorsSection } from '@/components/layout/sections/sponsors';
import { TestimonialSection } from '@/components/layout/sections/testimonial';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
