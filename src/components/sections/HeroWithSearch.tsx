import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import heroFallback from "@/assets/hero-india-skyline.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

export const HeroWithSearch = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[85vh] flex items-center" style={{ backgroundColor: "hsl(var(--primary))" }}>
      <div className="absolute inset-0" style={{ backgroundColor: "hsl(var(--primary))" }}>
        <img
          src={heroFallback}
          alt="Indian city skyline"
          className="w-full h-full object-cover"
          style={{ mixBlendMode: "luminosity", opacity: 0.55, filter: "contrast(1.3) brightness(1.1)" }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 20%, hsla(54, 96%, 88%, 0.3) 0%, transparent 50%)", mixBlendMode: "screen" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, transparent 40%, hsl(var(--primary)) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, hsl(var(--primary)) 100%)" }} />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 py-32 lg:py-40">
        <div className="container mx-auto">
          <div className="max-w-[720px]">
            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[26px] sm:text-[36px] lg:text-[48px] font-medium tracking-[-0.03em] text-white leading-[1.15] mb-6"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
            >
              Start & Scale Your E-commerce<br />
              Business Across India —{" "}
              <span className="italic text-secondary">Without GST Headaches</span>
            </motion.h1>

            <motion.p
              custom={0.25}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-[600px]"
            >
              From GST registration to multi-state compliance, we help you sell across India without legal or tax risks.
            </motion.p>

            <motion.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                variant="white"
                className="font-medium px-8 h-12 rounded-lg uppercase tracking-wider text-sm transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_0_30px_hsla(54,96%,88%,0.3)]"
                onClick={() => scrollTo("#contact")}
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Start Your Business
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium px-8 h-12 rounded-lg uppercase tracking-wider text-sm border-white text-white bg-white/10 hover:bg-white/20 transition-all duration-300"
                onClick={() => scrollTo("#contact")}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Book a Call
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
