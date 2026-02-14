import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, MapPin, Phone, FileText } from "lucide-react";
import featureVirtualOffice from "@/assets/feature-virtual-offices.jpg";

const features = [
  { icon: MapPin, title: "Premium Business Address", desc: "Get a prestigious address in top business districts across 100+ cities." },
  { icon: Mail, title: "Mail Handling & Forwarding", desc: "Professional mail management with scanning and forwarding services." },
  { icon: Phone, title: "Dedicated Phone Line", desc: "Local phone number with call answering and forwarding." },
  { icon: FileText, title: "GST & Business Registration", desc: "Use your virtual office address for company registration and compliance." },
];

export const VirtualOfficeSection = () => {
  return (
    <section id="virtual-office" className="py-24 lg:py-32 border-t border-border/50">
      <div className="space-y-16">
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <img
            src={featureVirtualOffice}
            alt="Virtual office space"
            className="w-full h-[350px] lg:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <span className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-wider mb-2 block">Virtual Office</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              A real business address,
              <br />
              <span className="text-white/70">without the real estate.</span>
            </h2>
          </div>
        </motion.div>

        {/* Description */}
        <div className="max-w-2xl">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Establish your business presence in premium locations without the overhead of a physical office. 
            Perfect for startups, remote teams, and businesses expanding into new markets.
          </p>
          <Button variant="outline" size="lg" className="group border-primary/30 hover:bg-primary/5 font-semibold">
            Explore Virtual Offices
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">{f.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
