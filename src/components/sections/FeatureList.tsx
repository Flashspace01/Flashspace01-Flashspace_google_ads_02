import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import featureVirtualOffices from "@/assets/feature-virtual-offices.jpg";
import featureMeetingRooms from "@/assets/feature-meeting-rooms.jpg";
import featureGlobalAccess from "@/assets/feature-global-access.jpg";
import featureCoworking from "@/assets/feature-coworking.jpg";
import featureDayPasses from "@/assets/feature-day-passes.jpg";
import featureBusinessSetup from "@/assets/feature-business-setup.jpg";

const features = [
  "Virtual Offices",
  "Meeting Rooms",
  "Global Access",
  "Coworking",
  "Day Passes",
  "Business Setup",
];

const featureImages = [
  featureVirtualOffices,
  featureMeetingRooms,
  featureGlobalAccess,
  featureCoworking,
  featureDayPasses,
  featureBusinessSetup,
];

export const FeatureList = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    const updateCenter = () => {
      const wrapperRect = wrapper.getBoundingClientRect();
      const wrapperCenter = wrapperRect.top + wrapperRect.height / 2;
      const items = track.querySelectorAll<HTMLElement>("[data-feature-item]");
      let closestIdx = 0;
      let closestDist = Infinity;

      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const dist = Math.abs(itemCenter - wrapperCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i % features.length;
        }
      });

      setCenterIndex(closestIdx);
    };

    const interval = setInterval(updateCenter, 100);
    return () => clearInterval(interval);
  }, []);

  const renderItem = (name: string, index: number) => {
    const isCenter = index % features.length === centerIndex;
    return (
      <div
        key={`${name}-${index}`}
        data-feature-item
        className="py-4 border-b border-border/50 transition-all duration-500 ease-out"
        style={{
          opacity: isCenter ? 1 : 0.55,
          fontWeight: isCenter ? 700 : 500,
          transform: isCenter ? "scale(1.02)" : "scale(1)",
        }}
      >
        <span className="text-3xl lg:text-4xl xl:text-5xl tracking-tight text-foreground">
          {name}
        </span>
      </div>
    );
  };

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center justify-center">
          {/* Left side - Feature preview card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={centerIndex}
                src={featureImages[centerIndex]}
                alt={features[centerIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </motion.div>

          {/* Right side - Infinite vertical scrolling list */}
          <div
            ref={wrapperRef}
            className="relative overflow-hidden"
            style={{ height: "380px" }}
          >
            {/* Top fade mask */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-card to-transparent z-10 pointer-events-none" />
            {/* Bottom fade mask */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            className="section-13-vertical-track"
            style={{
              animation: "section13Scroll 12s linear infinite",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          >
              {features.map((name, i) => renderItem(name, i))}
              {features.map((name, i) => renderItem(name, i + features.length))}
            </div>

            <style>{`
              @keyframes section13Scroll {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};
