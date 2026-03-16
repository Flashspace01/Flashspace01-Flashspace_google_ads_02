import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

export const HeroWithSearch = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#f8f7f4' }}>
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6 py-24 sm:py-32 lg:py-40">
        <div className="max-w-[900px] w-full">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border/30 mb-8"
          >
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-foreground/80 text-sm font-medium">
              India & Global Workspace Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[34px] sm:text-[48px] lg:text-[62px] font-medium tracking-[-0.03em] text-foreground leading-[1.12] mb-6"
          >
            Find Workspaces and Business Solutions{" "}
            <span className="text-primary italic">Anywhere</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={0.25}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg leading-relaxed mb-10"
          >
            Discover coworking spaces, virtual offices, and business setup services globally.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal px-8 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Explore Workspaces
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-medium px-8 h-12 rounded-xl border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-foreground/30 bg-transparent"
            >
              Start Your Business
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
