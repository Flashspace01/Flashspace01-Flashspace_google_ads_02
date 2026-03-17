import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import {
  Globe,
  Laptop,
  Briefcase,
  Utensils,
  ShoppingCart,
  Building2,
  MapPin,
  Users,
  CreditCard,
  FileCheck,
  Sparkles,
  ChevronLeft,
  Check,
  ArrowRight,
  PenLine,
} from "lucide-react";

/* ── Step Data ─────────────────────────────────────── */

const progressSteps = [
  { icon: Briefcase, label: "Activity" },
  { icon: MapPin, label: "Jurisdiction" },
  { icon: Users, label: "Visas" },
  { icon: Building2, label: "Office" },
  { icon: FileCheck, label: "Add-ons" },
  { icon: CreditCard, label: "Estimate" },
];

const activities = [
  { icon: Globe, label: "Trading", desc: "Import / Export" },
  { icon: Laptop, label: "Technology", desc: "IT & Software" },
  { icon: Briefcase, label: "Consulting", desc: "Professional Services" },
  { icon: Utensils, label: "F&B", desc: "Food & Beverage" },
  { icon: ShoppingCart, label: "E-Commerce", desc: "Online Retail" },
  { icon: PenLine, label: "Other", desc: "Custom activity" },
];

const jurisdictions = [
  { label: "Mainland", desc: "Full market access across the UAE", tag: "Popular" },
  { label: "DMCC Free Zone", desc: "Global commodities & trading hub", tag: "Top Rated" },
  { label: "IFZA Free Zone", desc: "Cost-effective & fast setup", tag: null },
  { label: "DIFC", desc: "Financial services & fintech", tag: "Premium" },
  { label: "Offshore (RAK)", desc: "Asset protection & holding", tag: null },
  { label: "ADGM", desc: "Abu Dhabi financial centre", tag: null },
];

const visaOptions = [
  { label: "0 Visas", desc: "No visa package needed" },
  { label: "1–3 Visas", desc: "Small team or founder only" },
  { label: "4–10 Visas", desc: "Growing team" },
  { label: "10+ Visas", desc: "Large team setup" },
];

const officeOptions = [
  { label: "Virtual Office", desc: "Registered address only", price: "Included" },
  { label: "Flexi Desk", desc: "Shared workspace access", price: "+AED 5,000/yr" },
  { label: "Private Office", desc: "Dedicated private space", price: "+AED 18,000/yr" },
];

const addons = [
  { label: "PRO Services", desc: "Government liaison & document clearing" },
  { label: "Corporate Bank Account", desc: "Assisted bank account opening" },
  { label: "VAT Registration", desc: "Tax registration & filing support" },
  { label: "Golden Visa Assist", desc: "Long-term residency application" },
];

/* ── Slide animation ───────────────────────────────── */

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
};

const cardStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

/* ── Animated Number ── */
const AnimatedTotal = ({ value }: { value: number }) => {
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);

  useEffect(() => {
    const controls = animate(prevRef.current, value, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    prevRef.current = value;
    return controls.stop;
  }, [value, motionVal]);

  return <>{display.toLocaleString()}</>;
};

/* ── Shared card styles ── */
const cardBase =
  "relative rounded-2xl transition-all duration-300 cursor-pointer";
const cardDefault =
  "bg-transparent hover:bg-primary/[0.04]";
const cardSelected =
  "bg-primary/10 shadow-[0_4px_24px_-4px_hsl(var(--primary)/0.18)]";

/* ── Prices ── */
const basePrices = [8500, 12000, 9500, 15000, 7500, 18000];
const visaMultiplier = [0, 2500, 6000, 15000];
const officePrices = [0, 5000, 18000];
const addonPrices = [3000, 2500, 1500, 5000];

