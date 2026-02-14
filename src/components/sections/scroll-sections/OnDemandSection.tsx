import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Calendar, Clock, CreditCard } from "lucide-react";
import featureDayPasses from "@/assets/feature-day-passes.jpg";
import featureMeetingRooms from "@/assets/feature-meeting-rooms.jpg";

export const OnDemandSection = () => {
  return (
    <section id="on-demand" className="py-24 lg:py-32 border-t border-border/50">
      <div className="space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-3 block">On Demand</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight mb-4">
            Book by the hour
            <br />
            <span className="text-muted-foreground">or by the day.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Day passes, meeting rooms, and conference spaces — pay only for what you use. 
            Perfect for remote workers and hybrid teams.
          </p>
        </motion.div>

        {/* Two-column cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border group"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={featureDayPasses} alt="Day passes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Day Pass</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Drop into any coworking space for a day. Starting at ₹200/day with all amenities included.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Flexible hours</span>
                <span className="flex items-center gap-1"><CreditCard className="w-4 h-4" /> Pay per use</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-border group"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={featureMeetingRooms} alt="Meeting rooms" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Meeting Rooms</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Conference rooms, board rooms, and training spaces. Book by the hour with AV equipment included.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Instant booking</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Hourly rates</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="lg" className="group border-primary/30 hover:bg-primary/5 font-semibold">
            View all on-demand options
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
