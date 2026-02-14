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
            <div className="flex flex-col items-center">
              {/* Line 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span
                  className="block text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em] text-foreground leading-[1.08]"
                >
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
  );
};
