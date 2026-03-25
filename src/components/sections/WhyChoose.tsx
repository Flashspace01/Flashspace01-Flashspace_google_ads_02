import { motion } from "framer-motion";
import { Zap, MapPin, FileCheck, Heart, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Get your business address activated in less than 24 hours with our streamlined onboarding process.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
  },
  {
    icon: MapPin, 
    title: "Prime Locations",
    description: "Establish your presence in India's most prestigious business districts across 100+ cities.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&auto=format",
  },
  {
    icon: FileCheck,
    title: "Reliable Compliance",
    description: "GST ready addresses with full legal documentation and compliance support included.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop&auto=format",
  },
  {
    icon: Heart,
    title: "98% Satisfaction",
    description: "Join thousands of happy businesses who trust FlashSpace for their virtual office needs.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop&auto=format",
  },
];

export const WhyChoose = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why FlashSpace
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            India's Most Trusted{" "}
            <span className="gradient-text">Workspace Solution</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Premium quality and exceptional service that sets us apart
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-full rounded-2xl overflow-hidden feature-card bg-background">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/30 backdrop-blur-sm flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {benefit.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
