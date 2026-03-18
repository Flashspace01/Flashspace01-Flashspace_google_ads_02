import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Briefcase,
  Compass,
  FileText,
  CreditCard,
  Landmark,
  PhoneCall,
} from "lucide-react";
import heroVideo from "@/assets/hero-skyline-loop.mp4";
import heroFallback from "@/assets/hero-skyline-fallback.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

const jurisdictions = ["Mainland", "Free Zone", "Offshore", "KSA", "Qatar"];

const steps = [
  {
    icon: PhoneCall,
    title: "Free Consultation",
    description: "Connect with our seasoned business advisors for a no-obligation consultation. We'll assess your goals, industry requirements, and help you map out the most efficient path to launching in the UAE.",
  },
  {
    icon: Briefcase,
    title: "Business Setup Advisory",
    description: "Receive a customised setup plan tailored to your business model, target market, and growth ambitions. Our advisors handle every detail so you can focus on what matters most — your business.",
  },
  {
    icon: Compass,
    title: "Right Jurisdiction Selection",
    description: "Mainland, Free Zone, or Offshore — each jurisdiction offers distinct advantages. We'll guide you through ownership rules, tax implications, and operational flexibility to find your ideal fit.",
  },
  {
    icon: FileText,
    title: "Trade License Application",
    description: "From selecting the right activity codes to submitting documentation, we manage the entire trade license process. Expect fast turnaround times and full compliance with UAE regulations.",
  },
  {
    icon: CreditCard,
    title: "Visa & Emirates ID",
    description: "We initiate your residency visa and Emirates ID applications, coordinating medical tests, biometrics, and approvals so your team can live and work in the UAE without hassle.",
  },
  {
    icon: Landmark,
    title: "Corporate Bank Account",
    description: "Opening a business bank account in the UAE can be complex. We liaise with leading banks, prepare your documentation, and ensure a smooth account opening process from start to finish.",
  },
];

const StepsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % steps.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  // Positions: -1 = left, 0 = center, 1 = right, others hidden
  const getPosition = (index: number) => {
    const diff = (index - current + steps.length) % steps.length;
    if (diff === 0) return 0; // center
    if (diff === 1) return 1; // right
    if (diff === steps.length - 1) return -1; // left
    return 2; // hidden
  };

  const positionStyles: Record<number, { x: string; scale: number; opacity: number; zIndex: number }> = {
    [-1]: { x: "-110%", scale: 0.78, opacity: 0.5, zIndex: 1 },
    0: { x: "0%", scale: 1.15, opacity: 1, zIndex: 3 },
    1: { x: "110%", scale: 0.78, opacity: 0.5, zIndex: 1 },
    2: { x: "200%", scale: 0.7, opacity: 0, zIndex: 0 },
  };

  return (
    <div className="relative z-10 w-full px-6 lg:px-12 pt-12 pb-20 lg:pb-28">
      <div className="container mx-auto">
        <motion.h2
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl sm:text-2xl lg:text-3xl font-medium text-white mb-10 tracking-[-0.02em] text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          From Vision to Reality — Here's How We Make It Happen
        </motion.h2>

        {/* Circular carousel */}
        <div className="relative max-w-md mx-auto mb-8 h-[280px] sm:max-w-lg" style={{ perspective: "1000px" }}>
          {steps.map((step, index) => {
            const pos = getPosition(index);
            const style = positionStyles[pos] || positionStyles[2];
            const Icon = step.icon;
            const isCenter = pos === 0;

            return (
              <motion.div
                key={index}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                  rotateY: pos === -1 ? 8 : pos === 1 ? -8 : 0,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                onClick={() => setCurrent(index)}
                className="absolute inset-0 rounded-2xl border border-white/20 text-center cursor-pointer p-8 group"
                style={{
                  zIndex: style.zIndex,
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(15px)",
                  WebkitBackdropFilter: "blur(15px)",
                  transformStyle: "preserve-3d",
                }}
                whileHover={isCenter ? { y: -6, boxShadow: "0 20px 60px -10px rgba(0,0,0,0.4)" } : {}}
              >
                <div className={`rounded-xl bg-primary flex items-center justify-center mx-auto mb-4 transition-shadow duration-300 ${
                  isCenter ? "w-14 h-14 group-hover:shadow-[0_0_20px_rgba(254,248,195,0.4)]" : "w-10 h-10"
                }`}>
                  <Icon className={`transition-colors duration-300 ${isCenter ? "w-7 h-7 text-secondary group-hover:text-[#FEF8C3]" : "w-5 h-5 text-secondary"}`} />
                </div>
                <h3
                  className={`font-medium mb-3 text-white ${isCenter ? "text-xl" : "text-base"}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {step.title}
                </h3>
                {isCenter && (
                  <p className="text-white/70 text-sm" style={{ lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? "w-8 bg-secondary" : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const HeroWithSearch = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: "hsl(var(--primary))" }}>
      {/* Background video with duotone blend */}
      <div className="absolute inset-0" style={{ backgroundColor: "hsl(var(--primary))" }}>
        <video
          ref={(el) => { if (el) el.playbackRate = 0.5; }}
          autoPlay
          loop
          muted
          playsInline
          poster={heroFallback}
          className="w-full h-full object-cover"
          style={{
            mixBlendMode: "luminosity",
            opacity: 0.55,
            filter: "contrast(1.3) brightness(1.1)",
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Sun Glow - yellow sky accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 80% 20%, hsla(54, 96%, 88%, 0.3) 0%, transparent 50%)",
            mixBlendMode: "screen",
          }}
        />
        {/* Duotone highlight tint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, hsla(54, 96%, 88%, 0.12) 0%, transparent 50%, hsla(54, 96%, 88%, 0.08) 100%)",
            mixBlendMode: "soft-light",
          }}
        />
        {/* Radial fog blend */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, transparent 40%, hsl(var(--primary)) 100%)",
          }}
        />
        {/* Bottom fade to carousel */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, hsl(var(--primary)) 100%)",
          }}
        />
      </div>

      {/* Hero content - left aligned */}
      <div className="relative z-10 w-full px-6 lg:px-12 pt-32 lg:pt-40 pb-16">
        <div className="container mx-auto">
          <div className="max-w-[650px]">
            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[28px] sm:text-[38px] lg:text-[48px] font-semibold tracking-[-0.03em] text-white leading-[1.15] mb-6"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)", fontFamily: "'Inter', sans-serif" }}
            >
              Launch & Scale Your<br />
              <span className="italic">Business in the UAE</span>
            </motion.h1>

            <motion.div
              custom={0.25}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 sm:gap-3 mb-10 flex-wrap"
            >
              {jurisdictions.map((item, i) => (
                <span key={item} className="flex items-center gap-2 sm:gap-3">
                  <span className="text-white/90 text-sm sm:text-base font-medium hover:text-white cursor-pointer transition-colors">
                    {item}
                  </span>
                  {i < jurisdictions.length - 1 && (
                    <span className="text-white/40">|</span>
                  )}
                </span>
              ))}
            </motion.div>

            <motion.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <Button
                size="lg"
                variant="white"
                className="font-semibold px-10 h-12 rounded-lg uppercase tracking-wider text-sm transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_0_30px_hsla(54,96%,88%,0.3)]"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Book a Call
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Steps carousel */}
      <StepsCarousel />
    </section>
  );
};
