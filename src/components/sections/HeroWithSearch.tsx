import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Mic, Send } from "lucide-react";


export const HeroWithSearch = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { scrollY } = useScroll();
  const [collapsed, setCollapsed] = useState(false);
  const [chatExpanded, setChatExpanded] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCollapsed(latest > 100);
  });

  // Line 1 & 2: fade out and translate up
  const line1Opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const line1Y = useTransform(scrollY, [0, 100], [0, -20]);
  const line2Opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const line2Y = useTransform(scrollY, [0, 100], [0, -20]);


  return (
    <div ref={containerRef} className="relative w-full bg-[#f5f5f5]">
      {/* Hero Content */}
      <section id="hero" className="relative w-full">
        <div className="relative z-10 w-full flex flex-col items-center text-center px-6">
          <div className="max-w-[1100px] w-full pt-24 sm:pt-[100px] lg:pt-[140px]">

            {/* Lines 1 & 2 — fade out on scroll */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ willChange: 'auto' }}
            >
              <motion.span
                style={{ opacity: line1Opacity, y: line1Y, visibility: collapsed ? 'hidden' : 'visible', maxHeight: collapsed ? 0 : 100, overflow: 'hidden', willChange: 'transform, opacity' }}
                className="block text-[34px] sm:text-[52px] lg:text-[68px] font-medium tracking-[-0.03em] text-foreground leading-[1.2] sm:leading-[1.15] lg:leading-[1.12] transition-[max-height,visibility] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                Where Workspaces Become
              </motion.span>
              <motion.span
                style={{ opacity: line2Opacity, y: line2Y, visibility: collapsed ? 'hidden' : 'visible', maxHeight: collapsed ? 0 : 100, overflow: 'hidden', willChange: 'transform, opacity' }}
                className="block text-[34px] sm:text-[52px] lg:text-[68px] font-medium tracking-[-0.03em] text-foreground leading-[1.2] sm:leading-[1.15] lg:leading-[1.12] transition-[max-height,visibility] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                Structured Infrastructure
              </motion.span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky wrapper — sticks below navbar while dashboard scrolls under */}
      <div className="sticky top-[68px] lg:top-[100px] z-20 bg-[#f5f5f5]">
        <div className="w-full flex flex-col items-center text-center px-6">
          <div className="max-w-[1100px] w-full">
            <div className="flex flex-col items-center pb-6 sm:pb-8">
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
                className={`text-muted-foreground mx-auto max-w-xl text-base sm:text-lg leading-relaxed ${collapsed ? 'mt-2' : 'mt-6'}`}
              >
                AI-powered platform to manage virtual offices, coworking spaces, meeting rooms, and enterprise workspace portfolios — all in one place.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className={`flex flex-wrap items-center justify-center gap-4 ${collapsed ? 'mt-4' : 'mt-8'}`}
              >
                <div className="min-h-[52px] flex items-center">
                  {!chatExpanded ? (
                    <motion.div
                      key="button"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all"
                        onClick={() => setChatExpanded(true)}
                      >
                        <Sparkles className="w-4 h-4 mr-1" />
                        Chat with AI
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="input"
                      initial={{ width: 180, opacity: 0 }}
                      animate={{ width: 400, opacity: 1 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="flex items-center h-12 rounded-xl border border-foreground/10 bg-white overflow-hidden shadow-lg max-w-[90vw]"
                      onAnimationComplete={() => inputRef.current?.focus()}
                    >
                      <input
                        ref={inputRef}
                        type="text"
                        placeholder="Ask anything about workspaces…"
                        className="flex-1 h-full px-4 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none min-w-0"
                      />
                      <button className="p-2.5 text-muted-foreground hover:text-foreground transition-opacity">
                        <Mic className="w-4 h-4" />
                      </button>
                      <button className="p-2.5 mr-1 text-primary hover:text-primary/80 transition-opacity">
                        <Send className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </div>
                <Button size="lg" variant="outline" className="font-semibold px-8 h-12 rounded-xl border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-foreground/40 bg-transparent">
                  Explore Platform
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
