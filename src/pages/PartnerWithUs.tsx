import { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { AppLayout } from "@/components/layout/AppLayout";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  TrendingUp,
  Globe,
  Headphones,
  BarChart3,
  Shield,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  BadgeCheck,
  Coins,
  Plus,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Maximize Occupancy",
    description: "Fill empty desks and rooms with our network of verified professionals and enterprises.",
  },
  {
    icon: Globe,
    title: "Pan-India Reach",
    description: "Get discovered by businesses across India through our platform and sales team.",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Insights",
    description: "Access real-time analytics on demand trends, pricing, and occupancy optimization.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "A dedicated account manager and 24/7 support to help you grow your business.",
  },
  {
    icon: Shield,
    title: "Verified Clients",
    description: "All clients are verified through our platform, so you can focus on delivering great experiences.",
  },
  {
    icon: Building2,
    title: "Flexible Listing",
    description: "List hot desks, private offices, meeting rooms, or virtual office plans — your call.",
  },
];

const stats = [
  { value: "500+", label: "Partner Spaces" },
  { value: "68+", label: "Cities" },
  { value: "95%", label: "Partner Retention" },
  { value: "3x", label: "Average Revenue Lift" },
];

const revenueData = [
  { month: "Jan", value: 45 },
  { month: "Feb", value: 52 },
  { month: "Mar", value: 61 },
  { month: "Apr", value: 58 },
  { month: "May", value: 72 },
  { month: "Jun", value: 85 },
  { month: "Jul", value: 78 },
  { month: "Aug", value: 92 },
  { month: "Sep", value: 88 },
  { month: "Oct", value: 95 },
  { month: "Nov", value: 100 },
  { month: "Dec", value: 110 },
];

