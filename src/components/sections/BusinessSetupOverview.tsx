import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import cardMainland from "@/assets/card-mainland.jpg";
import cardFreezone from "@/assets/card-freezone.jpg";
import cardOffshore from "@/assets/card-offshore.jpg";

const setupTypes = [
  {
    title: "Mainland Setup",
    description: "Establish your business in the UAE mainland with full market access and government-backed licensing.",
    href: "#",
    image: cardMainland,
  },
  {
    title: "Free Zone Setup",
    description: "100% foreign ownership, zero tax, and streamlined setup in any of the 40+ UAE free zones.",
    href: "#",
    image: cardFreezone,
  },
  {
    title: "Offshore Setup",
    description: "Register an offshore company for asset protection, international trading, and holding structures.",
    href: "#",
    image: cardOffshore,
  },
];

export const BusinessSetupOverview = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="business-setup" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-5 tracking-tight">
            Choose the right setup for your business
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We guide you through every step of UAE company formation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {setupTypes.map((item, index) => {
            const isHovered = hovered === index;
            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex flex-col justify-between p-8 lg:p-10 min-h-[360px] group overflow-hidden border-b-2 border-border/60"
              >
                {/* Background image on hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    opacity: isHovered ? 1 : 0,
                  }}
                />
                <div
                  className="absolute inset-0 bg-black/60 transition-opacity duration-500"
                  style={{ opacity: isHovered ? 1 : 0 }}
                />

                <div className="relative z-10">
                  <span className={`text-sm mb-5 block transition-colors duration-300 ${isHovered ? "text-white/70" : "text-muted-foreground"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`text-2xl lg:text-3xl font-medium mb-5 transition-colors duration-300 ${isHovered ? "text-white" : "text-foreground"}`}>
                    {item.title}
                  </h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${isHovered ? "text-white/80" : "text-muted-foreground"}`}>
                    {item.description}
                  </p>
                </div>
                <div className="relative z-10 mt-8">
                  <div className={`w-12 h-12 rounded-md border flex items-center justify-center transition-colors duration-300 ${
                    isHovered ? "border-white/40" : "border-border/40"
                  }`}>
                    <Plus className={`w-5 h-5 transition-colors duration-300 ${isHovered ? "text-white" : "text-muted-foreground"}`} />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};