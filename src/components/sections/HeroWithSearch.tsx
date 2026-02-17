import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Mic, Send } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

const line1Words = ["Where", "Workspaces", "Become"];
const line2Words = ["Structured", "Infrastructure"];
const line3Words = ["Not", "Just", "Listings"];
const allWords = [...line1Words, ...line2Words, ...line3Words];

export const HeroWithSearch = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { scrollY } = useScroll();
  const [collapsed, setCollapsed] = useState(false);
  const [chatExpanded, setChatExpanded] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCollapsed(latest > 100);
    if (latest > 300 && chatExpanded) {
      setChatExpanded(false);
    }
  });

  // Intercom-style: smooth scale-down + fade + vertical compression
  const line1Opacity = useTransform(scrollY, [0, 150], [1, 0]);
  const line1Y = useTransform(scrollY, [0, 150], [0, -30]);
  const line1Scale = useTransform(scrollY, [0, 150], [1, 0.85]);
  const line2Opacity = useTransform(scrollY, [0, 150], [1, 0]);
  const line2Y = useTransform(scrollY, [0, 150], [0, -30]);
  const line2Scale = useTransform(scrollY, [0, 150], [1, 0.85]);
  
  // Sticky section also scales subtly
  const stickyScale = useTransform(scrollY, [0, 200], [1, 0.97]);
  const stickyY = useTransform(scrollY, [0, 200], [0, -8]);

  const totalWordDelay = allWords.length * 0.08 + 0.3; // when last word finishes

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src={heroVideo}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/40" />
      </div>
      {/* Hero Content */}
      <section id="hero" className="relative w-full">
        <div className="relative z-10 w-full flex flex-col items-center text-center px-6">
          <div className="max-w-[1100px] w-full pt-24 sm:pt-[100px] lg:pt-[140px]">

            {/* Lines 1 & 2 — fade out on scroll, staggered word entrance */}
            <motion.div
              initial="hidden"
              animate="visible"
              style={{ willChange: 'auto' }}
            >
              <motion.div
                style={{ opacity: line1Opacity, y: line1Y, scale: line1Scale, visibility: collapsed ? 'hidden' : 'visible', maxHeight: collapsed ? 0 : 100, overflow: 'hidden', willChange: 'transform, opacity', transformOrigin: 'center bottom' }}
                className="block text-[34px] sm:text-[52px] lg:text-[68px] font-medium tracking-[-0.03em] text-white leading-[1.2] sm:leading-[1.15] lg:leading-[1.12] transition-[max-height,visibility] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                {line1Words.map((word, i) => (
                  <motion.span
                    key={word}
                    custom={i}
                    variants={wordVariants}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div
                style={{ opacity: line2Opacity, y: line2Y, scale: line2Scale, visibility: collapsed ? 'hidden' : 'visible', maxHeight: collapsed ? 0 : 100, overflow: 'hidden', willChange: 'transform, opacity', transformOrigin: 'center bottom' }}
                className="block text-[34px] sm:text-[52px] lg:text-[68px] font-medium tracking-[-0.03em] text-white leading-[1.2] sm:leading-[1.15] lg:leading-[1.12] transition-[max-height,visibility] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                {line2Words.map((word, i) => (
                  <motion.span
                    key={word}
                    custom={line1Words.length + i}
                    variants={wordVariants}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky wrapper */}
      <div className="sticky top-[68px] lg:top-[100px] z-20 bg-black/30 backdrop-blur-sm">
        <div className="w-full flex flex-col items-center text-center px-6">
          <div className="max-w-[1100px] w-full">
            <motion.div style={{ scale: stickyScale, y: stickyY, transformOrigin: 'center top' }} className="flex flex-col items-center pb-6 sm:pb-8">
              {/* Line 3 — staggered words */}
              <motion.div
                initial="hidden"
                animate="visible"
                className="block text-[34px] sm:text-[52px] lg:text-[68px] font-medium tracking-[-0.03em] text-white leading-[1.2] sm:leading-[1.15] lg:leading-[1.12]"
              >
                {line3Words.map((word, i) => (
                  <motion.span
                    key={word}
                    custom={line1Words.length + line2Words.length + i}
                    variants={wordVariants}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>

              {/* Subheading */}
              <motion.p
                custom={totalWordDelay}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className={`text-white/70 mx-auto max-w-xl text-base sm:text-lg leading-relaxed ${collapsed ? 'mt-2' : 'mt-6'}`}
              >
                AI-powered platform to manage virtual offices, coworking spaces, meeting rooms, and enterprise workspace portfolios — all in one place.
              </motion.p>

              {/* CTAs */}
              <motion.div
                custom={totalWordDelay + 0.15}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
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
                <Button size="lg" variant="outline" className="font-semibold px-8 h-12 rounded-xl border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent">
                  Explore Platform
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  );
};
