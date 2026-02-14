import { motion } from "framer-motion";

export const DashboardPreview = () => {
  return (
    <section id="hero-dashboard" className="relative w-full bg-[#f5f5f5]">
      <div className="relative z-10 w-full flex flex-col items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-8 sm:mt-12 lg:mt-16 w-full max-w-[1200px] mx-auto pb-16"
        >
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/10 text-muted-foreground text-xs font-medium tracking-wide border border-foreground/10">
              <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse" />
              Live Preview
            </span>
          </div>
          <div className="rounded-2xl border border-foreground/10 bg-background shadow-2xl overflow-hidden p-1">
            <div className="rounded-xl bg-background/90 backdrop-blur-sm p-6 sm:p-8">
              {/* Mock browser bar */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-accent/80" />
                  <div className="w-3 h-3 rounded-full bg-status-success/80" />
                </div>
                <div className="flex-1 h-7 rounded-md bg-muted/60 mx-8" />
              </div>
              {/* Mock dashboard content */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {["Total Spaces", "Active Clients", "Revenue", "Bookings"].map((label, i) => (
                  <div key={i} className="rounded-lg bg-muted/40 p-4">
                    <p className="text-[11px] text-muted-foreground font-medium">{label}</p>
                    <p className="text-lg font-bold text-foreground mt-1">
                      {["1,247", "892", "₹24.5L", "3,891"][i]}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 rounded-lg bg-muted/40 h-36" />
                <div className="rounded-lg bg-muted/40 h-36" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
