import { useNavigate, useLocation } from "react-router-dom";
import {
  MessageCircle,
  LayoutGrid,
  CalendarDays,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "./SidebarContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Start Chatting", href: "#", icon: MessageCircle },
  { label: "Get Workspaces", href: "/get-workspaces", icon: LayoutGrid },
  { label: "Your Bookings", href: "#", icon: CalendarDays },
  { label: "Updates", href: "#", icon: Bell },
  { label: "Settings", href: "/settings", icon: Settings },
];

export const AppSidebar = () => {
  const { sidebarOpen, setSidebarOpen, collapsed, toggleCollapsed } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

  // On mobile: overlay sidebar controlled by sidebarOpen
  // On desktop: always visible, collapsible between full/icon mode
  const showMobileOverlay = isMobile && sidebarOpen;

  const renderItem = (item: (typeof menuItems)[0]) => {
    const Icon = item.icon;
    const isExternal = item.href.startsWith("#");
    const active = !isExternal && location.pathname === item.href;

    return (
      <button
        key={item.label}
        onClick={() => {
          if (!isExternal) {
            if (isMobile) setSidebarOpen(false);
            navigate(item.href);
          }
        }}
        title={collapsed && !isMobile ? item.label : undefined}
        className={cn(
          "w-full flex items-center rounded-lg text-[13px] font-medium transition-all duration-150 text-left relative group",
          collapsed && !isMobile ? "justify-center px-2 py-3" : "gap-4 px-3 py-3",
          active
            ? "bg-primary/8 text-primary"
            : "text-foreground/70 hover:text-foreground hover:bg-muted"
        )}
      >
        {/* Active accent bar */}
        {active && (
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full bg-primary" />
        )}
        <Icon
          className={cn(
            "flex-shrink-0 transition-colors",
            collapsed && !isMobile ? "w-5 h-5" : "w-[18px] h-[18px]",
            active ? "text-primary" : "text-foreground/50 group-hover:text-foreground/70"
          )}
          strokeWidth={1.6}
        />
        {!(collapsed && !isMobile) && <span>{item.label}</span>}
      </button>
    );
  };

  return (
    <>
      {/* Mobile backdrop */}
      {showMobileOverlay && (
        <div
          className="fixed inset-0 z-40 bg-foreground/30 backdrop-blur-[2px] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-16 lg:top-20 left-0 bottom-0 z-50 flex flex-col transition-all duration-250 ease-in-out border-r",
          "bg-[hsl(210_20%_98%)] border-border/60",
          // Desktop: always visible, width changes with collapse
          "lg:translate-x-0",
          collapsed && !isMobile ? "w-[60px]" : "w-[240px]",
          // Mobile: slide in/out
          isMobile && (sidebarOpen ? "translate-x-0" : "-translate-x-full")
        )}
      >
        {/* Menu items */}
        <nav className="flex-1 px-2 pt-5 pb-4 overflow-y-auto">
          <div className="space-y-1">
            {menuItems.map(renderItem)}
          </div>
        </nav>

        {/* Bottom section */}
        <div className="px-3 pb-4 pt-3 border-t border-border/40 space-y-2">
          {/* Collapse toggle - desktop only */}
          <div className="hidden lg:block">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-center text-foreground/50 hover:text-foreground"
              onClick={toggleCollapsed}
            >
              {collapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <>
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  <span className="text-xs">Collapse</span>
                </>
              )}
            </Button>
          </div>

          {/* CTA Button */}
          {!(collapsed && !isMobile) && (
            <Button
              variant="outline"
              className="w-full rounded-xl text-primary font-medium text-[13px] py-5 border-border/60 hover:border-primary/40 hover:bg-primary/5"
            >
              Get Consultation
            </Button>
          )}
        </div>
      </aside>
    </>
  );
};
