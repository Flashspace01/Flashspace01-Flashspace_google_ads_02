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
        <div className="grid lg:grid-cols-[200px_1fr] gap-5 lg:gap-5">
          {/* Sticky left nav — Intercom-style */}
          <div className="hidden lg:block">
            <nav
              className="sticky top-[120px] rounded-2xl px-5 py-5"
              style={{
                backgroundColor: '#f7f7f8',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
              }}
            >
              <div className="space-y-1">
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
                        className={`relative flex items-center w-full text-left rounded-lg transition-all duration-200 ease-in-out ${
                          item.indent ? "ml-3 px-3 py-1.5" : "px-3 py-2"
                        }`}
                        style={{
                          backgroundColor: isActive ? 'rgba(0,0,0,0.05)' : 'transparent',
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(0,0,0,0.03)';
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                        }}
                      >
                        {isActive && (
                          <span
                            className="inline-block w-1.5 h-1.5 rounded-full mr-2.5 flex-shrink-0"
                            style={{ backgroundColor: '#36503F' }}
                          />
                        )}
                        <span
                          className={`whitespace-nowrap transition-colors duration-200 ${
                            item.indent ? "text-[13px]" : "text-[13.5px]"
                          } ${
                            isActive ? "font-semibold" : "font-medium"
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
              </div>
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
