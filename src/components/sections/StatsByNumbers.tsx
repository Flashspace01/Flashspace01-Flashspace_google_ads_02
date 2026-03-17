import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
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

export const StatsByNumbers = () => {
  const topStats = stats.slice(0, 2);
  const bottomStats = stats.slice(2);

  return (
    <section className="relative overflow-hidden">
      {/* Background: blurred texture */}
      <div className="absolute inset-0">
        <img
          src={statsBg}
          alt=""
          className="w-full h-full object-cover scale-110"
          style={{ filter: "blur(15px)", opacity: 0.35 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(150,20%,7%)_0%,hsl(160,18%,5%)_60%,hsl(200,15%,4%)_100%)] opacity-[0.92]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 lg:py-36">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: "#c9983a" }}
          >
            Flash Space By The Numbers
          </h2>
          <p className="text-sm mt-4 tracking-[0.2em] uppercase" style={{ color: "#c9983a", opacity: 0.6 }}>
            Proven Success, Measurable Impact
          </p>
        </motion.div>

        {/* === Unified Glass Container === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto rounded-[32px] overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(201,152,58,0.18)",
            boxShadow: "inset 0 2px 40px rgba(0,0,0,0.3), 0 20px 60px -20px rgba(0,0,0,0.4)",
          }}
        >
          {/* Geometric overlay lines */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(30deg, rgba(201,152,58,0.4) 1px, transparent 1px),
                linear-gradient(-30deg, rgba(201,152,58,0.4) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative z-10 p-8 sm:p-10 lg:p-14">
            {/* Top 2 stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {topStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center py-8 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Soft glow behind number */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-24 h-24 rounded-full" style={{ background: "radial-gradient(circle, rgba(201,152,58,0.12) 0%, transparent 70%)" }} />
                  </div>
                  <div className="relative text-[48px] sm:text-[56px] lg:text-[64px] font-bold tracking-tight leading-none mb-2" style={{ color: "#d4a853" }}>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                  </div>
                  <div className="relative text-white/50 text-sm font-medium tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Hero stat divider */}
            <div className="h-px mx-auto max-w-xs mb-8" style={{ background: "linear-gradient(to right, transparent, rgba(201,152,58,0.25), transparent)" }} />

            {/* Featured hero stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="relative text-center py-10 lg:py-14 mb-8"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle, rgba(201,152,58,0.08) 0%, transparent 70%)" }} />
              </div>
              <div className="relative text-[72px] sm:text-[96px] lg:text-[120px] font-bold tracking-tighter leading-none mb-3" style={{ color: "#d4a853" }}>
                <AnimatedNumber value={featured.value} suffix={featured.suffix} />
              </div>
              <div className="relative text-white/60 text-base sm:text-lg font-medium tracking-wide">{featured.label}</div>
            </motion.div>

            {/* Bottom divider */}
            <div className="h-px mx-auto max-w-xs mb-8" style={{ background: "linear-gradient(to right, transparent, rgba(201,152,58,0.25), transparent)" }} />

            {/* Bottom 2 stats */}
            <div className="grid grid-cols-2 gap-6">
              {bottomStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="relative text-center py-8 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-24 h-24 rounded-full" style={{ background: "radial-gradient(circle, rgba(201,152,58,0.12) 0%, transparent 70%)" }} />
                  </div>
                  <div className="relative text-[48px] sm:text-[56px] lg:text-[64px] font-bold tracking-tight leading-none mb-2" style={{ color: "#d4a853" }}>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                  </div>
                  <div className="relative text-white/50 text-sm font-medium tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gold divider line */}
        <div className="h-px max-w-4xl mx-auto mt-16 mb-12" style={{ background: "linear-gradient(to right, transparent, rgba(201,152,58,0.35), transparent)" }} />

        {/* Partners marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="overflow-hidden"
        >
          <p className="text-center text-xs tracking-[0.25em] uppercase mb-8" style={{ color: "rgba(201,152,58,0.45)" }}>
            Trusted Partners & Recognitions
          </p>
          <div className="relative h-20">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(160,18%,5%), transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(160,18%,5%), transparent)" }} />
            <motion.div
              className="flex gap-8 items-center w-max h-full"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="flex-shrink-0 px-8 py-4 rounded-xl flex items-center gap-4"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(201,152,58,0.12)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(201,152,58,0.1)", border: "1px solid rgba(201,152,58,0.2)" }}
                  >
                    <span className="text-xs font-bold tracking-wider" style={{ color: "#c9983a" }}>
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
