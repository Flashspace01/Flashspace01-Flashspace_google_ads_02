import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Building2, CalendarCheck, TrendingUp, MapPin, Clock } from "lucide-react";
import heroBg from "@/assets/hero-premium-bg.jpg";

export const HeroWithSearch = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const [collapsed, setCollapsed] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCollapsed(latest > 100);
  });

  // Line 1 & 2: fade out and translate up
  const line1Opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const line1Y = useTransform(scrollY, [0, 100], [0, -20]);
  const line2Opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const line2Y = useTransform(scrollY, [0, 100], [0, -20]);

  // Line 3: slight scale reduction
  const line3Scale = useTransform(scrollY, [0, 120], [1, 0.85]);

  // Subheading
  const subScale = useTransform(scrollY, [0, 120], [1, 0.85]);
  const subOpacity = useTransform(scrollY, [0, 120], [1, 0.8]);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image — scrolls naturally */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Premium workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6">
        <div className="max-w-[1100px] w-full">

          {/* Heading — 3 independent lines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6"
          >
            <motion.span
              style={{ opacity: line1Opacity, y: line1Y }}
              className={`block text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em] text-white leading-[1.08] transition-all duration-[400ms] ease-out ${collapsed ? 'hidden' : ''}`}
            >
              Where Workspaces Become
            </motion.span>
            <motion.span
              style={{ opacity: line2Opacity, y: line2Y }}
              className={`block text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em] text-white leading-[1.08] transition-all duration-[400ms] ease-out ${collapsed ? 'hidden' : ''}`}
            >
              Structured Infrastructure
            </motion.span>

            {/* Line 3 — sticky wrapper */}
            <div className="sticky top-[90px] z-[5]">
              <motion.span
                style={{ scale: line3Scale, transformOrigin: "center top" }}
                className="block text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em] text-white leading-[1.08] transition-all duration-[400ms] ease-out"
              >
                Not Just Listings
              </motion.span>
            </div>
          </motion.div>

          {/* Subheading — scroll-reduced */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            style={{
              scale: subScale,
              opacity: subOpacity,
              transformOrigin: "center top",
            }}
            className="text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed mb-10"
          >
            AI-powered platform to manage virtual offices, coworking spaces, meeting rooms, and enterprise workspace portfolios — all in one place.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <Sparkles className="w-4 h-4 mr-1" />
              Chat with AI
            </Button>
            <Button size="lg" variant="outline" className="font-semibold px-8 h-12 rounded-xl border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent">
              Explore Platform
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>

          {/* Mini Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            className="mt-14 w-full max-w-[960px] mx-auto"
          >
            <div className="rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-xl p-5 shadow-2xl">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <span className="text-xs text-white/40 font-medium tracking-wide">FlashSpace Dashboard</span>
                <div className="flex items-center gap-1.5 text-white/30">
                  <Clock className="w-3 h-3" />
                  <span className="text-xs">Live</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {[
                  { icon: Building2, label: "Active Spaces", value: "2,847", change: "+12%" },
                  { icon: Users, label: "Members", value: "18.4K", change: "+8%" },
                  { icon: CalendarCheck, label: "Bookings Today", value: "1,293", change: "+23%" },
                  { icon: TrendingUp, label: "Revenue", value: "₹4.2Cr", change: "+18%" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="rounded-xl bg-white/[0.06] border border-white/10 p-3 hover:bg-white/[0.1] transition-colors cursor-default"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className="w-3.5 h-3.5 text-white/50" />
                      <span className="text-[11px] text-white/40 font-medium">{stat.label}</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <span className="text-lg font-semibold text-white">{stat.value}</span>
                      <span className="text-[11px] font-medium text-green-400">{stat.change}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom row — recent activity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Mini chart placeholder */}
                <div className="rounded-xl bg-white/[0.05] border border-white/10 p-3">
                  <span className="text-[11px] text-white/40 font-medium block mb-2">Occupancy Rate</span>
                  <div className="flex items-end gap-1 h-10">
                    {[40, 55, 45, 70, 65, 80, 75, 90, 85, 78, 88, 92].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.7 + i * 0.04, duration: 0.4 }}
                        className="flex-1 rounded-sm bg-primary/70 min-w-[4px]"
                      />
                    ))}
                  </div>
                </div>

                {/* Recent bookings */}
                <div className="rounded-xl bg-white/[0.05] border border-white/10 p-3">
                  <span className="text-[11px] text-white/40 font-medium block mb-2">Recent Bookings</span>
                  <div className="space-y-1.5">
                    {[
                      { name: "HSR Layout, Bangalore", type: "Coworking" },
                      { name: "BKC, Mumbai", type: "Meeting Room" },
                      { name: "Connaught Place, Delhi", type: "Virtual Office" },
                    ].map((booking, i) => (
                      <motion.div
                        key={booking.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-white/30" />
                          <span className="text-xs text-white/70">{booking.name}</span>
                        </div>
                        <span className="text-[10px] text-white/30 bg-white/5 px-2 py-0.5 rounded-full">{booking.type}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
