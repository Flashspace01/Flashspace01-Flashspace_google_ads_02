import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Building2, Users, Globe, Sparkles, Clock, TrendingUp } from "lucide-react";

export const WorkWhereYouThrive = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Full width glass section */}
      <div className="relative z-10 py-16 lg:py-24">
        <div className="bg-card/50 backdrop-blur-xl border-y border-border/40">
          <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border/30 mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-foreground/80 text-sm font-medium">
                    100+ cities worldwide
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] mb-6 tracking-tight">
                  <span className="text-foreground">Work where</span>
                  <br />
                  <span className="text-primary italic">you thrive.</span>
                </h2>

                {/* Subtitle */}
                <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
                  Premium coworking spaces, virtual offices, and on-demand meeting rooms. 
                  One platform to manage your entire workspace portfolio.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-base px-8 shadow-md font-semibold">
                    Start free trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-base group border-foreground/20 bg-card/50 hover:bg-card font-medium"
                  >
                    <Play className="w-5 h-5 mr-2 text-primary" />
                    Watch demo
                  </Button>
                </div>

                {/* Stats row */}
                <div className="flex gap-8 lg:gap-12 pt-6 border-t border-border/30">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-4 h-4 text-primary/60" />
                      <span className="text-xl lg:text-2xl font-semibold text-foreground">1000+</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Workspaces</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="w-4 h-4 text-primary/60" />
                      <span className="text-xl lg:text-2xl font-semibold text-foreground">100+</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Cities</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-primary/60" />
                      <span className="text-xl lg:text-2xl font-semibold text-foreground">50K+</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Members</div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Feature Cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                {/* Card 1 - AI Powered */}
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border/30 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">AI-Powered Recommendations</h3>
                    <p className="text-sm text-muted-foreground">Get personalized workspace suggestions based on your team size, budget, and preferences.</p>
                  </div>
                </div>

                {/* Card 2 - Real-time Availability */}
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border/30 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Real-time Availability</h3>
                    <p className="text-sm text-muted-foreground">See live availability across all locations and book instantly with one click.</p>
                  </div>
                </div>

                {/* Card 3 - Cost Optimization */}
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border/30 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Cost Optimization</h3>
                    <p className="text-sm text-muted-foreground">Reduce workspace costs by up to 40% with smart utilization insights and flexible plans.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
