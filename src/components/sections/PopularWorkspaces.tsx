import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import cityDelhi from "@/assets/city-delhi.jpg";
import cityMumbai from "@/assets/city-mumbai.jpg";
import cityHyderabad from "@/assets/city-hyderabad.jpg";

const cities = [
  {
    name: "Delhi",
    spaces: "120+ Spaces",
    description:
      "Premium coworking and office spaces across Connaught Place, Nehru Place & more.",
    image: cityDelhi,
  },
  {
    name: "Mumbai",
    spaces: "95+ Spaces",
    description:
      "Flexible workspaces in BKC, Andheri, Lower Parel and other prime locations.",
    image: cityMumbai,
  },
  {
    name: "Hyderabad",
    spaces: "70+ Spaces",
    description:
      "Modern offices in HITEC City, Gachibowli, and Madhapur tech corridors.",
    image: cityHyderabad,
  },
];

export const PopularWorkspaces = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + cities.length) % cities.length);
    },
    []
  );

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);

  // Touch/swipe support
  useEffect(() => {
    let startX = 0;
    const onStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
    const onEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 60) navigate(diff > 0 ? 1 : -1);
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [navigate]);

  const city = cities[current];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Full-screen background images with crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`bg-${current}`}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <img
            src={city.image}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: "blur(6px) brightness(0.55)", transform: "scale(1.05)" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Content layer */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 ml-[5px]">
        {/* Section title */}
        <motion.p
          className="text-white/60 text-sm font-medium tracking-[0.2em] uppercase mb-10 self-start ml-[5%] sm:ml-[10%] lg:ml-[15%]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Most Popular Workspaces
        </motion.p>

        {/* Card */}
        <div className="relative w-[90%] sm:w-[80%] lg:w-[70%] max-w-[1000px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group rounded-[10px] border border-white/[0.12] shadow-2xl cursor-default"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }}
            >
              <div className="px-8 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-20">
                {/* Spaces badge */}
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/50 mb-4">
                  {cities[current].spaces}
                </span>

                {/* City name */}
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-4 lg:mb-6">
                  {cities[current].name}
                </h2>

                {/* Description */}
                <p className="text-white/60 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mb-8 lg:mb-10">
                  {cities[current].description}
                </p>

                {/* Learn more */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
                >
                  Learn more{" "}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View All CTA */}
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 border border-white/20 hover:border-white/40 rounded-full px-6 py-2.5"
          >
            View all <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
