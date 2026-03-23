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
} from "lucide-react";
import logisticsImg from "@/assets/india-ecommerce-logistics.png";

const leakageRows = [
  {
    feature: "Tax Credits",
    risk: "Blocked TCS credits — lost forever",
    reward: "100% ITC recovery & streamlined filing",
    riskIcon: Receipt,
  },
  {
    feature: "Operations",
    risk: "Inventory stuck in regional warehouses",
    reward: "Legal storage & pan-India distribution",
    riskIcon: Ban,
  },
  {
    feature: "Compliance",
    risk: "GST penalties & surprise notices",
    reward: "100% audit-ready automated compliance",
    riskIcon: AlertTriangle,
  },
  {
    feature: "Platform Health",
    risk: "Listing suspensions & account flags",
    reward: "Verified 'In-Stock' status across all hubs",
    riskIcon: ShieldOff,
  },
];

export const WhyEcommerce = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Two-column: headline + image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl font-medium text-foreground tracking-tight leading-tight mb-4">
              Stop Losing Lakhs to Compliance Gaps.
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg">
              Scaling on Amazon & Flipkart requires more than just inventory — it requires a Multi-State GST (VPOB) strategy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50">
              <img
                src={logisticsImg}
                alt="Indian e-commerce logistics — warehouse with packages and delivery"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Leakage Grid — Pain vs Solution */}
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            Where E-commerce Sellers Lose Money — And How We Fix It
          </h3>

          {/* Header row (desktop) */}
          <div className="hidden md:grid md:grid-cols-[1fr_1.3fr_1.3fr] gap-4 mb-3 px-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Feature</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-destructive">The Risk (Without VPOB)</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">The Reward (With FlashSpace)</span>
          </div>

          <div className="space-y-3">
            {leakageRows.map((row, i) => {
              const RiskIcon = row.riskIcon;
              return (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.08 * i, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="grid md:grid-cols-[1fr_1.3fr_1.3fr] gap-4 rounded-xl border border-border/50 bg-card p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Feature label */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{row.feature}</span>
                  </div>

                  {/* Risk */}
                  <div className="flex items-start gap-2.5">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-destructive/10 flex items-center justify-center mt-0.5">
                      <XCircle className="w-4 h-4 text-destructive" />
                    </span>
                    <span className="text-sm text-muted-foreground leading-snug">{row.risk}</span>
                  </div>

                  {/* Reward */}
                  <div className="flex items-start gap-2.5">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-sm text-foreground font-medium leading-snug">{row.reward}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* VPOB Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border-2 border-primary/20 bg-primary/5 px-6 py-5 text-center mb-12"
        >
          <h3 className="text-base font-semibold text-foreground mb-1.5">
            The Real Problem: No Multi-State GST Setup (VPOB)
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Without proper state-wise GST registration, you cannot legally store, sell, or claim tax benefits across India.
          </p>
        </motion.div>

        {/* Stuck vs Scale — two contrasting blocks */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border/50"
        >
          {/* The Ceiling */}
          <div className="bg-muted/60 p-8 lg:p-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-muted-foreground/10 flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6 text-muted-foreground" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">The Ceiling</span>
            <span className="text-4xl lg:text-5xl font-bold text-muted-foreground tabular-nums tracking-tight">₹3–5L</span>
            <span className="text-sm text-muted-foreground mt-1">/month · single-state GST</span>
            <p className="text-xs text-muted-foreground/70 mt-3 max-w-[220px]">
              Stuck with limited reach, blocked credits, and compliance risk.
            </p>
          </div>

          {/* The Scale */}
          <div className="bg-primary/10 p-8 lg:p-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">The Scale</span>
            <span className="text-4xl lg:text-5xl font-bold text-foreground tabular-nums tracking-tight">₹15L+</span>
            <span className="text-sm text-muted-foreground mt-1">/month · unlocked with VPOB</span>
            <p className="text-xs text-muted-foreground/70 mt-3 max-w-[220px]">
              Pan-India selling, full ITC recovery, and zero compliance gaps.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-5 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200 active:scale-[0.97]"
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
