import { AppLayout } from "@/components/layout/AppLayout";
import { HeroWithSearch } from "@/components/sections/HeroWithSearch";
import { BusinessSetupOverview } from "@/components/sections/BusinessSetupOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SetupProcess } from "@/components/sections/SetupProcess";
import { StatsByNumbers } from "@/components/sections/StatsByNumbers";
import { CostCalculator } from "@/components/sections/CostCalculator";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <AppLayout>
      <main>
        <HeroWithSearch />
        <BusinessSetupOverview />
        <SetupProcess />
        <StatsByNumbers />
        <WhyChooseUs />
        <CostCalculator />
      </main>
      <Footer />
    </AppLayout>
  );
};

export default Index;
