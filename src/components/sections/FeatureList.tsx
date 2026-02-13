import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  { name: "Virtual Offices", active: false },
  { name: "Meeting Rooms", active: false },
  { name: "Global Access", active: false },
  { name: "Coworking", active: true },
  { name: "Day Passes", active: false },
  { name: "Business Setup", active: false },
];

export const FeatureList = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Feature preview card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Sidebar labels */}
            <div className="space-y-2 mb-8">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">WORKSPACE</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">BOOKING</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">ENTERPRISE</p>
              <p className="text-sm text-foreground uppercase tracking-wider font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-foreground" />
                SOLUTIONS
              </p>
            </div>

            {/* Preview Card - Frosted glass */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-8 border border-border/50 shadow-soft">
              <div className="bg-card/80 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-border/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-xs font-bold">FS</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Community</span>
                    <span className="text-sm text-muted-foreground">Academy</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent/30" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">Hello, Jane. How can we help?</h3>
                <div className="bg-muted/50 rounded-lg p-3 mb-6">
                  <span className="text-muted-foreground text-sm">🔍 Search for articles...</span>
                </div>

                {/* Help cards grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card/90 backdrop-blur rounded-lg p-4 border border-border/30">
                    <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-xs">🚀</span>
                    </div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">Getting started</h4>
                    <p className="text-xs text-muted-foreground">Learn the basics and get started with our platform.</p>
                  </div>
                  <div className="bg-card/90 backdrop-blur rounded-lg p-4 border border-border/30">
                    <div className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center mb-3">
                      <span className="text-xs">⚙️</span>
                    </div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">Settings and Account</h4>
                    <p className="text-xs text-muted-foreground">Explore the various settings and options available.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground">
              On-demand workspace solutions, from a fully integrated platform
            </p>
            <a href="#" className="text-foreground font-semibold underline underline-offset-4 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Find out more
            </a>
          </motion.div>

          {/* Right side - Feature list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-0"
          >
            {features.map((feature, index) => (
              <motion.a
                key={feature.name}
                href="#"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`
                  flex items-center justify-between py-4 border-b border-border/50 
                  group cursor-pointer transition-all duration-300
                  ${feature.active 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                  }
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg
                `}
              >
                <span className={`
                  text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight transition-all duration-300
                  ${feature.active ? '' : 'group-hover:translate-x-2'}
                `}>
                  {feature.name}
                </span>
                {feature.active && (
                  <ArrowRight className="w-8 h-8 text-foreground" />
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
