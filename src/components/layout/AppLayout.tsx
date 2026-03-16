import { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};
