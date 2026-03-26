import { useEffect } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { InquiryForm } from "./InquiryForm";
import { TrustLogos } from "./TrustLogos";
import { FeatureGrid } from "./FeatureGrid";
import { FAQBlock } from "./FAQBlock";
import { ReviewCarousel } from "./ReviewCarousel";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import type { PageContent } from "@/data/pageContent";
import heroDubai from "@/assets/hero-dubai-skyline.jpg";
import heroPremium from "@/assets/hero-premium-bg.jpg";
import heroCoworking from "@/assets/hero-coworking.jpg";

const heroImages: Record<string, string> = {
  "free-zone-overview": heroDubai,
  "business-activities": heroPremium,
  "uae-residency-visa": heroDubai,
  "free-zone-license-locations": heroPremium,
  "registration-process": heroCoworking,
  "free-zone-solution": heroDubai,
  "dubai-mainland": heroDubai,
  "mainland-sponsorship": heroPremium,
  "mainland-licence": heroDubai,
  "mainland-visas": heroPremium,
  "virtual-setup": heroCoworking,
  "bank-account": heroPremium,
  "accounting-vat": heroDubai,
  "compliance-services": heroPremium,
  "payroll-management": heroCoworking,
  "health-insurance": heroPremium,
  "it-services": heroCoworking,
  "legal-services": heroDubai,
  "mail-management": heroCoworking,
  "virtual-receptionist": heroPremium,
  "tourist-visa": heroDubai,
  "golden-visa": heroDubai,
  "second-citizenship": heroPremium,
  "pro-services": heroDubai,
  "will-preparation": heroPremium,
  "trademark-registration": heroDubai,
};

interface ServicePageTemplateProps {
  page: PageContent;
}

export const ServicePageTemplate = ({ page }: ServicePageTemplateProps) => {
  const bgImage = page.heroImage || heroImages[page.slug] || heroDubai;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = page.metaTitle;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", page.metaDescription);
  }, [page]);

  return (
    <AppLayout>
      <main>
        {/* Hero — Center-aligned, premium open layout */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background image */}
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-foreground/50" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-[900px] text-center py-28 lg:py-36">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] mb-5 text-white"
            >
              {page.heroTitle}
              {page.heroHighlight && (
                <>
                  {" "}
                  <span className="text-secondary">{page.heroHighlight}</span>
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-white/80 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              {page.heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl h-12 px-8 font-semibold text-base shadow-lg"
              >
                Get Started
              </Button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              >
                <ChevronDown className="w-6 h-6 text-secondary" />
              </motion.div>
            </motion.div>
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
