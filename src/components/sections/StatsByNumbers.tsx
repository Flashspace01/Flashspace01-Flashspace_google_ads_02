import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import statsBg from "@/assets/stats-green-office.jpg";

const topRow = [
  { value: 20, suffix: "", label: "Years in Business" },
  { value: 100, suffix: "+", label: "Awards Won" },
  { value: 1, suffix: "", label: "Global Community" },
];

const featured = { value: 100, suffix: ",000+", label: "Creative Clients" };

const bottomRight = [
  { value: 10, suffix: "+", label: "Languages Spoken" },
  { value: 4.9, suffix: "/5", label: "Client Rating", isDecimal: true },
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

const cardClass = "rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl p-8 text-center hover:border-secondary/20 transition-colors duration-500";

export const StatsByNumbers = () => {
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

        {/* 3-column grid */}
        <div className="max-w-5xl mx-auto space-y-4">
          {/* Top row: 3 equal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {topRow.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={cardClass}
              >
                <div className="text-[44px] sm:text-[48px] lg:text-[56px] font-bold tracking-tight leading-none mb-2" style={{ color: "#d4a853" }}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/50 text-sm font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row: featured spans 2 cols, stacked pair in 3rd col */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Featured stat - spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="sm:col-span-2 rounded-2xl border border-secondary/20 bg-white/[0.05] backdrop-blur-xl p-12 lg:p-16 text-center overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(42,60%,50%)_0%,transparent_70%)] opacity-[0.06]" />
              <div className="relative z-10">
                <div className="text-[72px] sm:text-[80px] lg:text-[100px] font-bold tracking-tighter leading-none mb-3" style={{ color: "#d4a853" }}>
                  <AnimatedNumber value={featured.value} suffix={featured.suffix} />
                </div>
                <div className="text-white/60 text-base sm:text-lg font-medium tracking-wide">{featured.label}</div>
              </div>
            </motion.div>

            {/* Stacked pair in 3rd column */}
            <div className="flex flex-col gap-4">
              {bottomRight.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className={`${cardClass} flex-1 flex flex-col items-center justify-center`}
                >
                  <div className="text-[44px] sm:text-[48px] lg:text-[56px] font-bold tracking-tight leading-none mb-2" style={{ color: "#d4a853" }}>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                  </div>
                  <div className="text-white/50 text-sm font-medium tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16 max-w-4xl mx-auto" />

        {/* Partners — monochromatic, evenly spaced */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-center text-white/30 text-xs tracking-[0.25em] uppercase mb-8">
            Trusted Partners & Recognitions
          </p>
          <div className="flex items-center justify-between max-w-3xl mx-auto px-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity duration-300"
              >
                <div className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.05] flex items-center justify-center">
                  <span className="text-white/70 text-[10px] font-bold tracking-wider">
                    {p.initials}
                  </span>
                </div>
                <span className="text-white/50 text-sm font-medium whitespace-nowrap hidden sm:block">{p.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
