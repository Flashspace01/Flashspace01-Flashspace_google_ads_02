import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, Mic, Sparkles, MapPin, ChevronDown } from "lucide-react";
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
    <section className="relative overflow-hidden min-h-[88vh] flex items-center">
      <div className="absolute inset-0 bg-background" />

      {/* Subtle abstract visual - right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04] pointer-events-none hidden lg:block">
        <div className="w-full h-full rounded-full border-[1.5px] border-foreground" />
        <div className="absolute inset-12 rounded-full border-[1.5px] border-foreground" />
        <div className="absolute inset-24 rounded-full border-[1.5px] border-foreground" />
      </div>

      <div className="relative z-10 w-full pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex flex-col items-center text-center">
          <div className="max-w-2xl">

            {/* 1. Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <span className="text-[11px] font-medium tracking-[0.15em] text-muted-foreground uppercase">
                AI-Enabled Workspace Management
              </span>
            </motion.div>

            {/* 2. Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-5"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] text-foreground leading-[1.08]">
                Build, Book, and Optimize
                <br />
                Workspaces with <span className="text-primary">AI</span>
              </h1>
            </motion.div>

            {/* 3. Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-10"
            >
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed mx-auto">
                Find, compare, and manage virtual offices, coworking spaces, meeting rooms, and enterprise portfolios — all powered by intelligent automation.
              </p>
            </motion.div>

            {/* 4. AI Search Input */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="max-w-xl mb-4 mx-auto"
            >
              <div className="relative bg-background rounded-2xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] border border-border px-2 py-1 flex items-center gap-1">
                {/* Location selector */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-foreground/70 hover:text-foreground hover:bg-muted/60 transition-colors text-sm shrink-0">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline text-xs font-medium">{selectedLocation}</span>
                      <ChevronDown className="w-3 h-3 opacity-50" />
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

                <div className="w-px h-5 bg-border shrink-0" />

                {/* Input */}
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-transparent py-3 px-3 text-sm"
                    placeholder="Ask AI about your workspace needs…"
                  />
                  {!inputValue && (
                    <div className="absolute inset-0 flex items-center px-3 pointer-events-none">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentExample}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25 }}
                          className="text-muted-foreground text-sm"
                        >
                          {rotatingExamples[currentExample]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  )}
                </div>

                <button className="p-2 rounded-xl hover:bg-muted/60 transition-colors shrink-0" aria-label="Voice input">
                  <Mic className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shrink-0" aria-label="Send message">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Hint text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="text-xs text-muted-foreground/60 mb-8"
            >
              Ask anything about workspace search or management…
            </motion.p>

            {/* 5. CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-12 rounded-xl shadow-md hover:shadow-lg transition-all">
                Start with AI
                <Sparkles className="w-4 h-4 ml-1" />
              </Button>
              <Button size="lg" variant="outline" className="font-semibold px-8 h-12 rounded-xl border-border text-foreground hover:bg-muted">
                Explore Workspaces
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
