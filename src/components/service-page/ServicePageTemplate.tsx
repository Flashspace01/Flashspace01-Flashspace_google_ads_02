import { useEffect } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { InquiryForm } from "./InquiryForm";
import { TrustLogos } from "./TrustLogos";
import { FeatureGrid } from "./FeatureGrid";
import { FAQBlock } from "./FAQBlock";
import { ReviewCarousel } from "./ReviewCarousel";
import type { PageContent } from "@/data/pageContent";

interface ServicePageTemplateProps {
  page: PageContent;
}

export const ServicePageTemplate = ({ page }: ServicePageTemplateProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = page.metaTitle;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", page.metaDescription);
  }, [page]);

  return (
    <AppLayout>
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-foreground text-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/30" />
          <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
                {page.heroTitle}
              </h1>
              <p className="text-background/70 text-lg leading-relaxed mb-6 max-w-xl">
                {page.heroSubtitle}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12 px-7">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Logos */}
        <section className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
          <TrustLogos logos={page.trustLogos} />
        </section>

        {/* Content + Sidebar */}
        <section className="container mx-auto px-4 lg:px-8 max-w-[1200px] py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main content */}
            <div className="flex-1 space-y-12">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Why Choose This Service
                </h2>
                <FeatureGrid features={page.features} />
              </div>

              <FAQBlock faqs={page.faqs} />
              <ReviewCarousel testimonials={page.testimonials} />
            </div>

            {/* Sidebar */}
            <div className="lg:w-[340px] shrink-0">
              <div className="lg:sticky lg:top-24">
                <InquiryForm inquiryType={page.inquiryType} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </AppLayout>
  );
};
