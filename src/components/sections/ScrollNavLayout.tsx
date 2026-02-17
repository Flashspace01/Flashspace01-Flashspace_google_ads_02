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
      const offset = 150;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
          {/* Sticky left nav */}
          <div className="hidden lg:block" style={{ backgroundColor: '#F5F7F4' }}>
            <nav className="sticky top-[120px] py-8 px-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const showOnDemand = item.id === "on-demand"
                  ? activeSection === "coworking" || activeSection === "on-demand"
                  : true;

                return (
                  <motion.div
                    key={item.id}
                    initial={false}
                    animate={{
                      opacity: showOnDemand ? 1 : 0,
                      height: showOnDemand ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <button
                      onClick={() => scrollTo(item.id)}
                      className={`relative flex items-center w-full text-left rounded-[10px] transition-all duration-200 ease-in-out ${
                        item.indent ? "ml-4 py-2 px-3" : "py-2 px-3"
                      } ${
                        isActive
                          ? "bg-[rgba(54,80,63,0.08)]"
                          : "hover:bg-[rgba(0,0,0,0.03)]"
                      }`}
                    >
                      {/* Vertical indicator bar */}
                      {isActive && (
                        <motion.div
                          layoutId="navIndicator"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-sm"
                          style={{ height: '60%', backgroundColor: '#36503F' }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        />
                      )}
                      <span
                        className={`transition-colors duration-200 ${
                          item.indent ? "text-[13px]" : "text-[14px]"
                        } ${
                          isActive
                            ? "font-semibold"
                            : "font-medium"
                        }`}
                        style={{
                          color: isActive ? '#36503F' : 'rgba(0,0,0,0.55)',
                        }}
                      >
                        {item.label}
                      </span>
                    </button>
                  </motion.div>
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
