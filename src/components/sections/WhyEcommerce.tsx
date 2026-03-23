import { motion } from "framer-motion";
import { AlertTriangle, Ban, Receipt, ShieldOff } from "lucide-react";
import logisticsImg from "@/assets/india-ecommerce-logistics.png";

const problems = [
  { icon: AlertTriangle, text: "Blocked TCS credits — money gone forever" },
  { icon: Receipt, text: "GST penalties & surprise notices" },
  { icon: Ban, text: "Inventory stuck in warehouses across states" },
  { icon: ShieldOff, text: "Listing suspensions on Amazon & Flipkart" },
];

export const WhyEcommerce = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Content blocks */}
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            {/* Block 1 — Primary heading */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-medium text-foreground tracking-tight leading-tight mb-3">
                Selling Across India Without GST Setup is a Costly Mistake
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
                Most e-commerce sellers lose lakhs due to compliance gaps they don't even realize.
              </p>
            </div>

            {/* Block 2 — Problem statement */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Where E-commerce Sellers Lose Money
              </h3>
              <ul className="space-y-3">
                {problems.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
                      className="flex items-center gap-3"
                    >
                      <span className="shrink-0 w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-destructive" />
                      </span>
                      <span className="text-foreground text-[15px] leading-snug">{p.text}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* Block 3 — Core insight */}
            <div className="border-l-2 border-primary/30 pl-5">
              <h3 className="text-base font-semibold text-foreground mb-1.5">
                The Real Problem: No Multi-State GST Setup (VPOB)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Without proper state-wise GST registration, you cannot legally store, sell, or claim tax benefits across India.
              </p>
            </div>

            {/* Block 4 — Transition hook */}
            <div className="bg-foreground text-background rounded-xl px-6 py-5">
              <p className="text-sm font-semibold mb-1">
                This is Why Most Sellers Stay Stuck at ₹3–5L/month
              </p>
              <p className="text-xs text-background/60">
                While others scale to ₹15L+/month using proper setup.
              </p>
            </div>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
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
      </div>
    </section>
  );
};
