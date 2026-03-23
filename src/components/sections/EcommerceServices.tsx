import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  MapPin,
  Map,
  ShoppingCart,
  Receipt,
  Calculator,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "GST Registration & Compliance",
    subtitle: "End-to-end GST support",
    description: "Complete GST registration, return filing, and ongoing compliance management so your e-commerce business stays fully legal.",
  },
  {
    icon: MapPin,
    title: "VPOB Setup",
    subtitle: "Virtual Place of Business",
    description: "Get a verified Virtual Place of Business address for GST registration in any state — the core requirement for multi-state selling.",
  },
  {
    icon: Map,
    title: "Multi-State GST Registration",
    subtitle: "Sell across all 28 states",
    description: "Register for GST in multiple states to unlock pan-India selling on Amazon, Flipkart, and other marketplaces without compliance gaps.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Compliance",
    subtitle: "Amazon, Flipkart & more",
    description: "Stay compliant with marketplace-specific requirements — from TCS handling to listing documentation and seller verification.",
  },
  {
    icon: Receipt,
    title: "TDS / TCS Handling",
    subtitle: "Tax deduction management",
    description: "Proper handling of TDS and TCS deducted by marketplaces so you can claim credits and avoid permanent tax losses.",
  },
  {
    icon: Calculator,
    title: "Accounting & Filing",
    subtitle: "Books, returns & ITR",
    description: "Professional bookkeeping, GST return filing, and income tax filing tailored for e-commerce sellers across India.",
  },
];

export const EcommerceServices = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) return;
    autoScrollRef.current = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 3000);
  }, []);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
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
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          onTouchStart={stopAutoScroll}
          onTouchEnd={startAutoScroll}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group shrink-0 w-[280px] sm:w-[300px] snap-start bg-card rounded-2xl border border-border/50 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{service.title}</h3>
                <p className="text-xs font-medium text-primary/70 mb-3 uppercase tracking-wider">{service.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
