import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, MapPin, Phone, ArrowRight } from "lucide-react";
import flashspaceLogo from "@/assets/flashspace-logo.png";

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
  "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Other",
];

const GetStarted = () => {
  const [form, setForm] = useState({ name: "", email: "", city: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.city) errs.city = "Please select a city";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Simple top bar */}
      <header className="border-b border-border/40 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
          <a href="https://flashspace.ai" target="_blank" rel="noopener noreferrer">
            <img src={flashspaceLogo} alt="FlashSpace" className="h-10 w-auto" />
          </a>
          <a href="tel:+919876543210" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+91 98765 43210</span>
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-5xl grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider mb-6">
              India's Most Affordable Virtual Office
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-foreground leading-[1.15] mb-5">
              Get Your Virtual Office{" "}
              <span className="text-primary">@ ₹699/mo</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-sm">
              GST & MCA approved. Premium business address activated in 1-2 days. No hidden fees.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              {[
                "Free consultation — no obligation",
                "GST & MCA compliant address",
                "Setup in just 1-2 business days",
                "Transparent pricing — no hidden fees",
              ].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-card rounded-2xl border border-border/50 p-10 text-center shadow-sm">
                <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Thank you!</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We've received your enquiry. Our team will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border/50 p-8 lg:p-10 space-y-5 shadow-sm">
                <div className="mb-2">
                  <h2 className="text-xl font-bold text-foreground tracking-tight">Get Your Virtual Office</h2>
                  <p className="text-sm text-muted-foreground">Fill in the details — we'll set you up within 24 hours.</p>
                </div>

                <div>
                  <Label htmlFor="lead-name" className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</Label>
                  <Input id="lead-name" placeholder="Your name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className={errors.name ? "border-destructive" : ""} />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="lead-email" className="text-sm font-medium text-foreground mb-1.5 block">Email Address *</Label>
                  <Input id="lead-email" type="email" placeholder="you@company.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className={errors.email ? "border-destructive" : ""} />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="lead-city" className="text-sm font-medium text-foreground mb-1.5 block">
                    <MapPin className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
                    City for Virtual Office *
                  </Label>
                  <select
                    id="lead-city"
                    value={form.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.city ? "border-destructive" : "border-input"}`}
                  >
                    <option value="">Select your city</option>
                    {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full h-12 text-base font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
                  <Send className="w-4 h-4 mr-2" />
                  Get Your Virtual Office
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default GetStarted;
