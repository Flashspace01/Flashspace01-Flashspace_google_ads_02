import { AppLayout } from "@/components/layout/AppLayout";
import { HeroWithSearch } from "@/components/sections/HeroWithSearch";
import { EcommerceServices } from "@/components/sections/EcommerceServices";
import { WhyEcommerce } from "@/components/sections/WhyEcommerce";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { ClientVoices } from "@/components/sections/ClientVoices";
import { FAQSection } from "@/components/sections/FAQSection";
import { StatsByNumbers } from "@/components/sections/StatsByNumbers";

import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <AppLayout>
      <main>
        <HeroWithSearch />
        <EcommerceServices />
        <WhyEcommerce />
        <HowItWorks />
        <TrustBanner />
        <ClientVoices />
        <FAQSection />
        <StatsByNumbers />
        
      </main>
      <Footer />
    </AppLayout>
  );
};

export default Index;
