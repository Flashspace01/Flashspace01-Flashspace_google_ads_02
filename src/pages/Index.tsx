import { AppLayout } from "@/components/layout/AppLayout";
import { HeroWithSearch } from "@/components/sections/HeroWithSearch";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { BusinessSetupIntro } from "@/components/sections/BusinessSetupIntro";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <AppLayout>
      <main>
        <HeroWithSearch />
        <ServicesOverview />
        <BusinessSetupIntro />
        <TrustSection />
        <CTA />
      </main>
      <Footer />
    </AppLayout>
  );
};

export default Index;
