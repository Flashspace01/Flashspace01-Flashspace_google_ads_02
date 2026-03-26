import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Building2, Users, Globe } from "lucide-react";
import heroIllustrated from "@/assets/hero-illustrated.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pb-0">
      {/* Illustrated background - extends to next section */}
      <div className="absolute inset-0">
        <img 
          src={heroIllustrated}
          alt="Modern coworking space illustration"
          className="w-full h-full object-cover"
        />
        {/* Soft overlay to blend with cream background */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-foreground text-sm font-medium">
              100+ cities worldwide
            </span>
          </motion.div>

          {/* Headline - Bold sans-serif style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] mb-8 tracking-tight"
          >
            Work where
            <br />
            <span className="text-primary">you thrive.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed"
          >
            Premium coworking spaces, virtual offices, and on-demand meeting rooms. 
            One platform to manage your entire workspace portfolio.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-base px-8 shadow-md font-semibold">
              Start free trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base group border-primary/30 hover:bg-primary/5 font-semibold"
            >
              <Play className="w-5 h-5 mr-2 text-primary" />
              Watch demo
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-12"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-primary/60" />
                <span className="text-2xl font-bold text-foreground">1000+</span>
              </div>
              <div className="text-sm text-muted-foreground">Workspaces</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Globe className="w-4 h-4 text-primary/60" />
                <span className="text-2xl font-bold text-foreground">100+</span>
              </div>
              <div className="text-sm text-muted-foreground">Cities</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-primary/60" />
                <span className="text-2xl font-bold text-foreground">50K+</span>
              </div>
              <div className="text-sm text-muted-foreground">Members</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating cards - right side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="hidden xl:block absolute right-16 top-1/2 -translate-y-1/2"
      >
        <div className="space-y-4">
          {/* Booking card */}
          <motion.div 
            className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border w-72"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-bold text-foreground text-sm">New Booking</div>
                <div className="text-xs text-muted-foreground">Just now</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground mb-3">
              Meeting Room A • 2:00 PM - 4:00 PM
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                ✓ Confirmed
              </span>
            </div>
          </motion.div>

          {/* Utilization card */}
          <motion.div 
            className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border w-72"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-sm text-muted-foreground mb-2">Space Utilization</div>
            <div className="flex items-end gap-2 mb-3">
              <span className="text-3xl font-bold text-foreground">87%</span>
              <span className="text-primary text-sm font-semibold mb-1">↑ 12%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[87%] bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
