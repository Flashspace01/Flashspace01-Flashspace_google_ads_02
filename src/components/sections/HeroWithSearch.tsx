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
  {
    icon: PhoneCall,
    title: "Free Consultation",
    description: "Connect with our seasoned business advisors for a no-obligation consultation. We'll assess your goals, industry requirements, and help you map out the most efficient path to launching in the UAE.",
  },
  {
    icon: Briefcase,
    title: "Business Setup Advisory",
    description: "Receive a customised setup plan tailored to your business model, target market, and growth ambitions. Our advisors handle every detail so you can focus on what matters most — your business.",
  },
  {
    icon: Compass,
    title: "Right Jurisdiction Selection",
    description: "Mainland, Free Zone, or Offshore — each jurisdiction offers distinct advantages. We'll guide you through ownership rules, tax implications, and operational flexibility to find your ideal fit.",
  },
  {
    icon: FileText,
    title: "Trade License Application",
    description: "From selecting the right activity codes to submitting documentation, we manage the entire trade license process. Expect fast turnaround times and full compliance with UAE regulations.",
  },
  {
    icon: CreditCard,
    title: "Visa & Emirates ID",
    description: "We initiate your residency visa and Emirates ID applications, coordinating medical tests, biometrics, and approvals so your team can live and work in the UAE without hassle.",
  },
  {
    icon: Landmark,
    title: "Corporate Bank Account",
    description: "Opening a business bank account in the UAE can be complex. We liaise with leading banks, prepare your documentation, and ensure a smooth account opening process from start to finish.",
  },
];

const StepsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % steps.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  const getVisibleIndices = () => {
    const prev = (current - 1 + steps.length) % steps.length;
    const next = (current + 1) % steps.length;
    return [prev, current, next];
  };

  const [prev, center, nextIdx] = getVisibleIndices();

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
          From Vision to Reality — Here's How We Make It Happen
        </motion.h2>

        {/* 3-card carousel */}
        <div className="flex items-center justify-center gap-4 mb-8 max-w-5xl mx-auto">
          {[prev, center, nextIdx].map((stepIndex, pos) => {
            const isCenter = pos === 1;
            const step = steps[stepIndex];
            const Icon = step.icon;
            return (
              <motion.div
                key={`${current}-${pos}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isCenter ? 1 : 0.5,
                  scale: isCenter ? 1 : 0.85,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={() => setCurrent(stepIndex)}
                className={`rounded-2xl border border-white/15 backdrop-blur-md text-center cursor-pointer transition-all ${
                  isCenter
                    ? "bg-white/10 p-8 flex-[1.4] min-h-[240px]"
                    : "bg-white/5 p-6 flex-[0.8] min-h-[200px] hidden sm:block"
                }`}
              >
                <div className={`rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-4 ${
                  isCenter ? "w-14 h-14" : "w-10 h-10"
                }`}>
                  <Icon className={isCenter ? "w-7 h-7 text-secondary" : "w-5 h-5 text-secondary"} />
                </div>
                <h3 className={`text-white font-medium mb-3 ${isCenter ? "text-xl" : "text-base"}`}>
                  {step.title}
                </h3>
                <p className={`text-white/60 leading-relaxed ${isCenter ? "text-sm" : "text-xs line-clamp-3"}`}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2">
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
