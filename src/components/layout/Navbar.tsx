import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import flashspaceLogo from "@/assets/flashspace-logo.png";

interface NavbarProps {
  onCtaClick?: () => void;
}

export const Navbar = ({ onCtaClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/" || location.pathname === "/lead-form";
  const isTransparent = isHome && !scrolled;

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
      return;
    }
    navigate("/lead-form");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-card/85 backdrop-blur-md border-b border-border/30 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" rel="noopener noreferrer" className="inline-flex items-center">
            <img src={flashspaceLogo} alt="FlashSpace" className="h-10 lg:h-12 w-auto drop-shadow-sm" />
          </a>

          <div className="flex items-center gap-3 lg:gap-4">
            {/* Support number */}
            <a
              href="tel:+919876543210"
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                isTransparent ? "text-foreground/80 hover:text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+918100888777</span>
            </a>

            {/* CTA Button */}
            <Button
              size="sm"
              className={`font-medium rounded-lg h-9 px-4 text-sm ${
                isTransparent
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
              onClick={handleCtaClick}
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};
