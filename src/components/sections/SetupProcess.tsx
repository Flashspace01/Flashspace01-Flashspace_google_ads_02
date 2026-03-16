import { motion } from "framer-motion";
import heroCoworking from "@/assets/hero-coworking.jpg";

const steps = [
  { step: "01", title: "Choose Business Activity", desc: "Select your trade activity from 2,000+ options across all UAE jurisdictions." },
  { step: "02", title: "Select Jurisdiction", desc: "Pick the best free zone or mainland option based on your business needs and budget." },
  { step: "03", title: "Submit Documents", desc: "Upload your documents securely — our team reviews and prepares your application." },
  { step: "04", title: "Receive Your License", desc: "Get your trade license, visa, and bank account — and start operating." },
];

export const SetupProcess = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 py-20 lg:py-28">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-sm text-secondary/80 mb-8">
                <span className="text-secondary">+</span> Our process
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-secondary leading-[1.15] mb-6 tracking-tight">
                Your path to a<br />UAE business.
              </h2>

              <p className="text-secondary/60 text-base leading-relaxed max-w-md mb-12">
                A simple, structured process from start to finish. Our commitment to reliability means our clients can count on us every step of the way.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={heroCoworking}
                alt="Team collaboration"
                className="w-full h-[280px] lg:h-[320px] object-cover"
              />
            </motion.div>
          </div>

          {/* Right column — numbered steps */}
          <div className="flex flex-col justify-center">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`py-7 ${i < steps.length - 1 ? "border-b border-secondary/15" : ""}`}
              >
                <div className="flex items-start gap-6">
                  <span className="text-secondary font-medium text-base shrink-0 pt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-secondary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-secondary/50 text-sm leading-relaxed">
                      {item.desc}
                    </p>
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
