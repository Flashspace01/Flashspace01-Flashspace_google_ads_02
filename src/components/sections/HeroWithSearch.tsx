import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";


export const HeroWithSearch = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const [collapsed, setCollapsed] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCollapsed(latest > 100);
  });

  // Line 1 & 2: fade out and translate up
  const line1Opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const line1Y = useTransform(scrollY, [0, 100], [0, -20]);
  const line2Opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const line2Y = useTransform(scrollY, [0, 100], [0, -20]);

  // Line 3: scale down ~20%
  const line3Scale = useTransform(scrollY, [0, 120], [1, 0.8]);

  // Subheading: scale down ~15%
  const subScale = useTransform(scrollY, [0, 120], [1, 0.85]);

  return (
    <section ref={sectionRef} className="relative w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-[#f5f5f5]" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6">
        <div className="max-w-[1100px] w-full pt-24 sm:pt-[100px] lg:pt-[140px]">

          {/* Lines 1 & 2 — fade out on scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span
              style={{ opacity: line1Opacity, y: line1Y }}
              className={`block text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em] text-foreground leading-[1.08] transition-all duration-[400ms] ease-out ${collapsed ? 'hidden' : ''}`}
            >
              Where Workspaces Become
            </motion.span>
            <motion.span
              style={{ opacity: line2Opacity, y: line2Y }}
              className={`block text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em] text-foreground leading-[1.08] transition-all duration-[400ms] ease-out ${collapsed ? 'hidden' : ''}`}
            >
              Structured Infrastructure
            </motion.span>
          </motion.div>

          {/* CompactHeroWrapper — becomes sticky on scroll */}
          <div className="sticky top-[80px] z-20 bg-[#f5f5f5]">
            <div className={`flex flex-col items-center transition-all duration-[400ms] ease-out ${collapsed ? 'py-4' : 'py-0'}`}>
              {/* Line 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.span
                  style={{ scale: line3Scale, transformOrigin: "center top" }}
                  className="block text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em] text-foreground leading-[1.08] transition-all duration-[400ms] ease-out"
                >
                  Not Just Listings
                </motion.span>
              </motion.div>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                style={{
                  scale: subScale,
                  transformOrigin: "center top",
                }}
                className={`text-muted-foreground max-w-xl mx-auto transition-all duration-[400ms] ease-out ${collapsed ? 'text-sm leading-snug mt-2 whitespace-nowrap' : 'text-base sm:text-lg leading-relaxed mt-6'}`}
              >
                AI-powered platform to manage virtual offices, coworking spaces, meeting rooms, and enterprise workspace portfolios — all in one place.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-[400ms] ease-out ${collapsed ? 'mt-3' : 'mt-8'}`}
              >
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Chat with AI
                </Button>
                <Button size="lg" variant="outline" className="font-semibold px-8 h-12 rounded-xl border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-foreground/40 bg-transparent">
                  Explore Platform
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Dashboard Preview — scrolls normally */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            className="mt-16 w-full max-w-[1200px] mx-auto pb-16"
          >
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/10 text-muted-foreground text-xs font-medium tracking-wide border border-foreground/10">
                <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse" />
                Live Preview
              </span>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-background shadow-2xl overflow-hidden p-1">
              <div className="rounded-xl bg-background/90 backdrop-blur-sm p-6 sm:p-8">
                {/* Mock browser bar */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/80" />
                    <div className="w-3 h-3 rounded-full bg-accent/80" />
                    <div className="w-3 h-3 rounded-full bg-status-success/80" />
                  </div>
                  <div className="flex-1 h-7 rounded-md bg-muted/60 mx-8" />
                </div>
                {/* Mock dashboard content */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {["Total Spaces", "Active Clients", "Revenue", "Bookings"].map((label, i) => (
                    <div key={i} className="rounded-lg bg-muted/40 p-4">
                      <p className="text-[11px] text-muted-foreground font-medium">{label}</p>
                      <p className="text-lg font-bold text-foreground mt-1">
                        {["1,247", "892", "₹24.5L", "3,891"][i]}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 rounded-lg bg-muted/40 h-36" />
                  <div className="rounded-lg bg-muted/40 h-36" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
