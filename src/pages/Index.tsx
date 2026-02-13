import { Navbar } from "@/components/layout/Navbar";
import { HeroWithSearch } from "@/components/sections/HeroWithSearch";
import { WorkspaceCategories } from "@/components/sections/WorkspaceCategories";
import { WorkWhereYouThrive } from "@/components/sections/WorkWhereYouThrive";
import { PlatformFeatures } from "@/components/sections/PlatformFeatures";
import { ProductShowcase } from "@/components/sections/ProductShowcase";

import { FeatureList } from "@/components/sections/FeatureList";
import { FeatureCTA } from "@/components/sections/FeatureCTA";
import { Stats } from "@/components/sections/Stats";
import { ClientImpact } from "@/components/sections/ClientImpact";
import { BlogSection } from "@/components/sections/BlogSection";
import { FounderTestimonial } from "@/components/sections/FounderTestimonial";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroWithSearch />
        <WorkspaceCategories />
        <WorkWhereYouThrive />
        <PlatformFeatures />
        <ProductShowcase />
        
        <FeatureList />
        <FeatureCTA />
        <Stats />
        <ClientImpact />
        <BlogSection />
        <FounderTestimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
