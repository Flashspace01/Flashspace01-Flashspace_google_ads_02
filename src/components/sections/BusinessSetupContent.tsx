import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import capabilitiesBanner from "@/assets/bs-capabilities-banner.jpg";
import processImage from "@/assets/bs-process-image.jpg";
import advantageImage from "@/assets/bs-advantage-image.jpg";
import aiPlatformBanner from "@/assets/bs-ai-platform-banner.jpg";

const navItems = [
  { id: "bs-capabilities", label: "Capabilities" },
  { id: "bs-process", label: "Process" },
  { id: "bs-advantage", label: "Advantage" },
  { id: "bs-ai-platform", label: "AI Platform" },
];

const steps = [
  { num: "01", title: "Initial Consultation", desc: "Business structure alignment and requirement assessment." },
  { num: "02", title: "Documentation Alignment", desc: "Collection and verification of required documents." },
  { num: "03", title: "Filing & Submission", desc: "Preparation and submission of statutory applications." },
  { num: "04", title: "Processing & Monitoring", desc: "Application monitoring and status updates." },
  { num: "05", title: "Registration Completion", desc: "Delivery of incorporation certificates and GST credentials." },
];

const benefits = [
  { label: "Up to 90% Cost Efficiency", highlight: "90%" },
  { label: "7–10 Day Setup Timeline", highlight: "7–10 Day" },
  { label: "24-Hour Initiation", highlight: "24-Hour" },
  { label: "Dedicated Expert Advisory", highlight: null },
  { label: "Integrated Service Stack", highlight: null },
  { label: "Nationwide Flexibility", highlight: null },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
};

export const BusinessSetupContent = () => {
  const [activeSection, setActiveSection] = useState(navItems[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 160;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.getBoundingClientRect().top <= offset) {
          setActiveSection(navItems[i].id);
          return;
        }
      }
      setActiveSection(navItems[0].id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto pl-4 pr-0 lg:pl-8 lg:pr-0">
        <div className="grid lg:grid-cols-[170px_1fr] gap-4 lg:gap-6">
          {/* Sticky sidebar */}
          <div className="hidden lg:block pr-[10px]">
            <nav className="sticky top-[120px] space-y-1.5 py-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="flex items-center w-full text-left py-2 bg-transparent transition-colors duration-200"
                  >
                    {isActive && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                    )}
                    <span
                      className={`text-[14px] whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? "font-semibold text-primary"
                          : "font-medium text-muted-foreground"
                      }`}
                    >
                      {item.label.toUpperCase()}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Mobile horizontal nav */}
          <div className="lg:hidden overflow-x-auto -mx-4 px-4 mb-4">
            <div className="flex gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`whitespace-nowrap text-sm px-4 py-2 rounded-full border transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary font-medium"
                        : "bg-card text-muted-foreground border-border"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10 lg:space-y-14">

            {/* CAPABILITIES */}
            <div id="bs-capabilities">
              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="relative rounded-[6px] overflow-hidden shadow-soft">
                  <img
                    src={capabilitiesBanner}
                    alt="Business registration and compliance"
                    className="w-full h-[280px] sm:h-[380px] lg:h-[460px] object-cover"
                    style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 sm:p-10">
                    <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-medium text-white tracking-tight leading-[1.08]">
                      Launch with Complete<br /> Legal Confidence
                    </h2>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeIn} transition={{ duration: 0.45, delay: 0.2 }} className="mt-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                  Company Incorporation & Compliance Infrastructure
                </h3>
                <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed">
                  End-to-end support for Private Limited, LLP, and OPC registration — including GST setup,
                  regulatory filings, and documentation management. Built for founders who want clarity and
                  speed without legal complexity.
                </p>
              </motion.div>
            </div>

            {/* PROCESS */}
            <div id="bs-process">
              <motion.div {...fadeIn} transition={{ duration: 0.45, delay: 0.1 }} className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                  From Consultation to Completion
                </h3>
                <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed">
                  A proven five-step framework that takes you from initial assessment to full registration — with real-time tracking, expert guidance, and zero guesswork at every stage.
                </p>
              </motion.div>

              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
                <div className="relative rounded-[6px] overflow-hidden shadow-soft">
                  <img
                    src={processImage}
                    alt="Consultation and document verification"
                    className="w-full h-[480px] sm:h-[540px] lg:h-[600px] object-cover"
                    style={{ borderRadius: 0 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10 lg:p-14">
                    <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium text-white tracking-tight leading-[1.08] mb-8 lg:mb-12">
                      Structured. Transparent.<br /> Efficient.
                    </h2>
                    <div className="space-y-5 max-w-md">
                      {steps.map((s, i) => (
                        <motion.div
                          key={i}
                          {...fadeIn}
                          transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                          className="flex gap-4 items-baseline"
                        >
                          <span className="text-[13px] font-bold text-white/60 w-6 flex-shrink-0">
                            {s.num}
                          </span>
                          <h3 className="text-[15px] font-semibold text-white">{s.title}</h3>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ADVANTAGE */}
            <div id="bs-advantage">
              <motion.div {...fadeIn} transition={{ duration: 0.45, delay: 0.1 }} className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                  Why Founders Choose Flashspace
                </h3>
                <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed">
                  Industry-leading cost efficiency, rapid turnaround, and dedicated advisory — everything you need to incorporate with confidence and scale without friction.
                </p>
              </motion.div>

              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
                <div className="relative rounded-[6px] overflow-hidden shadow-soft">
                  <img
                    src={advantageImage}
                    alt="Startup founder in modern office"
                    className="w-full h-[480px] sm:h-[540px] lg:h-[600px] object-cover"
                    style={{ borderRadius: 0 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10 lg:p-14">
                    <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium text-white tracking-tight leading-[1.08] mb-8 lg:mb-12">
                      Built for Ambitious<br /> Founders
                    </h2>
                    <ul className="space-y-4 max-w-md">
                      {benefits.map((b, i) => (
                        <motion.li
                          key={i}
                          {...fadeIn}
                          transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                          className="flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                          <span className="text-[15px] text-white/90 leading-relaxed">
                            {b.highlight ? (
                              <>
                                <span className="font-semibold text-white">{b.highlight}</span>
                                {" "}{b.label.replace(b.highlight, "").trim()}
                              </>
                            ) : (
                              b.label
                            )}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* AI PLATFORM */}
            <div id="bs-ai-platform">
              <motion.div {...fadeIn} transition={{ duration: 0.45, delay: 0.1 }} className="mb-6">
                <h3 className="text-[40px] sm:text-[48px] lg:text-[56px] font-medium text-foreground tracking-tight leading-[1.08]">
                  AI-Powered Compliance Engine
                </h3>
                <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed mt-3">
                  Intelligent automation that monitors deadlines, tracks filings, and keeps your compliance on autopilot — so you can focus on building your business.
                </p>
              </motion.div>

              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
                <div className="relative rounded-[6px] overflow-hidden shadow-soft">
                  <img
                    src={aiPlatformBanner}
                    alt="AI compliance dashboard"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                    style={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10">
                    <div className="inline-block bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 max-w-max">
                      <p className="text-white text-sm font-medium italic">
                        "Built for founders who value precision, speed, and control."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
