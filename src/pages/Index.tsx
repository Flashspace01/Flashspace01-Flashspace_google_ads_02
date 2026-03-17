import { AppLayout } from "@/components/layout/AppLayout";
import { HeroWithSearch } from "@/components/sections/HeroWithSearch";
import { BusinessSetupOverview } from "@/components/sections/BusinessSetupOverview";
import { SetupProcess } from "@/components/sections/SetupProcess";
import { CostCalculator } from "@/components/sections/CostCalculator";
import { ClientVoices } from "@/components/sections/ClientVoices";
import { FAQSection } from "@/components/sections/FAQSection";
import { StatsByNumbers } from "@/components/sections/StatsByNumbers";

import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <AppLayout>
      <main>
        <HeroWithSearch />
        <BusinessSetupOverview />
        <SetupProcess />
        <div className="py-16 sm:py-24" aria-hidden="true" />
        <CostCalculator />
        <ClientVoices />
        <FAQSection />
        <StatsByNumbers />
      </main>
      <Footer />
    </AppLayout>
  );
};

export default Index;
