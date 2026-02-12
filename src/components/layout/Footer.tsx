import { Button } from "@/components/ui/button";
import flashspaceLogo from "@/assets/flashspace-logo.png";

const footerLinks = {
  portals: [
    { label: "Customer Portal", href: "/customer-portal" },
    { label: "Space Partner Portal", href: "/space-partner-portal" },
    { label: "FlashSpace Admin Portal", href: "/admin-portal" },
    { label: "Channel Partner Portal", href: "/affiliate-portal" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Blog", href: "#" },
  ],
  company: [
    { label: "Pricing", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact us", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  community: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Newsletter", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Top CTA Section */}
      <div className="container mx-auto px-4 lg:px-8 pt-16 lg:pt-24 pb-20 lg:pb-32">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-background mb-8 tracking-tight leading-tight max-w-lg">
          Bring structure to your
          <br />
          workspace strategy
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
            Sign up
          </Button>
          <Button size="lg" variant="outline" className="border-background/30 bg-background text-primary hover:bg-background/90 font-medium">
            Request a demo
          </Button>
        </div>
      </div>

      {/* Links Section */}
      <div className="container mx-auto px-4 lg:px-8 py-16 border-t border-background/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">

          {/* Portals - with left border line */}
          <div className="border-l border-background/20 pl-6">
            <h4 className="text-xs font-semibold text-background/70 uppercase tracking-wider mb-6">
              Portals
            </h4>
            <ul className="space-y-4">
              {footerLinks.portals.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/80 hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - with left border line */}
          <div className="border-l border-background/20 pl-6">
            <h4 className="text-xs font-semibold text-background/70 uppercase tracking-wider mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/80 hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company - with left border line */}
          <div className="border-l border-background/20 pl-6">
            <h4 className="text-xs font-semibold text-background/70 uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/80 hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community - with left border line */}
          <div className="border-l border-background/20 pl-6">
            <h4 className="text-xs font-semibold text-background/70 uppercase tracking-wider mb-6">
              Community
            </h4>
            <ul className="space-y-4">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/80 hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          {/* Large Brand Name */}
          <div className="flex items-center">
            <img src={flashspaceLogo} alt="FlashSpace" className="h-16 sm:h-20 lg:h-24 w-auto brightness-0 invert" />
          </div>

          {/* Copyright */}
          <p className="text-xs text-background/60 uppercase tracking-wider">
            Copyright ©2025 FlashSpace Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};
