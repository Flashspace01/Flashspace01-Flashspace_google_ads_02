import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";


export const HeroWithSearch = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Smooth scroll interpolation 0–200px range
  const line1Opacity = useTransform(scrollY, [0, 120], [1, 0]);
  const line1Y = useTransform(scrollY, [0, 120], [0, -24]);
  const line2Opacity = useTransform(scrollY, [20, 140], [1, 0]);
  const line2Y = useTransform(scrollY, [20, 140], [0, -20]);

  // Lines 1&2 collapse height smoothly via maxHeight + scale
  const linesMaxHeight = useTransform(scrollY, [0, 160], [300, 0]);
  const linesScale = useTransform(scrollY, [0, 160], [1, 0.95]);

  // Subheading spacing interpolation
  const subMt = useTransform(scrollY, [0, 160], [24, 8]);
  // CTA spacing interpolation
  const ctaMt = useTransform(scrollY, [0, 160], [32, 16]);

  // Dashboard smooth reveal
  const dashY = useTransform(scrollY, [0, 200], [20, 0]);
  const dashOpacity = useTransform(scrollY, [50, 250], [0.85, 1]);

  return (
    <>
      {/* Hero Section */}
      <section ref={sectionRef} id="hero" className="relative w-full">
        <div className="absolute inset-0 bg-[#f5f5f5]" />
        <div className="relative z-10 w-full flex flex-col items-center text-center px-6">
          <div className="max-w-[1100px] w-full pt-24 sm:pt-[100px] lg:pt-[140px] pb-12 sm:pb-16 lg:pb-20">

            {/* Lines 1 & 2 — smooth fade + collapse */}
            <motion.div
              style={{
                maxHeight: linesMaxHeight,
                scale: linesScale,
                overflow: "hidden",
              }}
              className="origin-top will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.span
                  style={{ opacity: line1Opacity, y: line1Y }}
                  className="block text-[34px] sm:text-[52px] lg:text-[68px] font-medium tracking-[-0.03em] text-foreground leading-[1.2] sm:leading-[1.15] lg:leading-[1.12] will-change-transform"
                >
                  Where Workspaces Become
                </motion.span>
                <motion.span
                  style={{ opacity: line2Opacity, y: line2Y }}
                  className="block text-[34px] sm:text-[52px] lg:text-[68px] font-medium tracking-[-0.03em] text-foreground leading-[1.2] sm:leading-[1.15] lg:leading-[1.12] will-change-transform"
                >
                  Structured Infrastructure
                </motion.span>
              </motion.div>
            </motion.div>

            {/* CompactHeroWrapper — becomes sticky on scroll */}
            <div className="sticky top-[80px] z-20 bg-[#f5f5f5]">
              <div className="flex flex-col items-center">
                {/* Line 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <span className="block text-[34px] sm:text-[52px] lg:text-[68px] font-medium tracking-[-0.03em] text-foreground leading-[1.2] sm:leading-[1.15] lg:leading-[1.12]">
                    Not Just Listings
                  </span>
                </motion.div>

                {/* Subheading */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                  style={{ marginTop: subMt }}
                  className="text-muted-foreground mx-auto max-w-xl text-base sm:text-lg leading-relaxed will-change-transform transition-[margin] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                >
                  AI-powered platform to manage virtual offices, coworking spaces, meeting rooms, and enterprise workspace portfolios — all in one place.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  style={{ marginTop: ctaMt }}
                  className="flex flex-wrap items-center justify-center gap-4 will-change-transform transition-[margin] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
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
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="hero-dashboard" className="relative w-full bg-[#f5f5f5]">
        <div className="relative z-10 w-full flex flex-col items-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            style={{ y: dashY, opacity: dashOpacity }}
            className="mt-8 sm:mt-12 lg:mt-16 w-full max-w-[1200px] mx-auto pb-16 will-change-transform"
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
      </section>
    </>
  );
};
