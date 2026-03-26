import { motion } from "framer-motion";
import heroCoworking from "@/assets/hero-coworking.jpg";

const steps = [
  {
    step: "01",
    title: "Choose Business Activity",
    desc: "Select your trade activity from 2,000+ options across all UAE jurisdictions.",
    details: ["Trading & General Trading", "Professional Services & Consulting", "E-commerce & Technology", "Manufacturing & Industrial"],
  },
  {
    step: "02",
    title: "Select Jurisdiction",
    desc: "Pick the best free zone or mainland option based on your business needs and budget.",
    details: ["Mainland — full local market access", "Free Zone — 100% foreign ownership", "Offshore — asset protection & holding"],
  },
  {
    step: "03",
    title: "Submit Documents",
    desc: "Upload your documents securely — our team reviews and prepares your application.",
    details: ["Passport copies & photographs", "Proof of address & bank references", "Business plan & NOC (if applicable)"],
  },
  {
    step: "04",
    title: "Receive Your License",
    desc: "Get your trade license, visa, and bank account — and start operating.",
    details: ["Trade license issued within days", "Investor/partner visa processing", "Corporate bank account opening"],
  },
];

export const SetupProcess = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column — label + sticky image */}
          <div className="py-20 lg:py-28">
            <div className="lg:sticky lg:top-24">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-sm text-secondary/80 mb-10"
              >
                <span className="text-secondary">+</span> Our process
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={heroCoworking}
                  alt="Team collaboration in a modern UAE office"
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Right column — heading + numbered steps */}
          <div className="py-20 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-secondary leading-[1.15] mb-6 tracking-tight">
                Your path to a<br />UAE business.
              </h2>
              <p className="text-secondary/60 text-base leading-relaxed max-w-md">
                A simple, structured process from start to finish. Our commitment to reliability means our clients can count on us every step of the way.
              </p>
            </motion.div>

            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`py-8 ${i < steps.length - 1 ? "border-b border-secondary/15" : ""}`}
              >
                <div className="flex items-start gap-6">
                  <span className="text-secondary font-medium text-base shrink-0 pt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-secondary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-secondary/80 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <ul className="space-y-1.5">
                      {item.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-secondary/70 text-sm">
                          <span className="w-1 h-1 rounded-full bg-secondary/30 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
