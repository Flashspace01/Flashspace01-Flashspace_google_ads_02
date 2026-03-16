import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Menu,
  X,
  Building2,
  Map,
  FileText,
  Users,
  ShieldCheck,
  MapPin,
  Landmark,
  CreditCard,
  Globe,
  ClipboardList,
  Lightbulb,
  Eye,
  Stamp,
  Banknote,
  Calculator,
  Scale,
  Wallet,
  HeartPulse,
  Monitor,
  Gavel,
  Mail,
  Phone,
  Plane,
  Award,
  Flag,
  BadgeCheck,
  ScrollText,
  BookmarkCheck,
} from "lucide-react";
import flashspaceLogo from "@/assets/flashspace-logo.png";

interface DropdownItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface DropdownGroup {
  heading: string;
  items: DropdownItem[];
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
  megaMenu?: DropdownGroup[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Business Setup",
    href: "#business-setup",
    dropdown: [
      { label: "Free Zones Overview", href: "#", icon: Globe },
      { label: "Mainland Overview", href: "#", icon: Landmark },
      { label: "Business Activities", href: "#", icon: Lightbulb },
      { label: "Sponsorships", href: "#", icon: Users },
      { label: "Free Zone Licenses", href: "#", icon: FileText },
      { label: "Locations", href: "#", icon: MapPin },
      { label: "Dubai Mainland License", href: "#", icon: ShieldCheck },
      { label: "UAE Residence Visa", href: "#", icon: Stamp },
      { label: "Registration Process", href: "#", icon: ClipboardList },
      { label: "Our Solutions", href: "#", icon: Building2 },
      { label: "Mainland Visas", href: "#", icon: CreditCard },
      { label: "Virtual Offices", href: "#", icon: Eye },
    ],
  },
  {
    label: "Services",
    href: "#services",
    megaMenu: [
      {
        heading: "Essential Services",
        items: [
          { label: "Bank Account Opening", href: "#", icon: Banknote },
          { label: "Accounting Services", href: "#", icon: Calculator },
          { label: "Compliance Services", href: "#", icon: Scale },
          { label: "Payroll Management", href: "#", icon: Wallet },
          { label: "Health Insurance", href: "#", icon: HeartPulse },
        ],
      },
      {
        heading: "Operational Services",
        items: [
          { label: "IT Services", href: "#", icon: Monitor },
          { label: "Legal Services", href: "#", icon: Gavel },
          { label: "Mail Management", href: "#", icon: Mail },
          { label: "Virtual Receptionist", href: "#", icon: Phone },
        ],
      },
      {
        heading: "Support Services",
        items: [
          { label: "Tourist Visa", href: "#", icon: Plane },
          { label: "Golden Visa UAE", href: "#", icon: Award },
          { label: "Second Citizenship", href: "#", icon: Flag },
          { label: "PRO Services", href: "#", icon: BadgeCheck },
          { label: "Will Preparation", href: "#", icon: ScrollText },
          { label: "Trademark Registration", href: "#", icon: BookmarkCheck },
        ],
      },
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
      className="fixed top-0 left-0 right-0 z-[60] bg-transparent"
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
                onMouseEnter={() => (link.dropdown || link.megaMenu) && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                >
                  {link.label}
                  {(link.dropdown || link.megaMenu) && <ChevronDown className="w-4 h-4" />}
                </a>

                <AnimatePresence>
                  {/* Standard dropdown */}
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 py-2 bg-card rounded-xl shadow-lg border border-border max-h-[70vh] overflow-y-auto"
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm font-normal text-foreground/80 hover:text-foreground hover:bg-primary/5 transition-colors"
                        >
                          <item.icon className="w-4 h-4 text-primary/70 shrink-0" />
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}

                  {/* Mega menu */}
                  {link.megaMenu && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-card rounded-xl shadow-lg border border-border p-6"
                      style={{ width: "640px" }}
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {link.megaMenu.map((group) => (
                          <div key={group.heading}>
                            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                              {group.heading}
                            </h4>
                            <div className="space-y-1">
                              {group.items.map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  className="flex items-center gap-2.5 px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                                >
                                  <item.icon className="w-4 h-4 text-primary/70 shrink-0" />
                                  {item.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            <Button variant="default" size="sm" className="hidden sm:inline-flex text-sm px-4">
              <Calculator className="w-4 h-4" />
              Cost Calculator
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 text-white rounded-lg hover:bg-white/10 transition-colors"
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
            className="lg:hidden border-t border-border/30 bg-card overflow-hidden max-h-[75vh] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                    onClick={() => !link.dropdown && !link.megaMenu && setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.dropdown && (
                    <div className="pl-6 space-y-1">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          <item.icon className="w-4 h-4 text-primary/60 shrink-0" />
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                  {link.megaMenu && (
                    <div className="pl-4 space-y-3 mt-1">
                      {link.megaMenu.map((group) => (
                        <div key={group.heading}>
                          <span className="block px-4 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {group.heading}
                          </span>
                          <div className="space-y-1">
                            {group.items.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                <item.icon className="w-4 h-4 text-primary/60 shrink-0" />
                                {item.label}
                              </a>
                            ))}
                          </div>
                        </div>
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
