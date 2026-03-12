import { ReactNode, useEffect } from "react";
import { Navbar } from "./Navbar";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, useSidebar } from "./SidebarContext";

interface AppLayoutProps {
  children: ReactNode;
}

const LayoutContent = ({ children }: { children: ReactNode }) => {
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarOpen) setSidebarOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sidebarOpen, setSidebarOpen]);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-row flex-1 pt-16 lg:pt-20">
        <AppSidebar />
        <main
          className={`flex-1 min-w-0 transition-all duration-250 ease-in-out ${
            sidebarOpen ? "lg:ml-64" : "ml-0"
          }`}
        >
          {children}
        </main>
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
