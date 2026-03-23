import { motion } from "framer-motion";
import {} from "lucide-react";
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

      </div>
    </section>
  );
};
