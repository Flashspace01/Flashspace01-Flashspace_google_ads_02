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
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[160px_1fr] gap-5 lg:gap-5">
          {/* Sticky sidebar — Intercom-style */}
          <div className="hidden lg:block">
            <div
              className="sticky top-[120px] rounded-[16px] p-5"
              style={{
                background: 'hsl(0, 0%, 97%)',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
              }}
            >
              <nav className="space-y-0.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className="flex items-center w-full text-left px-3 py-2 rounded-lg transition-all duration-200"
                      style={{
                        background: isActive ? 'hsl(0, 0%, 93%)' : 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) (e.currentTarget.style.background = 'hsl(0, 0%, 94.5%)');
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) (e.currentTarget.style.background = 'transparent');
                      }}
                    >
                      {isActive && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                      )}
                      <span
                        className={`text-[13px] whitespace-nowrap transition-all duration-200 ${
                          isActive
                            ? "font-semibold text-foreground"
                            : "font-medium text-muted-foreground"
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
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
          <div className="space-y-28 lg:space-y-36">

            {/* CAPABILITIES */}
            <div id="bs-capabilities">
              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="relative rounded-[20px] overflow-hidden shadow-soft">
                  <img
                    src={capabilitiesBanner}
                    alt="Business registration and compliance"
                    className="w-full h-[280px] sm:h-[380px] lg:h-[460px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 sm:p-10">
                    <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-medium text-white tracking-tight leading-[1.08]">
                      Launch with Complete<br /> Legal Confidence
                    </h2>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeIn} transition={{ duration: 0.45, delay: 0.2 }} className="mt-10 max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
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
              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="relative rounded-[20px] overflow-hidden shadow-soft">
                  <img
                    src={processImage}
                    alt="Consultation and document verification"
                    className="w-full h-[480px] sm:h-[540px] lg:h-[600px] object-cover"
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
              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="relative rounded-[20px] overflow-hidden shadow-soft">
                  <img
                    src={advantageImage}
                    alt="Startup founder in modern office"
                    className="w-full h-[480px] sm:h-[540px] lg:h-[600px] object-cover"
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
              <motion.h2
                {...fadeIn}
                className="text-[40px] sm:text-[48px] lg:text-[56px] font-medium text-foreground tracking-tight leading-[1.08] mb-10"
              >
                AI-Powered Compliance Engine
              </motion.h2>

              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="relative rounded-[20px] overflow-hidden shadow-soft">
                  <img
                    src={aiPlatformBanner}
                    alt="AI compliance dashboard"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10">
                    <p className="text-white/90 text-sm sm:text-base max-w-xl leading-relaxed mb-4">
                      Flashspace AI monitors deadlines, tracks filings, and simplifies compliance
                      management — all in one intelligent platform.
                    </p>
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
