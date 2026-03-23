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
    <section className="py-20 lg:py-28 bg-background">
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
              <span className="text-destructive">NOT</span> Having a VPOB
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
              {visibleCards.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={`${s.title}-${currentPage}-${i}`}
                    className="group flex flex-col justify-between border-r border-border/40 last:border-r-0 px-7 py-14 hover:bg-secondary transition-colors duration-300"
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-5 group-hover:bg-primary/90 transition-colors">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                        {s.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                        {s.explanation}
                      </p>

                      {/* Data rows */}
                      <div className="space-y-2 mb-6">
                        {s.rows.map((r) => (
                          <div
                            key={r.label}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-muted-foreground">{r.label}</span>
                            <span className="font-medium text-foreground tabular-nums">
                              {r.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Total */}
                    <div>
                      <div className="border-t border-border/50 pt-4 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-muted-foreground">
                            {s.totalLabel}
                          </span>
                          <span className="text-xl font-bold text-destructive tabular-nums">
                            {s.totalValue}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-destructive/80 font-medium leading-snug italic">
                        "{s.highlight}"
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-3 -left-3 text-muted-foreground/30 text-xl select-none">+</div>
          <div className="absolute -bottom-3 -right-3 text-muted-foreground/30 text-xl select-none">+</div>
        </div>

        <div className="mb-16" />

        {/* Revenue Comparison — Hero Block */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-border/50 bg-card overflow-hidden mb-16"
        >
          <div className="px-6 py-5 border-b border-border/50 bg-muted/30">
            <h3 className="text-lg font-semibold text-foreground">
              Revenue Limitation — The Biggest Risk
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              See the difference VPOB makes to your top line.
            </p>
          </div>

          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/50">
            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                With VPOB
              </span>
              <span className="text-4xl lg:text-5xl font-bold text-foreground tabular-nums tracking-tight">
                ₹15,00,000
              </span>
              <span className="text-sm text-muted-foreground mt-1">
                /month revenue
              </span>
            </div>

            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-destructive mb-2">
                Without VPOB
              </span>
              <span className="text-4xl lg:text-5xl font-bold text-foreground tabular-nums tracking-tight">
                ₹3,00,000
              </span>
              <span className="text-sm text-muted-foreground mt-1">
                /month revenue
              </span>
            </div>
          </div>

          <div className="bg-destructive/5 border-t border-destructive/20 px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />
            <span className="text-sm text-muted-foreground">
              Annual Revenue Loss:
            </span>
            <span className="text-2xl font-bold text-destructive tabular-nums">
              ₹1,44,00,000
            </span>
          </div>
        </motion.div>

        {/* Final Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-primary text-primary-foreground p-8 lg:p-12 text-center relative overflow-hidden"
        >
          {/* Subtle decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,hsl(var(--secondary)/0.08),transparent_60%)] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[radial-gradient(circle,hsl(var(--secondary)/0.05),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-4">
              Annual Impact
            </span>
            <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-3">
              Total Potential Loss Without VPOB
            </h3>
            <p className="text-primary-foreground/60 text-sm mb-6 max-w-lg mx-auto">
              Adding up all scenarios — TCS, penalties, inventory freezes, ITC
              loss, suspensions, TDS, and revenue limitations.
            </p>
            <div className="text-5xl lg:text-6xl font-bold tabular-nums tracking-tight mb-2 text-secondary">
              ₹1,69,11,200<span className="text-secondary/50 text-2xl">+</span>
            </div>
            <p className="text-primary-foreground/50 text-xs mb-8 max-w-md mx-auto">
              And this is a conservative estimate. Real losses compound with
              missed opportunities, refiling costs, and brand damage.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-secondary/90 transition-colors duration-200 active:scale-[0.97]"
            >
              Get Your VPOB Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
