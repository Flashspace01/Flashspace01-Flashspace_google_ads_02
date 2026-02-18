import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BusinessSetupContent } from "@/components/sections/BusinessSetupContent";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { motion } from "framer-motion";

const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"];

const faqs = [
  {
    question: "How long does it take to register a company in India?",
    answer: "The entire process typically takes 7–10 business days, depending on the type of entity and document readiness. With Flashspace, we handle all filings and follow-ups so you can focus on building your business."
  },
  {
    question: "What is the difference between Pvt Ltd, LLP, and OPC?",
    answer: "A Private Limited (Pvt Ltd) company is ideal for startups seeking funding, offering limited liability and share-based ownership. An LLP (Limited Liability Partnership) suits professional services with flexible management. An OPC (One Person Company) is designed for solo entrepreneurs who want corporate benefits with a single member."
  },
  {
    question: "What documents are required for company registration?",
    answer: "You'll need PAN and Aadhaar of all directors, passport-size photographs, proof of registered office address (utility bill or rent agreement), and a No Objection Certificate from the property owner. Flashspace guides you through each document step-by-step."
  },
  {
    question: "Do I need GST registration for my business?",
    answer: "GST registration is mandatory if your annual turnover exceeds ₹20 lakhs (₹10 lakhs for special category states) or if you sell goods/services online. Even below the threshold, voluntary registration can help you claim input tax credits and build credibility."
  },
];

const BusinessSetup = () => {
  const [city, setCity] = useState("");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32" style={{ background: 'hsla(0, 0%, 97%, 0.9)' }}>
          {/* Subtle gradient blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.07] pointer-events-none">
            <div className="absolute inset-0 rounded-full bg-primary blur-[120px] translate-x-1/3 -translate-y-1/4" />
          </div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.05] pointer-events-none">
            <div className="absolute inset-0 rounded-full bg-secondary blur-[100px] -translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Heading */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-[56px] font-medium text-foreground tracking-tight leading-[1.1] mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Business Setup{" "}
                <span className="text-primary">Made Simple</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Complete end-to-end support for company registration, GST filing,
                licenses, and legal compliance — launch your business in 7–10 days.
              </motion.p>

              {/* Input Group */}
              <motion.div
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex-1 min-w-0">
                  <Select value={city} onValueChange={setCity}>
                    <SelectTrigger className="h-12 rounded-xl bg-card border-border shadow-soft text-sm w-full">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {cities.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button size="lg" className="h-12 rounded-xl px-8 w-full sm:w-auto shadow-soft">
                  Get Started
                </Button>
              </motion.div>

              {/* Trust line */}
              <motion.p
                className="mt-6 text-xs text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                Trusted by 500+ startups across India
              </motion.p>
            </div>
          </div>
        </section>

        {/* Sticky sidebar content sections */}
        <BusinessSetupContent />

        {/* Companies Marquee */}
        <section className="py-14 lg:py-20 overflow-hidden" style={{ background: 'hsl(0, 0%, 97%)' }}>
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to right, hsl(0, 0%, 97%), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to left, hsl(0, 0%, 97%), transparent)' }} />
            
            <div className="flex animate-marquee">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex shrink-0 items-center gap-16 px-8">
                  {[
                    "Nietzsche", "GlobalBank", "Spherule", "FeatherDev",
                    "Lightbox", "Boltshift", "Acme Corp", "Luminous",
                  ].map((name) => (
                    <div key={`${setIdx}-${name}`} className="flex items-center gap-2.5 shrink-0">
                      <div className="w-7 h-7 rounded-md bg-muted-foreground/20 flex items-center justify-center">
                        <div className="w-3.5 h-3.5 rounded-sm bg-muted-foreground/40" />
                      </div>
                      <span className="text-muted-foreground text-base font-semibold tracking-tight whitespace-nowrap">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <TestimonialSection />

        {/* FAQ Section */}
        <section className="py-20 lg:py-28" style={{ background: 'hsl(0, 0%, 97%)' }}>
          <div className="container mx-auto px-4 lg:px-8 max-w-[1100px]">
            <div className="text-center mb-14">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-foreground tracking-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Everything you need to know about business registration and setup
              </motion.p>
            </div>

            <Accordion type="single" collapsible className="space-y-5">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <AccordionItem
                    value={`faq-${i}`}
                    className="bg-card border border-border/60 rounded-2xl px-6 shadow-soft transition-shadow hover:shadow-soft-lg data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="text-[15px] sm:text-base font-medium text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessSetup;
