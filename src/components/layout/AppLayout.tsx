import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, useSidebar } from "./SidebarContext";
import { useIsMobile } from "@/hooks/use-mobile";

interface AppLayoutProps {
  children: ReactNode;
}

const LayoutContent = ({ children }: { children: ReactNode }) => {
  const { collapsed } = useSidebar();
  const isMobile = useIsMobile();

  // Desktop: main content shifts right to make room for sidebar
  // Mobile: full width, sidebar overlays
  const marginLeft = isMobile ? 0 : collapsed ? 60 : 240;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AppSidebar />
      <div
        className="flex-1 pt-16 lg:pt-20 transition-all duration-250 ease-in-out"
        style={{ marginLeft }}
      >
        {children}
      </div>
    </div>
  );
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
};
