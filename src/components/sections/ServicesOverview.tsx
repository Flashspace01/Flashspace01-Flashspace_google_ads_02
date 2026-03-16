import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Monitor, Clock, Briefcase, Users } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Coworking Spaces",
    description: "Fully-equipped shared workspaces with dedicated desks, private cabins, and all essential amenities for productive teams.",
    href: "#",
  },
  {
    icon: Monitor,
    title: "Virtual Offices",
    description: "Get a prestigious business address, mail handling, and GST registration support without a physical office.",
    href: "#",
  },
  {
    icon: Clock,
    title: "On-Demand Workspaces",
    description: "Book desks, meeting rooms, and conference spaces by the hour or day — pay only for what you use.",
    href: "#",
  },
  {
    icon: Briefcase,
    title: "Business Setup",
    description: "Company registration, GST filing, compliance services, and everything to get your business running quickly.",
    href: "#",
  },
  {
    icon: Users,
    title: "Meeting Rooms",
    description: "Professional meeting and conference rooms with AV equipment, whiteboards, and high-speed internet.",
    href: "#",
  },
];

export const ServicesOverview = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-5 tracking-tight">
            Everything your business needs
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From flexible workspaces to complete business setup — find solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
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
          ))}
        </div>
      </div>
    </section>
  );
};
