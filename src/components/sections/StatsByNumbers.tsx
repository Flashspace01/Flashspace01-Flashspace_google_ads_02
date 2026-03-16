import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Award, Globe, Users, Star, Languages, Trophy } from "lucide-react";
import statsBg from "@/assets/stats-green-office.jpg";

const stats = [
  { value: 20, suffix: "", label: "Years in Business", icon: Trophy },
  { value: 100, suffix: "+", label: "Awards Won", icon: Award },
  { value: 100, suffix: ",000", label: "Creative Clients", icon: Users },
  { value: 1, suffix: "", label: "Global Creative Community", icon: Globe },
  { value: 10, suffix: "+", label: "Languages Spoken", icon: Languages },
  { value: 4.9, suffix: "/5", label: "Client Rating", icon: Star, isDecimal: true },
];

const partners = [
  { name: "Dubai Chamber", award: "Premium Partner 2025" },
  { name: "DMCC", award: "Top Business Setup 2024" },
  { name: "IFZA", award: "Service Excellence 2023" },
  { name: "RAKEZ", award: "Innovation Award 2022" },
  { name: "Dubai Economy", award: "Certified Partner 2024" },
];

const AnimatedNumber = ({ value, suffix, isDecimal }: { value: number; suffix: string; isDecimal?: boolean }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) =>
    isDecimal ? v.toFixed(1) : Math.round(v).toLocaleString()
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(motionVal, value, { duration: 2, ease: "easeOut" });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [motionVal, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export const StatsByNumbers = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={statsBg}
          alt="Modern green office in Dubai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(142,30%,12%)]/90 via-[hsl(142,25%,16%)]/85 to-[hsl(220,30%,18%)]/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-28">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-secondary leading-[1.15] tracking-tight mb-16 max-w-md"
        >
          Flash Space<br />By The Numbers
        </motion.h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white mb-2 tracking-tight">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              </div>
              <div className="text-white/60 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent mb-14" />

        {/* Partners row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center">
                <span className="text-secondary/90 text-xs font-bold tracking-wider uppercase">
                  {p.name.split(" ").map(w => w[0]).join("")}
                </span>
              </div>
              <div className="text-white/80 text-xs font-medium leading-relaxed">{p.award}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
