import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const clientStats = [
  {
    company: "WeWork",
    stat: "40%",
    description: "Reduction in workspace costs",
  },
  {
    company: "Regus",
    stat: "3x",
    description: "Faster booking turnaround",
  },
  {
    company: "IWG",
    stat: "24h",
    description: "Average setup time",
  },
  {
    company: "Spaces",
    stat: "95%",
    description: "Client retention rate",
  },
];

export const ClientImpact = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="text-muted-foreground font-medium text-sm uppercase tracking-wider mb-4 block">
            Driving Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 tracking-tight leading-tight">
            Outsized impact for the
            <br />
            biggest brands in workspace
          </h2>
          <Button variant="outline" className="group">
            Read customer stories
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Button>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {clientStats.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-l border-border pl-6 py-8"
            >
              {/* Company Name with Read Story */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-lg font-bold text-foreground tracking-tight">
                  {item.company}
                </span>
                <a
                  href="#"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Read story
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Large Stat */}
              <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-foreground tracking-tighter mb-4">
                {item.stat}
              </div>

              {/* Description */}
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
