import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Building2, CalendarCheck, Briefcase, Users, Grid3X3, ChevronDown } from "lucide-react";
import heroIllustrated from "@/assets/hero-illustrated.jpg";

const mainCategories = [
  { id: "leasing", label: "Long-term Leasing", icon: Building2 },
  { id: "ondemand", label: "On-demand", icon: CalendarCheck },
  { id: "virtual", label: "Virtual Office", icon: Briefcase },
];

const subCategories = [
  { id: "coworking", label: "Coworking Space", icon: Users },
  { id: "managed", label: "Managed Office", icon: Grid3X3 },
  { id: "commercial", label: "Office/Commercial", icon: Building2 },
];

const categoryDescriptions: Record<string, string> = {
  coworking: "Rent dedicated seats and private cabins in fully-equipped coworking spaces",
  managed: "Fully managed office spaces with all amenities and services included",
  commercial: "Traditional office spaces and commercial real estate for your business",
};

export const WorkspaceSearch = () => {
  const [activeMain, setActiveMain] = useState("leasing");
  const [activeSub, setActiveSub] = useState("coworking");

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Extended background from Hero - same light illustrated style */}
      <div className="absolute inset-0">
        <img 
          src={heroIllustrated}
          alt="Modern coworking space illustration"
          className="w-full h-full object-cover"
        />
        {/* Same light overlay as Hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            The new way to offices
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose between office space, pay-per-use plans or fixed desks for large enterprises and individuals
          </p>
        </motion.div>

        {/* Main category tabs - Glass effect on light bg */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {mainCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveMain(cat.id)}
              className={`
                flex items-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm
                ${activeMain === cat.id
                  ? "bg-white text-primary border-2 border-primary shadow-lg"
                  : "bg-white/70 text-foreground/70 border border-border/50 hover:bg-white hover:border-primary/30"
                }
              `}
            >
              <cat.icon className="w-5 h-5" />
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Sub category tabs - Glass effect on light bg */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {subCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveSub(cat.id)}
              className={`
                flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all backdrop-blur-sm
                ${activeSub === cat.id
                  ? "bg-white text-foreground border-2 border-primary shadow-md"
                  : "bg-white/60 text-foreground/70 border border-border/40 hover:bg-white/90 hover:border-primary/30"
                }
              `}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Search box container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Description */}
          <p className="text-center text-muted-foreground mb-6">
            {categoryDescriptions[activeSub]}
          </p>

          {/* Search bar */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-2 shadow-xl border border-border/30 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            {/* City selector */}
            <div className="flex items-center gap-2 px-4 py-3 border-b sm:border-b-0 sm:border-r border-border/30">
              <div className="text-left">
                <span className="text-xs text-muted-foreground block">City</span>
                <button className="flex items-center gap-1 font-semibold text-foreground">
                  Delhi
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Search input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search location or workspaces in Delhi"
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* CTA button */}
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 rounded-xl">
              View Workspaces
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
