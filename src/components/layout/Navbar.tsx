import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet";
import {
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  LayoutGrid,
  CalendarDays,
  Bell,
  Settings,
  ArrowRight,
} from "lucide-react";
import { useLocation } from "react-router-dom";
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

const sidebarMenuItems = [
  { label: "Start Chatting", href: "#", icon: MessageCircle },
  { label: "Get Workspaces", href: "/get-workspaces", icon: LayoutGrid },
  { label: "Your Bookings", href: "#", icon: CalendarDays },
  { label: "Updates", href: "#", icon: Bell },
  { label: "Settings", href: "/settings", icon: Settings },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [sidebarDropdown, setSidebarDropdown] = useState<string | null>(null);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card border-b-0 shadow-none"
      >
        <div className="mx-auto px-2 lg:px-4">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Hamburger + Logo group */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 text-foreground rounded-lg hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
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

      {/* Sidebar Sheet */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-[310px] p-0 flex flex-col bg-background border-r border-border [&>button]:hidden">
          {/* Top Section — Logo + Close */}
          <div className="flex items-center justify-between px-5 pt-6 pb-5 border-b border-border/50">
            <img src={flashspaceLogo} alt="FlashSpace" className="h-10 w-auto" />
            <SheetClose asChild>
              <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </SheetClose>
          </div>

          {/* Scrollable Nav */}
          <nav className="flex-1 px-4 pt-5 pb-4 overflow-y-auto">
            {/* Mobile-only nav links */}
            <div className="mb-4 lg:hidden">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setSidebarDropdown(sidebarDropdown === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${sidebarDropdown === link.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {sidebarDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.dropdown.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                              >
                                {item.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setSidebarOpen(false)}
                      className="flex items-center px-3 py-3 rounded-lg text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="my-3 mx-3 border-t border-border/30" />
            </div>

            {/* Main Navigation Group */}
            <div className="mb-2">
              <span className="px-3 mb-2 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                Main
              </span>
              <div className="space-y-1">
                {sidebarMenuItems.slice(0, 3).map((item) => {
                  const Icon = item.icon;
                  const isExternal = item.href.startsWith("#");
                  const active = !isExternal && location.pathname === item.href;
                  return (
                    <button
                      key={item.label}
                      onClick={() => {
                        setSidebarOpen(false);
                        if (!isExternal) navigate(item.href);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-[15px] font-medium transition-all duration-150 text-left relative ${
                        active
                          ? "bg-primary/10 text-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-5 before:rounded-full before:bg-primary"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      <Icon className={`w-[22px] h-[22px] flex-shrink-0 transition-colors ${active ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} strokeWidth={1.8} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 mx-3 border-t border-border/30" />

            {/* Secondary Navigation Group */}
            <div>
              <span className="px-3 mb-2 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                More
              </span>
              <div className="space-y-1">
                {sidebarMenuItems.slice(3).map((item) => {
                  const Icon = item.icon;
                  const isExternal = item.href.startsWith("#");
                  const active = !isExternal && location.pathname === item.href;
                  return (
                    <button
                      key={item.label}
                      onClick={() => {
                        setSidebarOpen(false);
                        if (!isExternal) navigate(item.href);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-[15px] font-medium transition-all duration-150 text-left relative ${
                        active
                          ? "bg-primary/10 text-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-5 before:rounded-full before:bg-primary"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      <Icon className={`w-[22px] h-[22px] flex-shrink-0 transition-colors ${active ? "text-primary" : "text-muted-foreground"}`} strokeWidth={1.8} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* Bottom CTA */}
          <div className="px-5 pb-6 pt-2 border-t border-border/30">
            <Button className="w-full rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium text-[15px] py-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 gap-2">
              Get Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

