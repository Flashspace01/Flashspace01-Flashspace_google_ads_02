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
  CheckCircle2,
  ChevronRight,
  MessageCircle,
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
    transition: { duration: 0.5, delay: d, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

/* ─── HERO ─── */
const HeroSection = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-primary">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
              <BadgeCheck className="w-3.5 h-3.5" /> Limited Slots Available
            </span>
          </motion.div>

          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.08] mb-5"
          >
            Get GST-Ready Virtual Office{" "}
            <span className="text-secondary">@ ₹699/month</span>
          </motion.h1>

          <motion.p
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg"
          >
            Valid for GST & MCA. Prime business address. No office rent. Setup in 24 hours.
          </motion.p>

          <motion.div custom={0.2} variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg font-bold px-10 h-14 rounded-xl text-base"
              onClick={() => scrollTo("#contact")}
            >
              Get Virtual Office Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          <motion.div custom={0.25} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-5 text-white/65 text-sm">
            {["1000+ Businesses", "GST Approved", "No Hidden Fees"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── SCAN STRIP ─── */
const ScanStrip = () => (
  <section className="py-4 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {["₹699/month", "24-Hour Setup", "GST + MCA Ready", "Pan-India Locations"].map((t) => (
          <span key={t} className="text-sm font-bold text-secondary-foreground tracking-wide">{t}</span>
        ))}
      </div>
    </div>
  </section>
);

/* ─── PAIN HIT ─── */
const PainHit = () => (
  <section className="py-14 lg:py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
          Stop Paying ₹10,000/month for <span className="text-primary italic">Just an Address</span>
        </h2>
        <p className="text-muted-foreground text-base">
          You don't need an office. You need a compliant address.
        </p>
      </motion.div>
    </div>
  </section>
);

/* ─── CORE BENEFITS ─── */
const coreCards = [
  { icon: Shield, title: "GST Registration Ready", desc: "Use it for GST without issues" },
  { icon: BadgeCheck, title: "MCA Approved Address", desc: "Register your company easily" },
  { icon: Mail, title: "Mail Handling Included", desc: "We receive & manage your mail" },
  { icon: Globe, title: "Work From Anywhere", desc: "No physical office needed" },
];

const CoreBenefits = () => (
  <section className="pb-14 lg:pb-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {coreCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-card rounded-xl border border-border/40 p-6 hover:border-primary/20 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <card.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-1">{card.title}</h3>
            <p className="text-sm text-muted-foreground">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── WHY FLASHSPACE ─── */
const whyPoints = [
  { icon: IndianRupee, text: "5–10x cheaper than office rent" },
  { icon: Clock, text: "Setup in 24 hours" },
  { icon: BadgeCheck, text: "Starting ₹699/month" },
  { icon: Headphones, text: "Dedicated support after purchase" },
];

const WhyFlashSpace = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-foreground tracking-tight leading-[1.15] mb-6">
              Why Businesses Choose <span className="text-primary">FlashSpace</span>
            </h2>
            <Button size="lg" className="rounded-xl font-bold px-8" onClick={() => scrollTo("#contact")}>
              Get Started — ₹699/month
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="grid gap-3">
              {whyPoints.map((b, i) => (
                <div key={i} className="flex items-center gap-4 bg-card rounded-xl border border-border/40 px-5 py-3.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <b.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── HOW IT WORKS ─── */
const steps = [
  { num: "1", title: "Choose city" },
  { num: "2", title: "Upload documents" },
  { num: "3", title: "Get your address" },
];

const HowItWorks = () => (
  <section className="py-14 lg:py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          Get Started in <span className="text-primary">3 Steps</span>
        </h2>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shrink-0">
              {step.num}
            </div>
            <span className="text-base font-semibold text-foreground">{step.title}</span>
            {i < 2 && <ChevronRight className="hidden sm:block w-5 h-5 text-border ml-4" />}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── TRUST ─── */
const TrustSection = () => (
  <section className="py-12 lg:py-16 bg-muted/30">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2">
          Trusted by 1000+ Businesses Across India
        </h2>
        <p className="text-muted-foreground text-sm">
          Startups, freelancers & growing brands use FlashSpace to register and scale.
        </p>
      </motion.div>
    </div>
  </section>
);

/* ─── PRICE PUSH ─── */
const PricePush = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-14 lg:py-18 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-2">
            Start @ Just <span className="text-secondary">₹699/month</span>
          </h2>
          <p className="text-white/60 text-base mb-6">No lock-in. No hidden charges.</p>
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg font-bold px-10 h-13 rounded-xl text-base"
            onClick={() => scrollTo("#contact")}
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── FAQ ─── */
const faqs = [
  { q: "Is it GST valid?", a: "Yes — fully compliant." },
  { q: "How fast?", a: "Within 24 hours." },
  { q: "Hidden charges?", a: "No." },
  { q: "Cities?", a: "All major cities." },
];

const FAQSection = () => (
  <section className="py-14 lg:py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight text-center">FAQ</h2>
      </motion.div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
            <AccordionTrigger className="text-left text-foreground font-semibold text-base hover:no-underline py-4">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

/* ─── FINAL CTA ─── */
const FinalCTA = () => (
  <section id="contact" className="py-16 lg:py-24 bg-foreground relative overflow-hidden">
    <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
          Get Your Business Address <span className="text-secondary italic">Today</span>
        </h2>
        <p className="text-white/50 text-lg mb-8">Fast. Compliant. Affordable.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="xl"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg font-bold rounded-xl"
          >
            Get Virtual Office Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 font-medium rounded-xl"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
        <p className="text-white/30 text-xs mt-6">100% Secure. No spam.</p>
      </motion.div>
    </div>
  </section>
);

/* ─── STICKY CTA ─── */
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
      <PainHit />
      <CoreBenefits />
      <WhyFlashSpace />
      <HowItWorks />
      <TrustSection />
      <PricePush />
      <FAQSection />
      <FinalCTA />
    </main>
    <Footer />
    <StickyMobileCTA />
  </AppLayout>
);

export default VirtualOfficeLanding;
