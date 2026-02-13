import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "FlashSpace gave us the infrastructure to scale across 12 cities without a single long-term lease. It's the backbone of our hybrid strategy.",
    name: "Ananya Mehta",
    title: "CEO, NovaBridge Technologies",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&auto=format",
  },
  {
    quote: "We reduced our workspace costs by 40% while doubling our team's access to premium offices. FlashSpace made it effortless.",
    name: "Vikram Desai",
    title: "Co-founder, Meridian Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&auto=format",
  },
  {
    quote: "From virtual offices to meeting rooms on demand — FlashSpace is the only platform our operations team needs.",
    name: "Sneha Kapoor",
    title: "Head of Operations, Prism Collective",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&auto=format",
  },
];

export const FounderTestimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className="w-full bg-foreground py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
        {/* Label */}
        <span className="text-muted-foreground text-xs font-medium uppercase tracking-[0.2em] mb-10">
          Trusted by Founders
        </span>

        {/* Quote */}
        <div className="max-w-3xl min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground leading-snug tracking-tight"
            >
              "{current.quote}"
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Profile */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <img
              src={current.avatar}
              alt={current.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-primary-foreground font-semibold">{current.name}</p>
              <p className="text-muted-foreground text-sm">{current.title}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                i === activeIndex
                  ? "bg-accent"
                  : "bg-primary-foreground/25"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
