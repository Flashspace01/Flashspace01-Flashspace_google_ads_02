import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "GST Registration & Compliance",
    description: "Complete GST registration, return filing, and ongoing compliance management so your e-commerce business stays fully legal.",
  },
  {
    title: "VPOB Setup",
    description: "Get a verified Virtual Place of Business address for GST registration in any state — the core requirement for multi-state selling.",
  },
  {
    title: "Multi-State GST Registration",
    description: "Register for GST in multiple states to unlock pan-India selling on Amazon, Flipkart, and other marketplaces without compliance gaps.",
  },
  {
    title: "E-commerce Compliance",
    description: "Stay compliant with marketplace-specific requirements — from TCS handling to listing documentation and seller verification.",
  },
  {
    title: "TDS / TCS Handling",
    description: "Proper handling of TDS and TCS deducted by marketplaces so you can claim credits and avoid permanent tax losses.",
  },
  {
    title: "Accounting & Filing",
    description: "Professional bookkeeping, GST return filing, and income tax filing tailored for e-commerce sellers across India.",
  },
];

export const EcommerceServices = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const startAutoScroll = useCallback(() => {
    if (animationRef.current) return;
    const step = () => {
      if (!scrollRef.current) return;
      const el = scrollRef.current;
      el.scrollLeft += 0.5;
      const halfWidth = el.scrollWidth / 2;
      if (el.scrollLeft >= halfWidth) {
        el.scrollLeft -= halfWidth;
      }
      animationRef.current = requestAnimationFrame(step);
    };
    animationRef.current = requestAnimationFrame(step);
  }, []);

  const stopAutoScroll = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, [startAutoScroll, stopAutoScroll]);

  return (
    <section id="what-we-do" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-3 tracking-tight">
              Everything your e-commerce<br className="hidden sm:block" />business needs to scale
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              One partner. Every service. From GST to marketplace compliance.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" })}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" })}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute -top-3 -left-3 text-muted-foreground/30 text-xl select-none">+</div>
          <div className="absolute -top-3 -right-3 text-muted-foreground/30 text-xl select-none">+</div>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
            onTouchStart={stopAutoScroll}
            onTouchEnd={startAutoScroll}
          >
            {[...services, ...services].map((service, i) => (
              <div
                key={`${service.title}-${i}`}
                className="group shrink-0 w-[280px] sm:w-[300px] flex flex-col justify-between border-r border-border/40 last:border-r-0 px-7 py-8 hover:bg-secondary transition-colors duration-300"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-secondary-foreground transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-secondary-foreground/70 transition-colors">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8">
                  <button
                    className="w-11 h-11 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground group-hover:border-secondary-foreground/30 group-hover:text-secondary-foreground transition-all duration-200 active:scale-95"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-3 -left-3 text-muted-foreground/30 text-xl select-none">+</div>
          <div className="absolute -bottom-3 -right-3 text-muted-foreground/30 text-xl select-none">+</div>
        </div>
      </div>
    </section>
  );
};
