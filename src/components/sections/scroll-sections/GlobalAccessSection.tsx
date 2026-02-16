import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Globe, MapPin, Plane, Building2 } from "lucide-react";
import featureGlobalAccess from "@/assets/feature-global-access.jpg";

const locations = [
  { city: "Mumbai", count: "45+ spaces" },
  { city: "Bangalore", count: "60+ spaces" },
  { city: "Delhi NCR", count: "50+ spaces" },
  { city: "Chennai", count: "30+ spaces" },
  { city: "Hyderabad", count: "25+ spaces" },
  { city: "Pune", count: "20+ spaces" },
];

export const GlobalAccessSection = () => {
  return (
    <section id="global-access" className="py-24 lg:py-32 border-t border-border/50">
      <div className="space-y-16">
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <img
            src={featureGlobalAccess}
            alt="Global workspace access"
            className="w-full h-[350px] lg:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <span className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-wider mb-2 block">Global Access</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              One membership,
              <br />
              <span className="text-white/70">every city in India.</span>
            </h2>
          </div>
        </motion.div>

        {/* Description */}
        <div className="max-w-2xl">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Access any FlashSpace location across India with a single membership. 
            Walk into any workspace, anywhere — no extra bookings, no extra fees.
          </p>
          <Button variant="outline" size="lg" className="group border-primary/30 hover:bg-primary/5 font-semibold">
            View all locations
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>

        {/* Location grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-5 rounded-2xl bg-card border border-border flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{loc.city}</h4>
                <p className="text-sm text-muted-foreground">{loc.count}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 lg:gap-16 pt-8 border-t border-border/50">
          {[
            { value: "30+", label: "Cities covered" },
            { value: "1,000+", label: "Workspace locations" },
            { value: "1", label: "Membership needed" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl lg:text-3xl font-extrabold text-foreground tracking-tight">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
