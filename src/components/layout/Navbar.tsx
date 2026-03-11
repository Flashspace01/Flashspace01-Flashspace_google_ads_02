import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  PanelLeft,
  ChevronDown,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { useSidebar } from "./SidebarContext";
import flashspaceLogo from "@/assets/flashspace-logo.png";

const navLinks = [
  {
    label: "Solutions",
    href: "#solutions",
    dropdown: [
      { label: "Virtual Office", href: "#virtual-office" },
      { label: "Coworking Space", href: "#coworking" },
      { label: "On Demand", href: "/on-demand" },
      { label: "Business Setup", href: "/business-setup" },
    ],
  },
  { label: "Workspaces", href: "#workspaces" },
  { label: "Partner with Us", href: "/partner" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleSidebar } = useSidebar();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/40 shadow-none"
    >
      <div className="mx-auto px-2 lg:px-4">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Hamburger + Logo group */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSidebar}
              className="p-2 text-foreground rounded-lg hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Toggle sidebar"
            >
              <PanelLeft className="w-6 h-6" />
            </button>
            <a href="/" className="flex items-center">
              <img src={flashspaceLogo} alt="FlashSpace" className="h-12 lg:h-[60px] w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>

                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-52 py-2 bg-card rounded-xl shadow-lg border border-border"
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm font-normal text-foreground/80 hover:text-foreground hover:bg-primary/5 transition-colors rounded-lg"
                        >
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop + Mobile Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground text-sm px-3">
              Sign in
            </Button>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 shadow-sm text-sm px-3">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};
