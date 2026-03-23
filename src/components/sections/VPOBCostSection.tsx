import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  AlertTriangle,
  TrendingDown,
  Ban,
  Receipt,
  ShieldOff,
  IndianRupee,
  ArrowRight,
  XCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const scenarios = [
  {
    icon: TrendingDown,
    title: "TCS Credit Loss",
    explanation:
      "Without state-level GST registration, TCS deducted by marketplaces cannot be claimed back. It's gone — permanently.",
    rows: [
      { label: "Monthly TCS Lost", value: "₹5,000" },
      { label: "Annual Loss", value: "₹60,000" },
    ],
    totalLabel: "Annual Loss",
    totalValue: "₹60,000",
    highlight:
      "This money is permanently lost without state GST registration.",
  },
  {
    icon: AlertTriangle,
    title: "GST Penalty & Compliance Risk",
    explanation:
      "Operating without proper registration triggers tax liability, penalties, interest, and late fees — all compounding fast.",
    rows: [
      { label: "Tax Liability", value: "₹3,60,000" },
      { label: "Penalty + Interest + Fees", value: "₹94,200" },
    ],
    totalLabel: "Total Loss",
    totalValue: "₹4,54,200",
    highlight: "A simple compliance gap leads to massive penalties.",
  },
  {
    icon: Ban,
    title: "Inventory Freeze Loss",
    explanation:
      "When your inventory is flagged or legally blocked, you can't sell — and every day costs you revenue.",
    rows: [
      { label: "Inventory Stuck", value: "₹8,00,000" },
      { label: "Sales Lost", value: "₹3,00,000/mo" },
    ],
    totalLabel: "Total Loss",
    totalValue: "₹9,57,000",
    highlight: "You can't sell if your inventory is legally blocked.",
  },
  {
    icon: Receipt,
    title: "ITC (Input Tax Credit) Loss",
    explanation:
      "Without VPOB, you miss claiming ITC on purchases — paying tax you didn't have to.",
    rows: [
      { label: "ITC Available", value: "₹1,80,000" },
      { label: "ITC Claimable", value: "₹60,000" },
    ],
    totalLabel: "Loss",
    totalValue: "₹1,20,000",
    highlight: "You pay tax you could have avoided.",
  },
  {
    icon: ShieldOff,
    title: "Listing Suspension",
    explanation:
      "Non-compliant listings get suspended. Even after reinstatement, your rankings and organic traffic take months to recover.",
    rows: [
      { label: "Revenue Lost", value: "₹8,00,000" },
      { label: "Ranking Loss", value: "₹1,00,000" },
    ],
    totalLabel: "Total Loss",
    totalValue: "₹9,00,000",
    highlight: "Recovery takes months even after reinstatement.",
  },
  {
    icon: IndianRupee,
    title: "TDS Loss",
    explanation:
      "TDS deducted by platforms without proper registration becomes unrecoverable — compounding year over year.",
    rows: [
      { label: "TDS Lost", value: "₹40,000/yr" },
      { label: "3-Year Loss", value: "₹1,20,000" },
    ],
    totalLabel: "3-Year Loss",
    totalValue: "₹1,20,000",
    highlight: "This is your money — permanently gone.",
  },
  // Pad to 8 for consistent 2 pages of 4
  {
    icon: TrendingDown,
    title: "TCS Credit Loss",
    explanation:
      "Without state-level GST registration, TCS deducted by marketplaces cannot be claimed back. It's gone — permanently.",
    rows: [
      { label: "Monthly TCS Lost", value: "₹5,000" },
      { label: "Annual Loss", value: "₹60,000" },
    ],
    totalLabel: "Annual Loss",
    totalValue: "₹60,000",
    highlight:
      "This money is permanently lost without state GST registration.",
  },
  {
    icon: AlertTriangle,
    title: "GST Penalty & Compliance Risk",
    explanation:
      "Operating without proper registration triggers tax liability, penalties, interest, and late fees — all compounding fast.",
    rows: [
      { label: "Tax Liability", value: "₹3,60,000" },
      { label: "Penalty + Interest + Fees", value: "₹94,200" },
    ],
    totalLabel: "Total Loss",
    totalValue: "₹4,54,200",
    highlight: "A simple compliance gap leads to massive penalties.",
  },
];

const CARDS_PER_PAGE = 4;
const TOTAL_PAGES = Math.ceil(scenarios.length / CARDS_PER_PAGE);
const AUTO_SCROLL_DELAY = 4000;

export const VPOBCostSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % TOTAL_PAGES);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + TOTAL_PAGES) % TOTAL_PAGES);
  }, []);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page % TOTAL_PAGES);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(goNext, AUTO_SCROLL_DELAY);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, goNext]);

  const visibleCards = scenarios.slice(
    currentPage * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-foreground tracking-tight leading-tight text-balance max-w-3xl">
              The Hidden Cost of{" "}
              <span className="text-destructive underline underline-offset-4 decoration-2">NOT</span> Having a VPOB
            </h2>
            <p className="mt-4 text-muted-foreground text-base lg:text-lg max-w-xl leading-relaxed">
              Most sellers try to save ₹1,500/month — and end up losing{" "}
              <span className="font-semibold text-foreground">lakhs</span>.
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

        {/* Page-based Card Carousel */}
        <div
          className="relative mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {visibleCards.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={`${s.title}-${currentPage}-${i}`}
                    className="group h-full flex flex-col justify-between bg-card rounded-xl border border-border/40 shadow-sm px-6 py-7 hover:shadow-md hover:border-border/60 transition-all duration-300"
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center mb-4">
                        <Icon className="w-4 h-4 text-foreground/70" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
                        {s.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {s.explanation}
                      </p>

                      {/* Data rows */}
                      <div className="space-y-2 mb-5">
                        {s.rows.map((r) => (
                          <div
                            key={r.label}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-xs uppercase tracking-wider text-muted-foreground/70 font-semibold">
                              {r.label}
                            </span>
                            <span className="font-medium text-foreground tabular-nums">
                              {r.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Total */}
                    <div>
                      <div className="border-t border-border/30 pt-4 mb-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs uppercase tracking-wider text-muted-foreground/70 font-semibold">
                            {s.totalLabel}
                          </span>
                          <span className="text-2xl font-bold text-destructive tabular-nums">
                            {s.totalValue}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground/60 italic leading-snug">
                        "{s.highlight}"
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
