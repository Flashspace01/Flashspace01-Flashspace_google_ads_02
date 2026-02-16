import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AISection } from "./scroll-sections/AISection";
import { VirtualOfficeSection } from "./scroll-sections/VirtualOfficeSection";
import { CoworkingSection } from "./scroll-sections/CoworkingSection";
import { OnDemandSection } from "./scroll-sections/OnDemandSection";
import { BusinessSetupSection } from "./scroll-sections/BusinessSetupSection";
import { GlobalAccessSection } from "./scroll-sections/GlobalAccessSection";

type NavItem = {
  id: string;
  label: string;
  indent?: boolean;
};

const navItems: NavItem[] = [
  { id: "ai-platform", label: "AI Platform" },
  { id: "virtual-office", label: "Virtual Office" },
  { id: "coworking", label: "Coworking" },
  { id: "on-demand", label: "On Demand", indent: true },
  { id: "business-setup", label: "Business Setup" },
  { id: "global-access", label: "Global Access" },
];

export const ScrollNavLayout = () => {
  const [activeSection, setActiveSection] = useState("ai-platform");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveSection(navItems[i].id);
            return;
          }
        }
      }
      setActiveSection(navItems[0].id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
          {/* Sticky left nav */}
          <div className="hidden lg:block">
            <nav className="sticky top-[120px] space-y-1 py-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center gap-3 w-full text-left py-2 group transition-all duration-200 ${
                      item.indent ? "pl-5" : ""
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        isActive
                          ? "bg-primary scale-125"
                          : "bg-muted-foreground/40 group-hover:bg-muted-foreground/60"
                      }`}
                    />
                    <span
                      className={`uppercase tracking-wider transition-all duration-200 ${
                        item.indent ? "text-xs" : "text-sm"
                      } ${
                        isActive
                          ? "text-foreground font-semibold opacity-100"
                          : "text-muted-foreground font-medium opacity-70 group-hover:opacity-90"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Sections column */}
          <div>
            <AISection />
            <VirtualOfficeSection />
            <CoworkingSection />
            <OnDemandSection />
            <BusinessSetupSection />
            <GlobalAccessSection />
          </div>
        </div>
      </div>
    </div>
  );
};
