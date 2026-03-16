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

/* ── Shared tile styles ────────────────────────────── */

/** Default tile: deep green bg, cream border/text */
const tileBase =
  "rounded-2xl border transition-all duration-300 cursor-pointer";
const tileDefault =
  "bg-[hsl(142,20%,20%)] border-[hsl(54,60%,80%,0.15)] hover:border-[hsl(54,60%,80%,0.35)]";
const tileSelected =
  "bg-secondary border-secondary shadow-[0_0_24px_-4px_hsl(54,96%,70%,0.4)]";

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
            <h3 className="text-xl sm:text-2xl font-medium text-secondary mb-2">
              What's your business activity?
            </h3>
            <p className="text-[hsl(54,40%,75%)] text-sm mb-8">
              Select the category that best describes your business.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {activities.map((a, i) => {
                const Icon = a.icon;
                const selected = selectedActivity === i;
                return (
                  <motion.button
                    key={a.label}
                    whileHover={{ scale: 1.04, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedActivity(i)}
                    className={`${tileBase} ${selected ? tileSelected : tileDefault} relative group p-6 text-center`}
                  >
                    <div
                      className={`w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center transition-colors duration-300 ${
                        selected
                          ? "bg-primary text-secondary"
                          : "bg-[hsl(142,18%,26%)] text-[hsl(54,60%,80%)] group-hover:text-secondary"
                      }`}
                    >
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <p className={`font-semibold text-sm ${selected ? "text-primary" : "text-secondary"}`}>
                      {a.label}
                    </p>
                    <p className={`text-xs mt-1 ${selected ? "text-primary/70" : "text-[hsl(54,30%,65%)]"}`}>
                      {a.desc}
                    </p>
                    {selected && (
                      <motion.div
                        layoutId="tile-check"
                        className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                      >
                        <Check className="w-3.5 h-3.5 text-secondary" />
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
            <h3 className="text-xl sm:text-2xl font-medium text-secondary mb-2">
              Choose your jurisdiction
            </h3>
            <p className="text-[hsl(54,40%,75%)] text-sm mb-8">
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
                        <p className={`font-semibold ${selected ? "text-primary" : "text-secondary"}`}>
                          {j.label}
                        </p>
                        <p className={`text-xs mt-1 ${selected ? "text-primary/70" : "text-[hsl(54,30%,65%)]"}`}>
                          {j.desc}
                        </p>
                      </div>
                      {j.tag && (
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${
                          selected
                            ? "bg-primary text-secondary"
                            : "bg-[hsl(54,60%,80%,0.12)] text-[hsl(54,60%,80%)]"
                        }`}>
                          {j.tag}
                        </span>
                      )}
                    </div>
                    {selected && (
                      <motion.div
                        layoutId="tile-check"
                        className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                      >
                        <Check className="w-3.5 h-3.5 text-secondary" />
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
            <h3 className="text-xl sm:text-2xl font-medium text-secondary mb-2">
              How many visas do you need?
            </h3>
            <p className="text-[hsl(54,40%,75%)] text-sm mb-8">
              Select your visa requirements for your team.
            </p>
            <div className="grid grid-cols-2 gap-4">
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
                    <p className={`text-3xl font-bold mb-1 ${selected ? "text-primary" : "text-secondary"}`}>
                      {v.label.split(" ")[0]}
                    </p>
                    <p className={`text-xs ${selected ? "text-primary/70" : "text-[hsl(54,30%,65%)]"}`}>
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
            <h3 className="text-xl sm:text-2xl font-medium text-secondary mb-2">
              Select your office type
            </h3>
            <p className="text-[hsl(54,40%,75%)] text-sm mb-8">
              Choose the workspace that fits your needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                    <p className={`font-semibold mb-1 ${selected ? "text-primary" : "text-secondary"}`}>
                      {o.label}
                    </p>
                    <p className={`text-xs mb-3 ${selected ? "text-primary/70" : "text-[hsl(54,30%,65%)]"}`}>
                      {o.desc}
                    </p>
                    <span className={`text-xs font-bold ${selected ? "text-primary" : "text-secondary/80"}`}>
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
            <h3 className="text-xl sm:text-2xl font-medium text-secondary mb-2">
              Optional add-ons
            </h3>
            <p className="text-[hsl(54,40%,75%)] text-sm mb-8">
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
                          selected ? "bg-primary border-primary" : "border-[hsl(54,60%,80%,0.3)]"
                        }`}
                      >
                        {selected && <Check className="w-3 h-3 text-secondary" />}
                      </div>
                      <div>
                        <p className={`font-semibold text-sm ${selected ? "text-primary" : "text-secondary"}`}>
                          {a.label}
                        </p>
                        <p className={`text-xs ${selected ? "text-primary/70" : "text-[hsl(54,30%,65%)]"}`}>
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
              <div className="w-20 h-20 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-secondary mb-2">
                Your Estimated Setup Cost
              </h3>
              <p className="text-[hsl(54,40%,75%)] text-sm mb-8">
                Based on your selections, here's an indicative range.
              </p>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-block rounded-2xl bg-secondary px-10 py-6 mb-8 shadow-[0_0_40px_-8px_hsl(54,96%,70%,0.35)]"
              >
                <p className="text-primary text-sm font-medium mb-1">Estimated Total</p>
                <p className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
                  AED {estimateTotal().toLocaleString()}
                </p>
                <p className="text-primary/60 text-xs mt-2">*Indicative pricing, subject to final review</p>
              </motion.div>

              <div className="max-w-sm mx-auto text-left space-y-3 mb-8">
                {selectedActivity !== null && (
                  <div className="flex justify-between text-sm border-b border-[hsl(54,60%,80%,0.1)] pb-2">
                    <span className="text-[hsl(54,30%,65%)]">Activity</span>
                    <span className="font-medium text-secondary">{activities[selectedActivity].label}</span>
                  </div>
                )}
                {selectedJurisdiction !== null && (
                  <div className="flex justify-between text-sm border-b border-[hsl(54,60%,80%,0.1)] pb-2">
                    <span className="text-[hsl(54,30%,65%)]">Jurisdiction</span>
                    <span className="font-medium text-secondary">{jurisdictions[selectedJurisdiction].label}</span>
                  </div>
                )}
                {selectedVisas !== null && (
                  <div className="flex justify-between text-sm border-b border-[hsl(54,60%,80%,0.1)] pb-2">
                    <span className="text-[hsl(54,30%,65%)]">Visas</span>
                    <span className="font-medium text-secondary">{visaOptions[selectedVisas].label}</span>
                  </div>
                )}
                {selectedOffice !== null && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[hsl(54,30%,65%)]">Office</span>
                    <span className="font-medium text-secondary">{officeOptions[selectedOffice].label}</span>
                  </div>
                )}
              </div>

              <button className="inline-flex items-center gap-2 bg-secondary text-primary font-semibold px-10 h-12 rounded-full text-sm uppercase tracking-wider hover:shadow-[0_0_30px_-4px_hsl(54,96%,70%,0.5)] transition-all duration-300 hover:scale-[1.02]">
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

  /* ── Progress ── */
  const progressPercent = ((step + 1) / progressSteps.length) * 100;

  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Subtle geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(54,96%,88%) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Soft radial glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[hsl(54,96%,70%,0.04)] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold tracking-wider mb-5 border border-secondary/15">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-secondary mb-4 tracking-tight">
            Calculate Your Business Setup Cost
          </h2>
          <p className="text-[hsl(54,40%,75%)] text-lg">
            Answer a few questions and get an instant estimate for your UAE business setup.
          </p>
        </motion.div>

        {/* Main Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-3xl border border-[hsl(54,60%,80%,0.1)] bg-[hsl(142,20%,18%,0.7)] backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Progress Timeline */}
            <div className="border-b border-[hsl(54,60%,80%,0.08)] px-6 py-6">
              {/* Step indicators */}
              <div className="flex items-center justify-between max-w-lg mx-auto relative">
                {/* Connecting line */}
                <div className="absolute top-5 left-[10%] right-[10%] h-[1px] bg-[hsl(54,60%,80%,0.12)]" />
                <motion.div
                  className="absolute top-5 left-[10%] h-[1px] bg-secondary/50 origin-left"
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
                            className="absolute inset-0 rounded-full border-2 border-secondary/50"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            style={{ margin: "-4px" }}
                          />
                        )}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-400 ${
                            isActive
                              ? "bg-secondary text-primary shadow-[0_0_20px_-2px_hsl(54,96%,70%,0.5)]"
                              : isDone
                              ? "bg-secondary text-primary"
                              : "bg-[hsl(142,18%,24%)] text-[hsl(54,40%,65%)] group-hover:bg-[hsl(142,18%,28%)]"
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
                            ? "text-secondary"
                            : isDone
                            ? "text-secondary/70"
                            : "text-[hsl(54,30%,55%)]"
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
              <div className="border-t border-[hsl(54,60%,80%,0.08)] px-6 sm:px-10 py-5 flex items-center justify-between">
                <button
                  onClick={goBack}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1 text-sm text-[hsl(54,30%,60%)] hover:text-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>

                {/* Blurred price preview */}
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-xs text-[hsl(54,30%,55%)]">Est.</span>
                  <span
                    className={`text-lg font-bold text-secondary transition-all duration-500 ${
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
                  className="inline-flex items-center gap-2 bg-secondary text-primary font-semibold px-8 h-11 rounded-full text-sm tracking-wide hover:shadow-[0_0_24px_-4px_hsl(54,96%,70%,0.45)] transition-all duration-300 hover:scale-[1.03] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                  {step === 4 ? "See Estimate" : "Next Step"}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === 5 && (
              <div className="border-t border-[hsl(54,60%,80%,0.08)] px-6 sm:px-10 py-5 flex items-center justify-center">
                <button
                  onClick={() => {
                    setStep(0);
                    setDirection(-1);
                  }}
                  className="text-sm text-[hsl(54,30%,60%)] hover:text-secondary transition-colors"
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
