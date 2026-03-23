import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Mail,
  Globe,
  Clock,
  BadgeCheck,
  IndianRupee,
  Headphones,
  CheckCircle2,
  MessageCircle,
  Plus,
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
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: d, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

/* ─── HERO — centered, clean bg ─── */
const HeroSection = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-background py-28 lg:py-36">
      {/* subtle gradient accent */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, hsl(var(--muted)/0.3) 0%, transparent 60%)" }} />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight text-foreground leading-[1.2] lg:leading-[1.15] mb-5"
        >
          Get GST-Ready Virtual Office{" "}
          <span className="text-primary">@ ₹699/month</span>
        </motion.h1>

        <motion.p
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto"
        >
          Valid for GST & MCA. Prime business address. No office rent. Setup in 24 hours.
        </motion.p>

        <motion.div custom={0.15} variants={fadeUp} initial="hidden" animate="visible" className="mb-10">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg font-medium px-10 h-14 rounded-xl text-base"
            onClick={() => scrollTo("#contact")}
          >
            Get Virtual Office Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        <motion.div custom={0.2} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-5 text-muted-foreground text-sm">
          {["1000+ Businesses", "GST Approved", "No Hidden Fees"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ─── SCAN STRIP ─── */
const ScanStrip = () => (
  <section className="py-4 bg-secondary border-y border-secondary/60">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
        {["₹699/month", "24-Hour Setup", "GST + MCA Ready", "Pan-India Locations"].map((t) => (
          <span key={t} className="text-sm font-bold text-secondary-foreground tracking-wide">{t}</span>
        ))}
      </div>
    </div>
  </section>
);

/* ─── PAIN HIT + CARDS ─── */
const coreCards = [
  {
    icon: Shield,
    title: "GST Registration Ready",
    desc: "Use this address for GST registration without compliance issues. Fully accepted by GST authorities across all Indian states.",
  },
  {
    icon: BadgeCheck,
    title: "MCA Approved Address",
    desc: "Register your company with a verified address that meets all Ministry of Corporate Affairs requirements for filings.",
  },
  {
    icon: Mail,
    title: "Mail Handling Included",
    desc: "We receive all business mail at your registered address, scan it, and forward it to you digitally within 24 hours.",
  },
  {
    icon: Globe,
    title: "Work From Anywhere",
    desc: "Run your business from home, a café, or while traveling. Your address stays professional and compliant at all times.",
  },
];

const PainAndCards = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
          Stop Paying ₹10,000/month for <span className="text-primary italic">Just an Address</span>
        </h2>
        <p className="text-muted-foreground text-base max-w-lg mx-auto">
          You don't need an office. You need a compliant address.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border border border-border rounded-2xl overflow-hidden bg-card">
        {coreCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="flex flex-col justify-between p-8 min-h-[280px] hover:bg-muted/30 transition-colors"
          >
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
            <div className="mt-8">
              <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer">
                <Plus className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── WHY FLASHSPACE — split layout ─── */
const whyPoints = [
  { icon: IndianRupee, text: "5–10x cheaper than renting office space" },
  { icon: Clock, text: "Complete setup within 24 hours" },
  { icon: BadgeCheck, text: "Plans starting at just ₹699/month" },
  { icon: Shield, text: "100% GST & MCA compliant" },
  { icon: Headphones, text: "Dedicated support after purchase" },
];

const WhyFlashSpace = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — heading + intro */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Why FlashSpace</span>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-foreground tracking-tight leading-[1.15] mb-5">
              Why Businesses Choose FlashSpace
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
              Everything you need to register and run your business — without the overhead of a physical office.
            </p>
            <Button size="lg" className="rounded-xl font-bold px-8" onClick={() => scrollTo("#contact")}>
              Get Started — ₹699/month
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* Right — stacked benefit rows */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="space-y-4">
              {whyPoints.map((b, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-border/50 last:border-0">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-base font-semibold text-foreground">{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── TRUST ─── */
const trustStats = [
  { value: "1,000+", label: "Businesses Registered" },
  { value: "28+", label: "States Covered" },
  { value: "24hrs", label: "Avg. Setup Time" },
  { value: "98%", label: "Client Satisfaction" },
];

const TrustSection = () => (
  <section className="py-16 lg:py-20 bg-muted/20 border-y border-border/40">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2">
          Trusted by 1000+ Businesses Across India
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-10">
          Startups, freelancers & growing brands use FlashSpace to register and scale.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto">
        {trustStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-3xl lg:text-4xl font-bold text-primary tracking-tight">{stat.value}</span>
            <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── HOW IT WORKS ─── */
const steps = [
  { num: "01", title: "Choose Your City", desc: "Pick from prime locations across Delhi, Mumbai, Bangalore, Chennai & more." },
  { num: "02", title: "Submit Documents", desc: "Upload basic KYC — PAN, Aadhaar & business details. Takes under 5 minutes." },
  { num: "03", title: "Get Your Address", desc: "Receive your GST-ready business address within 24 hours. Start operating immediately." },
];

const HowItWorksSection = () => (
  <section className="py-20 lg:py-28 bg-muted/20">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">How It Works</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
          Get Started in 3 Simple Steps
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <span className="text-lg font-bold text-primary">{step.num}</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);




/* ─── FAQ ─── */
const faqs = [
  { q: "Is it GST valid?", a: "Yes — fully compliant and accepted across all states." },
  { q: "How fast?", a: "Documentation completed within 24 hours." },
  { q: "Hidden charges?", a: "None. What you see is what you pay." },
  { q: "Which cities?", a: "All major Indian cities — Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune & more." },
];

const FAQSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">Frequently Asked Questions</h2>
      </motion.div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
            <AccordionTrigger className="text-left text-foreground font-semibold text-base hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);



/* ─── STICKY MOBILE CTA ─── */
const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card/95 backdrop-blur-md border-t border-border/40 px-4 py-3 safe-area-bottom">
      <Button
        className="w-full bg-primary text-primary-foreground font-bold h-12 rounded-xl text-base"
        onClick={() => scrollTo("#contact")}
      >
        Get @ ₹699
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
      <ScanStrip />
      <PainAndCards />
      <WhyFlashSpace />
      <HowItWorksSection />
      <TrustSection />
      
      <FAQSection />
      
    </main>
    <Footer />
    <StickyMobileCTA />
  </AppLayout>
);

export default VirtualOfficeLanding;
