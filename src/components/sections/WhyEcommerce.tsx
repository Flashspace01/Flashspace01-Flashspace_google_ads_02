import { motion } from "framer-motion";
import {
  AlertTriangle,
  ShieldOff,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Zap,
  ShieldCheck,
  PackageCheck,
  FileCheck2,
  BadgeCheck,
  TrendingUp,
  MoveRight,
} from "lucide-react";
import logisticsImg from "@/assets/india-ecommerce-logistics.png";

const ease = [0.16, 1, 0.3, 1] as const;

export const WhyEcommerce = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* ═══════════ HERO — Split Layout ═══════════ */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              The Compliance Gap
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-5">
              Stop Losing Lakhs to{" "}
              <span className="text-primary">Compliance Gaps.</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg">
              Scaling on Amazon&nbsp;&&nbsp;Flipkart requires more than inventory — it requires a Multi-State GST (VPOB) strategy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <div className="rounded-3xl overflow-hidden shadow-soft-lg border border-border/30">
              <img
                src={logisticsImg}
                alt="Indian e-commerce logistics — warehouse with packages and delivery"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* ═══════════ BENTO GRID ═══════════ */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">

          {/* Card 1 — Double Width: The Compliance Gap */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease }}
            className="md:col-span-2 rounded-3xl bg-card border border-border/40 shadow-soft p-8 lg:p-10"
          >
            <h3 className="text-xl font-semibold text-foreground tracking-tight mb-8">
              The Compliance Gap
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Before */}
              <div className="space-y-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-destructive/60">Before</span>
                {[
                  { icon: XCircle, label: "Tax Credits", text: "Blocked TCS credits — lost forever" },
                  { icon: AlertTriangle, label: "Compliance", text: "GST penalties & surprise notices" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-0.5">{item.label}</span>
                      <span className="text-sm text-muted-foreground leading-snug">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* After */}
              <div className="space-y-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary/60">After — FlashSpace</span>
                {[
                  { icon: CheckCircle2, label: "Tax Credits", text: "100% ITC recovery & streamlined filing" },
                  { icon: FileCheck2, label: "Compliance", text: "100% audit-ready automated compliance" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-0.5">{item.label}</span>
                      <span className="text-sm text-foreground font-medium leading-snug">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Single Width: Platform Health */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="rounded-3xl bg-card border border-border/40 shadow-soft p-8 lg:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground tracking-tight mb-3">
                Platform Health
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Keep your Amazon & Flipkart listings safe from suspensions and account flags.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ShieldOff className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Listing suspensions & account flags</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <MoveRight className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">With FlashSpace</span>
              </div>
              <div className="flex items-start gap-3">
                <BadgeCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground font-medium">Verified "In-Stock" status across all hubs</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 — Single Width: Operations */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="rounded-3xl bg-card border border-border/40 shadow-soft p-8 lg:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-secondary/30 flex items-center justify-center mb-5">
                <PackageCheck className="w-5 h-5 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground tracking-tight mb-3">
                Operations
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Inventory stuck in regional warehouses</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <MoveRight className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">With FlashSpace</span>
              </div>
              <div className="flex items-start gap-3">
                <PackageCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground font-medium">Legal storage & pan-India distribution</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4 — Double Width: VPOB Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="md:col-span-2 rounded-3xl border border-primary/20 bg-primary/[0.04] p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight mb-1">
                The Real Problem: No Multi-State GST Setup (VPOB)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Without proper state-wise GST registration, you cannot legally store, sell, or claim tax benefits across India.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ═══════════ IMPACT CARD — Full Width Dark ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
          className="rounded-3xl bg-foreground text-background overflow-hidden shadow-soft-lg"
        >
          <div className="grid md:grid-cols-[1fr_auto_1fr] items-center">
            {/* The Ceiling */}
            <div className="p-10 lg:p-14 flex flex-col items-center justify-center text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-background/35 mb-3">
                The Ceiling
              </span>
              <span className="text-4xl lg:text-5xl font-bold text-background/30 tabular-nums tracking-tight">
                ₹3–5L
              </span>
              <span className="text-sm text-background/25 mt-1">/month</span>
              <p className="text-xs text-background/25 mt-3 max-w-[180px]">
                Stuck with single-state GST
              </p>
            </div>

            {/* Glowing Arrow */}
            <div className="hidden md:flex flex-col items-center justify-center px-4">
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 blur-xl bg-primary/30 rounded-full scale-150" />
                <ArrowRight className="w-10 h-10 text-primary relative z-10" />
              </motion.div>
            </div>

            {/* The Scale */}
            <div className="p-10 lg:p-14 flex flex-col items-center justify-center text-center relative">
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
                The Scale
              </span>
              <span className="text-5xl lg:text-7xl font-bold text-secondary tabular-nums tracking-tight"
                style={{ textShadow: "0 0 40px hsl(var(--secondary) / 0.4)" }}
              >
                ₹15L+
              </span>
              <span className="text-sm text-secondary/60 mt-1">/month</span>
              <p className="text-xs text-background/40 mt-3 max-w-[200px]">
                Unlocked with Multi-State VPOB
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-background/10 px-8 py-8 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-10 py-4 rounded-2xl text-base font-semibold hover:bg-primary/90 transition-all duration-200 active:scale-[0.97] shadow-glow"
            >
              Get Your VPOB Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
