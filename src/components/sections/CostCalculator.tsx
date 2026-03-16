import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
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

/* ── Component ─────────────────────────────────────── */

export const CostCalculator = () => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);

  // Selections
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

  /* ── Estimate calc (illustrative) ── */
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
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              What's your business activity?
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
              Select the category that best describes your business.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {activities.map((a, i) => {
                const Icon = a.icon;
                const selected = selectedActivity === i;
                return (
                  <motion.button
                    key={a.label}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedActivity(i)}
                    className={`relative group rounded-2xl border-2 p-6 text-center transition-all duration-300 cursor-pointer ${
                      selected
                        ? "border-primary bg-primary/10 shadow-glow"
                        : "border-border/60 bg-card hover:border-primary/30 hover:shadow-soft"
                    }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center transition-colors duration-300 ${
                        selected
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <p className={`font-semibold text-sm ${selected ? "text-primary" : "text-foreground"}`}>
                      {a.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
                    {selected && (
                      <motion.div
                        layoutId="check"
                        className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                      >
                        <Check className="w-3.5 h-3.5 text-primary-foreground" />
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
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Choose your jurisdiction
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
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
                    className={`relative rounded-2xl border-2 p-5 text-left transition-all duration-300 cursor-pointer ${
                      selected
                        ? "border-primary bg-primary/10 shadow-glow"
                        : "border-border/60 bg-card hover:border-primary/30 hover:shadow-soft"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className={`font-semibold ${selected ? "text-primary" : "text-foreground"}`}>
                          {j.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{j.desc}</p>
                      </div>
                      {j.tag && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full whitespace-nowrap">
                          {j.tag}
                        </span>
                      )}
                    </div>
                    {selected && (
                      <motion.div
                        layoutId="check"
                        className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                      >
                        <Check className="w-3.5 h-3.5 text-primary-foreground" />
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
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              How many visas do you need?
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
              Select your visa requirements for your team.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {visaOptions.map((v, i) => {
                const selected = selectedVisas === i;
                return (
                  <motion.button
                    key={v.label}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedVisas(i)}
                    className={`rounded-2xl border-2 p-6 text-center transition-all duration-300 cursor-pointer ${
                      selected
                        ? "border-primary bg-primary/10 shadow-glow"
                        : "border-border/60 bg-card hover:border-primary/30 hover:shadow-soft"
                    }`}
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
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Select your office type
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
              Choose the workspace that fits your needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {officeOptions.map((o, i) => {
                const selected = selectedOffice === i;
                return (
                  <motion.button
                    key={o.label}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedOffice(i)}
                    className={`rounded-2xl border-2 p-6 text-center transition-all duration-300 cursor-pointer ${
                      selected
                        ? "border-primary bg-primary/10 shadow-glow"
                        : "border-border/60 bg-card hover:border-primary/30 hover:shadow-soft"
                    }`}
                  >
                    <p className={`font-semibold mb-1 ${selected ? "text-primary" : "text-foreground"}`}>
                      {o.label}
                    </p>
                    <p className="text-xs text-muted-foreground mb-2">{o.desc}</p>
                    <span className="text-xs font-bold text-primary">{o.price}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Optional add-ons
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
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
                    className={`rounded-2xl border-2 p-5 text-left transition-all duration-300 cursor-pointer ${
                      selected
                        ? "border-primary bg-primary/10 shadow-glow"
                        : "border-border/60 bg-card hover:border-primary/30 hover:shadow-soft"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
                          selected ? "bg-primary border-primary" : "border-muted-foreground/30"
                        }`}
                      >
                        {selected && <Check className="w-3 h-3 text-primary-foreground" />}
                      </div>
                      <div>
                        <p className={`font-semibold text-sm ${selected ? "text-primary" : "text-foreground"}`}>
                          {a.label}
                        </p>
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
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Your Estimated Setup Cost
              </h3>
              <p className="text-muted-foreground text-sm mb-8">
                Based on your selections, here's an indicative range.
              </p>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-block rounded-2xl bg-primary px-10 py-6 mb-8"
              >
                <p className="text-primary-foreground text-sm font-medium mb-1">Estimated Total</p>
                <p className="text-4xl sm:text-5xl font-bold text-primary-foreground tracking-tight">
                  AED {estimateTotal().toLocaleString()}
                </p>
                <p className="text-primary-foreground/70 text-xs mt-2">*Indicative pricing, subject to final review</p>
              </motion.div>

              <div className="max-w-sm mx-auto text-left space-y-3 mb-8">
                {selectedActivity !== null && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Activity</span>
                    <span className="font-medium text-foreground">{activities[selectedActivity].label}</span>
                  </div>
                )}
                {selectedJurisdiction !== null && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Jurisdiction</span>
                    <span className="font-medium text-foreground">{jurisdictions[selectedJurisdiction].label}</span>
                  </div>
                )}
                {selectedVisas !== null && (
                  <div className="flex justify-between text-sm">
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

              <Button size="lg" className="font-semibold px-10 h-12 rounded-xl uppercase tracking-wider text-sm">
                Get a Detailed Quote
              </Button>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  /* ── Price preview bar ── */
  const progressPercent = ((step + 1) / progressSteps.length) * 100;

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
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
          <div className="rounded-3xl border border-border/50 bg-card/80 backdrop-blur-xl shadow-soft-lg overflow-hidden">
            {/* Progress Ribbon */}
            <div className="border-b border-border/50 bg-muted/30 px-6 py-5">
              <div className="flex items-center justify-between max-w-lg mx-auto">
                {progressSteps.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = i === step;
                  const isDone = i < step;
                  return (
                    <button
                      key={s.label}
                      onClick={() => {
                        if (i < step) {
                          setDirection(i < step ? -1 : 1);
                          setStep(i);
                        }
                      }}
                      className="flex flex-col items-center gap-1.5 group cursor-pointer"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-glow scale-110"
                            : isDone
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground group-hover:bg-primary/10"
                        }`}
                      >
                        {isDone ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                      </div>
                      <span
                        className={`text-[10px] font-semibold tracking-wide transition-colors ${
                          isActive ? "text-primary" : isDone ? "text-primary/70" : "text-muted-foreground"
                        }`}
                      >
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>
              {/* Progress bar */}
              <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden max-w-lg mx-auto">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Step Content */}
            <div className="p-6 sm:p-10 min-h-[400px] relative overflow-hidden">
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
              <div className="border-t border-border/50 px-6 sm:px-10 py-5 flex items-center justify-between bg-muted/20">
                <Button
                  variant="ghost"
                  onClick={goBack}
                  disabled={step === 0}
                  className="text-muted-foreground"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back
                </Button>

                {/* Blurred price preview */}
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Est.</span>
                  <span className={`text-lg font-bold text-foreground transition-all duration-500 ${step < 3 ? "blur-sm select-none" : ""}`}>
                    AED {estimateTotal().toLocaleString()}
                  </span>
                </div>

                <Button onClick={goNext} disabled={!canProceed()} className="font-semibold px-6">
                  {step === 4 ? "See Estimate" : "Next Step"}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}

            {step === 5 && (
              <div className="border-t border-border/50 px-6 sm:px-10 py-5 flex items-center justify-center bg-muted/20">
                <Button variant="ghost" onClick={() => { setStep(0); setDirection(-1); }} className="text-muted-foreground">
                  Start Over
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
