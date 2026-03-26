import { useState } from "react";
import { motion } from "framer-motion";

interface SectionNavProps {
  sections: { id: string; label: string }[];
  activeSection: string;
}

export const SectionNav = ({ sections, activeSection }: SectionNavProps) => {
  return (
    <div className="hidden lg:block fixed left-8 xl:left-16 top-1/2 -translate-y-1/2 z-40">
      <nav className="space-y-1">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex items-center gap-3 group"
          >
            <div
              className={`w-2 h-2 rounded-full transition-all ${
                activeSection === section.id
                  ? "bg-foreground scale-125"
                  : "bg-foreground/30 group-hover:bg-foreground/50"
              }`}
            />
            <span
              className={`text-xs font-medium uppercase tracking-wider transition-all ${
                activeSection === section.id
                  ? "text-foreground"
                  : "text-foreground/40 group-hover:text-foreground/60"
              }`}
            >
              {section.label}
            </span>
            {activeSection === section.id && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute left-0 w-6 h-[2px] bg-foreground -ml-3"
                style={{ top: "50%" }}
              />
            )}
          </a>
        ))}
      </nav>
    </div>
  );
};
