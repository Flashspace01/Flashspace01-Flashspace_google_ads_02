import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import workspaceCoworking from "@/assets/workspace-coworking.jpg";
import workspaceManaged from "@/assets/workspace-managed.jpg";
import workspaceCommercial from "@/assets/workspace-commercial.jpg";
import workspaceDaypass from "@/assets/workspace-daypass.jpg";
import workspaceMeeting from "@/assets/workspace-meeting.jpg";
import workspaceTeam from "@/assets/workspace-team.jpg";

const allCards = [
  {
    title: "Coworking Space",
    subtitle: "Full-time offices for teams of all sizes",
    image: workspaceCoworking,
    features: [
      "Dedicated seats & private cabins",
      "Fully-equipped coworking spaces",
      "Ideal for individual or small teams",
    ],
    category: "Rent longer-term",
  },
  {
    title: "Managed Office",
    subtitle: "Dedicated office space managed by a provider",
    image: workspaceManaged,
    features: [
      "Fully furnished customized office",
      "Fully managed operations & housekeeping",
      "Ideal for 50+ team size",
    ],
    category: "Rent longer-term",
  },
  {
    title: "Office/Commercial Spaces",
    subtitle: "Rent/Lease office space for your company",
    image: workspaceCommercial,
    features: [
      "Long term contracts (3 or more years)",
      "Full customizations with self managed amenities",
      "Ideal for 100+ team size",
    ],
    category: "Rent longer-term",
  },
  {
    title: "Day Pass",
    subtitle: "Flexible coworking for individuals",
    image: workspaceDaypass,
    features: [
      "Desks-by-the-day in coworking spaces",
      "Starting at ₹200/day",
      "Ideal for individual or small teams",
    ],
    category: "Book on-demand",
  },
  {
    title: "Meeting Room",
    subtitle: "Book by-the-hour or by the day",
    image: workspaceMeeting,
    features: [
      "Meeting, conference and training rooms",
      "Modern amenities for a seamless experience",
      "Ideal for remote & hybrid teams",
    ],
    category: "Book on-demand",
  },
  {
    title: "Team Plan",
    subtitle: "Flexible day pass for remote & hybrid teams",
    image: workspaceTeam,
    features: [
      "Centralized dashboard for entire team",
      "Manage & track bookings at one place",
      "Ideal for remote, distributed & hybrid teams",
    ],
    category: "Book on-demand",
  },
];

const totalPages = Math.ceil(allCards.length / 3);

export const WorkspaceCategories = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goTo = useCallback(
    (page: number) => setCurrentPage(((page % totalPages) + totalPages) % totalPages),
    []
  );

  // Auto-scroll every 5s unless hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => goTo(currentPage + 1), 5000);
    return () => clearInterval(timer);
  }, [currentPage, isHovered, goTo]);

  const visibleCards = allCards.slice(currentPage * 3, currentPage * 3 + 3);

  return (
    <section className="pt-20 lg:pt-28 pb-6 lg:pb-8 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-4 tracking-tight">
            Premium locations for your office space requirement
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Whatever may be your need, we have a solution that's right for you. Find yourself the most suitable coworking solution.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={() => goTo(currentPage - 1)}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-lg hover:scale-110 transition-all duration-200"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => goTo(currentPage + 1)}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-lg hover:scale-110 transition-all duration-200"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="bg-card rounded-xl border border-border overflow-hidden group cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">
                    {card.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-1 mt-1">{card.title}</h3>
                  <p className="text-sm text-primary mb-3">{card.subtitle}</p>
                  <ul className="space-y-1.5 mb-4">
                    {card.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-foreground">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    Explore {card.title}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentPage ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button variant="default" size="lg" className="group/cta">
            View All Solutions
            <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
