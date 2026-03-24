import { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface AppLayoutProps {
  children: ReactNode;
  onNavCtaClick?: () => void;
}

export const AppLayout = ({ children, onNavCtaClick }: AppLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCtaClick={onNavCtaClick} />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};
