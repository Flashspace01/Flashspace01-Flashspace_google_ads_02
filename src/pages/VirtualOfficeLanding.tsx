import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  Shield,
  Mail,
  Globe,
  Clock,
  BadgeCheck,
  IndianRupee,
  CheckCircle2,
  Plus,
  Building2,
  TrendingDown,
  Send,
  MapPin,
  Star,
  Quote,
  FileText,
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
import { TrustedByFilmstrip } from "@/components/sections/TrustedByFilmstrip";
import { useState, useEffect, createContext, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import officeImg1 from "@/assets/office-interior-1.jpg";
import officeImg2 from "@/assets/office-interior-2.jpg";
import officeImg3 from "@/assets/office-interior-3.jpg";
import officeImg4 from "@/assets/office-interior-4.jpg";

const heroBg = "https://www.flashspace.ai/hero-illustrated.jpg";

const getLeadApiBaseUrl = () => {
  if (import.meta.env.VITE_API_BASE_URL) return import.meta.env.VITE_API_BASE_URL;
  if (import.meta.env.DEV) return "http://localhost:8787";
  return window.location.origin;
};

const leadApiBaseUrl = getLeadApiBaseUrl();

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

const formCities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
  "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow",
  "Indore", "Chandigarh", "Kochi", "Guwahati", "Bhopal", "Other",
];