/* ── Cost Summary Panel ── */
const CostSummary = ({
  step,
  selectedActivity,
  customActivity,
  selectedJurisdiction,
  selectedVisas,
  selectedOffice,
  selectedAddons,
  estimateTotal,
  canProceed,
  goNext,
  goBack,
}: {
  step: number;
  selectedActivity: number | null;
  customActivity: string;
  selectedJurisdiction: number | null;
  selectedVisas: number | null;
  selectedOffice: number | null;
  selectedAddons: number[];
  estimateTotal: number;
  canProceed: boolean;
  goNext: () => void;
  goBack: () => void;
}) => {
  const licenseBase = basePrices[selectedJurisdiction ?? 0] || 8500;
  const visaCost = visaMultiplier[selectedVisas ?? 0] || 0;
  const officeCost = officePrices[selectedOffice ?? 0] || 0;
  const addonsCost = selectedAddons.reduce((sum, i) => sum + (addonPrices[i] || 0), 0);

  return (
    <div className="rounded-2xl bg-card border border-border shadow-lg p-6 flex flex-col">
      {/* Header */}
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
          Total Setup Cost
        </p>
        <motion.div
          key={estimateTotal}
          initial={{ scale: 0.95, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-4xl font-bold text-foreground tracking-tight">
            AED <AnimatedTotal value={estimateTotal} />
          </p>
        </motion.div>
        <p className="text-[11px] text-muted-foreground mt-1">
          *Indicative pricing, subject to final review
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-border mb-5" />

      {/* Breakdown */}
      <div className="space-y-3 flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
          Cost Breakdown
        </p>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">License Fee</span>
          <span className="font-medium text-foreground">AED {licenseBase.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Visa Package</span>
          <span className="font-medium text-foreground">
            {visaCost > 0 ? `AED ${visaCost.toLocaleString()}` : "—"}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Office Space</span>
          <span className="font-medium text-foreground">
            {officeCost > 0 ? `AED ${officeCost.toLocaleString()}` : "Included"}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Add-ons</span>
          <span className="font-medium text-foreground">
            {addonsCost > 0 ? `AED ${addonsCost.toLocaleString()}` : "—"}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-1" />

        {/* Selections summary */}
        <div className="space-y-2 pt-1">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
            Your Selections
          </p>

          {selectedActivity !== null && (
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Activity</span>
              <span className="font-medium text-foreground">
                {selectedActivity === 5 ? customActivity || "Other" : activities[selectedActivity].label}
              </span>
            </div>
          )}

          {selectedJurisdiction !== null && (
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Jurisdiction</span>
              <span className="font-medium text-foreground">{jurisdictions[selectedJurisdiction].label}</span>
            </div>
          )}

          {selectedVisas !== null && (
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Visas</span>
              <span className="font-medium text-foreground">{visaOptions[selectedVisas].label}</span>
            </div>
          )}

          {selectedOffice !== null && (
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Office</span>
              <span className="font-medium text-foreground">{officeOptions[selectedOffice].label}</span>
            </div>
          )}

          {selectedAddons.length > 0 && (
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Add-ons</span>
              <span className="font-medium text-foreground text-right">
                {selectedAddons.map((i) => addons[i].label).join(", ")}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 space-y-2.5">
        <button
          onClick={goNext}
          disabled={!canProceed}
          className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold h-12 rounded-xl text-sm tracking-wide hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {step >= 5 ? "Get a Detailed Quote" : step === 4 ? "See Estimate" : "Next Step"}
          <ArrowRight className="w-4 h-4" />
        </button>
        {step > 0 && (
          <button
            onClick={goBack}
            className="w-full inline-flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors h-10"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
        )}
      </div>
    </div>
  );
};

/* ── Main Component ─────────────────────────────────── */

export const CostCalculator = () => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);
  const [customActivity, setCustomActivity] = useState("");
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<number | null>(null);
  const [selectedVisas, setSelectedVisas] = useState<number | null>(null);
  const [selectedOffice, setSelectedOffice] = useState<number | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<number[]>([]);

  const canProceed = () => {
    if (step === 0) {
      if (selectedActivity === null) return false;
      if (selectedActivity === 5 && customActivity.trim() === "") return false;
      return true;
    }
    if (step === 1) return selectedJurisdiction !== null;
    if (step === 2) return selectedVisas !== null;
    if (step === 3) return selectedOffice !== null;
    return true;
  };

  const goNext = () => {
    if (step < 5 && canProceed()) { setDirection(1); setStep((s) => s + 1); }
  };
  const goBack = () => {
    if (step > 0) { setDirection(-1); setStep((s) => s - 1); }
  };

  const toggleAddon = (i: number) => {
    setSelectedAddons((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const estimateTotal = () => {
    let total = basePrices[selectedJurisdiction ?? 0] || 8500;
    total += visaMultiplier[selectedVisas ?? 0] || 0;
    total += officePrices[selectedOffice ?? 0] || 0;
    selectedAddons.forEach((i) => (total += addonPrices[i] || 0));
    return total;
  };

  /* ── Render steps ── */
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
              What's your business activity?
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Select the category that best describes your business.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {activities.map((a, i) => {
                const Icon = a.icon;
                const selected = selectedActivity === i;
                const isOther = i === 5;
                return (
                  <motion.button
                    key={a.label}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={cardStagger}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedActivity(i)}
                    className={`${cardBase} p-4 text-center ${selected ? cardSelected : cardDefault}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center transition-colors duration-300 ${
                        selected
                          ? "bg-primary/15 text-primary"
                          : "bg-foreground/[0.06] text-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <p className="font-semibold text-sm text-foreground">{a.label}</p>
                    <p className="text-[11px] mt-0.5 text-muted-foreground">{a.desc}</p>
                    {selected && !isOther && (
                      <motion.div
                        layoutId="tile-check"
                        className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                      >
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </motion.div>
                    )}
                    {isOther && selected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-2"
                      >
                        <input
                          type="text"
                          value={customActivity}
                          onChange={(e) => setCustomActivity(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          placeholder="Describe your activity…"
                          className="w-full text-xs px-3 py-1.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
              Choose your jurisdiction
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Each jurisdiction offers unique benefits for your business type.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {jurisdictions.map((j, i) => {
                const selected = selectedJurisdiction === i;
                return (
                  <motion.button
                    key={j.label}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={cardStagger}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedJurisdiction(i)}
                    className={`${cardBase} p-4 text-left ${selected ? cardSelected : cardDefault}`}
                  >
                    {j.tag && (
                      <span className={`absolute top-2.5 right-2.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        selected ? "bg-primary/15 text-primary" : "bg-foreground/[0.05] text-muted-foreground"
                      }`}>
                        {j.tag}
                      </span>
                    )}
                    <p className="font-bold text-sm text-foreground mb-0.5 pr-14">{j.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{j.desc}</p>
                    {selected && (
                      <motion.div
                        layoutId="tile-check-j"
                        className="absolute bottom-2.5 right-2.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                      >
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
              How many visas do you need?
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Select your visa requirements for your team.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {visaOptions.map((v, i) => {
                const selected = selectedVisas === i;
                return (
                  <motion.button
                    key={v.label}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={cardStagger}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedVisas(i)}
                    className={`${cardBase} p-5 text-center ${selected ? cardSelected : cardDefault}`}
                  >
                    <p className={`text-2xl font-bold mb-1 ${selected ? "text-primary" : "text-foreground"}`}>
                      {v.label.split(" ")[0]}
                    </p>
                    <p className="text-xs text-muted-foreground">{v.desc}</p>
                  </motion.button>
                );
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
              Select your office type
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Choose the workspace that fits your needs.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {officeOptions.map((o, i) => {
                const selected = selectedOffice === i;
                return (
                  <motion.button
                    key={o.label}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={cardStagger}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedOffice(i)}
                    className={`${cardBase} p-4 text-left flex items-center justify-between ${selected ? cardSelected : cardDefault}`}
                  >
                    <div>
                      <p className="font-bold text-sm text-foreground">{o.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{o.desc}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold ${selected ? "text-primary" : "text-muted-foreground"}`}>
                        {o.price}
                      </span>
                      {selected && (
                        <motion.div
                          layoutId="tile-check-o"
                          className="w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                        >
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
              Optional add-ons
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Enhance your setup with additional services.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {addons.map((a, i) => {
                const selected = selectedAddons.includes(i);
                return (
                  <motion.button
                    key={a.label}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={cardStagger}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleAddon(i)}
                    className={`${cardBase} p-4 text-left ${selected ? cardSelected : cardDefault}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                          selected ? "bg-primary border-primary" : "border-foreground/20"
                        }`}
                      >
                        {selected && <Check className="w-3 h-3 text-primary-foreground" />}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{a.label}</p>
                        <p className="text-xs text-muted-foreground">{a.desc}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground mt-1 ml-8 block">
                      +AED {addonPrices[i].toLocaleString()}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Your Estimate is Ready!
              </h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Review your cost breakdown on the right panel. Ready to proceed? Click "Get a Detailed Quote" to connect with our team.
              </p>

              {/* Mobile: show summary inline */}
              <div className="lg:hidden mt-8">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="inline-block rounded-2xl bg-foreground px-8 py-5 mb-6"
                >
                  <p className="text-background/70 text-sm font-medium mb-1">Estimated Total</p>
                  <p className="text-3xl sm:text-4xl font-bold text-secondary tracking-tight">
                    AED <AnimatedTotal value={estimateTotal()} />
                  </p>
                </motion.div>

                <div className="max-w-xs mx-auto text-left space-y-2 mb-6">
                  {selectedActivity !== null && (
                    <div className="flex justify-between text-sm border-b border-foreground/10 pb-2">
                      <span className="text-muted-foreground">Activity</span>
                      <span className="font-medium text-foreground">
                        {selectedActivity === 5 ? customActivity || "Other" : activities[selectedActivity].label}
                      </span>
                    </div>
                  )}
                  {selectedJurisdiction !== null && (
                    <div className="flex justify-between text-sm border-b border-foreground/10 pb-2">
                      <span className="text-muted-foreground">Jurisdiction</span>
                      <span className="font-medium text-foreground">{jurisdictions[selectedJurisdiction].label}</span>
                    </div>
                  )}
                  {selectedVisas !== null && (
                    <div className="flex justify-between text-sm border-b border-foreground/10 pb-2">
                      <span className="text-muted-foreground">Visas</span>
                      <span className="font-medium text-foreground">{visaOptions[selectedVisas].label}</span>
                    </div>
                  )}
                  {selectedOffice !== null && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Office</span>
                      <span className="font-medium text-foreground">{officeOptions[selectedOffice].label}</span>
                    </div>
                  )}
                </div>

                <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 h-12 rounded-xl text-sm tracking-wide hover:bg-primary/90 shadow-md transition-all duration-300">
                  Get a Detailed Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-foreground tracking-tight leading-[1.15]">
            Calculate Your Business{" "}
            <span className="text-primary">Setup Cost</span>
          </h2>
        </motion.div>

        {/* Two-Panel Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          {/* LEFT PANEL — Steps + Content */}
          <div className="flex-1 min-w-0">
            {/* Progress Steps — Horizontal */}
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                {progressSteps.map((s, i) => {
                  const isActive = i === step;
                  const isDone = i < step;
                  return (
                    <button
                      key={s.label}
                      onClick={() => {
                        if (i < step) { setDirection(-1); setStep(i); }
                      }}
                      className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${
                        i <= step ? "cursor-pointer" : "cursor-default"
                      }`}
                    >
                      <span className={`text-[11px] font-semibold tracking-wide transition-colors duration-300 ${
                        isActive ? "text-primary" : isDone ? "text-foreground/70" : "text-muted-foreground/60"
                      }`}>
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>
              {/* Continuous progress track */}
              <div className="relative h-1.5 rounded-full bg-foreground/10 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-primary"
                  initial={false}
                  animate={{ width: `${((step) / (progressSteps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
            </div>

            {/* Step Content Card */}
            <div className="rounded-2xl p-5 sm:p-6 min-h-[340px] relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile: Navigation buttons */}
            <div className="lg:hidden mt-5 flex items-center justify-between gap-4">
              {step > 0 ? (
                <button
                  onClick={goBack}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
              ) : <div />}
              {step < 5 && (
                <button
                  onClick={goNext}
                  disabled={!canProceed()}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 h-11 rounded-xl text-sm tracking-wide hover:bg-primary/90 shadow-md transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {step === 4 ? "See Estimate" : "Next Step"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
              {step === 5 && (
                <button
                  onClick={() => { setStep(0); setDirection(-1); }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Start Over
                </button>
              )}
            </div>
          </div>

          {/* RIGHT PANEL — Sticky Cost Summary (desktop only) */}
          <div className="hidden lg:block w-[320px] shrink-0">
            <div className="sticky top-28">
              <CostSummary
                step={step}
                selectedActivity={selectedActivity}
                customActivity={customActivity}
                selectedJurisdiction={selectedJurisdiction}
                selectedVisas={selectedVisas}
                selectedOffice={selectedOffice}
                selectedAddons={selectedAddons}
                estimateTotal={estimateTotal()}
                canProceed={canProceed()}
                goNext={step === 5 ? () => {} : goNext}
                goBack={goBack}
              />
              {step === 5 && (
                <button
                  onClick={() => { setStep(0); setDirection(-1); }}
                  className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors mt-3 text-center"
                >
                  Start Over
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
