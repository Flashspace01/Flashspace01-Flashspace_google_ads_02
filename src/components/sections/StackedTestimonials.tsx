import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    company: "TechCorp",
    quote: "To scale our operations across 15 cities, we needed a system that gives us complete visibility into workspace utilization. With Flashspace, we have all our locations integrated into one platform, making it easy to manage bookings and conduct analysis so we can take a data-driven approach to optimizing our real estate.",
    name: "Vikram Mehta",
    title: "Head of Facilities, TechCorp India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format",
    cardColor: "bg-primary",
    layer1: "bg-secondary/80",
    layer2: "bg-primary/40",
    layer3: "bg-secondary/40",
  },
  {
    company: "StartupHub",
    quote: "Flashspace transformed how we manage our flexible workspace needs. The AI-powered recommendations helped us find the perfect spaces for our growing team, reducing costs by 40% while improving employee satisfaction scores dramatically.",
    name: "Anita Desai",
    title: "Operations Director, StartupHub",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&auto=format",
    cardColor: "bg-accent",
    layer1: "bg-primary/60",
    layer2: "bg-secondary/50",
    layer3: "bg-primary/30",
  },
  {
    company: "GlobalFinance",
    quote: "Managing workspace for 500+ employees across multiple cities was a nightmare before Flashspace. Now our team books meeting rooms in seconds, and we have real-time insights into utilization that help us make smarter decisions about our workspace portfolio.",
    name: "Rajesh Kumar",
    title: "VP of Administration, GlobalFinance",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format",
    cardColor: "bg-primary/90",
    layer1: "bg-secondary/70",
    layer2: "bg-primary/40",
    layer3: "bg-secondary/30",
  },
];

export const StackedTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground mb-12 tracking-tight">
            Effortless workspace management
          </h2>

          {/* Company Tabs */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.company}
                onClick={() => setActiveIndex(index)}
                className={`text-lg lg:text-xl font-semibold transition-all ${
                  activeIndex === index
                    ? "text-foreground underline underline-offset-8 decoration-2"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {testimonial.company}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Stacked Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Decorative stacked layers - colors change based on active testimonial */}
            <div className={`absolute inset-x-4 -top-3 h-full rounded-2xl transform transition-colors duration-300 ${
              testimonials[activeIndex].layer1
            }`} />
            <div className={`absolute inset-x-8 -top-6 h-full rounded-2xl transform transition-colors duration-300 ${
              testimonials[activeIndex].layer2
            }`} />
            <div className={`absolute inset-x-12 -top-9 h-full rounded-2xl transform transition-colors duration-300 ${
              testimonials[activeIndex].layer3
            }`} />

            {/* Main testimonial card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl p-8 lg:p-12 text-center transition-colors duration-300 ${
                  testimonials[activeIndex].cardColor
                }`}
              >
                {/* Company name */}
                <h3 className="text-lg font-semibold text-primary-foreground/80 mb-6">
                  {testimonials[activeIndex].company}
                </h3>

                {/* Quote */}
                <blockquote className="text-lg lg:text-xl text-primary-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                  {testimonials[activeIndex].quote}
                </blockquote>

                {/* Dotted divider */}
                <div className="border-t border-dashed border-primary-foreground/30 my-8" />

                {/* Attribution with image */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-foreground/30">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-primary-foreground">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-primary-foreground/70 text-sm">
                      {testimonials[activeIndex].title}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