const AnimatedCounter = ({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v).toLocaleString("en-IN")}${suffix}`);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    const unsubscribe = rounded.on("change", setDisplay);
    return unsubscribe;
  }, [rounded]);

  return (
    <motion.span
      onViewportEnter={() => {
        animate(count, target, { duration: 2, ease: "easeOut" });
      }}
      viewport={{ once: true }}
    >
      {display}
    </motion.span>
  );
};

const infographicBars = [
  { icon: BarChart3, value: "142", label: "Bookings", sublabel: "Monthly average across partners", pct: 50, color: "hsl(142 25% 22%)" },
  { icon: Building2, value: "12%", label: "Listing Growth", sublabel: "Month-over-month increase", pct: 40, color: "hsl(148 22% 30%)" },
  { icon: TrendingUp, value: "32%", label: "Revenue Uplift", sublabel: "Average partner growth rate", pct: 70, color: "hsl(152 20% 26%)" },
  { icon: CheckCircle2, value: "19%", label: "Conversion", sublabel: "Enquiry to booking rate", pct: 55, color: "hsl(138 18% 35%)" },
  { icon: Globe, value: "96%", label: "Occupancy", sublabel: "Peak hour utilization", pct: 85, color: "hsl(145 22% 40%)" },
  { icon: Headphones, value: "48hrs", label: "Avg. Onboard", sublabel: "From signup to live listing", pct: 95, color: "hsl(140 20% 45%)" },
];

const RevenueVisual = () => {
  return (
    <div className="w-full relative" style={{ height: 520 }}>
      <div className="absolute inset-0 flex items-end gap-4 lg:gap-5 justify-center">
        {infographicBars.map((bar, i) => {
          const Icon = bar.icon;

          return (
            <div key={bar.label} className="flex-1 flex flex-col items-center relative h-full justify-end">
              {/* Entire column: icon + badge + bar animate together */}
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
                className="flex flex-col items-center w-full origin-bottom"
                style={{ height: `${bar.pct}%` }}
              >
                {/* Icon circle - colored to match bar */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mb-1.5 z-10 shrink-0"
                  style={{ background: bar.color }}
                >
                  <Icon className="w-4 h-4 text-white/90" />
                </div>

                {/* Value badge */}
                <div className="relative bg-card border border-border rounded-lg px-3 py-2 shadow-sm text-center mb-2 z-10 shrink-0">
                  <p className="text-base font-bold text-primary leading-none">{bar.value}</p>
                  <p className="text-[8px] text-muted-foreground mt-0.5 uppercase tracking-wider leading-tight">{bar.label}</p>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-card border-r border-b border-border rotate-45" />
                </div>

                {/* Vertical bar - fills remaining space */}
                <div
                  className="relative w-full rounded-t-md flex-1 min-h-0"
                  style={{ background: bar.color }}
                >
                  <div className="absolute bottom-3 left-0 right-0 px-1.5 z-10">
                    <p className="text-[7px] text-white/80 text-center leading-tight hidden lg:block">{bar.sublabel}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    spaceName: "",
    city: "",
    message: "",
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <AppLayout>
      <main>
        {/* Hero */}
        <section className="min-h-[100svh] flex items-center justify-center">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-medium tracking-tight mb-6 leading-[1.1] text-foreground">
                Partner with us and grow your business
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Join India's fastest-growing workspace network. List your space, reach more clients,
                and let our AI-powered platform handle the rest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal px-8 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  List Your Space <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="font-semibold px-8 h-12 rounded-xl border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-foreground/30 bg-transparent">
                  Talk to Our Team
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-12"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
                  Why partner with us?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Everything you need to grow your workspace — technology, reach, and support.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => emblaApi?.scrollPrev()}
                  className="w-10 h-10 rounded-full border border-border bg-card hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={() => emblaApi?.scrollNext()}
                  className="w-10 h-10 rounded-full border border-border bg-card hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </motion.div>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {[...benefits, ...benefits].map((b, i) => {
                  const num = String((i % benefits.length) + 1).padStart(2, "0");
                  return (
                    <div
                      key={`${b.title}-${i}`}
                      className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4"
                    >
                      <div className="group border border-border rounded-xl h-full flex flex-col justify-between p-8 lg:p-10 relative overflow-hidden transition-all duration-300">
                        {/* Number */}
                        <div>
                          <span className="text-sm text-muted-foreground mb-4 block">{num}</span>
                          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                            {b.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                        </div>
                        {/* Plus button */}
                        <div className="mt-8">
                          <button className="w-12 h-12 rounded-lg border border-border hover:border-foreground/30 flex items-center justify-center transition-colors">
                            <Plus className="w-5 h-5 text-foreground" />
                          </button>
                        </div>
                        {/* Bottom accent strip */}
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 rounded-full" style={{ backgroundColor: '#fef8c3' }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile nav */}
            <div className="flex md:hidden items-center justify-center gap-3 mt-6">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="w-10 h-10 rounded-full border border-border bg-card hover:bg-accent flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="w-10 h-10 rounded-full border border-border bg-card hover:bg-accent flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </section>



        {/* How it works — Timeline */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-medium text-foreground tracking-tight mb-3">
                How it works
              </h2>
              <p className="text-muted-foreground text-lg">
                We help you on every step of the journey
              </p>
            </motion.div>

            <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
              {[
                { step: "01", title: "Apply", desc: "Share your workspace details through our simple application form. Our team reviews every submission personally to ensure a great fit." },
                { step: "02", title: "Onboard", desc: "Our dedicated team verifies your space, creates a professional listing with photos & amenities, and gets you live within 48 hours." },
                { step: "03", title: "Earn", desc: "Start receiving qualified bookings from our network of verified professionals and enterprises. Watch your revenue grow month after month." },
              ].map((item, i) => {
                const baseDelay = i * 1.2;
                const numberDelay = baseDelay;
                const dotDelay = baseDelay + 0.6;
                const cardDelay = baseDelay + 0.8;

                return (
                  <div
                    key={item.step}
                    className="flex flex-col items-center px-2 text-center lg:px-4"
                  >
                    {/* Large number */}
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: numberDelay, duration: 0.5, ease: "easeOut" }}
                      className="text-7xl lg:text-9xl font-bold text-muted-foreground/20 leading-none mb-4 select-none block"
                    >
                      {item.step}
                    </motion.span>

                    {/* Dot with single continuous line */}
                    <div className="relative w-full flex items-center justify-center mb-8">
                      {/* Continuous line segment — spans full width of each column */}
                      {/* First column: right half only */}
                      {i === 0 && (
                        <div className="hidden md:block absolute left-1/2 right-0 top-1/2 -translate-y-1/2 h-px bg-border" />
                      )}
                      {/* Middle column: full width */}
                      {i === 1 && (
                        <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-border" />
                      )}
                      {/* Last column: left half only */}
                      {i === 2 && (
                        <div className="hidden md:block absolute left-0 right-1/2 top-1/2 -translate-y-1/2 h-px bg-border" />
                      )}
                      {/* Dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: dotDelay, type: "spring", stiffness: 200, damping: 15 }}
                        className="w-3 h-3 rounded-full bg-primary relative z-10"
                      />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: cardDelay, duration: 0.5 }}
                    >
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Referral Earnings Section */}
        <section className="pt-0 pb-0 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-primary tracking-tight mb-6 leading-[1.15]">
                  What could uncapped workspace revenue look like?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">Top-performing partners earn ₹5,00,000+ per month through FlashSpace bookings.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">Earn commissions on every desk, meeting room, or office booked through your space.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">No hidden fees. No lock-ins. Just transparent revenue sharing with monthly payouts.</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <RevenueVisual />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partner Form */}
        <section className="py-10 lg:py-14" id="partner-form">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">
                  List your space today
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Fill in your details and our partnership team will get in touch within 24 hours.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Zero listing fees — we only earn when you do",
                    "Full control over pricing and availability",
                    "Dashboard to manage bookings and clients",
                    "Marketing support and premium placement",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground text-sm">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Partner stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: "48hrs", label: "Average Onboarding" },
                    { value: "95%", label: "Partner Retention" },
                    { value: "3x", label: "Revenue Uplift" },
                    { value: "24/7", label: "Support Available" },
                  ].map((s) => (
                    <div key={s.label} className="bg-secondary/50 rounded-xl p-4 text-center">
                      <div className="text-xl font-bold text-primary">{s.value}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 lg:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@workspace.com"
                      required
                      maxLength={255}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      required
                      maxLength={15}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Space Name</label>
                    <Input
                      value={formData.spaceName}
                      onChange={(e) => setFormData({ ...formData, spaceName: e.target.value })}
                      placeholder="Your Workspace Name"
                      required
                      maxLength={100}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">City</label>
                  <Input
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Delhi, Mumbai, Bangalore"
                    required
                    maxLength={50}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message (optional)</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your space..."
                    rows={4}
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Submit Application <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </AppLayout>
  );
};

export default PartnerWithUs;
