import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Shield, Zap } from "lucide-react";

const highlights = [
  { icon: FileText, text: "Company Registration & Incorporation" },
  { icon: Shield, text: "GST Registration & Compliance" },
  { icon: Zap, text: "Fast-Track Business Setup in Days" },
];

export const BusinessSetupIntro = () => {
  return (
    <section id="business-setup" className="py-20 lg:py-28 bg-card/50 border-y border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Business Setup
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 tracking-tight leading-[1.12]">
              Start your business with{" "}
              <span className="text-primary italic">confidence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              From company registration to GST compliance, we handle the paperwork so you can focus 
              on building your business. Get set up in days, not weeks.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-normal px-8 h-12 rounded-xl shadow-md">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border border-border/50 p-8 shadow-lg"
          >
            <div className="space-y-6">
              {[
                { step: "01", title: "Choose Your Service", desc: "Select from company registration, GST, or compliance packages" },
                { step: "02", title: "Submit Documents", desc: "Upload required documents through our secure platform" },
                { step: "03", title: "We Handle the Rest", desc: "Our experts process everything — you get updates in real time" },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <span className="text-4xl font-bold text-muted-foreground/15 leading-none shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
