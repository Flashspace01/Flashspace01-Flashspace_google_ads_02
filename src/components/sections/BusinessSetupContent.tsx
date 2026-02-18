import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2, FileText, Shield, ClipboardCheck, Users,
  MessageSquare, FolderOpen, Send, CreditCard, CheckCircle2,
  BadgePercent, Zap, Clock, HeadphonesIcon, Layers, MapPin,
  Brain, Bell, Lock, Lightbulb, Activity,
} from "lucide-react";

const navItems = [
  { id: "bs-capabilities", label: "Capabilities" },
  { id: "bs-process", label: "Process" },
  { id: "bs-advantage", label: "Advantage" },
  { id: "bs-ai-platform", label: "AI Platform" },
];

const features = [
  { icon: Building2, title: "Company Incorporation", desc: "Private Limited, LLP, and OPC registrations managed end-to-end." },
  { icon: FileText, title: "GST Setup & Compliance", desc: "Registration, filings, and structured compliance guidance." },
  { icon: Shield, title: "Licenses & Approvals", desc: "Assistance with mandatory registrations and regulatory documentation." },
  { icon: ClipboardCheck, title: "Regulatory Documentation", desc: "Accurate filings and structured compliance management." },
  { icon: Users, title: "Dedicated Advisory Support", desc: "A single expert point of contact throughout your setup journey." },
];

const steps = [
  { icon: MessageSquare, title: "Initial Consultation", desc: "Business structure alignment and requirement assessment." },
  { icon: FolderOpen, title: "Documentation Review", desc: "Collection and verification of required documents." },
  { icon: Send, title: "Filing & Submission", desc: "Preparation and submission of statutory applications." },
  { icon: CreditCard, title: "Processing & Tracking", desc: "Application monitoring and status updates." },
  { icon: CheckCircle2, title: "Registration Completion", desc: "Delivery of incorporation certificates and GST credentials." },
];

const benefits = [
  { icon: BadgePercent, title: "Up to 90% Cost Efficiency", desc: "Optimized processes eliminate unnecessary overhead." },
  { icon: Zap, title: "7–10 Day Setup Timeline", desc: "Accelerated incorporation workflow." },
  { icon: Clock, title: "24-Hour Initiation", desc: "Documentation begins within one business day." },
  { icon: HeadphonesIcon, title: "Dedicated Expert Guidance", desc: "Consistent advisory support from start to completion." },
  { icon: Layers, title: "Integrated Service Stack", desc: "Registration, GST, compliance — unified under one platform." },
  { icon: MapPin, title: "Nationwide Flexibility", desc: "Launch across cities without operational complexity." },
];

const aiFeatures = [
  { icon: Activity, text: "Automated compliance tracking" },
  { icon: Bell, text: "Smart deadline reminders" },
  { icon: Lock, text: "Secure document management" },
  { icon: Lightbulb, text: "Guided filing recommendations" },
  { icon: Brain, text: "Real-time status visibility" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
};

export const BusinessSetupContent = () => {
  const [activeSection, setActiveSection] = useState(navItems[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 160;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.getBoundingClientRect().top <= offset) {
          setActiveSection(navItems[i].id);
          return;
        }
      }
      setActiveSection(navItems[0].id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
        <div className="grid lg:grid-cols-[180px_1fr] gap-8 lg:gap-14">
          {/* Sticky sidebar */}
          <div className="hidden lg:block">
            <nav className="sticky top-[120px] space-y-1.5 py-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="flex items-center w-full text-left py-2 bg-transparent transition-colors duration-200"
                  >
                    {isActive && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                    )}
                    <span
                      className={`text-[14px] whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? "font-semibold text-primary"
                          : "font-medium text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Mobile horizontal nav */}
          <div className="lg:hidden overflow-x-auto -mx-4 px-4 mb-4">
            <div className="flex gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`whitespace-nowrap text-sm px-4 py-2 rounded-full border transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary font-medium"
                        : "bg-card text-muted-foreground border-border"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-24 lg:space-y-32">
            {/* Capabilities */}
            <div id="bs-capabilities">
              <motion.h2 {...fadeIn} className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-3">
                Launch with Complete Legal Confidence
              </motion.h2>
              <motion.p {...fadeIn} transition={{ duration: 0.45, delay: 0.08 }} className="text-muted-foreground text-base sm:text-lg mb-10 max-w-xl">
                Comprehensive business registration and compliance support — structured for speed and clarity.
              </motion.p>
              <div className="grid sm:grid-cols-2 gap-5">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    {...fadeIn}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="bg-card border border-border/60 rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <f.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-[15px] font-semibold text-foreground mb-1.5">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div id="bs-process">
              <motion.h2 {...fadeIn} className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-10">
                Structured. Transparent. Efficient.
              </motion.h2>
              <div className="relative pl-8 space-y-8">
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
                {steps.map((s, i) => (
                  <motion.div key={i} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.07 }} className="relative flex gap-5">
                    <div className="absolute -left-8 top-0.5 w-[30px] h-[30px] rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold z-10">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-foreground mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Advantage */}
            <div id="bs-advantage" className="bg-muted/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-14 rounded-3xl">
              <motion.h2 {...fadeIn} className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-10">
                Built for Ambitious Founders
              </motion.h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    {...fadeIn}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="bg-card border border-border/60 rounded-2xl p-6 shadow-soft"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <b.icon className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <h3 className="text-[15px] font-semibold text-foreground mb-1">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Platform */}
            <div id="bs-ai-platform">
              <motion.h2 {...fadeIn} className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-3">
                AI-Powered Compliance Engine
              </motion.h2>
              <motion.p {...fadeIn} transition={{ duration: 0.45, delay: 0.08 }} className="text-muted-foreground text-base sm:text-lg mb-10 max-w-xl">
                Technology-driven oversight for modern businesses.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <p className="text-sm font-medium text-foreground mb-4">Flashspace AI helps you:</p>
                  {aiFeatures.map((f, i) => (
                    <motion.div key={i} {...fadeIn} transition={{ duration: 0.35, delay: i * 0.06 }} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <f.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{f.text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }} className="bg-card border border-border/60 rounded-2xl p-6 shadow-soft">
                  <div className="bg-secondary/40 rounded-xl p-5">
                    <p className="text-sm font-medium text-foreground italic leading-relaxed">
                      "Built for founders who value precision, speed, and control."
                    </p>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary/30" />
                        <div className={`h-2.5 rounded-full bg-muted ${n === 1 ? "w-3/4" : n === 2 ? "w-1/2" : "w-2/3"}`} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
