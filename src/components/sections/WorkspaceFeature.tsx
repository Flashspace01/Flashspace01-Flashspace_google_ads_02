import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, MessageSquare, Bot, Clock } from "lucide-react";
import coworkingIllustrated from "@/assets/coworking-illustrated.jpg";

export const WorkspaceFeature = () => {
  return (
    <section className="py-24 lg:py-32 organic-bg" id="workspaces">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
          {/* Left sidebar navigation */}
          <div className="hidden lg:block">
            <div className="sticky top-32 space-y-4">
              <div className="border-t border-border pt-4">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  AI Platform
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-semibold uppercase tracking-wider text-foreground">
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
                src={coworkingIllustrated}
                alt="Coworking space illustration"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                  The next-gen Workspaces
                  <br />
                  <span className="text-white/80">designed for productivity.</span>
                </h2>
                <p className="text-white/80 max-w-lg mb-6 leading-relaxed">
                  Our workspaces equip teams with powerful AI tools, actionable insights, 
                  and seamless workflows—so they can focus on what matters.
                </p>
                <Button size="lg" className="bg-card text-foreground hover:bg-card/90 shadow-md font-medium">
                  Explore workspaces
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            </motion.div>

            {/* Product mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border"
            >
              <div className="grid lg:grid-cols-3">
                {/* Chat panel */}
                <div className="lg:col-span-2 p-6 border-r border-border">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-accent-foreground font-bold">AP</div>
                      <div>
                        <span className="font-bold text-foreground block">Amit Patel</span>
                        <span className="text-xs text-muted-foreground">Mumbai HQ • Hot Desk</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-semibold">✓ Active</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent/70 flex-shrink-0" />
                      <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm">
                        <p className="text-sm text-foreground">Hi, I need to book a meeting room for 10 people tomorrow afternoon. Is there anything available?</p>
                      </div>
                    </div>
                    <div className="ml-11 flex items-center gap-2">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">1m ago</span>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-md">
                        <div className="flex items-center gap-2 mb-2">
                          <Bot className="w-4 h-4 text-primary" />
                          <span className="text-xs font-bold text-primary">Flash AI</span>
                        </div>
                        <p className="text-sm text-foreground">I found 3 meeting rooms available tomorrow 2-5 PM. Conference Room A (12 seats) has video conferencing. Shall I book it?</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details panel */}
                <div className="p-6 bg-muted/30">
                  <div className="flex items-center gap-4 mb-6">
                    <button className="text-sm font-bold text-foreground border-b-2 border-primary pb-1">Details</button>
                    <button className="text-sm text-muted-foreground font-medium">AI Assist</button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-accent/10 border border-accent/20 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="w-4 h-4 text-accent" />
                        <h4 className="font-bold text-foreground">Booking Request</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Meeting room for 10 people. Suggested: Conference Room A with VC setup.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Location</span>
                        <span className="text-foreground font-medium">Mumbai, MH</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Plan</span>
                        <span className="text-foreground font-medium">Enterprise</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Member since</span>
                        <span className="text-foreground font-medium">Jan 2024</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Bookings (MTD)</span>
                        <span className="text-foreground font-bold">24</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h4 className="text-sm text-primary uppercase tracking-wider mb-2 font-semibold">AI Productivity</h4>
                <h3 className="text-xl font-extrabold text-foreground mb-3 tracking-tight">
                  AI tools that maximize team output
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Powerful AI tools provide smart booking suggestions, space optimization, 
                  and automated workflows—so your team can focus on what matters.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h4 className="text-sm text-primary uppercase tracking-wider mb-2 font-semibold">Modern Platform</h4>
                <h3 className="text-xl font-extrabold text-foreground mb-3 tracking-tight">
                  Built for speed and simplicity
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A fully configurable platform with quick booking, templates, and 
                  contextual tools—designed to help teams work smarter.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
