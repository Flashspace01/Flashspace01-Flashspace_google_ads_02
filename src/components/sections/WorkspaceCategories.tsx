import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import workspaceCoworking from "@/assets/workspace-coworking.jpg";
import workspaceManaged from "@/assets/workspace-managed.jpg";
import workspaceCommercial from "@/assets/workspace-commercial.jpg";
import workspaceDaypass from "@/assets/workspace-daypass.jpg";
import workspaceMeeting from "@/assets/workspace-meeting.jpg";
import workspaceTeam from "@/assets/workspace-team.jpg";

const rentLongTerm = [
  {
    title: "Coworking Space",
    subtitle: "Full-time offices for teams of all sizes",
    image: workspaceCoworking,
    features: [
      "Dedicated seats & private cabins",
      "Fully-equipped coworking spaces",
      "Ideal for individual or small teams",
    ],
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
  },
];

const bookOnDemand = [
  {
    title: "Day Pass",
    subtitle: "Flexible coworking for individuals",
    image: workspaceDaypass,
    features: [
      "Desks-by-the-day in coworking spaces",
      "Starting at ₹200/day",
      "Ideal for individual or small teams",
    ],
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
  },
];

interface WorkspaceCardProps {
  title: string;
  subtitle: string;
  image: string;
  features: string[];
  index: number;
}

const WorkspaceCard = ({ title, subtitle, image, features, index }: WorkspaceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-lg transition-shadow"
  >
    <div className="aspect-[3/2] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-primary mb-3">{subtitle}</p>
      <ul className="space-y-1.5 mb-4">
        {features.map((feature, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-foreground">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
      >
        Explore {title}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </motion.div>
);

export const WorkspaceCategories = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
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

        {/* Rent longer-term */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
              Rent longer-term
              <span className="w-12 h-0.5 bg-primary" />
            </h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentLongTerm.map((item, index) => (
              <WorkspaceCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>

        {/* Book on-demand */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
              Book on-demand
              <span className="w-12 h-0.5 bg-primary" />
            </h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookOnDemand.map((item, index) => (
              <WorkspaceCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
