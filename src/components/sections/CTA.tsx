import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import coworkingBanner from "@/assets/coworking-banner.jpg";

const features = [
  {
    badge: "PRODUCTIVITY",
    title: "AI tools that maximize workspace efficiency",
  },
  {
    badge: "USABILITY",
    title: "Modern booking that's fast and friction-free",
  },
  {
    badge: "SCALABILITY",
    title: "Global network that grows with your business",
  },
];

export const CTA = () => {
  return (
    <section className="relative w-full overflow-hidden -mb-px">
      {/* Full-width background image - very light like the reference */}
      <div className="absolute inset-0">
        <img
          src={coworkingBanner}
          alt="Modern coworking space illustration"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground text-center mb-16 tracking-tight"
          >
            Ready to transform your workspace?
          </motion.h2>

          {/* Supporting subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto text-center mb-12"
          >
            Join thousands of businesses using FlashSpace to book, manage, and scale their workspaces effortlessly.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md text-base px-8 font-bold">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card/70 text-base font-medium">
              Talk to Sales
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
