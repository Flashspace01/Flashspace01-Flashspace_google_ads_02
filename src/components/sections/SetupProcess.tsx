import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Choose Business Activity", desc: "Select your trade activity from 2,000+ options across all UAE jurisdictions." },
  { step: "02", title: "Select Jurisdiction", desc: "Pick the best free zone or mainland option based on your business needs and budget." },
  { step: "03", title: "Submit Documents", desc: "Upload your documents securely — our team reviews and prepares your application." },
  { step: "04", title: "Receive Your License", desc: "Get your trade license, visa, and bank account — and start operating." },
];

export const SetupProcess = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary">
            Built for entrepreneurs in the UAE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-5 tracking-tight">
            Your path to a UAE business
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A simple, structured process from start to finish.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border/50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <span className="text-6xl lg:text-7xl font-bold text-muted-foreground/15 leading-none block mb-5">
                {item.step}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
