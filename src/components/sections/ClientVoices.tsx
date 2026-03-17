import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Flash Space has transformed the way we operate. Their administrative support has freed up our team to focus on our core business, and their responsiveness is unmatched.",
    name: "Arjun Mehta",
    title: "Founder, NovaTech Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
  },
  {
    quote: "We reduced our workspace costs by 40% while doubling our team's access to premium offices. FlashSpace made it effortless.",
    name: "Vikram Desai",
    title: "Co-founder, Meridian Labs",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face",
  },
  {
    quote: "As a solo founder relocating from London, I needed a partner I could trust. Flash Space guided me through every step — visa, license, office, banking.",
    name: "James Thornton",
    title: "Director, Thornton Capital",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
  },
];

export const ClientVoices = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#1a2332" }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <p
            className="text-xs tracking-[0.25em] uppercase mb-14 font-medium"
            style={{ color: "#8a9bae" }}
          >
            Trusted by Founders
          </p>

          {/* Quote */}
          <div className="min-h-[180px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-2xl sm:text-3xl lg:text-[34px] leading-[1.35] tracking-tight font-medium"
                style={{ color: "#e8ecf1" }}
              >
                "{testimonials[index].quote}"
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Avatar + Name */}
          <div className="mt-12 flex flex-col items-center gap-3">
            <img
              src={testimonials[index].avatar}
              alt={testimonials[index].name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold" style={{ color: "#e8ecf1" }}>
                {testimonials[index].name}
              </p>
              <p className="text-sm mt-0.5" style={{ color: "#7a8a9b" }}>
                {testimonials[index].title}
              </p>
            </div>
          </div>

          {/* Dot pagination */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === index ? 24 : 8,
                  height: 8,
                  backgroundColor: i === index ? "#d4a853" : "#3a4a5c",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
