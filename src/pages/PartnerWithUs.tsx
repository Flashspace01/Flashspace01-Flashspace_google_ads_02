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
  { icon: BarChart3, value: "142", label: "Bookings", sublabel: "Monthly average across partners", height: "55%" },
  { icon: Building2, value: "12%", label: "Listing Growth", sublabel: "Month-over-month increase", height: "40%" },
  { icon: TrendingUp, value: "32%", label: "Revenue Uplift", sublabel: "Average partner growth rate", height: "65%" },
  { icon: CheckCircle2, value: "19%", label: "Conversion", sublabel: "Enquiry to booking rate", height: "50%" },
  { icon: Globe, value: "96%", label: "Occupancy", sublabel: "Peak hour utilization", height: "80%" },
  { icon: Headphones, value: "48hrs", label: "Avg. Onboard", sublabel: "From signup to live listing", height: "90%" },
];

const RevenueVisual = () => {
  return (
    <div className="w-full">
      <div className="flex items-end gap-3 lg:gap-4 justify-center" style={{ height: 340 }}>
        {infographicBars.map((bar, i) => {
          const Icon = bar.icon;
          return (
            <motion.div
              key={bar.label}
              className="flex flex-col items-center gap-3 flex-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            >
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className="bg-card border border-border rounded-lg px-2.5 py-1.5 shadow-sm text-center min-w-[60px]"
              >
                <div className="flex items-center justify-center mb-0.5">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-sm font-bold text-primary leading-none">{bar.value}</p>
                <p className="text-[8px] text-muted-foreground mt-0.5 leading-tight">{bar.label}</p>
              </motion.div>

              {/* 3D Bar */}
              <div className="relative w-full" style={{ height: bar.height }}>
                {/* Front face */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 rounded-t-md"
                  style={{
                    originY: 1,
                    background: `hsl(142 20% ${26 + i * 6}%)`,
                  }}
                />
                {/* Right 3D edge */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="absolute top-0 bottom-0 -right-1.5 w-1.5 rounded-tr-sm"
                  style={{
                    originY: 1,
                    background: `hsl(142 20% ${20 + i * 6}%)`,
                  }}
                />
                {/* Top 3D face */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                  className="absolute -top-1.5 left-0 right-0 h-1.5 rounded-t-sm"
                  style={{
                    background: `hsl(142 20% ${32 + i * 6}%)`,
                    transform: "skewX(-20deg) translateX(3px)",
                  }}
                />
                {/* Sublabel on bar */}
                <div className="absolute bottom-2 left-0 right-0 px-1">
                  <p className="text-[7px] text-white/70 text-center leading-tight hidden lg:block">{bar.sublabel}</p>
                </div>
              </div>
            </motion.div>
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

        {/* Referral Earnings Section */}
        {/* Referral Earnings Section */}
        <section className="py-10 lg:py-14 bg-secondary">
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

            <div className="grid grid-cols-3 gap-4">
              {[
                { step: "01", title: "Apply", desc: "Share your workspace details through our simple application form. Our team reviews every submission personally to ensure a great fit." },
                { step: "02", title: "Onboard", desc: "Our dedicated team verifies your space, creates a professional listing with photos & amenities, and gets you live within 48 hours." },
                { step: "03", title: "Earn", desc: "Start receiving qualified bookings from our network of verified professionals and enterprises. Watch your revenue grow month after month." },
              ].map((item, i) => {
                const stepDelay = i * 0.2;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: stepDelay, duration: 0.6 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Large number */}
                    <span className="text-7xl lg:text-9xl font-bold text-muted-foreground/20 leading-none mb-4 select-none">
                      {item.step}
                    </span>

                    {/* Dot with line */}
                    <div className="relative w-full flex items-center justify-center mb-8">
                      {/* Line extending left */}
                      {i > 0 && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.2, duration: 0.5 }}
                          className="absolute right-1/2 left-0 top-1/2 -translate-y-1/2 h-px bg-border origin-right"
                        />
                      )}
                      {/* Line extending right */}
                      {i < 2 && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.2, duration: 0.5 }}
                          className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 h-px bg-border origin-left"
                        />
                      )}
                      {/* Dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.2, type: "spring", stiffness: 200, damping: 15 }}
                        className="w-3 h-3 rounded-full bg-primary relative z-10"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                  </motion.div>
                );
              })}
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
