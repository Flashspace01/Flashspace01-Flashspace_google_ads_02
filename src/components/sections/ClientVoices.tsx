import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

const testimonials = [
  {
    quote: "Flash Space has transformed the way we operate.",
    quoteHighlight: " Their administrative support has freed up our team to focus on our core business, and their responsiveness is unmatched. I can't imagine running our operations without them!",
    name: "Arjun Mehta",
    title: "Founder at NovaTech Solutions",
  },
  {
    quote: "We explored three consultancies before choosing Flash Space.",
    quoteHighlight: " Their transparent pricing and hands-on support were unmatched. Truly a five-star experience from start to finish.",
    name: "Sarah Al-Khalifa",
    title: "CEO at Bloom Interiors",
  },
  {
    quote: "As a solo founder relocating from London, I needed a partner I could trust.",
    quoteHighlight: " Flash Space guided me through every step — visa, license, office, banking. Exceptional service all around.",
    name: "James Thornton",
    title: "Director at Thornton Capital",
  },
];

export const ClientVoices = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative mx-auto max-w-5xl">
          {/* Corner marks */}
          <div className="absolute -top-2 -left-2 w-5 h-5 border-t border-l" style={{ borderColor: "#c8c8c8" }} />
          <div className="absolute -top-2 -right-2 w-5 h-5 border-t border-r" style={{ borderColor: "#c8c8c8" }} />
          <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b border-l" style={{ borderColor: "#c8c8c8" }} />
          <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b border-r" style={{ borderColor: "#c8c8c8" }} />

          {/* Card */}
          <div className="px-10 lg:px-16 pt-16 pb-12 lg:pt-20 lg:pb-16" style={{ background: "#fef8c3" }}>
            {/* Label */}
            <p className="text-sm mb-10 flex items-center gap-2" style={{ color: "#1a1a1a" }}>
              <span>+</span> What our clients say
            </p>

            {/* Quote */}
            <div className="min-h-[240px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <blockquote className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.25] tracking-tight" style={{ fontWeight: 400 }}>
                    <span style={{ color: "#b8a88a" }}>
                      "{testimonials[index].quote}
                    </span>
                    <span style={{ color: "#1a1a1a" }}>
                      {testimonials[index].quoteHighlight}"
                    </span>
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="flex items-end justify-between mt-12">
              <div>
                <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>
                  {testimonials[index].name}
                </p>
                <p className="text-sm mt-0.5" style={{ color: "#7a7a7a" }}>
                  {testimonials[index].title}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-colors"
                  style={{ borderColor: "#d4d4d4", color: "#1a1a1a" }}
                  aria-label="Previous testimonial"
                >
                  <ChevronsLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-colors"
                  style={{ borderColor: "#d4d4d4", color: "#1a1a1a" }}
                  aria-label="Next testimonial"
                >
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
