import { useNavigate, useLocation } from "react-router-dom";
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

const menuItems = [
  { label: "Start Chatting", href: "#", icon: MessageCircle },
  { label: "Get Workspaces", href: "/get-workspaces", icon: LayoutGrid },
  { label: "Your Bookings", href: "#", icon: CalendarDays },
  { label: "Updates", href: "#", icon: Bell },
  { label: "Settings", href: "/settings", icon: Settings },
];

export const AppSidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();

  const renderItem = (item: typeof menuItems[0]) => {
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
            active ? "text-primary" : ""
          }`}
          strokeWidth={1.6}
        />
        {item.label}
      </button>
    );
  };

  return (
    <>
      {/* Backdrop — click to close, no darken */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 pt-16 lg:pt-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`fixed top-16 lg:top-20 left-0 bottom-0 z-50 bg-background border-r border-border flex flex-col transition-transform duration-250 ease-in-out w-[240px] ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu items */}
        <nav className="flex-1 px-3 pt-4 pb-4 overflow-y-auto">
          <div className="space-y-0.5">
            {menuItems.map(renderItem)}
          </div>
        </nav>

        {/* Bottom CTA */}
        <div className="px-3 pb-4 pt-2 border-t border-border/30">
          <Button
            variant="outline"
            className="w-full rounded-xl text-primary font-medium text-[13px] py-5 border-border"
          >
            Get Consultation
          </Button>
        </div>
      </aside>
    </>
  );
};
