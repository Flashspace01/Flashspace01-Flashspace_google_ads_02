import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import {
  Globe,
  Laptop,
  Briefcase,
  Utensils,
  ShoppingCart,
  Stethoscope,
  Building2,
  MapPin,
  Users,
  CreditCard,
  FileCheck,
  Sparkles,
  ChevronLeft,
  Check,
  ArrowRight,
  GraduationCap,
  Plane,
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
  { icon: Stethoscope, label: "Healthcare", desc: "Medical & Wellness" },
  { icon: GraduationCap, label: "Education", desc: "Training & EdTech" },
  { icon: Plane, label: "Tourism", desc: "Travel & Hospitality" },
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
  "relative rounded-2xl border-2 transition-all duration-300 cursor-pointer";
const cardDefault =
  "border-transparent bg-muted/50 hover:shadow-md hover:bg-muted/70";
const cardSelected =
  "border-primary bg-secondary/30 shadow-[0_4px_24px_-4px_hsl(var(--primary)/0.18)]";

/* ── Component ─────────────────────────────────────── */

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
      if (selectedActivity === 8 && customActivity.trim() === "") return false;
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

  /* ── Estimate calc ── */
  const basePrices = [8500, 12000, 9500, 15000, 7500, 18000];
  const visaMultiplier = [0, 2500, 6000, 15000];
  const officePrices = [0, 5000, 18000];
  const addonPrices = [3000, 2500, 1500, 5000];

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
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1.5">
              What's your business activity?
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Select the category that best describes your business.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {activities.map((a, i) => {
                const Icon = a.icon;
                const selected = selectedActivity === i;
                const isOther = i === 8;
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
                    className={`${cardBase} p-4 sm:p-5 text-center ${selected ? cardSelected : cardDefault}`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl mx-auto mb-2.5 flex items-center justify-center transition-colors duration-300 ${
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
                    {/* "Other" text input appears when selected */}
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
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1.5">
              Choose your jurisdiction
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Each jurisdiction offers unique benefits for your business type.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
                    className={`${cardBase} p-5 text-left ${selected ? cardSelected : cardDefault}`}
                  >
                    {j.tag && (
                      <span className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        selected ? "bg-primary/15 text-primary" : "bg-foreground/[0.05] text-muted-foreground"
                      }`}>
                        {j.tag}
                      </span>
                    )}
                    <p className="font-bold text-base text-foreground mb-1 pr-14">{j.label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{j.desc}</p>
                    {selected && (
                      <motion.div
                        layoutId="tile-check-j"
                        className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
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
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1.5">
              How many visas do you need?
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
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
                    className={`${cardBase} p-6 text-center ${selected ? cardSelected : cardDefault}`}
                  >
                    <p className={`text-3xl font-bold mb-1 ${selected ? "text-primary" : "text-foreground"}`}>
                      {v.label.split(" ")[0]}
                    </p>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </motion.button>
                );
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1.5">
              Select your office type
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Choose the workspace that fits your needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                    className={`${cardBase} p-6 text-center ${selected ? cardSelected : cardDefault}`}
                  >
                    <p className="font-bold text-foreground mb-1">{o.label}</p>
                    <p className="text-sm mb-3 text-muted-foreground">{o.desc}</p>
                    <span className={`text-xs font-bold ${selected ? "text-primary" : "text-muted-foreground"}`}>
                      {o.price}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1.5">
              Optional add-ons
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Enhance your setup with additional services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    className={`${cardBase} p-5 text-left ${selected ? cardSelected : cardDefault}`}
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
                  </motion.button>
                );
              })}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Your Estimated Setup Cost
              </h3>
              <p className="text-muted-foreground mb-8">
                Based on your selections, here's an indicative range.
              </p>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-block rounded-2xl bg-foreground px-10 py-6 mb-8"
              >
                <p className="text-background/70 text-sm font-medium mb-1">Estimated Total</p>
                <p className="text-4xl sm:text-5xl font-bold text-secondary tracking-tight">
                  AED <AnimatedTotal value={estimateTotal()} />
                </p>
                <p className="text-background/40 text-xs mt-2">*Indicative pricing, subject to final review</p>
              </motion.div>

              <div className="max-w-sm mx-auto text-left space-y-3 mb-8">
                {selectedActivity !== null && (
                  <div className="flex justify-between text-sm border-b border-foreground/10 pb-2">
                    <span className="text-muted-foreground">Activity</span>
                    <span className="font-medium text-foreground">
                      {selectedActivity === 8 ? customActivity || "Other" : activities[selectedActivity].label}
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

              <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-10 h-12 rounded-lg text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-glow">
                Get a Detailed Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#F9F9F9' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Two-Column Layout ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-10 lg:gap-14"
        >
          {/* LEFT — Vertical Stepper matched to right column height */}
          <div className="hidden lg:flex flex-col justify-between shrink-0 w-[100px] py-1">
            {progressSteps.map((s, i) => {
              const isActive = i === step;
              const isDone = i < step;
              const isLast = i === progressSteps.length - 1;
              return (
                <div key={s.label} className="flex flex-col items-center flex-1">
                  <button
                    onClick={() => {
                      if (i < step) { setDirection(-1); setStep(i); }
                    }}
                    className="flex flex-col items-center gap-1.5 group cursor-pointer relative"
                  >
                    <div className="relative">
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-primary/30"
                          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                          style={{ margin: "-5px" }}
                        />
                      )}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-[0_0_20px_-2px_hsl(var(--primary)/0.5)]"
                            : isDone
                            ? "bg-foreground text-background"
                            : "bg-card border-2 border-border text-muted-foreground group-hover:border-primary/30"
                        }`}
                      >
                        {isDone ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <s.icon className="w-5 h-5" strokeWidth={1.5} />
                        )}
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-bold tracking-wider uppercase transition-colors whitespace-nowrap ${
                        isActive ? "text-foreground" : isDone ? "text-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                  {/* Connecting line — flex grows to fill space */}
                  {!isLast && (
                    <div className="relative w-[2px] flex-1 min-h-[12px] bg-border rounded-full my-1">
                      {(isDone || isActive) && (
                        <motion.div
                          className="absolute inset-x-0 top-0 bg-primary rounded-full"
                          initial={{ height: 0 }}
                          animate={{ height: isDone ? "100%" : "50%" }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT — Header + Content + Footer */}
          <div className="flex-1 min-w-0 flex flex-col">
            {/* Header inside right column */}
            <div className="mb-8">
              <h2
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-foreground tracking-tight leading-[1.15]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Calculate Your Business{" "}
                <span className="text-primary">Setup Cost</span>
              </h2>
              <p className="text-muted-foreground text-base mt-2 max-w-xl">
                Answer a few questions and get an instant estimate for your UAE business setup.
              </p>
            </div>

            {/* Mobile horizontal stepper */}
            <div className="flex lg:hidden items-center justify-between mb-6 gap-1">
              {progressSteps.map((s, i) => {
                const isActive = i === step;
                const isDone = i < step;
                return (
                  <button
                    key={s.label}
                    onClick={() => { if (i < step) { setDirection(-1); setStep(i); } }}
                    className="flex flex-col items-center gap-1 shrink-0"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : isDone
                          ? "bg-foreground text-background"
                          : "bg-card border border-border text-muted-foreground"
                      }`}
                    >
                      {isDone ? <Check className="w-3.5 h-3.5" /> : <s.icon className="w-3.5 h-3.5" />}
                    </div>
                    <span className={`text-[8px] font-semibold tracking-wider uppercase ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                      {s.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Step Content */}
            <div className="flex-1 relative overflow-hidden">
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

            {/* Footer Action Bar */}
            {step < 5 && (
              <div className="mt-8 flex items-center justify-between gap-4">
                <button
                  onClick={goBack}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>

                <div className="hidden sm:flex items-center gap-3 bg-foreground rounded-full px-5 py-2">
                  <span className="text-xs text-background/60 font-medium">Estimated Total</span>
                  <div className="w-px h-4 bg-background/20" />
                  <span
                    className={`text-base font-bold text-secondary tabular-nums transition-all duration-500 ${
                      step < 2 ? "blur-sm select-none" : ""
                    }`}
                  >
                    AED <AnimatedTotal value={estimateTotal()} />
                  </span>
                </div>

                <button
                  onClick={goNext}
                  disabled={!canProceed()}
                  className="inline-flex items-center gap-2 bg-foreground text-secondary font-semibold px-8 h-11 rounded-lg text-sm tracking-wide hover:bg-foreground/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {step === 4 ? "See Estimate" : "Next Step"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === 5 && (
              <div className="mt-8 flex items-center justify-center">
                <button
                  onClick={() => { setStep(0); setDirection(-1); }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Start Over
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
