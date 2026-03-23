import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  {
    title: "GST Registration & Compliance",
    description: "Complete GST registration, return filing, and ongoing compliance management so your e-commerce business stays fully legal.",
  },
  {
    title: "VPOB Setup",
    description: "Get a verified Virtual Place of Business address for GST registration in any state — the core requirement for multi-state selling.",
  },
];

const CARDS_PER_PAGE = 4;
const TOTAL_PAGES = Math.ceil(services.length / CARDS_PER_PAGE);
const AUTO_SCROLL_DELAY = 4000;

export const EcommerceServices = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page % TOTAL_PAGES);
  }, []);

  const goNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % TOTAL_PAGES);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + TOTAL_PAGES) % TOTAL_PAGES);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(goNext, AUTO_SCROLL_DELAY);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, goNext]);

  const visibleCards = services.slice(
    currentPage * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

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
              onClick={goPrev}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Previous cards"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Next cards"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute -top-3 -left-3 text-muted-foreground/30 text-xl select-none">+</div>
          <div className="absolute -top-3 -right-3 text-muted-foreground/30 text-xl select-none">+</div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 lg:grid-cols-4"
            >
              {visibleCards.map((service, i) => (
                <div
                  key={`${service.title}-${currentPage}-${i}`}
                  className="group flex flex-col justify-between border-r border-border/40 last:border-r-0 px-7 py-14 hover:bg-secondary transition-colors duration-300"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 leading-snug group-hover:text-secondary-foreground transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-secondary-foreground/70 transition-colors">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-10">
                    <button
                      className="w-11 h-11 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground group-hover:border-secondary-foreground/30 group-hover:text-secondary-foreground transition-all duration-200 active:scale-95"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-3 -left-3 text-muted-foreground/30 text-xl select-none">+</div>
          <div className="absolute -bottom-3 -right-3 text-muted-foreground/30 text-xl select-none">+</div>
        </div>

        {/* Page indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentPage ? "bg-foreground w-6" : "bg-border"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
