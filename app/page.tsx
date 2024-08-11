import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

import { HeroSection } from '@/components/layout/sections/hero';
import { SponsorsSection } from '@/components/layout/sections/sponsors';
import { BenefitsSection } from '@/components/layout/sections/benefits';
import { FeaturesSection } from '@/components/layout/sections/features';
import { ServicesSection } from '@/components/layout/sections/services';
import { TestimonialSection } from '@/components/layout/sections/testimonial';
import { TeamSection } from '@/components/layout/sections/team';
import { PricingSection } from '@/components/layout/sections/pricing';
import { FAQSection } from '@/components/layout/sections/faq';
import { FooterSection } from '@/components/layout/sections/footer';

// const font = Poppins({
//   subsets: ['latin'],
//   weight: ['600'],
// });

export default function Home() {
  return (
    // <main className="flex h-full flex-col items-center justify-center">
    //   <div className="space-y-6 text-center">
    //     <h1
    //       className={cn(
    //         'text-6xl font-semibold text-white drop-shadow-md',
    //         font.className
    //       )}
    //     >
    //       🔐 Auth
    //     </h1>
    //     <p className="text-white text-lg">A simple authentication service</p>

    //     <div>
    // <LoginButton mode="modal" asChild>
    //   <Button variant="secondary" size="lg">
    //     Sign in
    //   </Button>
    // </LoginButton>
    //     </div>
    //   </div>
    // </main>
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
