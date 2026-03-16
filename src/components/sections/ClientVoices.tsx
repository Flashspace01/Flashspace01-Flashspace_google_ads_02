import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Flash Space made our UAE setup seamless. From free zone selection to bank account opening — everything was handled in under two weeks.",
    name: "Arjun Mehta",
    role: "Founder, NovaTech Solutions",
    location: "DMCC Free Zone",
    rating: 5,
  },
  {
    quote:
      "We explored three consultancies before choosing Flash Space. Their transparent pricing and hands-on support were unmatched. Truly a five-star experience.",
    name: "Sarah Al-Khalifa",
    role: "CEO, Bloom Interiors",
    location: "Mainland Dubai",
    rating: 5,
  },
  {
    quote:
      "As a solo founder relocating from London, I needed a partner I could trust. Flash Space guided me through every step — visa, license, office, banking.",
    name: "James Thornton",
    role: "Director, Thornton Capital",
    location: "DIFC",
    rating: 5,
  },
];

export const ClientVoices = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary text-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm text-secondary/60 mb-4">
            <span className="text-secondary">+</span> What our clients say
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-secondary leading-[1.15] tracking-tight max-w-xl">
            Trusted by founders
            <br />
            across 40+ countries.
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-secondary/[0.06] border border-secondary/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-secondary/[0.1] transition-colors duration-300"
            >
              <div>
                <Quote className="w-8 h-8 text-secondary/20 mb-5" />
                <p className="text-secondary/80 text-[15px] leading-relaxed mb-8">
                  {t.quote}
                </p>
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star
                      key={si}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                <div className="border-t border-secondary/10 pt-4">
                  <p className="font-semibold text-secondary text-sm">
                    {t.name}
                  </p>
                  <p className="text-secondary/50 text-xs">{t.role}</p>
                  <p className="text-secondary/35 text-xs mt-1">
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
