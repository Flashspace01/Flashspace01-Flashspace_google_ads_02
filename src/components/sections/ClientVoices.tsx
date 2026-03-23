import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

const testimonials = [
  {
    quote: "We were losing TCS credits every month without even knowing it.",
    quoteHighlight: " Flash Space set up our multi-state VPOB in under 10 days. Now we sell in 12 states with zero compliance issues.",
    name: "Priya Sharma",
    title: "Founder, LuxeCart",
  },
  {
    quote: "Managing GST across multiple states felt impossible as a solo founder.",
    quoteHighlight: " Flash Space handled everything — VPOB, filings, TDS recovery. We scaled from 3 states to 18 in two months.",
    name: "Rahul Mehta",
    title: "CEO, UrbanBazaar",
  },
  {
    quote: "Our Amazon listings got suspended for compliance gaps.",
    quoteHighlight: " Flash Space not only fixed our GST registration but set us up properly so it never happened again. Revenue recovered within weeks.",
    name: "Anita Desai",
    title: "Founder, CraftNest India",
  },
];

export const ClientVoices = () => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -top-2 -left-2 w-5 h-5 border-t border-l border-border/40" />
          <div className="absolute -top-2 -right-2 w-5 h-5 border-t border-r border-border/40" />
          <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b border-l border-border/40" />
          <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b border-r border-border/40" />

          <div className="px-10 lg:px-16 pt-16 pb-12 lg:pt-20 lg:pb-16 bg-background">
            <p className="text-sm mb-10 flex items-center gap-2 text-primary">
              <span>+</span> What our clients say
            </p>

            <div className="min-h-[240px]">
              <AnimatePresence mode="wait">
                <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <blockquote className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.25] tracking-tight font-normal">
                    <span className="text-primary/50">"{testimonials[index].quote}</span>
                    <span className="text-primary">{testimonials[index].quoteHighlight}"</span>
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-end justify-between mt-12">
              <div>
                <p className="text-base font-medium text-primary">{testimonials[index].name}</p>
                <p className="text-sm mt-0.5 text-primary/70">{testimonials[index].title}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={prev} className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center transition-colors hover:bg-accent text-primary" aria-label="Previous">
                  <ChevronsLeft className="w-5 h-5" />
                </button>
                <button onClick={next} className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center transition-colors hover:bg-accent text-primary" aria-label="Next">
                  <ChevronsRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
