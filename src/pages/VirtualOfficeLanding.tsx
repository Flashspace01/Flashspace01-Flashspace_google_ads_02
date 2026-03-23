import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  Shield,
  Mail,
  Globe,
  Clock,
  BadgeCheck,
  IndianRupee,
  Headphones,
  FileText,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Play,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AppLayout } from "@/components/layout/AppLayout";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

/* ─── 1. HERO ─── */
const HeroSection = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: "hsl(var(--primary))" }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5" style={{ background: "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                <BadgeCheck className="w-3.5 h-3.5" /> GST & MCA Compliant
              </span>
            </motion.div>

            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight text-white leading-[1.1] mb-6"
            >
              Get a Legit Virtual Office{" "}
              <span className="text-secondary">Anywhere in India</span>{" "}
              Starting at ₹699/month
            </motion.h1>

            <motion.p
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-white/75 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Prestigious business address, GST registration & mail handling — without paying ₹10,000/month for physical office space.
            </motion.p>

            <motion.div custom={0.3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-4 mb-10">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg font-semibold px-8 h-13 rounded-xl text-base"
                onClick={() => scrollTo("#contact")}
              >
                Get Your Virtual Office
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/25 text-white bg-white/5 hover:bg-white/15 font-medium px-8 h-13 rounded-xl text-base"
                onClick={() => scrollTo("#how-it-works")}
              >
                View Locations
                <MapPin className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            <motion.div custom={0.4} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-4 text-white/70 text-sm">
              {["Trusted by 1000+ brands", "GST Compliant", "MCA Approved"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right side: India map visual */}
          <motion.div
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-secondary/10 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Globe className="w-20 h-20 text-secondary/60 mx-auto" />
                  <p className="text-white/60 text-sm font-medium">Virtual Offices in<br />25+ Cities Across India</p>
                  <div className="flex flex-wrap justify-center gap-2 px-6">
                    {["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune"].map((city) => (
                      <span key={city} className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── 2. SOCIAL PROOF STRIP ─── */
const SocialProofStrip = () => (
  <section className="py-6 bg-card border-y border-border/40">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <p className="text-muted-foreground text-sm font-medium">Trusted by 1000+ Businesses Across India</p>
        <div className="flex items-center gap-6">
          {["Amazon Sellers", "Flipkart Sellers", "Meesho Sellers", "D2C Brands"].map((b) => (
            <span key={b} className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-wider">{b}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── 3. VALUE PROPOSITION ─── */
const valueCards = [
  { icon: MapPin, title: "Prestigious Business Address", desc: "Get a verified address in any major Indian city for GST, MCA, and official correspondence." },
  { icon: Shield, title: "GST Registration Support", desc: "End-to-end GST registration with VPOB documentation handled by our compliance experts." },
  { icon: Mail, title: "Professional Mail Handling", desc: "We receive, scan, and forward your business mail — so you never miss anything important." },
  { icon: Globe, title: "Work From Anywhere", desc: "Run your business from home, a café, or while traveling. Your address stays professional." },
];

const ValueProposition = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">
          Why pay ₹10,000/month for an office<br className="hidden sm:block" /> when you only need the <span className="text-primary italic">address</span>?
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {valueCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card rounded-2xl border border-border/40 p-7 hover:shadow-soft transition-all duration-300 hover:border-primary/20"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
              <card.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 4. WHY FLASHSPACE ─── */
const benefits = [
  { icon: IndianRupee, text: "5–10x cheaper than renting commercial space" },
  { icon: BadgeCheck, text: "Plans starting at just ₹699/month" },
  { icon: Clock, text: "24-hour documentation processing" },
  { icon: Shield, text: "GST & MCA compliant addresses" },
  { icon: Headphones, text: "Dedicated after-sales support" },
  { icon: FileText, text: "Complete paperwork handled for you" },
];

const WhyFlashSpace = () => (
  <section className="py-20 lg:py-28 bg-muted/30">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-flex items-center gap-2 text-sm text-primary font-semibold mb-4 uppercase tracking-wider">Why FlashSpace</span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-foreground tracking-tight leading-[1.15] mb-6">
            The Fastest & Most Affordable Way to{" "}
            <span className="text-primary">Register Your Business</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-8">
            Stop wasting money on expensive office leases. Get everything you need to operate legally — at a fraction of the cost.
          </p>
          <Button size="lg" className="rounded-xl font-semibold px-8">
            Get Started — ₹699/month
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <div className="grid gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-4 bg-card rounded-xl border border-border/40 px-5 py-4 hover:shadow-sm transition-all">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{b.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── 5. HOW IT WORKS ─── */
const steps = [
  { num: "01", title: "Choose Your City & Plan", desc: "Select from 25+ cities across India and pick the plan that fits your needs." },
  { num: "02", title: "Submit Documents Online", desc: "Upload your KYC documents through our secure portal. Takes under 5 minutes." },
  { num: "03", title: "Get Your Address + GST Ready", desc: "Receive your verified business address and GST registration documents." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-sm text-primary font-semibold mb-4 uppercase tracking-wider">Simple Process</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
          Get Your Virtual Office in <span className="text-primary">3 Simple Steps</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              {step.num}
            </div>
            {i < 2 && (
              <ChevronRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-border" />
            )}
            <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 6. TRUST / VIDEO SECTION ─── */
const TrustSection = () => (
  <section className="py-20 lg:py-28 bg-muted/30">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="bg-card rounded-2xl border border-border/40 aspect-video flex items-center justify-center cursor-pointer group hover:shadow-soft transition-all">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Play className="w-7 h-7 text-primary ml-1" />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <span className="inline-flex items-center gap-2 text-sm text-primary font-semibold mb-4 uppercase tracking-wider">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-6">
            Hear from Businesses <span className="italic">Like Yours</span>
          </h2>
          <div className="space-y-6">
            {[
              { quote: "FlashSpace helped us register GST in 5 states within 2 weeks. Our TCS recovery alone paid for the service 10x over.", name: "Rahul M.", role: "Amazon Seller, Delhi" },
              { quote: "No more worrying about compliance. They handle everything from VPOB to filing. Absolute lifesaver for e-commerce sellers.", name: "Priya S.", role: "D2C Brand Founder, Bangalore" },
            ].map((t, i) => (
              <div key={i} className="bg-card rounded-xl border border-border/40 p-5">
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 italic">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── 7. PRICING HOOK ─── */
const PricingHook = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="py-16 lg:py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">Limited Offer</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
            Starting at just <span className="text-secondary">₹699/month</span>
          </h2>
          <p className="text-white/65 text-base mb-8 max-w-md mx-auto">
            Popular cities: Delhi, Mumbai, Bangalore, Hyderabad, Pune, Chennai & more.
          </p>
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg font-semibold px-10 h-13 rounded-xl text-base"
            onClick={() => scrollTo("#contact")}
          >
            Get Started Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── 8. FAQ ─── */
const faqs = [
  { q: "Is this valid for GST registration?", a: "Yes. Our VPOB addresses are fully verified and accepted by GST authorities across all Indian states for registration purposes." },
  { q: "Is this MCA compliant?", a: "Absolutely. Our addresses meet all Ministry of Corporate Affairs requirements for company registration and annual filings." },
  { q: "How long does it take?", a: "Most setups are completed within 7–14 business days, including documentation, verification, and GST registration." },
  { q: "What documents are required?", a: "You'll need basic KYC documents — PAN card, Aadhaar, passport-size photo, and your business registration certificate (if applicable)." },
  { q: "Do I get mail handling?", a: "Yes. We receive all business mail at your virtual address, scan it, and forward it to you digitally within 24 hours." },
  { q: "Which cities are available?", a: "We offer virtual office addresses in 25+ cities including Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, and more." },
];

const FAQSectionLanding = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-24 lg:self-start">
          <span className="inline-flex items-center gap-2 text-sm text-primary font-semibold mb-4 uppercase tracking-wider">FAQ</span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-foreground leading-[1.15] tracking-tight mb-5">
            Common questions about<br />virtual offices.
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
            Can't find what you're looking for? Reach out and we'll respond within 24 hours.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left text-foreground font-medium text-base lg:text-lg hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── 9. FINAL CTA ─── */
const FinalCTA = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="contact" className="py-20 lg:py-28 bg-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Register Your Business Address <span className="italic text-secondary">in Minutes</span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto mb-10">
            No office. No hassle. Just a compliant business address starting at ₹699/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg font-semibold rounded-xl"
            >
              Get Your Virtual Office Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 font-medium rounded-xl"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── STICKY MOBILE CTA ─── */
const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card/95 backdrop-blur-md border-t border-border/40 px-4 py-3 safe-area-bottom">
      <Button
        className="w-full bg-primary text-primary-foreground font-semibold h-12 rounded-xl text-base"
        onClick={() => scrollTo("#contact")}
      >
        Get Your Virtual Office — ₹699/mo
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

/* ─── PAGE ─── */
const VirtualOfficeLanding = () => (
  <AppLayout>
    <main>
      <HeroSection />
      <SocialProofStrip />
      <ValueProposition />
      <WhyFlashSpace />
      <HowItWorksSection />
      <TrustSection />
      <PricingHook />
      <FAQSectionLanding />
      <FinalCTA />
    </main>
    <Footer />
    <StickyMobileCTA />
  </AppLayout>
);

export default VirtualOfficeLanding;
