import { useNavigate, useLocation } from "react-router-dom";
import {
  MessageCircle,
  LayoutGrid,
  CalendarDays,
  Bell,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "./SidebarContext";

const mainItems = [
  { label: "Start Chatting", href: "#", icon: MessageCircle },
  { label: "Get Workspaces", href: "/get-workspaces", icon: LayoutGrid },
  { label: "Your Bookings", href: "#", icon: CalendarDays },
];

const accountItems = [
  { label: "Updates", href: "#", icon: Bell },
  { label: "Settings", href: "/settings", icon: Settings },
];

type MenuItem = typeof mainItems[0];

export const AppSidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();

  const renderItem = (item: MenuItem) => {
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
        className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-[13px] font-medium antialiased transition-all duration-150 text-left relative ${
          active
            ? "bg-background text-primary before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[4px] before:rounded-full before:bg-primary"
            : "text-foreground/70 hover:text-foreground hover:bg-muted/60"
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
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/30 backdrop-blur-[2px] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`fixed top-16 lg:top-20 left-0 bottom-0 z-50 w-64 bg-[#F9FAFB] border-r border-border/40 flex flex-col transition-transform duration-250 ease-in-out antialiased ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Main nav items */}
        <nav className="flex-1 px-3 pt-5 pb-4 overflow-y-auto">
          <div className="space-y-1">
            {mainItems.map(renderItem)}
          </div>
        </nav>

        {/* Bottom section: Account items + CTA */}
        <div className="px-3 pb-4 pt-2 border-t border-border/30">
          <div className="space-y-1 mb-4">
            {accountItems.map(renderItem)}
          </div>
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
