import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  LayoutGrid,
  CalendarDays,
  Bell,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "./SidebarContext";

const mainItems = [
  { label: "Start Chatting", href: "#", icon: MessageCircle },
  { label: "Get Workspaces", href: "/get-workspaces", icon: LayoutGrid },
  { label: "Your Bookings", href: "#", icon: CalendarDays },
];

const moreItems = [
  { label: "Updates", href: "#", icon: Bell },
  { label: "Settings", href: "/settings", icon: Settings },
];

export const AppSidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();

  const renderItem = (item: typeof mainItems[0]) => {
    const Icon = item.icon;
    const isExternal = item.href.startsWith("#");
    const active = !isExternal && location.pathname === item.href;

    return (
      <button
        key={item.label}
        onClick={() => {
          if (!isExternal) {
            setSidebarOpen(false);
            navigate(item.href);
          }
        }}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-normal transition-all duration-150 text-left relative ${
          active
            ? "bg-primary/10 text-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-5 before:rounded-full before:bg-primary"
            : "text-foreground/60 hover:text-foreground hover:bg-muted"
        }`}
      >
        <Icon
          className={`w-[18px] h-[18px] flex-shrink-0 transition-colors ${
            active ? "text-primary" : "text-muted-foreground/60"
          }`}
          strokeWidth={1.6}
        />
        {item.label}
      </button>
    );
  };

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <motion.aside
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 260, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="h-full overflow-hidden flex-shrink-0 border-r border-border bg-background z-40"
        >
          <div className="w-[260px] h-full flex flex-col">
            {/* Navigation */}
            <nav className="flex-1 px-4 pt-6 pb-4 overflow-y-auto">
              {/* Main Section */}
              <div className="mb-6">
                <span className="px-3 mb-2 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                  Main
                </span>
                <div className="space-y-0.5">
                  {mainItems.map(renderItem)}
                </div>
              </div>

              {/* Divider */}
              <div className="mx-3 mb-4 border-t border-border/30" />

              {/* More Section */}
              <div>
                <span className="px-3 mb-2 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                  More
                </span>
                <div className="space-y-0.5">
                  {moreItems.map(renderItem)}
                </div>
              </div>
            </nav>

            {/* Bottom CTA */}
            <div className="px-4 pb-5 pt-2 border-t border-border/30">
              <Button className="w-full rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium text-[13px] py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 gap-2">
                Get Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
