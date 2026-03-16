import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronRight,
  ChevronLeft,
  Check,
  ArrowRight,
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
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

/* ── Tile styles: pale yellow field with green cards ── */

const tileBase =
  "rounded-2xl border-2 transition-all duration-300 cursor-pointer";
const tileDefault =
  "bg-primary/[0.06] border-primary/10 hover:border-primary/30 hover:bg-primary/[0.1]";
const tileSelected =
  "border-primary bg-primary text-secondary shadow-[0_0_24px_-6px_hsl(142,20%,26%,0.25)]";

/* ── Component ─────────────────────────────────────── */

export const CostCalculator = () => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<number | null>(null);
  const [selectedVisas, setSelectedVisas] = useState<number | null>(null);
  const [selectedOffice, setSelectedOffice] = useState<number | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<number[]>([]);

  const canProceed = () => {
    if (step === 0) return selectedActivity !== null;
    if (step === 1) return selectedJurisdiction !== null;
    if (step === 2) return selectedVisas !== null;
    if (step === 3) return selectedOffice !== null;
    return true;
  };

  const goNext = () => {
    if (step < 5 && canProceed()) {
      setDirection(1);
      setStep((s) => s + 1);
    }
  };
  const goBack = () => {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
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
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
              What's your business activity?
            </h3>
            <p className="text-muted-foreground text-sm mb-10">
              Select the category that best describes your business.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              {activities.map((a, i) => {
                const Icon = a.icon;
                const selected = selectedActivity === i;
                return (
                  <motion.button
                    key={a.label}
                    whileHover={{ scale: 1.04, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedActivity(i)}
                    className={`${tileBase} ${selected ? tileSelected : tileDefault} relative group p-6 sm:p-8 text-center`}
                  >
                    {/* Pulsing ring on selected */}
                    {selected && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-primary/40"
                        animate={{ scale: [1, 1.04, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                    <div
                      className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-colors duration-300 ${
                        selected
                          ? "bg-secondary/20 text-secondary"
                          : "bg-primary/[0.08] text-primary/70 group-hover:text-primary group-hover:bg-primary/[0.12]"
                      }`}
                    >
                      <Icon className="w-7 h-7" strokeWidth={1.4} />
                    </div>
                    <p className={`font-semibold text-sm ${selected ? "text-secondary" : "text-primary"}`}>
                      {a.label}
                    </p>
                    <p className={`text-xs mt-1 ${selected ? "text-secondary/70" : "text-muted-foreground"}`}>
                      {a.desc}
                    </p>
                    {selected && (
                      <motion.div
                        layoutId="tile-check"
                        className="absolute top-3 right-3 w-6 h-6 rounded-full bg-secondary flex items-center justify-center"
                      >
                        <Check className="w-3.5 h-3.5 text-primary" />
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
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
              Choose your jurisdiction
            </h3>
            <p className="text-muted-foreground text-sm mb-10">
              Each jurisdiction offers unique benefits for your business type.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {jurisdictions.map((j, i) => {
                const selected = selectedJurisdiction === i;
                return (
                  <motion.button
                    key={j.label}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedJurisdiction(i)}
                    className={`${tileBase} ${selected ? tileSelected : tileDefault} relative p-5 text-left`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className={`font-semibold ${selected ? "text-secondary" : "text-primary"}`}>
                          {j.label}
                        </p>
                        <p className={`text-xs mt-1 ${selected ? "text-secondary/70" : "text-muted-foreground"}`}>
                          {j.desc}
                        </p>
                      </div>
                      {j.tag && (
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${
                          selected
                            ? "bg-secondary/20 text-secondary"
                            : "bg-primary/[0.08] text-primary/60"
                        }`}>
                          {j.tag}
                        </span>
                      )}
                    </div>
                    {selected && (
                      <motion.div
                        layoutId="tile-check"
                        className="absolute top-3 right-3 w-6 h-6 rounded-full bg-secondary flex items-center justify-center"
                      >
                        <Check className="w-3.5 h-3.5 text-primary" />
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
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
              How many visas do you need?
            </h3>
            <p className="text-muted-foreground text-sm mb-10">
              Select your visa requirements for your team.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {visaOptions.map((v, i) => {
                const selected = selectedVisas === i;
                return (
                  <motion.button
                    key={v.label}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedVisas(i)}
                    className={`${tileBase} ${selected ? tileSelected : tileDefault} p-6 text-center`}
                  >
                    <p className={`text-3xl font-bold mb-1 ${selected ? "text-secondary" : "text-primary"}`}>
                      {v.label.split(" ")[0]}
                    </p>
                    <p className={`text-xs ${selected ? "text-secondary/70" : "text-muted-foreground"}`}>
                      {v.desc}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
              Select your office type
            </h3>
            <p className="text-muted-foreground text-sm mb-10">
              Choose the workspace that fits your needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {officeOptions.map((o, i) => {
                const selected = selectedOffice === i;
                return (
                  <motion.button
                    key={o.label}
                    whileHover={{ scale: 1.04, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedOffice(i)}
                    className={`${tileBase} ${selected ? tileSelected : tileDefault} p-6 text-center`}
                  >
                    <p className={`font-semibold mb-1 ${selected ? "text-secondary" : "text-primary"}`}>
                      {o.label}
                    </p>
                    <p className={`text-xs mb-3 ${selected ? "text-secondary/70" : "text-muted-foreground"}`}>
                      {o.desc}
                    </p>
                    <span className={`text-xs font-bold ${selected ? "text-secondary/90" : "text-primary/70"}`}>
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
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
              Optional add-ons
            </h3>
            <p className="text-muted-foreground text-sm mb-10">
              Enhance your setup with additional services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {addons.map((a, i) => {
                const selected = selectedAddons.includes(i);
                return (
                  <motion.button
                    key={a.label}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleAddon(i)}
                    className={`${tileBase} ${selected ? tileSelected : tileDefault} p-5 text-left`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                          selected ? "bg-secondary border-secondary" : "border-primary/25"
                        }`}
                      >
                        {selected && <Check className="w-3 h-3 text-primary" />}
                      </div>
                      <div>
                        <p className={`font-semibold text-sm ${selected ? "text-secondary" : "text-primary"}`}>
                          {a.label}
                        </p>
                        <p className={`text-xs ${selected ? "text-secondary/70" : "text-muted-foreground"}`}>
                          {a.desc}
                        </p>
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
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
                Your Estimated Setup Cost
              </h3>
              <p className="text-muted-foreground text-sm mb-8">
                Based on your selections, here's an indicative range.
              </p>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-block rounded-2xl bg-primary px-10 py-6 mb-8 shadow-[0_0_40px_-8px_hsl(142,20%,26%,0.3)]"
              >
                <p className="text-secondary/80 text-sm font-medium mb-1">Estimated Total</p>
                <p className="text-4xl sm:text-5xl font-bold text-secondary tracking-tight">
                  AED {estimateTotal().toLocaleString()}
                </p>
                <p className="text-secondary/50 text-xs mt-2">*Indicative pricing, subject to final review</p>
              </motion.div>

              <div className="max-w-sm mx-auto text-left space-y-3 mb-8">
                {selectedActivity !== null && (
                  <div className="flex justify-between text-sm border-b border-primary/10 pb-2">
                    <span className="text-muted-foreground">Activity</span>
                    <span className="font-medium text-primary">{activities[selectedActivity].label}</span>
                  </div>
                )}
                {selectedJurisdiction !== null && (
                  <div className="flex justify-between text-sm border-b border-primary/10 pb-2">
                    <span className="text-muted-foreground">Jurisdiction</span>
                    <span className="font-medium text-primary">{jurisdictions[selectedJurisdiction].label}</span>
                  </div>
                )}
                {selectedVisas !== null && (
                  <div className="flex justify-between text-sm border-b border-primary/10 pb-2">
                    <span className="text-muted-foreground">Visas</span>
                    <span className="font-medium text-primary">{visaOptions[selectedVisas].label}</span>
                  </div>
                )}
                {selectedOffice !== null && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Office</span>
                    <span className="font-medium text-primary">{officeOptions[selectedOffice].label}</span>
                  </div>
                )}
              </div>

              <button className="inline-flex items-center gap-2 bg-primary text-secondary font-semibold px-10 h-12 rounded-full text-sm uppercase tracking-wider hover:shadow-[0_0_30px_-4px_hsl(142,20%,26%,0.4)] transition-all duration-300 hover:scale-[1.02]">
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
    <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Subtle geometric dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 0.8px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header — clean, no tag/badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 tracking-tight">
            Calculate Your Business Setup Cost
          </h2>
          <p className="text-muted-foreground text-lg">
            Answer a few questions and get an instant estimate for your UAE business setup.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-3xl bg-card/80 backdrop-blur-xl border border-primary/[0.08] shadow-[0_20px_60px_-15px_hsl(142,20%,26%,0.1)] overflow-hidden">
            {/* Progress Timeline */}
            <div className="border-b border-primary/[0.06] px-6 py-6">
              <div className="flex items-center justify-between max-w-lg mx-auto relative">
                {/* Connecting line */}
                <div className="absolute top-5 left-[10%] right-[10%] h-[1px] bg-primary/10" />
                <motion.div
                  className="absolute top-5 left-[10%] h-[1px] bg-primary/40 origin-left"
                  animate={{ width: `${Math.max(0, ((step) / (progressSteps.length - 1)) * 80)}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {progressSteps.map((s, i) => {
                  const isActive = i === step;
                  const isDone = i < step;
                  return (
                    <button
                      key={s.label}
                      onClick={() => {
                        if (i < step) {
                          setDirection(-1);
                          setStep(i);
                        }
                      }}
                      className="flex flex-col items-center gap-2 group cursor-pointer relative z-10"
                    >
                      <div className="relative">
                        {/* Pulsing ring for active */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-primary/40"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            style={{ margin: "-4px" }}
                          />
                        )}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-400 ${
                            isActive
                              ? "bg-primary text-secondary shadow-[0_0_20px_-2px_hsl(142,20%,26%,0.35)]"
                              : isDone
                              ? "bg-primary text-secondary"
                              : "bg-primary/[0.08] text-primary/50 group-hover:bg-primary/[0.14]"
                          }`}
                        >
                          {isDone ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <s.icon className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                      <span
                        className={`text-[10px] font-semibold tracking-wider uppercase transition-colors ${
                          isActive
                            ? "text-primary"
                            : isDone
                            ? "text-primary/70"
                            : "text-primary/40"
                        }`}
                      >
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step Content */}
            <div className="p-6 sm:p-10 min-h-[420px] relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer Navigation */}
            {step < 5 && (
              <div className="border-t border-primary/[0.06] px-6 sm:px-10 py-5 flex items-center justify-between">
                <button
                  onClick={goBack}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1 text-sm text-primary/50 hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>

                {/* Blurred price preview */}
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Est.</span>
                  <span
                    className={`text-lg font-bold text-primary transition-all duration-500 ${
                      step < 3 ? "blur-sm select-none" : ""
                    }`}
                  >
                    AED {estimateTotal().toLocaleString()}
                  </span>
                </div>

                {/* Premium pill CTA */}
                <button
                  onClick={goNext}
                  disabled={!canProceed()}
                  className="inline-flex items-center gap-2 bg-primary text-secondary font-semibold px-8 h-11 rounded-full text-sm tracking-wide hover:shadow-[0_0_24px_-4px_hsl(142,20%,26%,0.35)] transition-all duration-300 hover:scale-[1.03] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                  {step === 4 ? "See Estimate" : "Next Step"}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === 5 && (
              <div className="border-t border-primary/[0.06] px-6 sm:px-10 py-5 flex items-center justify-center">
                <button
                  onClick={() => {
                    setStep(0);
                    setDirection(-1);
                  }}
                  className="text-sm text-primary/50 hover:text-primary transition-colors"
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
