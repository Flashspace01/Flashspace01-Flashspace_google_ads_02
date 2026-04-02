import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const companies = ["TechStart", "StudyIQ", "DesignHub"];

const testimonials = [
  {
    company: "TechStart",
    quote: "FlashSpace is a complete workspace solution. Its modern interface makes delivering exceptional operations seamless, and ongoing innovation keeps us ahead of the curve. Their AI has transformed our workspace management delivering improvements across all metrics.",
    author: "Rajesh Kumar",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&auto=format",
    bgColor: "from-primary/30 to-primary/10",
  },
  {
    company: "StudyIQ",
    quote: "We've scaled from 5 to 50 locations with FlashSpace. The compliance automation alone saved us hundreds of hours. Our team can focus on growth instead of paperwork.",
    author: "Priya Sharma",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&auto=format",
    bgColor: "from-accent/30 to-accent/10",
  },
  {
    company: "DesignHub",
    quote: "The AI-powered insights have completely changed how we plan our workspace strategy. We can now predict demand and optimize our locations like never before.",
    author: "Amit Patel",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&auto=format",
    bgColor: "from-primary/20 to-accent/20",
  },
];

export const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const activeTestimonial = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-secondary to-muted relative overflow-hidden">
      {/* Soft gradient orbs background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Trusted by the leading
            <br />
            workspace teams.
          </h2>
          <Button variant="outline" size="lg" className="bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-card font-semibold">
            View all customer stories
          </Button>
        </motion.div>

        {/* Company tabs - Logo-like styling */}
        <div className="flex justify-center gap-10 lg:gap-16 mb-12">
          {companies.map((company, index) => (
            <button
              key={company}
              onClick={() => setActiveIndex(index)}
              className={`relative px-2 py-2 transition-all ${
                activeIndex === index
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-xl lg:text-2xl font-extrabold tracking-tight">
                {company === "TechStart" && (
                  <>
                    <span className="text-foreground">Tech</span>
                    <span className="italic text-primary">Start</span>
                  </>
                )}
                {company === "StudyIQ" && (
                  <>
                    <span className="text-foreground">Study</span>
                    <span className="italic text-primary">IQ</span>
                  </>
                )}
                {company === "DesignHub" && (
                  <>
                    <span className="text-foreground">Design</span>
                    <span className="italic text-primary">Hub</span>
                  </>
                )}
              </span>
              {activeIndex === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Testimonial card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
              <div className="grid lg:grid-cols-[350px_1fr]">
                {/* Image */}
                <div className={`h-64 lg:h-auto bg-gradient-to-br ${activeTestimonial.bgColor} relative`}>
                  <img
                    src={activeTestimonial.image}
                    alt={activeTestimonial.author}
                    className="w-full h-full object-cover object-top mix-blend-multiply"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="text-sm font-bold text-primary mb-4">
                    {activeTestimonial.company}
                  </div>
                  <blockquote className="text-xl lg:text-2xl font-bold text-foreground leading-snug mb-8 tracking-tight">
                    "{activeTestimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-foreground">
                        {activeTestimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {activeTestimonial.role}
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                    >
                      Read all customer stories
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors shadow-md border border-border"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors shadow-md border border-border"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};
