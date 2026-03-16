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
  const [page, setPage] = useState(0);
  const totalPages = 2; // 6 steps, 3 per page

  const nextPage = useCallback(() => {
    setPage((prev) => (prev + 1) % totalPages);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextPage, 5000);
    return () => clearInterval(interval);
  }, [nextPage]);

  const currentSteps = steps.slice(page * 3, page * 3 + 3);

  return (
    <div className="relative z-10 w-full px-6 lg:px-12 py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        <motion.h2
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground mb-12 tracking-[-0.02em] text-center"
        >
          Your 6-Step Roadmap to Business in the UAE
        </motion.h2>

        {/* Cards — 3 at a time */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {currentSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-2xl border border-border bg-card shadow-sm p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-foreground font-medium text-lg mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Progress dots — below cards */}
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === page ? "w-8 bg-secondary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
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
    <>
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
        <div className="relative z-10 w-full px-6 lg:px-12 pt-32 lg:pt-40 pb-20 lg:pb-28">
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
      </section>

      {/* Steps carousel — separate section with white bg */}
      <StepsCarousel />
    </>
  );
};
