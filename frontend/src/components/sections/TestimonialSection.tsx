import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "FlashSpace made registering my Pvt Ltd company incredibly smooth. The team handled everything from documentation to GST registration in just 8 days. Their post-setup support has been invaluable!",
    name: "Priya Sharma",
    title: "Founder, TechStart Solutions",
    city: "Bangalore",
  },
  {
    quote: "The team guided us through LLP formation, FSSAI license, and GST compliance with exceptional professionalism. Transparent pricing and expert advice made the entire process stress-free.",
    name: "Rajesh Patel",
    title: "Co-founder, GreenLeaf Organics",
    city: "Mumbai",
  },
  {
    quote: "From OPC registration to trademark filing, FlashSpace delivered everything they promised. Their CA team is highly responsive and helped us stay compliant from day one. Highly recommended!",
    name: "Anita Desai",
    title: "Director, StyleHub Fashion",
    city: "Delhi",
  },
];

export const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-[100px]" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[900px] px-6">
        {/* Label */}
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Client Experiences
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-foreground tracking-tight leading-[1.1] mb-16">
          Trusted by Founders Across India
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
