import { Navbar } from "@/components/layout/Navbar";
import { HeroWithSearch } from "@/components/sections/HeroWithSearch";
import { WorkspaceCategories } from "@/components/sections/WorkspaceCategories";
import { EditorialIntro } from "@/components/sections/EditorialIntro";
import { WorkWhereYouThrive } from "@/components/sections/WorkWhereYouThrive";
import { PlatformFeatures } from "@/components/sections/PlatformFeatures";
import { DarkTestimonial } from "@/components/sections/DarkTestimonial";
import { EditorialTestimonial } from "@/components/sections/EditorialTestimonial";
import { OneSuite } from "@/components/sections/OneSuite";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { FeatureList } from "@/components/sections/FeatureList";
import { FeatureCTA } from "@/components/sections/FeatureCTA";
import { Stats } from "@/components/sections/Stats";
import { ClientImpact } from "@/components/sections/ClientImpact";
import { StackedTestimonials } from "@/components/sections/StackedTestimonials";
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
        <EditorialIntro />
        <WorkWhereYouThrive />
        <PlatformFeatures />
        <DarkTestimonial />
        <EditorialTestimonial />
        <OneSuite />
        <ProductShowcase />
        <TestimonialsCarousel />
        <FeatureList />
        <FeatureCTA />
        <Stats />
        <ClientImpact />
        <StackedTestimonials />
        <BlogSection />
        <FounderTestimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
