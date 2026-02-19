import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Mic, Send, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { OnDemandContent } from "@/components/sections/OnDemandContent";
import { OnDemandWorkspaces } from "@/components/sections/OnDemandWorkspaces";
import { OnDemandTestimonial } from "@/components/sections/OnDemandTestimonial";
import { OnDemandDashboardPreview } from "@/components/sections/OnDemandDashboardPreview";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Do I need to sign a contract to book a workspace?",
    answer: "No contracts required. Flashspace operates on a fully flexible, on-demand model. You can book by the hour, day, or week without any long-term commitment or paperwork.",
  },
  {
    question: "How quickly can I book a desk or meeting room?",
    answer: "Most bookings are confirmed instantly. Simply search for available spaces in your city, select your preferred option, and check in within seconds using the app or a QR code at the entrance.",
  },
  {
    question: "What amenities are included with my booking?",
    answer: "All bookings include high-speed WiFi, printing and scanning, reception services, and access to common areas. Meeting rooms include presentation equipment, video conferencing setup, and whiteboards.",
  },
  {
    question: "Can I extend my booking if I need more time?",
    answer: "Yes. You can extend your booking in real time directly from the app, subject to space availability. There's no need to speak to anyone — the entire process is seamless and self-serve.",
  },
];

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
  "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow",
  "Chandigarh", "Goa", "Kochi", "Indore", "Noida", "Gurugram",
];

const OnDemand = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden" style={{ background: "hsla(0, 0%, 97%, 0.9)", paddingTop: "170px", paddingBottom: "60px" }}>
          {/* Subtle gradient blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.07] pointer-events-none">
            <div className="absolute inset-0 rounded-full bg-primary blur-[120px] translate-x-1/3 -translate-y-1/4" />
          </div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.05] pointer-events-none">
            <div className="absolute inset-0 rounded-full bg-secondary blur-[100px] -translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="relative z-10" style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", textAlign: "center" }}>
            <div>
              {/* Heading */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-[72px] font-medium text-foreground"
                style={{ lineHeight: "1.08", letterSpacing: "-0.5px", marginBottom: "20px" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                On-Demand Business Solutions{" "}
                <span className="text-primary">On Your Schedule</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-base sm:text-lg text-muted-foreground mx-auto"
                style={{ maxWidth: "750px", lineHeight: "1.6", marginBottom: "40px" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Book workspaces, meeting rooms, and event spaces instantly.
                <br />
                No contracts, no commitments.
              </motion.p>

              {/* Search + Chat CTA */}
              <motion.div
                className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                    placeholder="Search spaces in your city..."
                    className="h-12 pl-11 pr-20 rounded-xl bg-card border-border shadow-soft text-sm w-full"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                    <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
                      <Mic className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  {/* City Dropdown */}
                  {showDropdown && searchQuery.length > 0 && filteredCities.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden">
                      {filteredCities.map((city) => (
                        <button
                          key={city}
                          onClick={() => {
                            setSearchQuery(city);
                            setShowDropdown(false);
                          }}
                          className="w-full text-left px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <Button variant="outline" className="h-12 rounded-xl px-6 border-border shadow-soft gap-2 whitespace-nowrap">
                  Explore Spaces <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Companies Marquee */}
          <div className="mt-28 lg:mt-32">
            <motion.p
              className="text-center text-sm font-medium text-muted-foreground/70 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              Trusted by Growing Teams
            </motion.p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to right, hsla(0, 0%, 97%, 0.9), transparent)" }} />
              <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to left, hsla(0, 0%, 97%, 0.9), transparent)" }} />
              <div className="flex animate-marquee">
                {[...Array(2)].map((_, setIdx) => (
                  <div key={setIdx} className="flex shrink-0 items-center gap-16 px-8">
                    {[
                      "GrowthPulse", "NexaTech", "CraftBrew", "UrbanStack",
                      "DataForge", "CloudLoop", "BrightPath", "Zenvolt", "ApexWorks",
                    ].map((name) => (
                      <span
                        key={`${setIdx}-${name}`}
                        className="text-muted-foreground/40 text-lg font-semibold tracking-tight whitespace-nowrap"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <OnDemandDashboardPreview />

        {/* Sticky sidebar content sections */}
        <OnDemandContent />

        {/* Workspace Slider */}
        <OnDemandWorkspaces />

        {/* Testimonial Section */}
        <OnDemandTestimonial />

        {/* FAQ Section */}
        <section className="py-20 lg:py-28" style={{ background: "hsl(0, 0%, 97%)" }}>
          <div className="container mx-auto px-4 lg:px-8 max-w-[1100px]">
            <div className="text-center mb-14">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-foreground tracking-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Everything you need to know about on-demand workspace booking
              </motion.p>
            </div>

            <Accordion type="single" collapsible className="space-y-5">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <AccordionItem
                    value={`faq-${i}`}
                    className="bg-card border border-border/60 rounded-2xl px-6 shadow-soft transition-shadow hover:shadow-soft-lg data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="text-[15px] sm:text-base font-medium text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OnDemand;
