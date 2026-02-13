import { motion } from "framer-motion";
import meetingIllustrated from "@/assets/one-platform-meeting.png";

const features = [
  {
    number: "01",
    title: "A single self-improving system",
    description: "One system means everything is connected. AI learns from team interactions, and teams learn from AI. That feedback loop makes the system smarter every day.",
  },
  {
    number: "02",
    title: "End-to-end control",
    description: "Full visibility and control over every aspect of your workspace operations. From booking to compliance, manage it all from one dashboard.",
  },
];

export const OneSuite = () => {
  return (
    <section className="bg-background">
      {/* Full-width banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full overflow-hidden illustrated-overlay"
      >
        <img
          src={meetingIllustrated}
          alt="Modern meeting room illustration"
          className="w-full h-[600px] lg:h-[700px] xl:h-[800px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16 xl:p-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
            One Platform.
            <br />
            <span className="text-white/80">Superior service.</span>
          </h2>
          <p className="text-white/80 max-w-xl text-lg lg:text-xl leading-relaxed">
            FlashSpace delivers superior workspace management at scale—bringing 
            AI and human support into one connected system that continuously 
            improves performance.
          </p>
        </div>
      </motion.div>

      {/* Numbered feature cards */}
      <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 lg:p-10 bg-card rounded-xl border border-border"
            >
              {/* Number */}
              <div className="text-4xl lg:text-5xl font-light text-foreground/80 mb-4">
                {feature.number}
              </div>
              
              {/* Dotted divider */}
              <div className="border-t border-dotted border-muted-foreground/40 mb-8" />
              
              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
