import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const EditorialIntro = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 space-y-8">
        {/* Ranking Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 lg:p-12 border border-border"
        >
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
            {/* Left - Text */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Ranked #1 on G2 in 12 categories
              </h3>
              <p className="text-muted-foreground mb-4 max-w-sm">
                Flashspace is rated highest on G2's most recent User Satisfaction Ratings for Workspace Management.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-foreground font-semibold underline underline-offset-4 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                Read the report
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right - Score circles */}
            <div className="flex items-center gap-6 lg:gap-10">
              {/* Flashspace Score */}
              <div className="text-center">
                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full border-4 border-foreground flex items-center justify-center mb-3">
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">96</span>
                </div>
                <span className="text-sm font-medium text-foreground">Flashspace</span>
              </div>

              {/* Competitor 1 */}
              <div className="text-center opacity-40">
                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full border-2 border-muted-foreground flex items-center justify-center mb-3">
                  <span className="text-4xl lg:text-5xl font-light text-muted-foreground">0</span>
                </div>
                <span className="text-sm text-muted-foreground">WeWork</span>
              </div>

              {/* Competitor 2 */}
              <div className="text-center opacity-40">
                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full border-2 border-muted-foreground flex items-center justify-center mb-3">
                  <span className="text-4xl lg:text-5xl font-light text-muted-foreground">0</span>
                </div>
                <span className="text-sm text-muted-foreground">Regus</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl p-8 lg:p-12 border border-border"
        >
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-center">
            {/* Left - Image */}
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop&auto=format"
                alt="Priya Sharma - Head of Operations"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Quote */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm font-semibold text-muted-foreground">TechCorp India</span>
                </div>
                
                <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
                  "Our teams are dramatically more efficient when using Flashspace. In just 3 months, we reduced our workspace costs by 35% while improving employee satisfaction scores."
                </blockquote>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <div className="font-bold text-foreground">Priya Sharma</div>
                  <div className="text-muted-foreground text-sm">Head of Operations</div>
                </div>
                
                <a href="#" className="inline-flex items-center gap-1 text-foreground font-semibold underline underline-offset-4 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                  Read all customer stories
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
