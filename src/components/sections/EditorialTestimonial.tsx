import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const EditorialTestimonial = () => {
  return (
    <section className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
          {/* Left sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-32 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Workspaces
                </span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-12 items-start">
            {/* Large portrait */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&auto=format"
                  alt="Customer portrait"
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
            </motion.div>

            {/* Quote content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pt-8"
            >
              {/* Company logo placeholder */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">TS</span>
                </div>
                <span className="font-semibold text-muted-foreground">techstart</span>
              </div>

              {/* Quote */}
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground leading-snug mb-8 tracking-tight">
                "Our teams are dramatically more efficient when using FlashSpace. 
                In testing, teams using our AI tools were able to process <span className="text-primary">31% more</span> workspace requests daily."
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-foreground text-lg">Vikram Mehta</div>
                  <div className="text-muted-foreground">Vice President, Global Operations</div>
                </div>
              </div>

              {/* Link */}
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors"
                >
                  Read all customer stories
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
