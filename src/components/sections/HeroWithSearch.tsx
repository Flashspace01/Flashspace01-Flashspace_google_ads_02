import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, Mic, Building2, Users, CalendarCheck, Briefcase, BarChart3, Sparkles, MapPin, ChevronDown, Star } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const rotatingExamples = [
  "Find a coworking space in NYC for 5 people",
  "Book a meeting room tomorrow at 2PM",
  "Compare virtual offices in London",
  "Show workspace analytics",
  "Optimize my workspace portfolio",
];

const serviceTags = [
  { label: "Virtual Office", icon: Briefcase },
  { label: "Coworking", icon: Users },
  { label: "Meeting Rooms", icon: CalendarCheck },
  { label: "Event Spaces", icon: Building2 },
  { label: "Enterprise", icon: Building2 },
  { label: "Analytics", icon: BarChart3 },
];

const locations = [
  "Auto Locate",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Kolkata",
];

const testimonials = [
  {
    quote: "FlashSpace transformed how we manage our workspace portfolio.",
    author: "Head of Operations",
    company: "FlexCorp",
  },
  {
    quote: "Reduced our workspace costs by 40% in just 3 months.",
    author: "COO",
    company: "UrbanDesk",
  },
  {
    quote: "The AI recommendations alone saved us 200+ hours per quarter.",
    author: "VP of Real Estate",
    company: "ScaleUp Inc",
  },
];

export const HeroWithSearch = () => {
  const [currentExample, setCurrentExample] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Auto Locate");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % rotatingExamples.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Directional Gradient Background: top-left primary → fading bottom-right */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              135deg,
              hsl(142 20% 22%) 0%,
              hsl(142 20% 28%) 20%,
              hsl(142 18% 34%) 45%,
              hsl(145 14% 42%) 65%,
              hsl(148 10% 52%) 80%,
              hsl(150 8% 62%) 100%
            )
          `,
        }}
      />
      {/* Soft radial glow top-left for depth */}
      <div
        className="absolute top-0 left-0 w-[800px] h-[700px] rounded-full opacity-30"
        style={{ background: "radial-gradient(ellipse at 20% 20%, hsl(142 25% 18% / 0.8), transparent 70%)" }}
      />
      {/* Secondary soft glow */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[500px] rounded-full opacity-15"
        style={{ background: "radial-gradient(ellipse, hsl(54 96% 88% / 0.15), transparent 70%)" }}
      />
      {/* Subtle bottom-right light diffusion */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(ellipse, hsl(0 0% 100% / 0.12), transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-2xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs font-medium tracking-wide text-white/90 uppercase">AI-Powered Platform</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-white leading-[1.05]">
                Manage Every
                <br />
                <span className="text-secondary">Workspace</span> With AI
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-10"
            >
              <p className="text-white/80 text-base sm:text-lg max-w-lg leading-relaxed">
                The AI-powered platform for virtual offices, coworking spaces, meeting rooms, event venues, and enterprise workspace management.
              </p>
            </motion.div>

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all">
                Get Started
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button size="lg" variant="whiteOutline" className="font-semibold px-8 h-12 rounded-xl">
                Explore Platform
              </Button>
            </motion.div>


            {/* Location Selector */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mb-3"
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="inline-flex items-center gap-1.5 text-white/70 hover:text-white/90 transition-colors text-xs tracking-wide">
                    <MapPin className="w-3 h-3" />
                    <span>{selectedLocation}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-popover border-border min-w-[140px]">
                  {locations.map((loc) => (
                    <DropdownMenuItem
                      key={loc}
                      onClick={() => setSelectedLocation(loc)}
                      className="text-sm cursor-pointer"
                    >
                      {loc === "Auto Locate" && <MapPin className="w-3 h-3 mr-2" />}
                      {loc}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>

            {/* AI Input — Secondary, Slim */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="max-w-xl mb-4"
            >
              <div className="relative bg-white/[0.08] backdrop-blur-lg rounded-full shadow-md border border-white/[0.12] px-5 py-1.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary/60 shrink-0" />
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full bg-transparent border-none outline-none text-white placeholder:text-transparent py-2.5 text-sm"
                    placeholder="Ask AI about your workspace needs…"
                  />
                  {!inputValue && (
                    <div className="absolute inset-0 flex items-center pointer-events-none">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentExample}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25 }}
                          className="text-white/35 text-sm"
                        >
                          {rotatingExamples[currentExample]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  )}
                </div>
                <button className="p-1.5 rounded-full hover:bg-white/10 transition-colors" aria-label="Voice input">
                  <Mic className="w-4 h-4 text-white/40" />
                </button>
                <button className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors" aria-label="Send message">
                  <Send className="w-3.5 h-3.5 text-secondary" />
                </button>
              </div>
            </motion.div>

            {/* Quick Service Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-2"
            >
              {serviceTags.map((tag) => (
                <button
                  key={tag.label}
                  onClick={() => setInputValue(tag.label)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/70 hover:text-white/90 bg-white/[0.06] hover:bg-white/[0.12] border border-transparent hover:border-white/10 transition-all"
                >
                  <tag.icon className="w-3 h-3" />
                  {tag.label}
                </button>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom fade into page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(60 30% 98%))",
        }}
      />
    </section>
  );
};
