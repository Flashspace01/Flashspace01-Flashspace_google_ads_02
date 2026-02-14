import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-premium-bg.jpg";

export const HeroWithSearch = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Heading: scale down to ~70% over 0-120px scroll
  const headingScale = useTransform(scrollY, [0, 120], [1, 0.7]);
  const headingLineHeight = useTransform(scrollY, [0, 120], [1.05, 1.4]);

  // Subheading: reduce size ~85% and opacity to 80%
  const subScale = useTransform(scrollY, [0, 120], [1, 0.85]);
  const subOpacity = useTransform(scrollY, [0, 120], [1, 0.8]);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image — scrolls naturally */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Premium workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6">
        <div className="max-w-[1100px] w-full">

          {/* Heading — scroll-compressed */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              scale: headingScale,
              lineHeight: headingLineHeight,
              transformOrigin: "center top",
              transition: "line-height 0.45s ease-out",
            }}
            className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em] text-white mb-6"
          >
            The Operating System
            <br />
            for Modern
            <br />
            Workspaces
          </motion.h1>

          {/* Subheading — scroll-reduced */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            style={{
              scale: subScale,
              opacity: subOpacity,
              transformOrigin: "center top",
            }}
            className="text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed mb-10"
          >
            AI-powered platform to manage virtual offices, coworking spaces, meeting rooms, and enterprise workspace portfolios — all in one place.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <Sparkles className="w-4 h-4 mr-1" />
              Chat with AI
            </Button>
            <Button size="lg" variant="outline" className="font-semibold px-8 h-12 rounded-xl border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent">
              Explore Platform
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
