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

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  businessType: z.string().min(1, "Please select a business type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().trim().max(1000).optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

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

const budgetRanges = [
  "Under AED 10,000",
  "AED 10,000 – 25,000",
  "AED 25,000 – 50,000",
  "AED 50,000+",
  "Not sure yet",
];

export const ContactForm = () => {
  const [form, setForm] = useState<Partial<ContactForm>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 lg:py-28 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-16"
          >
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-medium text-foreground mb-4 tracking-tight">Thank you!</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We've received your enquiry. One of our e-commerce setup specialists will be in touch within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="text-primary">+</span> Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-foreground leading-[1.15] tracking-tight mb-5">
              Ready to launch<br />your online store?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-sm">
              Fill in the form and our e-commerce setup team will reach out within 24 hours with a tailored plan.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Free consultation — no obligation
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Personalised setup roadmap
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Transparent pricing — no hidden fees
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border/50 p-8 lg:p-10 space-y-5 shadow-sm">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={form.name || ""}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email || ""}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+971 50 123 4567"
                  value={form.phone || ""}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>

              <div>
                <Label className="text-sm font-medium text-foreground mb-1.5 block">Business Type *</Label>
                <Select onValueChange={(v) => handleChange("businessType", v)}>
                  <SelectTrigger className={errors.businessType ? "border-destructive" : ""}>
                    <SelectValue placeholder="Select your business type" />
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
                <Label className="text-sm font-medium text-foreground mb-1.5 block">Budget Range *</Label>
                <Select onValueChange={(v) => handleChange("budget", v)}>
                  <SelectTrigger className={errors.budget ? "border-destructive" : ""}>
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((b) => (
                      <SelectItem key={b} value={b}>{b}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.budget && <p className="text-xs text-destructive mt-1">{errors.budget}</p>}
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Message (optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your e-commerce idea..."
                  rows={4}
                  value={form.message || ""}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 text-base font-medium rounded-xl">
                <Send className="w-4 h-4 mr-2" />
                Submit Enquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
