import { motion } from "framer-motion";
import { Building2, Users, Calendar, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Building2,
    title: "Virtual Office",
    description: "Professional business address with mail handling and call forwarding services",
    features: ["Prime Location Address", "GST Registration Support", "Mail Forwarding", "Call Management"],
    color: "bg-primary",
    href: "#virtual-office",
  },
  {
    icon: Users,
    title: "Coworking Space",
    description: "Flexible workspace options with networking opportunities and premium amenities",
    features: ["Flexible Workspace", "Networking Events", "Premium Amenities", "24/7 Access"],
    color: "bg-primary/80",
    href: "#coworking",
  },
  {
    icon: Calendar,
    title: "On Demand",
    description: "On-demand meeting spaces and services with video conferencing facilities",
    features: ["Meeting Rooms", "Video Conferencing", "Presentation Tools", "Flexible Booking"],
    color: "bg-accent",
    href: "#on-demand",
  },
  {
    icon: Briefcase,
    title: "Business Setup",
    description: "Complete business setup solutions including legal documentation and compliance support",
    features: ["Legal Documentation", "Business Registration", "Compliance Support", "Tax Advisory"],
    color: "bg-primary/70",
    href: "#business-setup",
  },
];

export const Solutions = () => {
  return (
    <section className="py-24 lg:py-32 organic-bg" id="solutions">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Business Ecosystem{" "}
            <span className="gradient-text">at Your Fingertips</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Transform your business operations with our comprehensive suite of virtual
            office solutions designed to scale with your ambitions.
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 bg-card rounded-2xl border border-border feature-card">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${solution.color} flex items-center justify-center mb-6`}>
                  <solution.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground/80">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="outline" className="group/btn">
                  Explore Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="default" size="lg">
            View All Solutions
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
