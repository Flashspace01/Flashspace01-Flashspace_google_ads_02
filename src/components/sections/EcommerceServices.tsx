import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const services = [
  {
    title: "GST Registration & Compliance",
    description: "Complete GST registration, return filing, and ongoing compliance management so your e-commerce business stays fully legal.",
  },
  {
    title: "VPOB Setup",
    description: "Get a verified Virtual Place of Business address for GST registration in any state — the core requirement for multi-state selling.",
  },
  {
    title: "Multi-State GST Registration",
    description: "Register for GST in multiple states to unlock pan-India selling on Amazon, Flipkart, and other marketplaces without compliance gaps.",
  },
  {
    title: "E-commerce Compliance",
    description: "Stay compliant with marketplace-specific requirements — from TCS handling to listing documentation and seller verification.",
  },
];

export const EcommerceServices = () => {
  return (
    <section id="what-we-do" className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-3 tracking-tight">
            Everything your e-commerce<br className="hidden sm:block" />business needs to scale
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            One partner. Every service. From GST to marketplace compliance.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute -top-3 -left-3 text-muted-foreground/30 text-xl select-none">+</div>
          <div className="absolute -top-3 -right-3 text-muted-foreground/30 text-xl select-none">+</div>

          <div className="grid grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col justify-between border-r border-border/40 last:border-r-0 px-7 py-14 hover:bg-secondary transition-colors duration-300"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 leading-snug group-hover:text-secondary-foreground transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-secondary-foreground/70 transition-colors">
                    {service.description}
                  </p>
                </div>
                <div className="mt-10">
                  <button
                    className="w-11 h-11 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground group-hover:border-secondary-foreground/30 group-hover:text-secondary-foreground transition-all duration-200 active:scale-95"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute -bottom-3 -left-3 text-muted-foreground/30 text-xl select-none">+</div>
          <div className="absolute -bottom-3 -right-3 text-muted-foreground/30 text-xl select-none">+</div>
        </div>
      </div>
    </section>
  );
};
