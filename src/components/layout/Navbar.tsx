import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  {
    label: "Business Setup",
    href: "#business-setup",
    megaMenu: [
      {
        heading: "Free Zones",
        items: [
          { label: "Overview", href: "/services/free-zone-overview", icon: Globe },
          { label: "Business Activities", href: "/services/business-activities", icon: Lightbulb },
          { label: "Free Zone License Locations and Pricing", href: "/services/free-zone-license-locations", icon: MapPin },
          { label: "UAE Residence Visa", href: "/services/uae-residency-visa", icon: Stamp },
          { label: "Registration Process", href: "/services/registration-process", icon: ClipboardList },
          { label: "Our Solution", href: "/services/free-zone-solution", icon: Building2 },
        ],
      },
      {
        heading: "Mainland",
        items: [
          { label: "Overview", href: "/services/dubai-mainland", icon: Landmark },
          { label: "Sponsorship", href: "/services/mainland-sponsorship", icon: Users },
          { label: "Dubai Mainland Licence", href: "/services/dubai-mainland-licence", icon: ShieldCheck },
          { label: "Business Activities", href: "/services/business-activities", icon: Lightbulb },
          { label: "Mainland Visas", href: "/services/mainland-visas", icon: CreditCard },
          { label: "VirtuFit", href: "/services/virtual-setup", icon: Eye },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "#services",
    megaMenu: [
      {
        heading: "Essential Services",
        items: [
          { label: "Bank Account Opening", href: "/services/bank-account", icon: Banknote },
          { label: "Accounting Services", href: "/services/accounting-vat", icon: Calculator },
          { label: "Compliance Services", href: "/services/compliance-services", icon: Scale },
          { label: "Payroll Management", href: "/services/payroll-management", icon: Wallet },
          { label: "Health Insurance", href: "/services/health-insurance", icon: HeartPulse },
        ],
      },
      {
        heading: "Operational Services",
        items: [
          { label: "IT Services", href: "/services/it-services", icon: Monitor },
          { label: "Legal Services", href: "/services/legal-services", icon: Gavel },
          { label: "Mail Management", href: "/services/mail-management", icon: Mail },
          { label: "Virtual Receptionist", href: "/services/virtual-receptionist", icon: Phone },
        ],
      },
      {
        heading: "Support Services",
        items: [
          { label: "Tourist Visa", href: "/services/tourist-visa", icon: Plane },
          { label: "Golden Visa UAE", href: "/services/golden-visa", icon: Award },
          { label: "Second Citizenship", href: "/services/second-citizenship", icon: Flag },
          { label: "PRO Services", href: "/services/pro-services", icon: BadgeCheck },
          { label: "Will Preparation", href: "/services/will-preparation", icon: ScrollText },
          { label: "Trademark Registration", href: "/services/trademark-registration", icon: BookmarkCheck },
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        scrolled ? "bg-white/12 backdrop-blur-xl shadow-lg border-b border-white/10" : "bg-transparent"
      }`}
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
                  className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium transition-colors rounded-lg ${
                    scrolled
                      ? "text-foreground/80 hover:text-foreground hover:bg-primary/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
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
                        <Link
                          key={item.label}
                          to={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm font-normal text-foreground/80 hover:text-foreground hover:bg-primary/5 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <item.icon className="w-4 h-4 text-primary/70 shrink-0" />
                          {item.label}
                        </Link>
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
                      <div className={`grid gap-6 ${link.megaMenu.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                        {link.megaMenu.map((group) => (
                          <div key={group.heading}>
                            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                              {group.heading}
                            </h4>
                            <div className="space-y-1">
                              {group.items.map((item) => (
                                <Link
                                  key={item.label}
                                  to={item.href}
                                  className="flex items-center gap-2.5 px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <item.icon className="w-4 h-4 text-primary/70 shrink-0" />
                                  {item.label}
                                </Link>
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
              className={`lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg transition-colors ${
                scrolled ? "text-foreground hover:bg-primary/5" : "text-white hover:bg-white/10"
              }`}
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
                        <Link
                          key={item.label}
                          to={item.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          <item.icon className="w-4 h-4 text-primary/60 shrink-0" />
                          {item.label}
                        </Link>
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
                              <Link
                                key={item.label}
                                to={item.href}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                <item.icon className="w-4 h-4 text-primary/60 shrink-0" />
                                {item.label}
                              </Link>
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
