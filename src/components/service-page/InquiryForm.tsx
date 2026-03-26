import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

interface InquiryFormProps {
  inquiryType: string;
}

const inquiryOptions = [
  "Free Zone Setup",
  "Mainland Setup",
  "Visa Services",
  "Bank Account",
  "Accounting Services",
  "PRO Services",
  "Golden Visa",
  "Trademark Registration",
  "General Inquiry",
];

export const InquiryForm = ({ inquiryType }: InquiryFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    inquiry: inquiryType,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-2xl border border-border p-6 text-center space-y-3">
        <CheckCircle className="w-10 h-10 text-primary mx-auto" />
        <h3 className="text-lg font-semibold text-foreground">Thank You!</h3>
        <p className="text-sm text-muted-foreground">
          Our team will contact you within 2 business hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-2xl border border-border p-6 space-y-4 shadow-sm"
    >
      <h3 className="text-lg font-semibold text-foreground">Get a Free Consultation</h3>
      <p className="text-sm text-muted-foreground">
        Our experts will get back to you within 2 hours.
      </p>

      <div className="space-y-3">
        <div>
          <Label htmlFor="name" className="text-xs">Full Name</Label>
          <Input
            id="name"
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-xs">Phone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+971 50 000 0000"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-xs">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="inquiry" className="text-xs">Inquiry Type</Label>
          <Select
            value={form.inquiry}
            onValueChange={(val) => setForm({ ...form, inquiry: val })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              {inquiryOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button type="submit" className="w-full" size="lg">
        Get Started
      </Button>

      <p className="text-[11px] text-muted-foreground text-center">
        By submitting, you agree to our Privacy Policy.
      </p>
    </form>
  );
};
