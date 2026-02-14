import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, Sparkles, MessageSquare } from "lucide-react";
import heroDarkOffice from "@/assets/hero-dark-office.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

export const HeroWithSearch = () => {
  const [chatMode, setChatMode] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [chatMode]);

  const handleChatClick = () => {
    setChatMode(true);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      // Redirect to AI result page
      console.log("Navigating to AI with query:", inputValue);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroDarkOffice}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full pt-32 pb-20 flex flex-col items-center text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-sm font-medium tracking-widest uppercase text-primary-foreground/50">
              AI Workspace Infrastructure
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em] text-primary-foreground leading-[1.05]">
              The operating system
              <br />
              <span className="text-primary-foreground/80">for modern workspaces.</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-10"
          >
            <p className="text-primary-foreground/60 text-base sm:text-lg max-w-lg leading-relaxed mx-auto">
              One platform to manage virtual offices, coworking spaces, meeting rooms, and enterprise workspace operations — powered by AI.
            </p>
          </motion.div>

          {/* CTA System */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <AnimatePresence mode="wait">
              {!chatMode ? (
                <motion.div
                  key="buttons"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-wrap items-center justify-center gap-3"
                >
                  <Button
                    size="lg"
                    variant="white"
                    className="font-semibold px-8 h-12 rounded-xl"
                    onClick={handleChatClick}
                  >
                    <MessageSquare className="w-4 h-4 mr-1" />
                    Chat with AI
                  </Button>
                  <Button
                    size="lg"
                    variant="whiteOutline"
                    className="font-semibold px-8 h-12 rounded-xl"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="input"
                  initial={{ opacity: 0, scale: 0.95, width: "auto" }}
                  animate={{ opacity: 1, scale: 1, width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="max-w-xl w-full mx-auto"
                >
                  <div className="relative bg-primary-foreground/10 backdrop-blur-xl rounded-2xl border border-primary-foreground/20 px-5 py-1 flex items-center gap-3">
                    <Sparkles className="w-4.5 h-4.5 text-primary-foreground/40 shrink-0" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                      className="w-full bg-transparent border-none outline-none text-primary-foreground placeholder:text-primary-foreground/40 py-3.5 text-sm"
                      placeholder="Ask anything about your workspace needs…"
                    />
                    <button
                      onClick={handleSubmit}
                      className="p-2.5 rounded-xl bg-primary-foreground/15 hover:bg-primary-foreground/25 transition-colors"
                      aria-label="Send message"
                    >
                      <Send className="w-4 h-4 text-primary-foreground" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          ref={dashboardRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-6 lg:px-12 max-w-5xl mt-16"
        >
          <div className="rounded-2xl overflow-hidden border border-primary-foreground/10 shadow-2xl">
            <img
              src={dashboardPreview}
              alt="FlashSpace Dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
