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
  FileText,
  LayoutGrid,
  CalendarDays,
  Users,
  Bell,
  Settings,
} from "lucide-react";
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
  { label: "Partner with Us", href: "#partner" },
  
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
        <SheetContent side="left" className="w-[300px] p-0 flex flex-col bg-background border-r border-border [&>button]:hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-6 pb-4">
            <img src={flashspaceLogo} alt="FlashSpace" className="h-10 w-auto" />
            <SheetClose asChild>
              <button className="p-1.5 rounded-lg hover:bg-muted transition-colors text-foreground/70 hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </SheetClose>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 px-3 py-2 overflow-y-auto">
            {/* Nav links with dropdowns — mobile only */}
            <div className="mb-2 lg:hidden">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setSidebarDropdown(sidebarDropdown === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-primary/5 transition-colors"
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
                                className="block px-3 py-2.5 text-sm font-normal text-foreground/70 hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
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
                      className="flex items-center px-3 py-3 rounded-xl text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-primary/5 transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              <hr className="my-2 border-border" />
            </div>

            {sidebarMenuItems.map((item, index) => {
              const Icon = item.icon;
              const showDivider = [1, 3].includes(index);
              const isExternal = item.href.startsWith("#");
              return (
                <div key={item.label}>
                  {showDivider && <hr className="my-2 border-border" />}
                  <button
                    onClick={() => {
                      setSidebarOpen(false);
                      if (!isExternal) navigate(item.href);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-primary/5 transition-colors text-left"
                  >
                    <Icon className="w-5 h-5 text-foreground/60 flex-shrink-0" />
                    {item.label}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="px-4 pb-6">
            <Button className="w-full rounded-xl bg-secondary hover:bg-secondary/90 text-secondary-foreground font-normal text-base py-6">
              Get Consultation
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

