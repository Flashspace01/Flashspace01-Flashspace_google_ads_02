import { motion } from "framer-motion";
import {
  AlertTriangle,
  Ban,
  Receipt,
  ShieldOff,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Zap,
  ShieldCheck,
  PackageCheck,
  FileCheck2,
  BadgeCheck,
} from "lucide-react";
import logisticsImg from "@/assets/india-ecommerce-logistics.png";

const comparisonRows = [
  {
    feature: "Tax Credits",
    pain: { icon: XCircle, text: "Blocked TCS credits — lost forever" },
    solution: { icon: CheckCircle2, text: "100% ITC recovery & streamlined filing" },
  },
  {
    feature: "Operations",
    pain: { icon: Ban, text: "Inventory stuck in regional warehouses" },
    solution: { icon: PackageCheck, text: "Legal storage & pan-India distribution" },
  },
  {
    feature: "Compliance",
    pain: { icon: AlertTriangle, text: "GST penalties & surprise notices" },
    solution: { icon: FileCheck2, text: "100% audit-ready automated compliance" },
  },
  {
    feature: "Platform Health",
    pain: { icon: ShieldOff, text: "Listing suspensions & account flags" },
    solution: { icon: BadgeCheck, text: "Verified 'In-Stock' status across all hubs" },
  },
];

export const WhyEcommerce = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

        {/* ── Hero: headline left, image right ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -18, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground tracking-tight leading-[1.12] mb-4">
              Stop Losing Lakhs to Compliance Gaps.
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-md">
              Scaling on Amazon & Flipkart requires more than inventory — it requires a Multi-State GST (VPOB) strategy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-2xl overflow-hidden shadow-soft-lg border border-border/40">
              <img
                src={logisticsImg}
                alt="Indian e-commerce logistics — warehouse with packages and delivery"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Comparison Grid: Pain vs Solution ── */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 lg:mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground text-center mb-8 tracking-tight">
            Where E-commerce Sellers Lose Money
          </h3>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Pain Card */}
            <div className="rounded-2xl border border-destructive/20 bg-destructive/[0.04] p-7 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-9 h-9 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </span>
                <h4 className="text-lg font-semibold text-foreground">The Status Quo</h4>
              </div>
              <ul className="space-y-4">
                {comparisonRows.map((row, i) => {
                  const Icon = row.pain.icon;
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-3"
                    >
                      <Icon className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-destructive/70 block mb-0.5">{row.feature}</span>
                        <span className="text-sm text-muted-foreground leading-snug">{row.pain.text}</span>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* Solution Card */}
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-7 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </span>
                <h4 className="text-lg font-semibold text-foreground">The FlashSpace Edge</h4>
              </div>
              <ul className="space-y-4">
                {comparisonRows.map((row, i) => {
                  const Icon = row.solution.icon;
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-3"
                    >
                      <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary/70 block mb-0.5">{row.feature}</span>
                        <span className="text-sm text-foreground font-medium leading-snug">{row.solution.text}</span>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── VPOB Callout Box ── */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-8 lg:p-10 text-center mb-12 lg:mb-16"
        >
          <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight mb-2">
            The Real Problem: No Multi-State GST Setup (VPOB)
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Without proper state-wise GST registration, you cannot legally store, sell, or claim tax benefits across India.
          </p>
        </motion.div>

        {/* ── Growth Card: Two Contrasting Blocks ── */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-foreground text-background overflow-hidden shadow-soft-lg"
        >
          <div className="grid md:grid-cols-2">
            {/* The Ceiling */}
            <div className="p-8 lg:p-12 bg-background/[0.06] flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-background/10">
              <span className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-3">
                The Ceiling
              </span>
              <span className="text-4xl lg:text-5xl font-bold text-background/40 tabular-nums tracking-tight mb-1">
                ₹3–5L
              </span>
              <span className="text-sm text-background/30">/month</span>
              <p className="text-xs text-background/30 mt-3 max-w-[200px]">
                Stuck with single-state GST
              </p>
            </div>

            {/* The Scale */}
            <div className="p-8 lg:p-12 flex flex-col items-center justify-center text-center relative">
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
                The Scale
              </span>
              <span className="text-5xl lg:text-6xl font-bold text-secondary tabular-nums tracking-tight mb-1">
                ₹15L+
              </span>
              <span className="text-sm text-secondary/70">/month</span>
              <p className="text-xs text-background/50 mt-3 max-w-[220px]">
                Unlocked with Multi-State VPOB
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-background/10 px-8 py-6 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-xl text-sm font-medium hover:bg-secondary/90 transition-colors duration-200 active:scale-[0.97]"
            >
              Get Your VPOB Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
