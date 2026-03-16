import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Briefcase,
  Compass,
  FileText,
  CreditCard,
  Landmark,
  PhoneCall,
} from "lucide-react";
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

const steps = [
  { icon: PhoneCall, title: "Free Consultation", description: "Speak with our experts at no cost to understand your options" },
  { icon: Briefcase, title: "Business Setup Advisory", description: "Tailored guidance for your venture based on your goals" },
  { icon: Compass, title: "Right Jurisdiction Selection", description: "Choose between Mainland, Free Zone, or Offshore" },
  { icon: FileText, title: "Trade License Application", description: "Swift processing & approvals handled end-to-end" },
  { icon: CreditCard, title: "Visa & Emirates ID", description: "Residency visa and Emirates ID initiation" },
  { icon: Landmark, title: "Corporate Bank Account", description: "Assisted corporate bank account opening" },
];

const StepsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % steps.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="relative z-10 w-full px-6 lg:px-12 pb-20 lg:pb-28">
      <div className="container mx-auto">
        <motion.h2
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-10 tracking-[-0.02em] text-center"
        >
          Your Roadmap to Business<br className="hidden sm:block" /> in the UAE
        </motion.h2>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? "w-8 bg-secondary" : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Card */}
        <div className="max-w-lg mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-8 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                {(() => {
                  const Icon = steps[current].icon;
                  return <Icon className="w-7 h-7 text-secondary" />;
                })()}
              </div>
              <span className="text-white/40 text-xs font-medium uppercase tracking-widest mb-2 block">
                Step {current + 1} of {steps.length}
              </span>
              <h3 className="text-white font-medium text-xl mb-2">{steps[current].title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{steps[current].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const HeroWithSearch = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Dubai skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(142,20%,15%)]/70 via-[hsl(142,20%,15%)]/40 to-[hsl(142,20%,15%)]/80" />
      </div>

      {/* Hero content - left aligned */}
      <div className="relative z-10 w-full px-6 lg:px-12 pt-32 lg:pt-40 pb-16">
        <div className="container mx-auto">
          <div className="max-w-[650px]">
            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[28px] sm:text-[38px] lg:text-[48px] font-medium tracking-[-0.03em] text-white leading-[1.15] mb-6"
            >
              Launch & Scale Your<br />
              <span className="italic">Business in the UAE</span>
            </motion.h1>

            <motion.div
              custom={0.25}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 sm:gap-3 mb-10 flex-wrap"
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
                <MessageSquare className="w-4 h-4 mr-2" />
                Book a Call
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Steps carousel */}
      <StepsCarousel />
    </section>
  );
};
