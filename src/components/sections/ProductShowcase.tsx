import { motion } from "framer-motion";
import { Calendar, Users, BarChart3, MessageSquare, Settings, Bell, Search, ChevronDown, Video, Phone, Mail } from "lucide-react";

const features = [
  {
    title: "Smart Booking",
    description: "Book meeting rooms, desks, and spaces instantly with AI-powered recommendations based on your preferences.",
  },
  {
    title: "Team Management",
    description: "Manage team access, permissions, and workspace allocations across multiple locations seamlessly.",
  },
  {
    title: "Analytics",
    description: "Track utilization, optimize costs, and make data-driven decisions with real-time insights.",
  },
];

export const ProductShowcase = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 tracking-tight">
            Part of the only complete, AI-first
            <br />
            <span className="text-primary">workspace management platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flash AI is just one of the powerful tools for teams, which also includes 
            smart booking, analytics, and collaborative workspace management.
          </p>
        </motion.div>

        {/* Product UI Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
            {/* App Header */}
            <div className="bg-background border-b border-border px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">F</span>
                </div>
                <span className="font-semibold text-foreground">Flashspace</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-lg">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Search...</span>
                </div>
                <button className="p-2 hover:bg-muted rounded-lg">
                  <Bell className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-muted rounded-lg">
                  <Settings className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="w-56 border-r border-border bg-muted/30 p-4 hidden md:block">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Bookings</span>
                    <span className="ml-auto bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">12</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-muted rounded-lg">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Team</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-muted rounded-lg">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-sm">Analytics</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-muted rounded-lg">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm">Messages</span>
                    <span className="ml-auto bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded-full">3</span>
                  </div>
                </div>

                <div className="mt-8">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">Locations</span>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Delhi NCR
                      <span className="ml-auto text-xs">156</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary/60" />
                      Mumbai
                      <span className="ml-auto text-xs">89</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary/40" />
                      Bangalore
                      <span className="ml-auto text-xs">124</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-foreground">Upcoming Bookings</h3>
                    <p className="text-sm text-muted-foreground">Manage your workspace reservations</p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                    + New Booking
                  </button>
                </div>

                {/* Booking Cards */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Video className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">Conference Room A</span>
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">Today</span>
                      </div>
                      <p className="text-sm text-muted-foreground">WeWork Cyber Hub • 2:00 PM - 4:00 PM</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs font-medium text-primary">AK</div>
                        <div className="w-8 h-8 rounded-full bg-primary/15 border-2 border-card flex items-center justify-center text-xs font-medium text-primary">SP</div>
                        <div className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs text-muted-foreground">+3</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">Hot Desk - Floor 3</span>
                        <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">Tomorrow</span>
                      </div>
                      <p className="text-sm text-muted-foreground">91springboard Okhla • 9:00 AM - 6:00 PM</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs font-medium text-primary">RK</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">Phone Booth</span>
                        <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">Mar 15</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Innov8 Connaught Place • 11:00 AM - 12:00 PM</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/15 border-2 border-card flex items-center justify-center text-xs font-medium text-primary">MJ</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel - Details */}
              <div className="w-72 border-l border-border p-4 hidden lg:block">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-foreground">Details</span>
                  <button className="text-muted-foreground hover:text-foreground">×</button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-muted-foreground">Assignee</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary">AK</div>
                      <span className="text-sm text-foreground">Amit Kumar</span>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-xs text-muted-foreground">Team</span>
                    <p className="text-sm text-foreground mt-1">Product Design</p>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs font-semibold text-muted-foreground uppercase">Quick Actions</span>
                    <div className="mt-2 space-y-2">
                      <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-lg">
                        <Mail className="w-4 h-4" />
                        Send reminder
                      </button>
                      <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-lg">
                        <Calendar className="w-4 h-4" />
                        Reschedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto mt-[60px]"
        >
          <div className="grid md:grid-cols-3 gap-[60px]">
            {features.map((feature, index) => (
              <div key={index} className={index > 0 ? "md:border-l md:border-foreground/[0.06] md:pl-[60px]" : ""}>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
