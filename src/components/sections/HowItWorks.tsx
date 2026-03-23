import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  company: z.string().trim().min(1, "Company name is required"),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().min(1, "Phone number is required"),
  businessType: z.string().min(1, "Please select a business type"),
  jurisdiction: z.string().min(1, "Please select a jurisdiction"),
  message: z.string().trim().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const businessTypes = [
  "Fashion & Apparel",
  "Electronics & Gadgets",
  "Health & Beauty",
  "Food & Beverages",
  "Home & Living",
  "Digital Products",
  "General E-commerce",
  "Other",
];

const jurisdictions = [
  "Mainland",
  "Free Zone",
  "Not sure yet",
];

export const HowItWorks = () => {
  const [form, setForm] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="how-it-works" className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-16"
          >
            <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-medium text-secondary mb-4 tracking-tight">Thank you!</h2>
            <p className="text-secondary/70 text-lg leading-relaxed">
              We've received your details. Our e-commerce setup team will reach out within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-secondary leading-[1.15] tracking-tight mb-5">
              From idea to live store
            </h2>
            <p className="text-secondary/60 text-base leading-relaxed mb-8 max-w-sm">
              Share your details and our specialists will create a tailored setup plan for your e-commerce business.
            </p>
            <div className="space-y-4 text-sm text-secondary/50">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 shrink-0" />
                Free consultation — no obligation
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 shrink-0" />
                Personalised setup roadmap
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 shrink-0" />
                Response within 24 hours
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="rounded-2xl border border-secondary/10 bg-white/[0.06] backdrop-blur-sm p-8 lg:p-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="hw-name" className="text-sm font-medium text-secondary/80 mb-1.5 block">Full Name *</Label>
                  <Input
                    id="hw-name"
                    placeholder="Your name"
                    value={form.name || ""}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`bg-white/10 border-secondary/15 text-secondary placeholder:text-secondary/30 ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="hw-company" className="text-sm font-medium text-secondary/80 mb-1.5 block">Company Name *</Label>
                  <Input
                    id="hw-company"
                    placeholder="Your company"
                    value={form.company || ""}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className={`bg-white/10 border-secondary/15 text-secondary placeholder:text-secondary/30 ${errors.company ? "border-destructive" : ""}`}
                  />
                  {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="hw-email" className="text-sm font-medium text-secondary/80 mb-1.5 block">Email Address *</Label>
                  <Input
                    id="hw-email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email || ""}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`bg-white/10 border-secondary/15 text-secondary placeholder:text-secondary/30 ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="hw-phone" className="text-sm font-medium text-secondary/80 mb-1.5 block">Phone Number *</Label>
                  <Input
                    id="hw-phone"
                    type="tel"
                    placeholder="+971 50 123 4567"
                    value={form.phone || ""}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={`bg-white/10 border-secondary/15 text-secondary placeholder:text-secondary/30 ${errors.phone ? "border-destructive" : ""}`}
                  />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label className="text-sm font-medium text-secondary/80 mb-1.5 block">Business Type *</Label>
                  <Select onValueChange={(v) => handleChange("businessType", v)}>
                    <SelectTrigger className={`bg-white/10 border-secondary/15 text-secondary ${errors.businessType ? "border-destructive" : ""}`}>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map((t) => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.businessType && <p className="text-xs text-destructive mt-1">{errors.businessType}</p>}
                </div>
                <div>
                  <Label className="text-sm font-medium text-secondary/80 mb-1.5 block">Jurisdiction *</Label>
                  <Select onValueChange={(v) => handleChange("jurisdiction", v)}>
                    <SelectTrigger className={`bg-white/10 border-secondary/15 text-secondary ${errors.jurisdiction ? "border-destructive" : ""}`}>
                      <SelectValue placeholder="Select jurisdiction" />
                    </SelectTrigger>
                    <SelectContent>
                      {jurisdictions.map((j) => (
                        <SelectItem key={j} value={j}>{j}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.jurisdiction && <p className="text-xs text-destructive mt-1">{errors.jurisdiction}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="hw-message" className="text-sm font-medium text-secondary/80 mb-1.5 block">Message (optional)</Label>
                <Textarea
                  id="hw-message"
                  placeholder="Tell us about your e-commerce idea..."
                  rows={3}
                  value={form.message || ""}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="bg-white/10 border-secondary/15 text-secondary placeholder:text-secondary/30 resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 text-base font-medium rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Send className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
