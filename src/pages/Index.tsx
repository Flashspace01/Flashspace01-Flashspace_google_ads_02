import { AppLayout } from "@/components/layout/AppLayout";
import { HeroWithSearch } from "@/components/sections/HeroWithSearch";

import { WhyEcommerce } from "@/components/sections/WhyEcommerce";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { ClientVoices } from "@/components/sections/ClientVoices";
import { FAQSection } from "@/components/sections/FAQSection";
import { VPOBCostSection } from "@/components/sections/VPOBCostSection";

import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <AppLayout>
      <main>
        <HeroWithSearch />
        
        <WhyEcommerce />
        <VPOBCostSection />
        <HowItWorks />
        <TrustBanner />
        <ClientVoices />
        <FAQSection />
      </main>
      <Footer />
    </AppLayout>
  );
};

export default Index;
