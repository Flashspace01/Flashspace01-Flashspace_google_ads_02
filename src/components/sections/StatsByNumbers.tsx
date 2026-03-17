import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import statsBg from "@/assets/stats-green-office.jpg";

const stats = [
  { value: 20, suffix: "", label: "Years in Business" },
  { value: 100, suffix: "+", label: "Awards Won" },
  { value: 10, suffix: "+", label: "Languages Spoken" },
  { value: 4.9, suffix: "/5", label: "Client Rating", isDecimal: true },
];

const featured = { value: 100, suffix: ",000+", label: "Creative Clients" };

const partners = [
  { name: "Dubai Chamber", initials: "DC" },
  { name: "DMCC", initials: "DMCC" },
  { name: "IFZA", initials: "IFZA" },
  { name: "RAKEZ", initials: "RAKEZ" },
  { name: "Dubai Economy", initials: "DE" },
  { name: "Global Community", initials: "GC" },
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

/* Animated border beam that orbits the container */
const BorderBeam = () => (
  <div className="absolute inset-0 rounded-[32px] pointer-events-none overflow-hidden">
    <motion.div
      className="absolute w-32 h-32"
      style={{
        background: "radial-gradient(circle, rgba(212,175,55,0.5) 0%, transparent 70%)",
        filter: "blur(12px)",
      }}
      animate={{
        top: ["0%", "0%", "100%", "100%", "0%"],
        left: ["0%", "100%", "100%", "0%", "0%"],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const StatCard = ({ stat, delay }: { stat: typeof stats[0]; delay: number }) => (
  <motion.div
    key={stat.label}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative text-center py-6 lg:py-7 rounded-2xl group"
    style={{
      background: "rgba(212,175,55,0.04)",
      border: "1px solid rgba(212,175,55,0.15)",
    }}
  >
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-28 h-28 rounded-full" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.14) 0%, transparent 70%)" }} />
    </div>
    <div className="relative text-[44px] sm:text-[52px] lg:text-[60px] font-bold tracking-tight leading-none mb-1.5" style={{ color: "#d4af37" }}>
      <AnimatedNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
    </div>
    <div className="relative text-white/50 text-sm font-medium tracking-wide">{stat.label}</div>
  </motion.div>
);

export const StatsByNumbers = () => {
  const topStats = stats.slice(0, 2);
  const bottomStats = stats.slice(2);

  return (
    <section className="relative overflow-hidden" style={{ background: "#1A1A1A" }}>
      {/* Blurred background texture */}
      <div className="absolute inset-0">
        <img
          src={statsBg}
          alt=""
          className="w-full h-full object-cover scale-110"
          style={{ filter: "blur(18px)", opacity: 0.25 }}
        />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.95) 60%, #1A1A1A 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-transparent to-[#1A1A1A]/70" />
      </div>

      {/* Top transition fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-20" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-28 lg:py-36">
        {/* Heading with more breathing room */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-[60px] font-medium leading-[1.08] tracking-tight"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: "#c9983a" }}
          >
            Flash Space By The Numbers
          </h2>
          <p className="text-sm mt-5 tracking-[0.2em] uppercase" style={{ color: "#c9983a", opacity: 0.55 }}>
            Proven Success, Measurable Impact
          </p>
        </motion.div>

        {/* === Unified Glass Container === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto rounded-[32px] overflow-hidden relative"
          style={{
            background: "rgba(255,255,255,0.035)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(212,175,55,0.20)",
            boxShadow: "inset 0 2px 40px rgba(0,0,0,0.35), 0 24px 64px -20px rgba(0,0,0,0.5)",
          }}
        >
          {/* Border beam animation */}
          <BorderBeam />

          {/* Geometric overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
            style={{
              backgroundImage: `
                linear-gradient(30deg, rgba(212,175,55,0.5) 1px, transparent 1px),
                linear-gradient(-30deg, rgba(212,175,55,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            {/* Top 2 stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 mb-5">
              {topStats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} delay={i * 0.1} />
              ))}
            </div>

            {/* Hero stat divider */}
            <div className="h-px mx-auto max-w-xs mb-5" style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)" }} />

            {/* Featured hero stat with gold glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="relative text-center py-8 lg:py-10 mb-5"
            >
              {/* Central gold radial glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.04) 40%, transparent 70%)" }} />
              </div>
              <div className="relative text-[84px] sm:text-[112px] lg:text-[144px] font-bold tracking-tighter leading-none mb-2" style={{ color: "#d4af37" }}>
                <AnimatedNumber value={featured.value} suffix={featured.suffix} />
              </div>
              <div className="relative text-white/55 text-base sm:text-lg font-medium tracking-wide">{featured.label}</div>
            </motion.div>

            {/* Bottom divider */}
            <div className="h-px mx-auto max-w-xs mb-5" style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)" }} />

            {/* Bottom 2 stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {bottomStats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} delay={0.3 + i * 0.1} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gold divider to partners */}
        <div className="h-px max-w-4xl mx-auto mt-14 mb-10" style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent)" }} />

        {/* Partners marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="overflow-hidden"
        >
          <p className="text-center text-xs tracking-[0.25em] uppercase mb-8" style={{ color: "rgba(212,175,55,0.45)" }}>
            Trusted Partners & Recognitions
          </p>
          <div className="relative h-20">
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #1A1A1A, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #1A1A1A, transparent)" }} />
            <motion.div
              className="flex gap-6 items-center w-max h-full"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="flex-shrink-0 px-7 py-3.5 rounded-xl flex items-center gap-4 transition-all duration-300 hover:border-[rgba(212,175,55,0.35)]"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(212,175,55,0.12)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.22)" }}
                  >
                    <span className="text-xs font-bold tracking-wider" style={{ color: "#d4af37" }}>
                      {p.initials}
                    </span>
                  </div>
                  <span className="text-white/65 text-sm font-medium whitespace-nowrap transition-colors duration-300 hover:text-white/90">{p.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom transition fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};
