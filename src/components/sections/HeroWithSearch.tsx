import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[34px] sm:text-[48px] lg:text-[62px] font-medium tracking-[-0.03em] text-foreground leading-[1.12] mb-6"
          >
            Start and Grow Your Business{" "}
            <span className="text-primary italic">in the UAE</span>
          </motion.h1>

          <motion.p
            custom={0.25}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg leading-relaxed mb-10"
          >
            End-to-end company formation, visas, compliance, and business support services.
          </motion.p>

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
              Start Your Business
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-medium px-8 h-12 rounded-xl border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-foreground/30 bg-transparent"
            >
              Talk to an Expert
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
