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
  Building2,
  TrendingDown,
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
            className="flex flex-col justify-between p-8 min-h-[280px] hover:bg-secondary transition-colors"
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

/* ─── WHY FLASHSPACE — Bento Grid ─── */
const BentoCard = ({
  children,
  className = "",
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    style={style}
    className={`rounded-[24px] border border-border/40 p-5 lg:p-6 flex flex-col justify-between shadow-[0_2px_40px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_50px_-12px_rgba(0,0,0,0.15)] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const WhyFlashSpace = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  /* Icon: primary (green) container + secondary (yellow) icon */
  const IconBox = ({ children }: { children: React.ReactNode }) => (
    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
      {children}
    </div>
  );

  return (
    <section className="py-12 lg:py-16 bg-muted/30" aria-labelledby="why-flashspace-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4">

          {/* Element 5 — ₹699/mo — Warm cream/beige */}
          <BentoCard className="md:row-span-2 md:min-h-[360px] order-2 md:order-none relative overflow-hidden border-transparent" delay={0} style={{ background: 'hsl(40 30% 97%)' }}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary tracking-wide">
                <IndianRupee className="w-3.5 h-3.5" /> Pricing
              </span>
            </div>
            <div className="mt-auto relative z-10">
              <h3 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-none mb-2">
                ₹699<span className="text-lg font-medium text-muted-foreground">/mo</span>
              </h3>
              <p className="text-foreground/80 font-semibold text-base mb-1">Premium Address. No Premium Price.</p>
              <p className="text-muted-foreground text-sm leading-relaxed">Everything you need to register your business — without the overhead of a physical office.</p>
            </div>
          </BentoCard>

          {/* Element 1 — 5-10x Cheaper — Light mint/sage */}
          <BentoCard className="md:col-span-2 relative overflow-hidden order-3 md:order-none border-transparent" delay={0.05} style={{ background: 'hsl(150 20% 97%)' }}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary tracking-wide">
                <TrendingDown className="w-3.5 h-3.5" /> Cost Savings
              </span>
            </div>
            <div className="mt-auto relative z-10">
              <h3 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-none mb-2">5–10x Cheaper.</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Than renting physical office space. Save thousands every month while staying fully compliant.</p>
            </div>
          </BentoCard>

          {/* Center Piece — Primary green, clean */}
          <BentoCard className="bg-primary text-primary-foreground border-primary/20 items-center text-center order-first md:order-none" delay={0}>
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <h2 id="why-flashspace-heading" className="text-xl sm:text-2xl font-semibold leading-tight tracking-tight">Why Businesses Choose FlashSpace</h2>
              <Button size="lg" variant="white" className="rounded-xl font-bold shadow-lg" onClick={() => scrollTo("#contact")} aria-label="Get started with FlashSpace virtual office">
                Get Started <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </div>
          </BentoCard>

          {/* Element 2 — 24hr Setup — Soft lavender */}
          <BentoCard className="relative overflow-hidden order-4 md:order-none border-transparent" delay={0.1} style={{ background: 'hsl(40 25% 97%)' }}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary tracking-wide">
                <Clock className="w-3.5 h-3.5" /> Quick Setup
              </span>
            </div>
            <div className="mt-auto relative z-10">
              <h3 className="text-3xl lg:text-4xl font-black tracking-tight text-foreground leading-none mb-2">24hr Setup.</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">Complete documentation and setup within a single business day.</p>
            </div>
          </BentoCard>

          {/* Element 4 — Premium Address — Soft peach */}
          <BentoCard className="md:col-span-2 relative overflow-hidden order-5 md:order-none border-transparent" delay={0.15} style={{ background: 'hsl(20 40% 96%)' }}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary tracking-wide mb-3">
                <Building2 className="w-3.5 h-3.5" /> Premium Locations
              </span>
              <h3 className="text-xl lg:text-2xl font-black text-foreground tracking-tight mb-1">Premium Business Address.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Prestigious prime locations in Delhi, Mumbai, Bangalore & more cities across India.</p>
            </div>
          </BentoCard>

          {/* Element 3 — 100% Compliant — Cool slate */}
          <BentoCard className="relative overflow-hidden order-6 md:order-none border-transparent" delay={0.18} style={{ background: 'hsl(160 20% 95%)' }}>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary tracking-wide">
                <Shield className="w-3.5 h-3.5" /> Compliance
              </span>
            </div>
            <div className="mt-auto relative z-10">
              <h3 className="text-lg font-black text-foreground tracking-tight mb-1">100% Compliant.</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">GST & MCA approved across all Indian states.</p>
            </div>
          </BentoCard>
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
