import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import flashspaceLogo from "@/assets/flashspace-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Business Setup",
    href: "#business-setup",
    dropdown: [
      { label: "Company Registration", href: "#" },
      { label: "GST Registration", href: "#" },
      { label: "Compliance Services", href: "#" },
      { label: "Virtual Office for GST", href: "#" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      { label: "Coworking Spaces", href: "#" },
      { label: "Virtual Offices", href: "#" },
      { label: "Meeting Rooms", href: "#" },
      { label: "On-Demand Workspaces", href: "#" },
    ],
  },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
];

export const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[60] glass-card border-b border-border/30"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="inline-flex items-center">
            <img src={flashspaceLogo} alt="FlashSpace" className="h-10 lg:h-12 w-auto" />
          </a>

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
                  className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-primary/5"
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
                          className="block px-4 py-2.5 text-sm font-normal text-foreground/80 hover:text-foreground hover:bg-primary/5 transition-colors"
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

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-foreground/80 hover:text-foreground text-sm px-3">
              Sign in
            </Button>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 shadow-sm text-sm px-3">
              Get Started
            </Button>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 text-foreground rounded-lg hover:bg-primary/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/30 bg-card overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                    onClick={() => !link.dropdown && setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.dropdown && (
                    <div className="pl-6 space-y-1">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
