import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play, Sparkles, Zap, Shield, BarChart3 } from "lucide-react";
import officeIllustrated from "@/assets/office-illustrated.jpg";

const capabilities = [
  { id: "booking", label: "Smart Booking", icon: Zap, active: true },
  { id: "compliance", label: "Compliance", icon: Shield, active: false },
  { id: "access", label: "Access Control", icon: Sparkles, active: false },
  { id: "analytics", label: "Analytics", icon: BarChart3, active: false },
];

export const AIFeature = () => {
  return (
    <section className="py-24 lg:py-32 bg-background" id="ai-workspaces">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
          {/* Left sidebar navigation */}
          <div className="hidden lg:block">
            <div className="sticky top-32 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  AI Platform
                </span>
              </div>
              <div className="border-t border-border pt-4">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  Workspaces
                </span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-16">
            {/* Hero banner with illustrated image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden illustrated-overlay"
            >
              <img
                src={officeIllustrated}
                alt="Premium private office illustration"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-white/90 text-sm font-medium">AI-Powered</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight">
                  Flash. The #1 AI
                  <br />
                  <span className="text-white/70">for workspace management.</span>
                </h2>
              </div>
            </motion.div>

            {/* Description */}
            <div className="max-w-2xl">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Flash AI works with any workspace to handle even your most complex 
                requirements—from compliance documentation to smart access control, 
                across all your locations.
              </p>
              <Button variant="outline" size="lg" className="group border-primary/30 hover:bg-primary/5 font-semibold">
                Learn more
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>

            {/* Capabilities tabs */}
            <div>
              <div className="text-sm text-primary uppercase tracking-wider mb-4 font-semibold">
                Capabilities
              </div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-foreground mb-8 tracking-tight">
                Built to handle the most complex
                <br />requirements on every channel.
              </h3>
              
              <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed">
                Configure Flash with your procedures, policies, and workspace requirements. 
                Test performance before launch. Deploy across every location. Then analyze 
                and improve with AI-powered insights.
              </p>

              {/* Tab buttons */}
              <div className="flex flex-wrap gap-2 mb-8">
                {capabilities.map((cap) => (
                  <button
                    key={cap.id}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      cap.active
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                    }`}
                  >
                    <cap.icon className="w-4 h-4" />
                    {cap.label}
                  </button>
                ))}
              </div>

              <Button variant="outline" size="lg" className="group border-primary/30 hover:bg-primary/5 font-semibold">
                Explore capabilities
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>

            {/* Video testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=600&fit=crop&auto=format"
                alt="Customer testimonial"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/40" />
              
              {/* Company logo area */}
              <div className="absolute top-8 left-8">
                <span className="text-white/80 font-bold tracking-wider">TECHSTART</span>
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                >
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </motion.div>
              </div>
            </motion.div>

            {/* Quote */}
            <blockquote className="max-w-3xl">
              <p className="text-2xl lg:text-3xl font-bold text-foreground leading-snug mb-6 tracking-tight">
                "If you're debating whether to build your own workspace solution 
                or use FlashSpace, my advice would be to use FlashSpace—it's 
                transformed how we operate."
              </p>
              <footer className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format"
                  alt="Rajesh Kumar"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-bold text-foreground">Rajesh Kumar</div>
                  <div className="text-sm text-muted-foreground">CEO at TechStart India</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