const LeadFormDialog = ({
  isOpen,
  onClose,
  onSubmitSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: () => void;
}) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^[+]?[0-9\s()-]{8,20}$/.test(form.phone.trim())) errs.phone = "Enter a valid phone number";
    if (!form.city) errs.city = "Please select a city";
    return errs;
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${leadApiBaseUrl}/api/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(import.meta.env.VITE_LEAD_API_KEY
            ? { "x-api-key": import.meta.env.VITE_LEAD_API_KEY }
            : {}),
        },
        body: JSON.stringify({
          ...form,
          source: "Virtual Office Landing CTA",
          page: window.location.pathname,
          utm: window.location.search,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Lead API failed with status ${response.status}`);
      }

      onSubmitSuccess();
    } catch (error: any) {
      console.error("Lead submission failed", error);
      setSubmitError(error.message || "Could not submit your request right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
      setTimeout(() => {
        setForm({ name: "", email: "", phone: "", city: "" });
        setErrors({});
      }, 250);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground tracking-tight">Get Your Virtual Office</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Fill in details and we will help you get started quickly.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <Label htmlFor="lead-name" className="text-sm font-semibold text-foreground mb-1.5 block">Full Name *</Label>
              <Input
                id="lead-name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="lead-email" className="text-sm font-semibold text-foreground mb-1.5 block">Email Address *</Label>
              <Input
                id="lead-email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="lead-phone" className="text-sm font-semibold text-foreground mb-1.5 block">Phone Number *</Label>
              <Input
                id="lead-phone"
                type="tel"
                placeholder="+916002111457"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>

            <div>
              <Label htmlFor="lead-city" className="text-sm font-semibold text-foreground mb-1.5 block">
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
                {formCities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
            </div>

            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full h-12 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-70">
              {isSubmitting ? "Submitting..." : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Get Your Virtual Office
                </>
              )}
            </Button>
            {submitError && <p className="text-xs text-destructive text-center">{submitError}</p>}
          </form>
        </>
      </DialogContent>
    </Dialog>
  );
};

/* ─── HERO ─── */
const HeroSection = () => {
  const { open } = useFormDialog();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-28 pb-16 lg:pt-32 lg:pb-20">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width={1600}
        height={900}
      />
      <div className="absolute inset-0 bg-white/34" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/14 to-white/52" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 28%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.22) 58%, rgba(255,255,255,0.36) 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-5xl">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white/34 px-4 py-5 backdrop-blur-[2px] sm:px-6 lg:px-8">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            <Zap className="w-3 h-3" /> Fast-Track Business Setup
          </span>
        </motion.div>

        <div className="mb-5">
          <motion.h1
            custom={0.05}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl lg:text-[52px] font-black tracking-[-0.02em] text-foreground leading-[1.16] pb-1"
            style={{ textShadow: "0 1px 0 rgba(255,255,255,0.45)" }}
          >
            Virtual office starting <span className="text-primary">@699/month</span>
          </motion.h1>

          <motion.p
            custom={0.09}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-2 text-foreground/80 text-xl sm:text-2xl lg:text-[34px] font-bold tracking-[-0.01em] leading-[1.22]"
          >
            Activated in just 3 days
          </motion.p>
        </div>

        <motion.p
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-foreground/85 text-base sm:text-lg font-semibold leading-relaxed mb-8 max-w-3xl mx-auto"
        >
          GST & MCA approved. Premium business address. No office rent. The cheapest and fastest way to get your business registered.
        </motion.p>

        <motion.div custom={0.16} variants={fadeUp} initial="hidden" animate="visible" className="mt-2 mb-2">
          <Button
            size="lg"
            className="h-12 rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90"
            onClick={open}
          >
            Get Best Price
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        <motion.div custom={0.2} variants={fadeUp} initial="hidden" animate="visible" className="mt-7 flex flex-wrap justify-center gap-5 text-foreground/90 text-sm font-semibold">
          {["1000+ Businesses", "GST Approved", "No Hidden Fees", "Setup in 3days"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              {t}
            </span>
          ))}
        </motion.div>
        </div>
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Stop Paying ₹10,000/month for <span className="text-primary italic">Just an Address</span>
          </h2>
          <p className="text-muted-foreground text-base font-normal max-w-lg mx-auto">
            You don't need an office. You need a compliant address — and we'll set it up in 3days.
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
                <p className="text-sm text-muted-foreground font-normal leading-relaxed">{card.desc}</p>
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

          {/* ₹699/mo */}
          <BentoCard className="md:row-span-2 md:min-h-[360px] order-2 md:order-none relative overflow-hidden border-transparent" delay={0} style={{ background: 'hsl(48 60% 96%)' }}>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary tracking-wide">
                <IndianRupee className="w-3.5 h-3.5" /> Pricing
              </span>
            </div>
            <div className="mt-auto relative z-10">
              <h1 className="text-2xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-none mb-3">
                ₹699<span className="text-base font-semibold text-muted-foreground">/mo</span>
              </h1>
              <p className="text-foreground font-bold text-base mb-1">Premium Address. No Premium Price.</p>
              <p className="text-muted-foreground text-sm font-normal leading-relaxed mb-4">Everything you need to register — without the overhead of a physical office.</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer" onClick={open}>
                View Plans <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </BentoCard>

          {/* 5-10x Cheaper */}
          <BentoCard className="md:col-span-2 relative overflow-hidden order-3 md:order-none border-transparent" delay={0.05} style={{ background: 'hsl(140 30% 96%)' }}>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary tracking-wide mb-4">
                <TrendingDown className="w-3.5 h-3.5" /> Cost Savings
              </span>
              <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-foreground leading-none mb-3">5–10x Cheaper.</h3>
              <p className="text-muted-foreground text-sm font-normal leading-relaxed mb-4">Than renting physical office space. Save thousands every month.</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer" onClick={open}>
                Compare Costs <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </BentoCard>

          {/* Center — Yellow bg with green text */}
          <BentoCard className="bg-secondary text-foreground border-secondary/20 items-center text-center order-first md:order-none" delay={0}>
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <h2 id="why-flashspace-heading" className="text-xl sm:text-2xl font-extrabold leading-tight tracking-tight text-primary">Why Businesses Choose FlashSpace</h2>
              <Button size="lg" className="rounded-xl font-medium shadow-lg bg-primary text-primary-foreground hover:bg-primary/90" onClick={open} aria-label="Get started with FlashSpace virtual office">
                Get Started <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </div>
          </BentoCard>

          {/* 24hr Setup */}
          <BentoCard className="relative overflow-hidden order-4 md:order-none border-transparent" delay={0.1} style={{ background: 'hsl(210 40% 97%)' }}>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary tracking-wide">
                <Clock className="w-3.5 h-3.5" /> Quick Setup
              </span>
            </div>
            <div className="mt-auto relative z-10">
              <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-foreground leading-none mb-2">24hr Setup.</h3>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer" onClick={open}>
                Start Now <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </BentoCard>

          {/* Premium Address */}
          <BentoCard className="md:col-span-2 relative overflow-hidden order-5 md:order-none border-transparent" delay={0.15} style={{ background: 'hsl(30 30% 97%)' }}>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary tracking-wide mb-3">
                <Building2 className="w-3.5 h-3.5" /> Premium Locations
              </span>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-foreground tracking-tight mb-1">Premium Business Address.</h3>
              <p className="text-sm text-muted-foreground font-normal leading-relaxed mb-3">Prestigious prime locations in Delhi, Mumbai, Bangalore & more.</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer" onClick={open}>
                See Locations <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </BentoCard>

          {/* 100% Compliant */}
          <BentoCard className="relative overflow-hidden order-6 md:order-none border-transparent" delay={0.18} style={{ background: 'hsl(160 30% 96%)' }}>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary tracking-wide">
                <Shield className="w-3.5 h-3.5" /> Compliance
              </span>
            </div>
            <div className="mt-auto relative z-10">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-foreground tracking-tight mb-1">100% Compliant.</h3>
              <p className="text-sm text-muted-foreground font-normal leading-relaxed mb-3">GST & MCA approved across all Indian states.</p>
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

/* ─── HOT DEAL SPACES ─── */
const cityDeals = [
  {
    city: "Delhi",
    area: "Connaught Place",
    price: "₹749/mo",
    strikePrice: "₹1499/mo",
    image: officeImg2,
    tag: "High Demand",
  },
  {
    city: "Bangalore",
    area: "Koramangala",
    price: "₹799/mo",
    strikePrice: "₹1599/mo",
    image: officeImg4,
    tag: "Fastest Activation",
  },
  {
    city: "Mumbai",
    area: "Andheri East",
    price: "₹899/mo",
    strikePrice: "₹1799/mo",
    image: officeImg1,
    tag: "Limited Offer",
  },
  {
    city: "Hyderabad",
    area: "Hitech City",
    price: "₹699/mo",
    strikePrice: "₹1399/mo",
    image: officeImg3,
    tag: "Best Value",
  },
];

const OfficeGallery = () => {
  const { open } = useFormDialog();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Top Selling Spaces</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            City-Wise Virtual Office Deals
          </h2>
          <p className="text-muted-foreground text-base font-normal max-w-2xl mx-auto">
            Choose your city, lock your deal, and start in 3days. These prices are promo rates and can change anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {cityDeals.map((deal, i) => (
            <motion.article
              key={deal.city}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={deal.image}
                  alt={`${deal.city} virtual office`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  width={700}
                  height={440}
                />
                <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                  {deal.tag}
                </span>
              </div>

              <div className="p-5">
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{deal.area}</p>
                  <h3 className="mt-1 text-xl font-extrabold text-foreground">{deal.city}</h3>
                </div>

                <div className="mb-5 flex items-end gap-2">
                  <span className="text-2xl font-extrabold text-primary">{deal.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{deal.strikePrice}</span>
                </div>

                <ul className="mb-5 space-y-1.5 text-xs text-muted-foreground">
                  <li>GST & MCA accepted</li>
                  <li>Documentation support included</li>
                  <li>Activation in 1-2 business days</li>
                </ul>

                <Button className="w-full h-10 font-semibold" onClick={open}>
                  Get Best Price
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── INDIA COVERAGE ─── */
const coverageData = [
  { state: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur"] },
  { state: "Delhi NCR", cities: ["New Delhi", "Gurgaon", "Noida"] },
  { state: "Karnataka", cities: ["Bangalore", "Mysore"] },
  { state: "Telangana", cities: ["Hyderabad", "Warangal"] },
  { state: "Tamil Nadu", cities: ["Chennai", "Coimbatore"] },
  { state: "West Bengal", cities: ["Kolkata"] },
  { state: "Gujarat", cities: ["Ahmedabad", "Surat"] },
  { state: "Rajasthan", cities: ["Jaipur", "Udaipur"] },
  { state: "Madhya Pradesh", cities: ["Indore", "Bhopal"] },
  { state: "Punjab", cities: ["Chandigarh", "Ludhiana"] },
  { state: "Kerala", cities: ["Kochi", "Trivandrum"] },
  { state: "Assam", cities: ["Guwahati"] },
];

const IndiaCoverageSection = () => {
  const { open } = useFormDialog();

  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Pan-India Presence</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Available in <span className="text-primary">28+ States</span> & <span className="text-primary">50+ Cities</span>
          </h2>
          <p className="text-muted-foreground text-base font-normal max-w-lg mx-auto">
            Get a virtual office address in any major Indian city. We cover every state for GST & MCA registration.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {coverageData.map((item, i) => (
            <motion.div
              key={item.state}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-card border border-border/50 rounded-2xl p-5 hover:shadow-md hover:border-primary/30 transition-all cursor-pointer"
              onClick={open}
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <h4 className="font-bold text-foreground text-sm">{item.state}</h4>
              </div>
              <p className="text-xs text-muted-foreground font-normal leading-relaxed">{item.cities.join(", ")}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center mt-10">
          <p className="text-sm text-muted-foreground font-normal mb-4">Don't see your city? We cover 28+ states — just ask us.</p>
          <Button variant="outline" className="border-primary/30 hover:bg-primary/5 font-semibold" onClick={open}>
            Check My City <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── GET STARTED IN 3 STEPS ─── */
const threeSteps = [
  {
    num: "01",
    icon: MapPin,
    title: "Choose a Location",
    desc: "Pick from premium addresses in Mumbai, Delhi, Bangalore, Chennai, Hyderabad & 50+ cities across India.",
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
    desc: "Your GST-ready virtual office is activated within 3days. Start operating immediately.",
  },
];

const ThreeStepsSection = () => {
  const { open } = useFormDialog();

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <img src={officeImg1} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.04]" loading="lazy" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">How It Works</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
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
              <p className="text-sm text-muted-foreground font-normal leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-12 rounded-xl" onClick={open}>
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
    avatar: "PS",
    rating: 5,
  },
  {
    quote: "Managing GST across multiple states felt impossible as a solo founder. Flash Space handled everything — VPOB, filings, TDS recovery. We scaled from 3 states to 18 in two months.",
    name: "Rahul Mehta",
    title: "CEO, UrbanBazaar",
    avatar: "RM",
    rating: 5,
  },
  {
    quote: "Our Amazon listings got suspended for compliance gaps. Flash Space not only fixed our GST registration but set us up properly so it never happened again.",
    name: "Anita Desai",
    title: "Founder, CraftNest India",
    avatar: "AD",
    rating: 5,
  },
  {
    quote: "Setup was done in literally one day. I was shocked. The cheapest option I found anywhere and they delivered faster than anyone else. Highly recommend.",
    name: "Vikram Joshi",
    title: "CEO, QuickShip Logistics",
    avatar: "VJ",
    rating: 5,
  },
  {
    quote: "Humne pehle 2 vendors try kiye, dono me compliance issue aaya. FlashSpace ne documentation fix ki aur 3 din me activation complete ho gaya.",
    name: "Karan Bhatia",
    title: "Director, Brightline Foods",
    avatar: "KB",
    rating: 5,
  },
  {
    quote: "Team ka response fast hai. Har query ka clear answer milta hai aur onboarding bilkul smooth raha.",
    name: "Neha Arora",
    title: "Co-Founder, Urban Bloom",
    avatar: "NA",
    rating: 5,
  },
  {
    quote: "₹699 plan genuinely value for money nikla. Address verification aur compliance support dono timely mile.",
    name: "Aman Verma",
    title: "Founder, Pixel Pantry",
    avatar: "AV",
    rating: 5,
  },
  {
    quote: "As an early-stage startup, hume premium address chahiye tha without high rent. Exactly wahi mila.",
    name: "Sneha Kapoor",
    title: "Founder, Finch Labs",
    avatar: "SK",
    rating: 5,
  },
  {
    quote: "MCA filing aur GST address compliance dono clean rahe. Ab hum confidently new states me expand kar pa rahe hain.",
    name: "Rohit Kulkarni",
    title: "Operations Head, Nova Retail",
    avatar: "RK",
    rating: 5,
  },
  {
    quote: "FlashSpace ki support team proactive hai. Form fill se activation tak har step pe guidance mila.",
    name: "Meera Nair",
    title: "Founder, The Wellness Edit",
    avatar: "MN",
    rating: 5,
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) => (
  <article className="w-[320px] shrink-0 bg-card/95 border border-border/50 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
    <div>
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, j) => (
          <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        ))}
      </div>
      <Quote className="w-6 h-6 text-primary/20 mb-2" />
      <p className="text-sm text-muted-foreground font-normal leading-relaxed mb-6">"{testimonial.quote}"</p>
    </div>
    <div className="border-t border-border/40 pt-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/15 text-primary font-bold text-sm flex items-center justify-center">
        {testimonial.avatar}
      </div>
      <div>
        <p className="text-sm font-bold text-foreground leading-none">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground font-normal mt-1">{testimonial.title}</p>
      </div>
    </div>
  </article>
);

const TestimonialsSection = () => {
  const rowA = [...testimonials, ...testimonials];
  const rowB = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)];

  return (
    <section className="py-20 lg:py-28 bg-muted/10 relative overflow-hidden">
      <img src={officeImg3} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.03]" loading="lazy" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Trusted by 1000+ Businesses
          </h2>
          <p className="text-muted-foreground text-base font-normal max-w-md mx-auto">
            Real founders. Real outcomes. Real growth with FlashSpace.
          </p>
        </motion.div>

        <div className="space-y-4">
          <div className="overflow-hidden">
            <div className="flex gap-5 w-max animate-marquee">
              {rowA.map((t, i) => (
                <TestimonialCard key={`${t.name}-a-${i}`} testimonial={t} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-5 w-max animate-marquee" style={{ animationDuration: "34s", animationDirection: "reverse" }}>
              {rowB.map((t, i) => (
                <TestimonialCard key={`${t.name}-b-${i}`} testimonial={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── TRUST ─── */
const trustStats = [
  { value: "1,000+", label: "Businesses Registered" },
  { value: "28+", label: "States Covered" },
  { value: "50+", label: "Cities Available" },
  { value: "3days", label: "Avg. Setup Time" },
];

const TrustSection = () => (
  <section className="py-16 lg:py-20 bg-muted/20 border-y border-border/40">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-2">
          India's Cheapest & Fastest Virtual Office
        </h2>
        <p className="text-muted-foreground text-sm font-normal max-w-md mx-auto mb-10">
          Startups, freelancers & growing brands use FlashSpace to register and scale — in just 3days.
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
            <span className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">{stat.value}</span>
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
  { q: "Which cities are covered?", a: "50+ cities across 28+ states in India — Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, Indore, Kochi & many more." },
  { q: "Is this the cheapest option?", a: "Yes — FlashSpace offers the most affordable virtual office in India at ₹699/month with no hidden costs." },
];

const FAQSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">Frequently Asked Questions</h2>
      </motion.div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
            <AccordionTrigger className="text-left text-foreground font-bold text-base hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm font-normal leading-relaxed pb-5">
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
  const location = useLocation();
  const navigate = useNavigate();

  const formOpen = location.pathname === "/lead-form";

  const openForm = () => {
    if (!formOpen) navigate("/lead-form");
  };

  const openThankYouPage = () => navigate("/thank-you");

  const closeFormDialog = () => {
    if (location.pathname !== "/") navigate("/");
  };

  return (
    <FormDialogContext.Provider value={{ open: openForm }}>
      <AppLayout onNavCtaClick={openForm}>
        <main>
          <HeroSection />
          <TrustedByFilmstrip />
          <OfficeGallery />
          <PainAndCards />
          <WhyFlashSpace />
          <IndiaCoverageSection />
          <ThreeStepsSection />
          <TrustSection />
          <TestimonialsSection />
          <FAQSection />
        </main>
        <Footer onPrimaryCtaClick={openForm} />
        <StickyMobileCTA />
        <LeadFormDialog isOpen={formOpen} onClose={closeFormDialog} onSubmitSuccess={openThankYouPage} />
      </AppLayout>
    </FormDialogContext.Provider>
  );
};

export default VirtualOfficeLanding;
