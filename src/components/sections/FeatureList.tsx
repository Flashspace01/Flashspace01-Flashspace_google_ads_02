import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  "Virtual Offices",
  "Meeting Rooms",
  "Global Access",
  "Coworking",
  "Day Passes",
  "Business Setup",
];

const ITEM_HEIGHT = 72; // px per item
const VISIBLE_COUNT = 5;
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_COUNT;
const TOTAL_ITEMS = features.length;
const CYCLE_DURATION = 10; // seconds for full cycle

export const FeatureList = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let start: number | null = null;
    const totalHeight = TOTAL_ITEMS * ITEM_HEIGHT;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) / 1000;
      const progress = (elapsed % CYCLE_DURATION) / CYCLE_DURATION;
      const translateY = -(progress * totalHeight);

      track.style.transform = `translateY(${translateY}px)`;

      // Calculate which item is in the center
      const offset = progress * totalHeight;
      const centerItemIndex = Math.round((offset + (CONTAINER_HEIGHT / 2) - (ITEM_HEIGHT / 2)) / ITEM_HEIGHT) % TOTAL_ITEMS;
      setCenterIndex(centerItemIndex);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Render 3 copies for seamless loop
  const allItems = [...features, ...features, ...features];

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Feature preview card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Sidebar labels */}
            <div className="space-y-2 mb-8">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">WORKSPACE</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">BOOKING</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">ENTERPRISE</p>
              <p className="text-sm text-foreground uppercase tracking-wider font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-foreground" />
                SOLUTIONS
              </p>
            </div>

            {/* Preview Card - Frosted glass */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-8 border border-border/50 shadow-soft">
              <div className="bg-card/80 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-border/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-xs font-bold">FS</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Community</span>
                    <span className="text-sm text-muted-foreground">Academy</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent/30" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">Hello, Jane. How can we help?</h3>
                <div className="bg-muted/50 rounded-lg p-3 mb-6">
                  <span className="text-muted-foreground text-sm">🔍 Search for articles...</span>
                </div>

                {/* Help cards grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card/90 backdrop-blur rounded-lg p-4 border border-border/30">
                    <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-xs">🚀</span>
                    </div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">Getting started</h4>
                    <p className="text-xs text-muted-foreground">Learn the basics and get started with our platform.</p>
                  </div>
                  <div className="bg-card/90 backdrop-blur rounded-lg p-4 border border-border/30">
                    <div className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center mb-3">
                      <span className="text-xs">⚙️</span>
                    </div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">Settings and Account</h4>
                    <p className="text-xs text-muted-foreground">Explore the various settings and options available.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground">
              On-demand workspace solutions, from a fully integrated platform
            </p>
            <a href="#" className="text-foreground font-semibold underline underline-offset-4 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Find out more
            </a>
          </motion.div>

          {/* Right side - Vertical infinite scroll */}
          <div
            className="relative overflow-hidden"
            style={{ height: `${CONTAINER_HEIGHT}px` }}
          >
            {/* Top fade mask */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-card to-transparent z-10 pointer-events-none" />
            {/* Bottom fade mask */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent z-10 pointer-events-none" />

            <div ref={trackRef} className="will-change-transform">
              {allItems.map((name, index) => {
                const isCenter = (index % TOTAL_ITEMS) === centerIndex;
                return (
                  <div
                    key={`${name}-${index}`}
                    className="flex items-center justify-between cursor-pointer transition-all duration-500 ease-out"
                    style={{ height: `${ITEM_HEIGHT}px` }}
                  >
                    <span
                      className="text-3xl lg:text-4xl xl:text-5xl tracking-tight transition-all duration-500 ease-out"
                      style={{
                        fontWeight: isCenter ? 700 : 500,
                        opacity: isCenter ? 1 : 0.4,
                        color: isCenter ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                        transform: isCenter ? 'scale(1.02)' : 'scale(1)',
                      }}
                    >
                      {name}
                    </span>
                    {isCenter && (
                      <ArrowRight
                        className="w-8 h-8 text-foreground transition-opacity duration-500"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};