import { motion } from "framer-motion";
import { Users, Zap, Eye, HeartHandshake } from "lucide-react";

const advantages = [
  {
    icon: Users,
    title: "UAE Experts",
    description: "Our team has deep expertise in UAE regulations, free zones, and mainland licensing — so you don't have to.",
  },
  {
    icon: Zap,
    title: "Fast Company Setup",
    description: "Get your trade license in as little as 3 days. We handle the paperwork while you focus on your business.",
  },
  {
    icon: Eye,
    title: "Transparent Pricing",
    description: "No hidden fees. Clear, upfront pricing for every service — from company formation to visa processing.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    description: "From choosing your jurisdiction to opening a bank account, we support you at every stage of your journey.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-card/50 border-y border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-5 tracking-tight">
            Built for entrepreneurs in the UAE
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We make starting and running a business in the UAE simple, fast, and hassle-free.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-card rounded-2xl border border-border/50 p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
