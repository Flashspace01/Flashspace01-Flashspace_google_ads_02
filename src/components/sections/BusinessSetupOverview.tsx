import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const setupTypes = [
  {
    title: "Mainland Setup",
    description: "Establish your business in the UAE mainland with full market access and government-backed licensing.",
    href: "#",
  },
  {
    title: "Free Zone Setup",
    description: "100% foreign ownership, zero tax, and streamlined setup in any of the 40+ UAE free zones.",
    href: "#",
  },
  {
    title: "Offshore Setup",
    description: "Register an offshore company for asset protection, international trading, and holding structures.",
    href: "#",
  },
];

export const BusinessSetupOverview = () => {
  return (
    <section id="business-setup" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-5 tracking-tight">
            Choose the right setup for your business
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We guide you through every step of UAE company formation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {setupTypes.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`relative flex flex-col justify-between p-8 lg:p-10 min-h-[320px] group hover:bg-muted/30 transition-colors duration-300 border-t border-border/40 ${
                index < setupTypes.length - 1 ? "lg:border-r border-border/40" : ""
              } ${index === 0 ? "sm:border-r border-border/40" : ""}`}
            >
              <div>
                <span className="text-muted-foreground text-sm mb-4 block">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-8">
                <div className="w-12 h-12 border border-border/40 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                  <Plus className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};