import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import flashspaceLogo from "@/assets/flashspace-logo.png";

const navLinks = [
  {
    label: "Solutions",
    href: "#solutions",
    dropdown: [
      { label: "Virtual Office", href: "#virtual-office" },
      { label: "Coworking Space", href: "#coworking" },
      { label: "On Demand", href: "#on-demand" },
      { label: "Business Setup", href: "/business-setup" },
    ],
  },
  { label: "Workspaces", href: "#workspaces" },
  { label: "Partner with Us", href: "#partner" },
  { label: "Pricing", href: "#pricing" },
];

const sidebarMenuItems = [
  { label: "Start Chatting", href: "#", icon: MessageCircle },
  { label: "Business Setup", href: "/business-setup", icon: FileText },
  { label: "Get Workspaces", href: "#workspaces", icon: LayoutGrid },
  { label: "Your Bookings", href: "#", icon: CalendarDays },
  { label: "Flash Tribe", href: "#", icon: Users },
  { label: "Updates", href: "#", icon: Bell },
  { label: "Settings", href: "#", icon: Settings },
];

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
                Sign in
              </Button>
              <Button variant="default" size="default" className="bg-primary hover:bg-primary/90 shadow-sm">
                Get Started
              </Button>
            </div>

            {/* Mobile: empty right spacer to keep logo centered */}
            <div className="lg:hidden w-10" />
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
            {sidebarMenuItems.map((item, index) => {
              const Icon = item.icon;
              const showDivider = [1, 4].includes(index); // divider after Business Setup and Flash Tribe
              return (
                <div key={item.label}>
                  {showDivider && <hr className="my-2 border-border" />}
                  <a
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-primary/5 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-foreground/60 flex-shrink-0" />
                    {item.label}
                  </a>
                </div>
              );
            })}
          </nav>

          {/* User Profile Card */}
          <div className="mx-4 mb-3 p-4 rounded-2xl bg-muted/60 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                A
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm text-foreground truncate">Abhay U</p>
                <p className="text-xs text-muted-foreground truncate">uabhay112005@gmail.com</p>
                <span className="inline-block mt-0.5 px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-full uppercase tracking-wide">
                  User
                </span>
              </div>
            </div>
            <Button className="w-full mb-2 bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-xl">
              <LayoutDashboard className="w-4 h-4" />
              Go to Dashboard
            </Button>
            <Button variant="outline" className="w-full gap-2 rounded-xl text-destructive border-destructive/30 hover:bg-destructive/5">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>

          {/* CTA */}
          <div className="px-4 pb-6">
            <Button className="w-full rounded-xl bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base py-6">
              Get Consultation
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

