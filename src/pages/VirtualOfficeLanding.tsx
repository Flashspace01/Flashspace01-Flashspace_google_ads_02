import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
  Send,
  CheckCircle,
  MapPin,
  Star,
  Quote,
  FileText,
  CreditCard,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AppLayout } from "@/components/layout/AppLayout";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect, createContext, useContext } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: d, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

/* ─── FORM DIALOG CONTEXT ─── */
const FormDialogContext = createContext<{ open: () => void }>({ open: () => {} });
const useFormDialog = () => useContext(FormDialogContext);

/* ─── LEAD FORM DIALOG ─── */
const cities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
  "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Other",
];

const LeadFormDialog = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [form, setForm] = useState({ name: "", email: "", city: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.city) errs.city = "Please select a city";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
      // Reset after close animation
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", city: "" });
        setErrors({});
      }, 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Thank you!</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We've received your enquiry. Our team will reach out within 24 hours with a tailored plan for your city.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-foreground tracking-tight">Get Your Virtual Office</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Fill in the details and we'll set you up within 24 hours. Starting at ₹699/month.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <Label htmlFor="lead-name" className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</Label>
                <Input id="lead-name" placeholder="Your name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className={errors.name ? "border-destructive" : ""} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="lead-email" className="text-sm font-medium text-foreground mb-1.5 block">Email Address *</Label>
                <Input id="lead-email" type="email" placeholder="you@company.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className={errors.email ? "border-destructive" : ""} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="lead-city" className="text-sm font-medium text-foreground mb-1.5 block">
                  <MapPin className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
                  City for Virtual Office *
                </Label>
                <select
                  id="lead-city"
                  value={form.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.city ? "border-destructive" : "border-input"}`}
                >
                  <option value="">Select your city</option>
                  {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
              </div>
              <Button type="submit" size="lg" className="w-full h-12 text-base font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className="w-4 h-4 mr-2" />
                Get Your Virtual Office
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

/* ─── HERO — centered, clean bg ─── */
const HeroSection = () => {
  const { open } = useFormDialog();

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-background py-28 lg:py-36">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
            <Zap className="w-3 h-3" /> India's Most Affordable Virtual Office
          </span>
        </motion.div>

        <motion.h1
          custom={0.05}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight text-white leading-[1.2] lg:leading-[1.15] mb-5"
        >
          Virtual Office{" "}
          <span className="text-secondary">@ ₹699/month</span>
          <br />
          <span className="text-white/70 text-xl sm:text-2xl lg:text-3xl font-medium">Activated in Just 1–2 Days</span>
        </motion.h1>

        <motion.p
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto"
        >
          GST & MCA approved. Premium business address. No office rent. The cheapest and fastest way to get your business registered.
        </motion.p>

        <motion.div custom={0.15} variants={fadeUp} initial="hidden" animate="visible" className="mb-10">
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg font-medium px-10 h-14 rounded-xl text-base"
            onClick={open}
          >
            Get Virtual Office Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        <motion.div custom={0.2} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-5 text-muted-foreground text-sm">
          {["1000+ Businesses", "GST Approved", "No Hidden Fees", "Setup in 1-2 Days"].map((t) => (
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

const PainAndCards = () => {
  const { open } = useFormDialog();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
            Stop Paying ₹10,000/month for <span className="text-primary italic">Just an Address</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            You don't need an office. You need a compliant address — and we'll set it up in 1-2 days.
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
              className="flex flex-col justify-between p-8 min-h-[280px] hover:bg-secondary transition-colors cursor-pointer"
              onClick={open}
            >
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
              <div className="mt-8">
                <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Plus className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── WHY FLASHSPACE — Bento Grid ─── */
const BentoCard = ({
  children,
  className = "",
  delay = 0,
  style,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    style={style}
    onClick={onClick}
    className={`rounded-[24px] border border-border/40 p-5 lg:p-6 flex flex-col justify-between shadow-[0_2px_40px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_50px_-12px_rgba(0,0,0,0.15)] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
  >
    {children}
  </motion.div>
);

