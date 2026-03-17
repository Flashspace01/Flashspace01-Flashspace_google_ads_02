import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import statsBg from "@/assets/stats-green-office.jpg";

const stats = [
  { value: 20, suffix: "", label: "Years in Business", featured: false },
  { value: 100, suffix: "+", label: "Awards Won", featured: false },
  { value: 100, suffix: ",000+", label: "Creative Clients", featured: true },
  { value: 1, suffix: "", label: "Global Creative Community", featured: false },
  { value: 10, suffix: "+", label: "Languages Spoken", featured: false },
  { value: 4.9, suffix: "/5", label: "Client Rating", isDecimal: true, featured: false },
];

const partners = [
  { name: "Dubai Chamber", initials: "DC" },
  { name: "DMCC", initials: "DMCC" },
  { name: "IFZA", initials: "IFZA" },
  { name: "RAKEZ", initials: "RAKEZ" },
  { name: "Dubai Economy", initials: "DE" },
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
          animate(motionVal, value, { duration: 2.4, ease: "easeOut" });
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
  // Split stats: featured center, others around
  const featured = stats.find((s) => s.featured)!;
  const others = stats.filter((s) => !s.featured);
  const topRow = others.slice(0, 3);
  const bottomRow = others.slice(3);

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={statsBg} alt="" className="w-full h-full object-cover scale-105 blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(142,28%,8%)_0%,hsl(160,20%,6%)_50%,hsl(220,25%,7%)_100%)] opacity-[0.93]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 lg:py-32">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-medium text-secondary leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
            Flash Space By The Numbers
          </h2>
          <p className="text-white/40 text-sm mt-4 tracking-[0.2em] uppercase">
            Authority · Trust · Results
          </p>
        </motion.div>

        {/* === Stats Layout === */}
        <div className="max-w-5xl mx-auto">
          {/* Top row: 3 stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {topRow.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-md p-8 text-center group hover:border-secondary/20 transition-colors duration-500"
              >
                <div className="text-[44px] sm:text-[48px] lg:text-[56px] font-bold tracking-tight leading-none mb-2"
                     style={{ color: "#d4a853" }}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                </div>
                <div className="text-white/50 text-sm font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Featured hero stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative rounded-2xl border border-secondary/20 bg-white/[0.05] backdrop-blur-lg p-12 lg:p-16 text-center mb-4 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(42,60%,50%)_0%,transparent_70%)] opacity-[0.06]" />
            <div className="relative z-10">
              <div className="text-[72px] sm:text-[96px] lg:text-[120px] font-bold tracking-tighter leading-none mb-3"
                   style={{ color: "#d4a853" }}>
                <AnimatedNumber value={featured.value} suffix={featured.suffix} isDecimal={featured.isDecimal} />
              </div>
              <div className="text-white/60 text-base sm:text-lg font-medium tracking-wide">{featured.label}</div>
            </div>
          </motion.div>

          {/* Bottom row: remaining stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {bottomRow.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="relative rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-md p-8 text-center group hover:border-secondary/20 transition-colors duration-500"
              >
                <div className="text-[44px] sm:text-[48px] lg:text-[56px] font-bold tracking-tight leading-none mb-2"
                     style={{ color: "#d4a853" }}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                </div>
                <div className="text-white/50 text-sm font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16 max-w-4xl mx-auto" />

        {/* Partners marquee row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="overflow-hidden"
        >
          <p className="text-center text-white/30 text-xs tracking-[0.25em] uppercase mb-8">
            Trusted Partners & Recognitions
          </p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[hsl(160,20%,6%)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[hsl(160,20%,6%)] to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex gap-12 items-center w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="flex-shrink-0 px-8 py-4 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                    <span className="text-secondary text-[11px] font-bold tracking-wider">
                      {p.initials}
                    </span>
                  </div>
                  <span className="text-white/70 text-sm font-medium whitespace-nowrap">{p.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
