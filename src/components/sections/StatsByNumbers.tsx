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
  const featured = stats.find((s) => s.featured)!;
  const others = stats.filter((s) => !s.featured);
  const topRow = others.slice(0, 3);
  const bottomRow = others.slice(3);

  return (
    <section className="relative overflow-hidden" style={{ background: "#FFFDF8" }}>
      {/* Ghosted background image */}
      <div className="absolute inset-0">
        <img src={statsBg} alt="" className="w-full h-full object-cover opacity-[0.08]" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(212,175,55,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 lg:py-32">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: "#1a1a1a" }}
          >
            Flash Space By The Numbers
          </h2>
          <p className="text-sm mt-4 tracking-[0.2em] uppercase" style={{ color: "#999" }}>
            Authority · Trust · Results
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="max-w-5xl mx-auto">
          {/* Top row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {topRow.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl p-8 text-center backdrop-blur-md transition-shadow duration-500 hover:shadow-xl"
                style={{
                  background: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(212,175,55,0.15)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
                }}
              >
                <div className="text-[44px] sm:text-[48px] lg:text-[56px] font-bold tracking-tight leading-none mb-2" style={{ color: "#D4AF37" }}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                </div>
                <div className="text-sm font-medium tracking-wide" style={{ color: "#666" }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Featured hero stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative rounded-2xl p-12 lg:p-16 text-center mb-4 overflow-hidden backdrop-blur-lg"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(212,175,55,0.25)",
              boxShadow: "0 12px 48px rgba(212,175,55,0.08), 0 4px 16px rgba(0,0,0,0.03)",
            }}
          >
            <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <div className="text-[72px] sm:text-[96px] lg:text-[120px] font-bold tracking-tighter leading-none mb-3" style={{ color: "#D4AF37" }}>
                <AnimatedNumber value={featured.value} suffix={featured.suffix} isDecimal={featured.isDecimal} />
              </div>
              <div className="text-base sm:text-lg font-medium tracking-wide" style={{ color: "#555" }}>{featured.label}</div>
            </div>
          </motion.div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {bottomRow.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="relative rounded-2xl p-8 text-center backdrop-blur-md transition-shadow duration-500 hover:shadow-xl"
                style={{
                  background: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(212,175,55,0.15)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
                }}
              >
                <div className="text-[44px] sm:text-[48px] lg:text-[56px] font-bold tracking-tight leading-none mb-2" style={{ color: "#D4AF37" }}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                </div>
                <div className="text-sm font-medium tracking-wide" style={{ color: "#666" }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px my-16 max-w-4xl mx-auto" style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent)" }} />

        {/* Partners marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="overflow-hidden"
        >
          <p className="text-center text-xs tracking-[0.25em] uppercase mb-8" style={{ color: "#aaa" }}>
            Trusted Partners & Recognitions
          </p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #FFFDF8, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #FFFDF8, transparent)" }} />
            <motion.div
              className="flex gap-12 items-center w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="flex-shrink-0 px-8 py-4 rounded-xl backdrop-blur-sm flex items-center gap-4"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(212,175,55,0.12)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}
                  >
                    <span className="text-[11px] font-bold tracking-wider" style={{ color: "#B8962E" }}>
                      {p.initials}
                    </span>
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap" style={{ color: "#333" }}>{p.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
