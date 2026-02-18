import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"];

const BusinessSetup = () => {
  const [city, setCity] = useState("");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background pt-28 pb-24 lg:pt-36 lg:pb-32">
          {/* Subtle gradient blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.07] pointer-events-none">
            <div className="absolute inset-0 rounded-full bg-primary blur-[120px] translate-x-1/3 -translate-y-1/4" />
          </div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.05] pointer-events-none">
            <div className="absolute inset-0 rounded-full bg-secondary blur-[100px] -translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Launch in 7–10 days
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-[56px] font-medium text-foreground tracking-tight leading-[1.1] mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Business Setup{" "}
                <span className="text-primary">Made Simple</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Complete end-to-end support for company registration, GST filing,
                licenses, and legal compliance — launch your business in 7–10 days.
              </motion.p>

              {/* Input Group */}
              <motion.div
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex-1 min-w-0">
                  <Select value={city} onValueChange={setCity}>
                    <SelectTrigger className="h-12 rounded-xl bg-card border-border shadow-soft text-sm w-full">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {cities.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button size="lg" className="h-12 rounded-xl px-8 w-full sm:w-auto shadow-soft">
                  Get Started
                </Button>
              </motion.div>

              {/* Trust line */}
              <motion.p
                className="mt-6 text-xs text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                Trusted by 500+ startups across India
              </motion.p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessSetup;