const WhyFlashSpace = () => {
  const { open } = useFormDialog();

  return (
    <section className="py-12 lg:py-16 bg-muted/30" aria-labelledby="why-flashspace-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4">

          {/* ₹699/mo — Pale yellow */}
          <BentoCard className="md:row-span-2 md:min-h-[360px] order-2 md:order-none relative overflow-hidden border-transparent" delay={0} style={{ background: 'hsl(48 60% 96%)' }}>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary tracking-wide">
                <IndianRupee className="w-3.5 h-3.5" /> Pricing
              </span>
            </div>
            <div className="mt-auto relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground leading-none mb-3">
                ₹699<span className="text-base font-medium text-muted-foreground">/mo</span>
              </h3>
              <p className="text-foreground font-semibold text-base mb-1">Premium Address. No Premium Price.</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">Everything you need to register — without the overhead of a physical office.</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer" onClick={open}>
                View Plans <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </BentoCard>

          {/* 5-10x Cheaper — Light green */}
          <BentoCard className="md:col-span-2 relative overflow-hidden order-3 md:order-none border-transparent" delay={0.05} style={{ background: 'hsl(140 30% 96%)' }}>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary tracking-wide mb-4">
                <TrendingDown className="w-3.5 h-3.5" /> Cost Savings
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground leading-none mb-3">5–10x Cheaper.</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">Than renting physical office space. Save thousands every month.</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer" onClick={open}>
                Compare Costs <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </BentoCard>

          {/* Center — Yellow bg with green text */}
          <BentoCard className="bg-secondary text-foreground border-secondary/20 items-center text-center order-first md:order-none" delay={0}>
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <h2 id="why-flashspace-heading" className="text-xl sm:text-2xl font-bold leading-tight tracking-tight text-primary">Why Businesses Choose FlashSpace</h2>
              <Button size="lg" className="rounded-xl font-medium shadow-lg bg-primary text-primary-foreground hover:bg-primary/90" onClick={open} aria-label="Get started with FlashSpace virtual office">
                Get Started <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </div>
          </BentoCard>

          {/* 24hr Setup — Light blue */}
          <BentoCard className="relative overflow-hidden order-4 md:order-none border-transparent" delay={0.1} style={{ background: 'hsl(210 40% 97%)' }}>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary tracking-wide">
                <Clock className="w-3.5 h-3.5" /> Quick Setup
              </span>
            </div>
            <div className="mt-auto relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground leading-none mb-2">24hr Setup.</h3>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer" onClick={open}>
                Start Now <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </BentoCard>

          {/* Premium Address — Soft peach */}
          <BentoCard className="md:col-span-2 relative overflow-hidden order-5 md:order-none border-transparent" delay={0.15} style={{ background: 'hsl(30 30% 97%)' }}>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary tracking-wide mb-3">
                <Building2 className="w-3.5 h-3.5" /> Premium Locations
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight mb-1">Premium Business Address.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">Prestigious prime locations in Delhi, Mumbai, Bangalore & more.</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer" onClick={open}>
                See Locations <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </BentoCard>

          {/* 100% Compliant — Mint green */}
          <BentoCard className="relative overflow-hidden order-6 md:order-none border-transparent" delay={0.18} style={{ background: 'hsl(160 30% 96%)' }}>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary tracking-wide">
                <Shield className="w-3.5 h-3.5" /> Compliance
              </span>
            </div>
            <div className="mt-auto relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight mb-1">100% Compliant.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">GST & MCA approved across all Indian states.</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer" onClick={open}>
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

/* ─── OFFICE GALLERY ─── */
const officeImages = [
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", alt: "Modern coworking space in Mumbai" },
  { src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop", alt: "Premium office in Delhi" },
  { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop", alt: "Professional workspace in Bangalore" },
  { src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop", alt: "Executive office in Chennai" },
];

const OfficeGallery = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Our Locations</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
          Premium Offices Across India
        </h2>
        <p className="text-muted-foreground text-base max-w-lg mx-auto">
          Your registered address will be at one of our professional, fully-equipped business locations.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {officeImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl overflow-hidden aspect-[3/2] group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── GET STARTED IN 3 STEPS ─── */
const threeSteps = [
  {
    num: "01",
    icon: MapPin,
    title: "Choose a Location",
    desc: "Pick from premium addresses in Mumbai, Delhi, Bangalore, Chennai, Hyderabad & 20+ cities across India.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Submit KYC + Make Payment",
    desc: "Upload basic documents (PAN, Aadhaar) and make a simple payment. Takes under 5 minutes.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Get Your Virtual Office Activated",
    desc: "Your GST-ready virtual office is activated within 1-2 days. Start operating immediately.",
  },
];

const ThreeStepsSection = () => {
  const { open } = useFormDialog();

  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">How It Works</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Get Started in 3 Simple Steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {threeSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 relative">
                <step.icon className="w-7 h-7 text-primary" />
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">{step.num}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-12 rounded-xl" onClick={open}>
            Get Started Now <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── TESTIMONIALS ─── */
const testimonials = [
  {
    quote: "We were losing TCS credits every month without even knowing it. Flash Space set up our multi-state VPOB in under 10 days. Now we sell in 12 states with zero compliance issues.",
    name: "Priya Sharma",
    title: "Founder, LuxeCart",
    rating: 5,
  },
  {
    quote: "Managing GST across multiple states felt impossible as a solo founder. Flash Space handled everything — VPOB, filings, TDS recovery. We scaled from 3 states to 18 in two months.",
    name: "Rahul Mehta",
    title: "CEO, UrbanBazaar",
    rating: 5,
  },
  {
    quote: "Our Amazon listings got suspended for compliance gaps. Flash Space not only fixed our GST registration but set us up properly so it never happened again.",
    name: "Anita Desai",
    title: "Founder, CraftNest India",
    rating: 5,
  },
  {
    quote: "Setup was done in literally one day. I was shocked. The cheapest option I found anywhere and they delivered faster than anyone else. Highly recommend.",
    name: "Vikram Joshi",
    title: "CEO, QuickShip Logistics",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Testimonials</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
          Trusted by 1000+ Businesses
        </h2>
        <p className="text-muted-foreground text-base max-w-md mx-auto">
          See why founders and businesses across India choose FlashSpace.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border/50 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-primary/20 mb-2" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.quote}"</p>
            </div>
            <div className="border-t border-border/40 pt-4">
              <p className="text-sm font-bold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── TRUST ─── */
const trustStats = [
  { value: "1,000+", label: "Businesses Registered" },
  { value: "28+", label: "States Covered" },
  { value: "1-2 Days", label: "Avg. Setup Time" },
  { value: "98%", label: "Client Satisfaction" },
];

const TrustSection = () => (
  <section className="py-16 lg:py-20 bg-muted/20 border-y border-border/40">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2">
          India's Cheapest & Fastest Virtual Office
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-10">
          Startups, freelancers & growing brands use FlashSpace to register and scale — in just 1-2 days.
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

/* ─── FAQ ─── */
const faqs = [
  { q: "Is it GST valid?", a: "Yes — fully compliant and accepted across all states." },
  { q: "How fast is the setup?", a: "Your virtual office is activated within 1-2 business days." },
  { q: "Hidden charges?", a: "None. What you see is what you pay. Starting at ₹699/month." },
  { q: "Which cities?", a: "All major Indian cities — Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune & more." },
  { q: "Is this the cheapest option?", a: "Yes — FlashSpace offers the most affordable virtual office in India at ₹699/month with no hidden costs." },
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
  const { open } = useFormDialog();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card/95 backdrop-blur-md border-t border-border/40 px-4 py-3 safe-area-bottom">
      <Button
        className="w-full bg-primary text-primary-foreground font-bold h-12 rounded-xl text-base"
        onClick={open}
      >
        Get @ ₹699
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

/* ─── PAGE ─── */
const VirtualOfficeLanding = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <FormDialogContext.Provider value={{ open: () => setFormOpen(true) }}>
      <AppLayout onNavCtaClick={() => setFormOpen(true)}>
        <main>
          <HeroSection />
          <PainAndCards />
          <WhyFlashSpace />
          <OfficeGallery />
          <ThreeStepsSection />
          <TrustSection />
          <TestimonialsSection />
          <FAQSection />
        </main>
        <Footer />
        <StickyMobileCTA />
        <LeadFormDialog isOpen={formOpen} onClose={() => setFormOpen(false)} />
      </AppLayout>
    </FormDialogContext.Provider>
  );
};

export default VirtualOfficeLanding;
