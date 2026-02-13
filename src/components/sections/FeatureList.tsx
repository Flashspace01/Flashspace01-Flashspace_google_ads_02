import { motion, useAnimationFrame } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";

const features = [
  "Virtual Offices",
  "Meeting Rooms",
  "Global Access",
  "Coworking",
  "Day Passes",
  "Business Setup",
];

const ITEM_HEIGHT = 80; // px per item
const TOTAL_HEIGHT = features.length * ITEM_HEIGHT;
const SPEED = 0.3; // pixels per frame (~18px/sec at 60fps)

export const FeatureList = () => {
  const offsetRef = useRef(0);
  const [offset, setOffset] = useState(0);
  const containerHeight = 5 * ITEM_HEIGHT; // show ~5 items
  const centerY = containerHeight / 2;

  useAnimationFrame(() => {
    offsetRef.current = (offsetRef.current + SPEED) % TOTAL_HEIGHT;
    setOffset(offsetRef.current);
  });

  // Render enough duplicates for seamless loop
  const allItems = [...features, ...features, ...features];

  const getItemStyle = useCallback(
    (index: number) => {
      const rawY = index * ITEM_HEIGHT - offset;
      // Wrap into visible range
      let y = ((rawY % TOTAL_HEIGHT) + TOTAL_HEIGHT) % TOTAL_HEIGHT;
      // Shift so items fill from top of container
      if (y > TOTAL_HEIGHT - ITEM_HEIGHT) y -= TOTAL_HEIGHT;

      const distFromCenter = Math.abs(y + ITEM_HEIGHT / 2 - centerY);
      const maxDist = containerHeight / 2;
      const proximity = Math.max(0, 1 - distFromCenter / maxDist);
      const isCenter = distFromCenter < ITEM_HEIGHT * 0.6;

      return {
        transform: `translateY(${y}px) scale(${1 + proximity * 0.02})`,
        opacity: 0.7 + proximity * 0.3,
        fontWeight: isCenter ? 700 : 500,
        color: isCenter ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
        transition: 'font-weight 0.4s ease, color 0.4s ease',
        position: 'absolute' as const,
        left: 0,
        right: 0,
        height: ITEM_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      };
    },
    [offset, centerY, containerHeight]
  );

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

          {/* Right side - Vertical scrolling feature list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
            style={{ height: containerHeight }}
          >
            {/* Fade masks */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-card to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent z-10 pointer-events-none" />

            {allItems.map((name, index) => {
              const itemIndex = index % features.length;
              const style = getItemStyle(index);
              const isCenter = style.fontWeight === 700;

              return (
                <div
                  key={`${name}-${index}`}
                  style={style}
                  className="px-2 cursor-pointer"
                >
                  <span className="text-3xl lg:text-4xl xl:text-5xl tracking-tight">
                    {name}
                  </span>
                  {isCenter && (
                    <ArrowRight className="w-8 h-8 text-foreground flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
