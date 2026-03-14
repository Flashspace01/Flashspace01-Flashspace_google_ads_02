import { useNavigate, useLocation } from "react-router-dom";
import {
  MessageCircle,
  LayoutGrid,
  CalendarDays,
  Bell,
  Settings,
  X,
} from "lucide-react";
import { useSidebar } from "./SidebarContext";
import flashspaceLogo from "@/assets/flashspace-logo.png";

const mainItems = [
  { label: "Start Chatting", href: "#", icon: MessageCircle },
  { label: "Get Workspaces", href: "/get-workspaces", icon: LayoutGrid },
  { label: "Your Bookings", href: "#", icon: CalendarDays },
];

const accountItems = [
  { label: "Updates", href: "#", icon: Bell },
  { label: "Settings", href: "/settings", icon: Settings },
];

type MenuItem = (typeof mainItems)[0];

export const AppSidebar = () => {
  const { sidebarState, setSidebarState, closeSidebar } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();

  const isOpen = sidebarState !== "closed";
  const isCollapsed = sidebarState === "collapsed";
  const sidebarWidth = isCollapsed ? "w-[72px]" : "w-64";

  const renderItem = (item: MenuItem) => {
    const Icon = item.icon;
    const isExternal = item.href.startsWith("#");
    const active = !isExternal && location.pathname === item.href;

    return (
      <button
        key={item.label}
        onClick={() => {
          if (!isExternal) {
            closeSidebar();
            navigate(item.href);
          }
        }}
        title={isCollapsed ? item.label : undefined}
        className={`w-full flex items-center ${isCollapsed ? "justify-center" : ""} gap-4 ${isCollapsed ? "px-0 py-3" : "px-4 py-3"} rounded-xl text-[13px] font-medium antialiased transition-all duration-150 text-left relative group ${
          active
            ? "bg-primary/10 text-primary before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[3px] before:rounded-full before:bg-primary"
            : "text-foreground/60 hover:text-foreground hover:bg-muted/60"
        }`}
      >
        <Icon
          className={`w-5 h-5 flex-shrink-0 transition-colors ${
            active ? "text-primary" : "text-foreground/50 group-hover:text-foreground/70"
          }`}
          strokeWidth={1.6}
        />
        {!isCollapsed && <span>{item.label}</span>}
      </button>
    );
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-[1px] transition-opacity duration-250"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 ${sidebarWidth} bg-[#F8FAFC] border-r border-border/40 flex flex-col transition-all duration-250 ease-in-out antialiased ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header: Logo + Close */}
        <div className={`flex items-center ${isCollapsed ? "justify-center" : "justify-between"} px-4 h-16 lg:h-20 border-b border-border/30`}>
          {!isCollapsed && (
            <a href="/" className="inline-flex items-center">
              <img
                src={flashspaceLogo}
                alt="FlashSpace"
                className="h-9 lg:h-10 w-auto"
              />
            </a>
          )}
          {isCollapsed && (
            <a href="/" className="inline-flex items-center justify-center">
              <img
                src={flashspaceLogo}
                alt="FlashSpace"
                className="h-7 w-auto"
              />
            </a>
          )}
          {!isCollapsed && (
            <button
              onClick={closeSidebar}
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-foreground/60 hover:text-foreground hover:bg-muted/60 transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-[18px] h-[18px]" />
            </button>
          )}
        </div>

        {/* Toggle collapsed/expanded */}
        {isCollapsed && (
          <div className="flex justify-center pt-2 pb-1">
            <button
              onClick={() => setSidebarState("expanded")}
              className="w-8 h-8 rounded-lg text-foreground/40 hover:text-foreground hover:bg-muted/60 transition-colors flex items-center justify-center"
              aria-label="Expand sidebar"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Nav items */}
        <nav className="flex-1 px-3 pt-4 pb-4 overflow-y-auto">
          <div className={`space-y-1 ${isCollapsed ? "flex flex-col items-center" : ""}`}>
            {mainItems.map(renderItem)}
          </div>
        </nav>

        {/* Bottom section */}
        <div className="px-3 pb-4 pt-2 border-t border-border/30">
          <div className={`space-y-1 ${isCollapsed ? "flex flex-col items-center" : ""}`}>
            {accountItems.map(renderItem)}
          </div>
          {!isCollapsed && (
            <button
              onClick={() => setSidebarState("collapsed")}
              className="w-full mt-3 rounded-xl border border-border text-primary font-medium text-[13px] py-2.5 hover:bg-primary/5 transition-colors"
            >
              Collapse
            </button>
          )}
        </div>
      </aside>
    </>
  );
};
