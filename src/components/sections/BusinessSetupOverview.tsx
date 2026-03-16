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
  {
    title: "Visa Services",
    description: "Residence visas, investor visas, golden visas, and family sponsorship — handled end-to-end.",
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
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Business Setup
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-5 tracking-tight">
            Choose the right setup for your business
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether it's mainland, free zone, or offshore — we guide you through every step of UAE company formation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-dashed border-border/70 rounded-none">
          {setupTypes.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`relative flex flex-col justify-between p-8 lg:p-10 min-h-[320px] group hover:bg-muted/30 transition-colors duration-300 ${
                index < setupTypes.length - 1 ? "border-r border-dashed border-border/70 sm:border-r lg:border-r" : ""
              } ${index < 2 ? "sm:border-b sm:border-dashed sm:border-border/70 lg:border-b-0" : ""} ${
                index === 1 ? "sm:border-r-0 lg:border-r lg:border-dashed lg:border-border/70" : ""
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-8">
                <div className="w-12 h-12 rounded-full border border-dashed border-border/70 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
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