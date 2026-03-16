import { motion } from "framer-motion";
import { Building2, MapPin, Users } from "lucide-react";

const trustStats = [
  { icon: Building2, value: "1,000+", label: "Workspaces Available" },
  { icon: MapPin, value: "100+", label: "Cities Covered" },
  { icon: Users, value: "10,000+", label: "Businesses Served" },
];

export const TrustSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Trusted Nationwide
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
            Numbers that speak for themselves
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {trustStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-card rounded-2xl border border-border/50 p-8 lg:p-10 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
