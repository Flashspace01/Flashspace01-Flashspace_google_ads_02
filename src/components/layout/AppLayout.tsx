import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider } from "./SidebarContext";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Content area below navbar */}
        <div className="flex flex-1 pt-16 lg:pt-20">
          <AppSidebar />
          <div className="flex-1 min-w-0 transition-all duration-250">
            {children}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
