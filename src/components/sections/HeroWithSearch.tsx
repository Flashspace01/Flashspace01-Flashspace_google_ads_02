import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-dubai-skyline.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

const jurisdictions = ["Mainland", "Free Zone", "Offshore", "KSA", "Qatar"];

export const HeroWithSearch = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[calc(100svh-5rem)]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Dubai skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(320,70%,15%)]/60 via-transparent to-[hsl(320,70%,15%)]/40" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 min-h-[calc(100svh-5rem)]">
        <div className="max-w-[900px] w-full">
          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[34px] sm:text-[48px] lg:text-[62px] font-medium tracking-[-0.03em] text-white leading-[1.12] mb-6"
          >
            Business Setup<br />
            <span className="italic">Is Just The Beginning</span>
          </motion.h1>

          <motion.div
            custom={0.25}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap"
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
              className="font-semibold px-10 h-12 rounded-lg uppercase tracking-wider text-sm"
            >
              Start Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
