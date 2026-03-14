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
  FileText,
  BadgeCheck,
  Coins,
  PenLine,
  Rocket,
  LineChart,
} from "lucide-react";


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

const RevenueVisual = () => {
  const maxVal = Math.max(...revenueData.map(d => d.value));
  const points = revenueData.map((d, i) => {
    const x = (i / (revenueData.length - 1)) * 100;
    const y = 100 - (d.value / maxVal) * 100;
    return `${x},${y}`;
  });
  const linePath = `M ${points.join(" L ")}`;
  const areaPath = `${linePath} L 100,100 L 0,100 Z`;

  return (
    <div className="w-full bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
      {/* Top bar */}
      <div className="px-6 pt-6 pb-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">Monthly Revenue</p>
            <div className="flex items-baseline gap-3 mt-1">
              <p className="text-3xl font-bold text-foreground">₹5,24,000</p>
              <span className="text-sm font-semibold text-primary">↑ 32%</span>
            </div>
          </div>
          <div className="flex gap-1">
            {["6M", "1Y", "All"].map((tab, i) => (
              <button
                key={tab}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  i === 1 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SVG line chart */}
      <div className="px-6 pt-4">
        <svg viewBox="0 0 100 60" className="w-full h-40" preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map(y => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="hsl(var(--border))" strokeWidth="0.3" />
          ))}
          {/* Area fill */}
          <motion.path
            d={areaPath}
            fill="url(#areaGrad)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          {/* Line */}
          <motion.path
            d={linePath}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {/* Dots */}
          {revenueData.map((d, i) => {
            const cx = (i / (revenueData.length - 1)) * 100;
            const cy = 100 - (d.value / maxVal) * 100;
            return (
              <motion.circle
                key={d.month}
                cx={cx}
                cy={cy}
                r="1.5"
                fill="hsl(var(--card))"
                stroke="hsl(var(--primary))"
                strokeWidth="0.8"
                vectorEffect="non-scaling-stroke"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
              />
            );
          })}
        </svg>
        {/* X-axis */}
        <div className="flex justify-between mt-1 mb-4">
          {revenueData.map(d => (
            <span key={d.month} className="text-[9px] text-muted-foreground">{d.month}</span>
          ))}
        </div>
      </div>

      {/* Bottom KPI row */}
      <div className="grid grid-cols-4 border-t border-border">
        {[
          { label: "Bookings", value: "142" },
          { label: "Occupancy", value: "96%" },
          { label: "Conversion", value: "19%" },
          { label: "Onboarding", value: "48hrs" },
        ].map((kpi, i) => (
          <div key={kpi.label} className={`px-4 py-4 text-center ${i < 3 ? "border-r border-border" : ""}`}>
            <p className="text-lg font-bold text-foreground">{kpi.value}</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{kpi.label}</p>
          </div>
        ))}
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

  const [activeBenefit, setActiveBenefit] = useState(0);

  // Auto-cycle through benefits every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <AppLayout>
      <main className="pt-12">
        {/* Hero */}
        <section className="min-h-[calc(100svh-8rem)] flex items-center justify-center">
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
              className="mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-medium text-foreground tracking-tight mb-3">
                Why partner with us?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Everything you need to grow your workspace — technology, reach, and support.
              </p>
            </motion.div>

            {/* Mobile: stacked cards */}
            <div className="flex flex-col gap-4 lg:hidden">
              {benefits.map((b, i) => {
                const num = String(i + 1).padStart(2, "0");
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border border-border rounded-xl p-6 relative overflow-hidden"
                  >
                    <span className="text-sm text-muted-foreground mb-3 block">{num}</span>
                    <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary/30" />
                  </motion.div>
                );
              })}
            </div>

            {/* Desktop: accordion-style horizontal cards */}
            <div className="hidden lg:flex gap-3 h-[340px]">
              {benefits.map((b, i) => {
                const num = String(i + 1).padStart(2, "0");
                const isActive = activeBenefit === i;
                return (
                  <motion.div
                    key={b.title}
                    onClick={() => setActiveBenefit(i)}
                    layout
                    className={`relative border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                      isActive ? "bg-secondary/20 border-secondary" : "border-border hover:bg-accent/50"
                    }`}
                    style={{ flex: isActive ? "0 0 40%" : "1 1 0%" }}
                    transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
                  >
                    <div className="p-6 lg:p-8 h-full flex flex-col justify-between">
                      <div>
                        <span className="text-sm text-primary mb-3 block">{num}</span>
                        <h3 className={`font-bold text-primary mb-2 transition-all ${
                          isActive ? "text-xl" : "text-base"
                        }`}>
                          {b.title}
                        </h3>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.3 }}
                            className="text-sm text-muted-foreground leading-relaxed max-w-sm"
                          >
                            {b.description}
                          </motion.p>
                        )}
                      </div>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="mt-6"
                        >
                          <button className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
                            Learn More <ArrowRight className="w-4 h-4" />
                          </button>
                        </motion.div>
                      )}
                    </div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 transition-colors ${
                      isActive ? "bg-secondary" : "bg-secondary/30"
                    }`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Referral Earnings Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-5/12 mb-12 lg:mb-16"
              >
                <h2 className="text-3xl lg:text-4xl font-medium text-foreground tracking-tight mb-6 leading-[1.15]">
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
                className="lg:w-7/12 flex items-end justify-center"
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

            <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {[
                { step: "01", title: "Apply", icon: PenLine, desc: "Share your workspace details through our simple application form. Our team reviews every submission personally to ensure a great fit." },
                { step: "02", title: "Onboard", icon: Rocket, desc: "Our dedicated team verifies your space, creates a professional listing with photos & amenities, and gets you live within 48 hours." },
                { step: "03", title: "Earn", icon: LineChart, desc: "Start receiving qualified bookings from our network of verified professionals and enterprises. Watch your revenue grow month after month." },
              ].map((item, i) => {
                const baseDelay = i * 1.2;
                const numberDelay = baseDelay;
                const dotDelay = baseDelay + 0.6;
                const cardDelay = baseDelay + 0.8;
                const StepIcon = item.icon;

                return (
                  <div
                    key={item.step}
                    className="flex flex-col items-center px-2 text-center lg:px-4"
                  >
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: numberDelay, duration: 0.5, ease: "easeOut" }}
                      className="text-7xl lg:text-9xl font-bold text-muted-foreground/20 leading-none mb-4 select-none block"
                    >
                      {item.step}
                    </motion.span>

                    <div className="relative w-full flex items-center justify-center mb-8">
                      {i === 0 && (
                        <div className="hidden md:block absolute left-1/2 right-0 top-1/2 -translate-y-1/2 h-px bg-border" />
                      )}
                      {i === 1 && (
                        <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-border" />
                      )}
                      {i === 2 && (
                        <div className="hidden md:block absolute left-0 right-1/2 top-1/2 -translate-y-1/2 h-px bg-border" />
                      )}
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
                      className="bg-background/70 backdrop-blur-sm border border-border/40 rounded-2xl p-6 lg:p-8 shadow-sm w-full"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <StepIcon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partner Form */}
        <section className="py-16 lg:py-20" id="partner-form">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column — Copy & Stats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-medium text-foreground tracking-tight mb-4 leading-[1.1]">
                  List your space today
                </h2>
                <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                  Fill in your details and our partnership team will get in touch within 24 hours.
                </p>

                {/* Checklist */}
                <div className="space-y-5 mb-10">
                  {[
                    "Zero listing fees — we only earn when you do",
                    "Full control over pricing and availability",
                    "Dashboard to manage bookings and clients",
                    "Marketing support and premium placement",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <span className="text-foreground/80 text-[15px] leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Grid — borderless tinted cards */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "48hrs", label: "Average Onboarding" },
                    { value: "95%", label: "Partner Retention" },
                    { value: "3x", label: "Revenue Uplift" },
                    { value: "24/7", label: "Support Available" },
                  ].map((s) => (
                    <div key={s.label} className="bg-secondary/40 rounded-xl p-5">
                      <div className="text-2xl lg:text-3xl font-bold text-primary leading-none">{s.value}</div>
                      <div className="text-[11px] text-muted-foreground mt-2 uppercase tracking-widest font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column — Form Card */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border/60 rounded-2xl p-7 lg:p-9 space-y-5 shadow-xl"
              >
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Get started</h3>
                  <p className="text-sm text-muted-foreground">We'll reach out within 24 hours.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Your Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      maxLength={100}
                      className="bg-card border-border focus-visible:ring-primary/40"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@workspace.com"
                      required
                      maxLength={255}
                      className="bg-card border-border focus-visible:ring-primary/40"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Phone</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      required
                      maxLength={15}
                      className="bg-card border-border focus-visible:ring-primary/40"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Space Name</label>
                    <Input
                      value={formData.spaceName}
                      onChange={(e) => setFormData({ ...formData, spaceName: e.target.value })}
                      placeholder="Your Workspace Name"
                      required
                      maxLength={100}
                      className="bg-card border-border focus-visible:ring-primary/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">City</label>
                  <Input
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Delhi, Mumbai, Bangalore"
                    required
                    maxLength={50}
                    className="bg-card border-border focus-visible:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Message (optional)</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your space..."
                    rows={4}
                    maxLength={1000}
                    className="bg-card border-border focus-visible:ring-primary/40"
                  />
                </div>
                <Button type="submit" className="w-full hover:-translate-y-0.5 transition-all duration-200" size="lg">
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
