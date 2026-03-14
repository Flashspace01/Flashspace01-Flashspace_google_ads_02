import { createContext, useContext, useState, ReactNode } from "react";

type SidebarState = "closed" | "expanded" | "collapsed";

interface SidebarContextType {
  sidebarState: SidebarState;
  setSidebarState: (state: SidebarState) => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  // Compat
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

export const useSidebar = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
  return ctx;
};

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarState, setSidebarState] = useState<SidebarState>("closed");

  const toggleSidebar = () =>
    setSidebarState((prev) => {
      if (prev === "closed") return "expanded";
      if (prev === "expanded") return "collapsed";
      return "closed";
    });

  const closeSidebar = () => setSidebarState("closed");

  // Compat layer
  const sidebarOpen = sidebarState !== "closed";
  const setSidebarOpen = (open: boolean) =>
    setSidebarState(open ? "expanded" : "closed");

  return (
    <SidebarContext.Provider
      value={{
        sidebarState,
        setSidebarState,
        toggleSidebar,
        closeSidebar,
        sidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
