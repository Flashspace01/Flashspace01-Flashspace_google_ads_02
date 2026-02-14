import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Building, FileCheck, Shield, Globe } from "lucide-react";
import featureBusinessSetup from "@/assets/feature-business-setup.jpg";

const steps = [
  { icon: Globe, title: "Choose Your Location", desc: "Select from 100+ premium business addresses across India." },
  { icon: FileCheck, title: "Documentation", desc: "We handle all paperwork — GST registration, company incorporation, and more." },
  { icon: Shield, title: "Compliance Ready", desc: "Stay compliant with automated renewals and regulatory updates." },
  { icon: Building, title: "Start Operating", desc: "Get your business address, mail handling, and phone line activated within 48 hours." },
];

export const BusinessSetupSection = () => {
  return (
    <section id="business-setup" className="py-24 lg:py-32 border-t border-border/50">
      <div className="space-y-16">
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <img
            src={featureBusinessSetup}
            alt="Business setup services"
            className="w-full h-[350px] lg:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <span className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-wider mb-2 block">Business Setup</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Launch your business
              <br />
              <span className="text-white/70">in any city, hassle-free.</span>
            </h2>
          </div>
        </motion.div>

        {/* Description */}
        <div className="max-w-2xl">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            From company registration to GST filing, we provide end-to-end business setup services. 
            Get operational in a new city within days, not months.
          </p>
          <Button variant="outline" size="lg" className="group border-primary/30 hover:bg-primary/5 font-semibold">
            Start your setup
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
                <span className="text-sm font-bold text-primary">{i + 1}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <step.icon className="w-4 h-4 text-primary" />
                  <h4 className="font-bold text-foreground">{step.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
