import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, Mic, Sparkles, MapPin, ChevronDown, BadgeCheck } from "lucide-react";
import workspaceCoworking from "@/assets/workspace-coworking.jpg";
import workspaceMeeting from "@/assets/workspace-meeting.jpg";
import workspaceTeam from "@/assets/workspace-team.jpg";
import workspaceDaypass from "@/assets/workspace-daypass.jpg";
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

const filterTags = ["Virtual Office", "Coworking", "On Demand", "Business Setup"];

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

const workspaceCards = [
  { image: workspaceCoworking, name: "Nexus Workspace Hub", location: "Bandra Kurla Complex, Mumbai", type: "Coworking", badge: "AI Recommended", price: "₹8,999" },
  { image: workspaceMeeting, name: "Summit Meeting Rooms", location: "Connaught Place, Delhi", type: "Meeting Room", badge: "Available Today", price: "₹1,499" },
  { image: workspaceTeam, name: "Horizon Team Office", location: "HSR Layout, Bangalore", type: "Team Office", badge: "AI Recommended", price: "₹24,999" },
  { image: workspaceDaypass, name: "FlexDesk Day Pass", location: "Anna Nagar, Chennai", type: "Day Pass", badge: "Available Today", price: "₹499" },
];

export const HeroWithSearch = () => {
  const [currentExample, setCurrentExample] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Auto Locate");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % rotatingExamples.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % workspaceCards.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      <div className="absolute inset-0 bg-background" />

      {/* Content */}
      <div className="relative z-10 w-full pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex flex-col items-center text-center">
          <div className="max-w-2xl">


            {/* 2. Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-5"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em] text-foreground leading-[1.05]">
                Manage Every
                <br />
                <span className="text-primary">Workspace</span> With AI
              </h1>
            </motion.div>

            {/* 3. Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <p className="text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed mx-auto">
                The AI-powered platform for virtual offices, coworking spaces, meeting rooms, event venues, and enterprise workspace management.
              </p>
            </motion.div>

            {/* 4. Auto Locate + Filter Tags Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-4 flex flex-wrap items-center justify-center gap-3"
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="inline-flex items-center gap-1.5 text-foreground/70 hover:text-foreground transition-colors text-sm tracking-wide">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedLocation}</span>
                    <ChevronDown className="w-3 h-3 opacity-60" />
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

              <div className="w-px h-4 bg-border hidden sm:block" />

              <div className="flex flex-wrap gap-1.5">
                {filterTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium text-foreground/60 bg-muted/60 border border-border select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 5. Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-xl mb-6 mx-auto"
            >
              <div className="relative bg-background backdrop-blur-xl rounded-2xl shadow-lg border border-border px-5 py-1 flex items-center gap-3">
                <Sparkles className="w-4.5 h-4.5 text-primary/60 shrink-0" />
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-transparent py-3.5 text-sm"
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
                          className="text-muted-foreground text-sm"
                        >
                          {rotatingExamples[currentExample]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  )}
                </div>
                <button className="p-1.5 rounded-full hover:bg-muted transition-colors" aria-label="Voice input">
                  <Mic className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="p-2.5 rounded-xl bg-primary/10 hover:bg-primary/15 transition-colors" aria-label="Send message">
                  <Send className="w-4 h-4 text-primary" />
                </button>
              </div>
            </motion.div>

            {/* 6. CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all">
                Get Started
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button size="lg" variant="outline" className="font-semibold px-8 h-12 rounded-xl border-border text-foreground hover:bg-muted">
                Explore Platform
              </Button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
