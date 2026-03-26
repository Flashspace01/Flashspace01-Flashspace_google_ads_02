import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Banknote,
  Calculator,
  Scale,
  Wallet,
  HeartPulse,
  Monitor,
  Gavel,
  Mail,
  Phone,
  Plane,
  Award,
  Flag,
  BadgeCheck,
  ScrollText,
  BookmarkCheck,
} from "lucide-react";

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ServiceGroupData {
  heading: string;
  subheading: string;
  services: ServiceItem[];
}

const serviceGroups: ServiceGroupData[] = [
  {
    heading: "Essential Services",
    subheading: "Core business services to keep your company running smoothly.",
    services: [
      { icon: Banknote, title: "Bank Account Opening", description: "Open corporate bank accounts with leading UAE banks — guided support for all documentation." },
      { icon: Calculator, title: "Accounting Services", description: "Professional bookkeeping, financial statements, and VAT-compliant accounting for UAE businesses." },
      { icon: Scale, title: "Compliance Services", description: "Stay compliant with UAE regulations including AML, ESR, and UBO reporting requirements." },
      { icon: Wallet, title: "Payroll Management", description: "End-to-end payroll processing, WPS compliance, and employee benefits administration." },
      { icon: HeartPulse, title: "Health Insurance", description: "Mandatory health insurance plans for employees and dependents with competitive group rates." },
    ],
  },
  {
    heading: "Operational Services",
    subheading: "Day-to-day operational support for seamless business management.",
    services: [
      { icon: Monitor, title: "IT Services", description: "Business IT infrastructure, cloud solutions, cybersecurity, and managed IT support." },
      { icon: Gavel, title: "Legal Services", description: "Contract drafting, dispute resolution, corporate governance, and legal advisory services." },
      { icon: Mail, title: "Mail Management", description: "Professional mail handling, forwarding, and document management for your business address." },
      { icon: Phone, title: "Virtual Receptionist", description: "Dedicated phone answering, call routing, and professional receptionist services." },
    ],
  },
  {
    heading: "Support Services",
    subheading: "Additional services for visa, residency, and legal protection.",
    services: [
      { icon: Plane, title: "Tourist Visa", description: "Fast-track tourist visa processing for visitors, clients, and business partners." },
      { icon: Award, title: "Golden Visa UAE", description: "Apply for the UAE Golden Visa — 10-year residency for investors, entrepreneurs, and professionals." },
      { icon: Flag, title: "Second Citizenship & Residency", description: "Explore citizenship-by-investment and residency programs in partner countries." },
      { icon: BadgeCheck, title: "PRO Services", description: "Government liaison, document clearing, and visa processing handled by expert PRO teams." },
      { icon: ScrollText, title: "Will Preparation", description: "Protect your assets with DIFC-registered wills and estate planning services." },
      { icon: BookmarkCheck, title: "Trademark Registration", description: "Register and protect your brand name, logo, and intellectual property across the UAE." },
    ],
  },
];

const ServiceCard = ({ service, index }: { service: ServiceItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06 }}
    className="bg-card rounded-2xl border border-border/50 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
  >
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
      <service.icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 px-0 group/btn">
      Learn More
      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
    </Button>
  </motion.div>
);

export const UAEServices = () => {
  return (
    <>
      {serviceGroups.map((group) => (
        <section key={group.heading} id={group.heading.toLowerCase().replace(/\s+/g, "-")} className="py-20 lg:py-28 bg-background even:bg-card/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                {group.heading}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-5 tracking-tight">
                {group.heading}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {group.subheading}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};
