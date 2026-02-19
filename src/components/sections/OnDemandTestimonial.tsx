import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Flashspace has completely changed how I work. I book a hot desk whenever I need one, no contracts, no fuss. The spaces are always top-notch and the booking process takes less than a minute.",
    name: "Arjun Mehta",
    title: "Freelance Product Designer",
    city: "Bangalore",
  },
  {
    quote: "Our remote team uses Flashspace across three cities. The meeting rooms are always well-equipped and available on short notice. It's become an essential part of how we operate.",
    name: "Sneha Kapoor",
    title: "Head of Operations, RemoteFirst",
    city: "Mumbai",
  },
  {
    quote: "As a startup founder always on the move, having access to professional spaces without a long-term lease is a game changer. The community events have also helped us find our first few clients!",
    name: "Vikram Nair",
    title: "Co-founder, LaunchPad Ventures",
    city: "Delhi",
  },
];

export const OnDemandTestimonial = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-[100px]" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[900px] px-6">
        {/* Label */}
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Member Experiences
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-foreground tracking-tight leading-[1.1] mb-16">
          Trusted by Professionals Across India
        </h2>

        {/* Quote */}
        <div className="min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <blockquote className="text-[20px] sm:text-[22px] leading-relaxed text-foreground/90 mb-8">
                "{testimonials[index].quote}"
              </blockquote>
              <p className="font-semibold text-primary text-base">{testimonials[index].name}</p>
              <p className="text-muted-foreground text-sm mt-0.5">{testimonials[index].title}</p>
              <p className="text-muted-foreground/60 text-xs mt-1">{testimonials[index].city}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground text-muted-foreground"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground text-muted-foreground"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5 ml-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-primary" : "bg-border"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
