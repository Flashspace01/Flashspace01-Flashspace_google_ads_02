import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import cityDelhi from "@/assets/city-delhi.jpg";
import cityMumbai from "@/assets/city-mumbai.jpg";
import cityHyderabad from "@/assets/city-hyderabad.jpg";

const cities = [
  {
    name: "Delhi",
    spaces: "120+ Spaces",
    description: "Premium coworking and office spaces across Connaught Place, Nehru Place & more.",
    image: cityDelhi,
  },
  {
    name: "Mumbai",
    spaces: "95+ Spaces",
    description: "Flexible workspaces in BKC, Andheri, Lower Parel and other prime locations.",
    image: cityMumbai,
  },
  {
    name: "Hyderabad",
    spaces: "70+ Spaces",
    description: "Modern offices in HITEC City, Gachibowli, and Madhapur tech corridors.",
    image: cityHyderabad,
  },
];

export const PopularWorkspaces = () => {
  return (
    <section className="py-20 lg:py-28" style={{ background: "hsl(0, 0%, 97%)" }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-[1100px]">
        {/* Header */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-foreground tracking-tight mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Most Popular Workspaces
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-border bg-card"
              style={{ minHeight: "380px" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={city.image}
                  alt={`${city.name} workspace`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary-foreground/80" />
                  <span className="text-sm font-medium text-primary-foreground/80">{city.spaces}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{city.description}</p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-white group-hover:text-accent transition-colors">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-muted-foreground text-sm sm:text-base max-w-md">
            Whether you're scaling your team or need a ready-to-use office, our expert team is here to assist you every step of the way.
          </p>
          <Button variant="outline" className="rounded-xl gap-2 shrink-0">
            View all <ArrowUpRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
