import { motion } from "framer-motion";
import logisticsImg from "@/assets/india-ecommerce-logistics.png";

const ease = [0.16, 1, 0.3, 1] as const;

export const WhyEcommerce = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-flex items-center bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              The Compliance Gap
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-5">
              Stop Losing Lakhs to{" "}
              <span className="text-primary">Compliance Gaps.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Scaling on Amazon&nbsp;&&nbsp;Flipkart requires more than inventory — it requires a Multi-State GST (VPOB) strategy.
            </p>
          </motion.div>

          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <div className="rounded-3xl overflow-hidden shadow-sm border border-border/20">
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
