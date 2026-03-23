import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Clock,
  Users,
  Award,
  HeadphonesIcon,
} from "lucide-react";

const painPoints = [
  "Confusing UAE regulations for online businesses",
  "Payment gateway approval takes weeks or gets rejected",
  "Bank account delays stall your launch",
  "VAT compliance is complex and risky",
  "Logistics & fulfilment are hard to figure out alone",
];

const advantages = [
  { icon: Zap, title: "Launch in Under 3 Weeks", description: "Our streamlined process gets your e-commerce business licensed and selling fast." },
  { icon: Clock, title: "One Team, Every Service", description: "Licence, bank, payments, VAT, logistics — all handled under one roof." },
  { icon: Users, title: "E-commerce Specialists", description: "We understand activity codes, payment flows, and platform integrations." },
  { icon: Award, title: "2,000+ Businesses Launched", description: "Your success is backed by proven expertise across the UAE." },
  { icon: HeadphonesIcon, title: "Ongoing Support Post-Launch", description: "Renewals, compliance, scaling — we're here for the long run." },
  { icon: ShieldCheck, title: "Full Compliance Guaranteed", description: "We keep you on the right side of UAE regulations from day one." },
];

export const WhyEcommerce = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 max-w-6xl mx-auto">
          {/* Left — Pain points */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-4 tracking-tight">
              Launching e-commerce in the UAE is harder than it looks
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Most founders hit the same walls. We've already solved them.
            </p>
            <ul className="space-y-4">
              {painPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3 bg-card rounded-xl border border-border/50 px-5 py-4"
                >
                  <span className="shrink-0 mt-1 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center text-destructive text-xs font-bold">!</span>
                  <span className="text-foreground text-[15px] leading-snug">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Advantages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-4 tracking-tight">
              Why e-commerce founders choose Flash Space
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              We bring speed, expertise, and end-to-end support.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="bg-card rounded-xl border border-border/50 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
