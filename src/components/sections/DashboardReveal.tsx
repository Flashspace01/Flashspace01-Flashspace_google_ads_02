import { motion } from "framer-motion";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

export const DashboardReveal = () => {
  return (
    <section className="py-20 lg:py-28 bg-foreground">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-primary-foreground leading-tight">
            Built to power enterprise
            <br />
            workspace operations.
          </h2>
        </motion.div>

        {/* Dashboard Display */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="rounded-2xl overflow-hidden border border-primary-foreground/10 shadow-2xl">
            <img
              src={dashboardPreview}
              alt="Enterprise workspace dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
