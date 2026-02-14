import { Navbar } from "@/components/layout/Navbar";
import { HeroWithSearch } from "@/components/sections/HeroWithSearch";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { ScrollNavLayout } from "@/components/sections/ScrollNavLayout";
import { WorkspaceCategories } from "@/components/sections/WorkspaceCategories";
import { WorkWhereYouThrive } from "@/components/sections/WorkWhereYouThrive";
import { ProductShowcase } from "@/components/sections/ProductShowcase";

import { FeatureCTA } from "@/components/sections/FeatureCTA";
import { Stats } from "@/components/sections/Stats";

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
        <DashboardPreview />
        <ScrollNavLayout />
        <WorkspaceCategories />
        <WorkWhereYouThrive />
        <ProductShowcase />
        
        <FeatureCTA />
        <Stats />
        
        <FounderTestimonial />
        <BlogSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
