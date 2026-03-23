import { motion } from "framer-motion";
import {
  AlertTriangle,
  Ban,
  Receipt,
  ShieldOff,
  CheckCircle2,
  XCircle,
  ArrowRight,
  TrendingUp,
  Zap,
} from "lucide-react";
import logisticsImg from "@/assets/india-ecommerce-logistics.png";
import { Progress } from "@/components/ui/progress";

const painPoints = [
  { icon: Receipt, text: "Blocked TCS credits — lost forever" },
  { icon: Ban, text: "Inventory stuck in regional warehouses" },
  { icon: AlertTriangle, text: "GST penalties & surprise notices" },
  { icon: ShieldOff, text: "Listing suspensions & account flags" },
];

const solutionPoints = [
  { text: "100% ITC recovery & streamlined filing" },
  { text: "Legal storage & pan-India distribution" },
  { text: "100% audit-ready automated compliance" },
  { text: "Verified 'In-Stock' status across all hubs" },
];

export const WhyEcommerce = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

        {/* ── Hero: headline left, image right ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
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

        {/* ── Before vs After Cards ── */}
        <div className="grid md:grid-cols-2 gap-5 mb-16 lg:mb-20">
          {/* Pain Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-destructive/20 bg-destructive/[0.04] p-7 lg:p-8 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-9 h-9 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">The Status Quo</h3>
            </div>
            <ul className="space-y-4">
              {painPoints.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3"
                  >
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-snug">{p.text}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-7 lg:p-8 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">The FlashSpace Edge</h3>
            </div>
            <ul className="space-y-4">
              {solutionPoints.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground font-medium leading-snug">{p.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Full-width Growth Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-foreground text-background p-8 lg:p-12 shadow-soft-lg"
        >
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-background/50 mb-3">
              Your Revenue Without VPOB vs With VPOB
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-background/90">
              The gap is not incremental — it's transformational.
            </h3>
          </div>

          {/* Progress visual */}
          <div className="max-w-xl mx-auto space-y-6 mb-10">
            {/* Ceiling */}
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm text-background/60">Single-state GST</span>
                <span className="text-2xl font-bold text-background/50 tabular-nums">₹3–5L<span className="text-xs font-normal text-background/40">/mo</span></span>
              </div>
              <Progress value={25} className="h-3 bg-background/10 [&>div]:bg-background/30" />
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center gap-2 text-secondary">
              <TrendingUp className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">Unlocked with VPOB</span>
            </div>

            {/* Scale */}
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm text-secondary font-medium">Multi-state VPOB</span>
                <span className="text-4xl lg:text-5xl font-bold text-secondary tabular-nums tracking-tight">₹15L+<span className="text-sm font-normal text-secondary/70">/mo</span></span>
              </div>
              <Progress value={95} className="h-3 bg-background/10 [&>div]:bg-secondary" />
            </div>
          </div>

          <div className="text-center">
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
