import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  Building2,
  Briefcase,
  FileCheck,
  CreditCard,
  UserCircle,
  MapPin,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  Mail,
  Phone,
  TicketCheck,
  Clock,
  Zap,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

const quickSuggestions = [
  "Book a workspace",
  "Virtual office setup",
  "Payment issues",
  "GST invoices",
  "Change address",
  "KYC documents",
];

const categories = [
  {
    title: "Workspace Booking",
    description: "Reserve meeting rooms, hot desks, and private offices.",
    icon: Building2,
    links: ["How to book a workspace", "Cancel or reschedule", "Booking policies", "View all →"],
  },
  {
    title: "Virtual Office",
    description: "Manage your registered address and mail forwarding.",
    icon: Briefcase,
    links: ["Set up virtual office", "Mail forwarding rules", "Change registered address", "View all →"],
  },
  {
    title: "Business Setup",
    description: "Company registration, GST filing, and compliance.",
    icon: FileCheck,
    links: ["Register a company", "GST registration", "Annual compliance", "View all →"],
  },
  {
    title: "Payments & Invoices",
    description: "Billing, refunds, and invoice management.",
    icon: CreditCard,
    links: ["Download invoice", "Request a refund", "Update payment method", "View all →"],
  },
  {
    title: "Account & Profile",
    description: "Manage your account settings and team members.",
    icon: UserCircle,
    links: ["Update profile", "Add team members", "Reset password", "View all →"],
  },
  {
    title: "Locations & Cities",
    description: "Find workspaces across 68+ cities in India.",
    icon: MapPin,
    links: ["Search by city", "Workspace amenities", "Operating hours", "View all →"],
  },
  {
    title: "Compliance & Documentation",
    description: "KYC verification, agreements, and legal documents.",
    icon: ShieldCheck,
    links: ["Upload KYC documents", "Download agreement", "Compliance checklist", "View all →"],
  },
];

const trendingArticles = [
  {
    title: "How to book a meeting room in 3 steps",
    summary: "A quick guide to reserving meeting rooms at any FlashSpace location.",
    updated: "Feb 20, 2026",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop",
    readTime: "3 min read",
  },
  {
    title: "Setting up your virtual office address",
    summary: "Everything you need to activate your registered business address.",
    updated: "Feb 18, 2026",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
    readTime: "5 min read",
  },
  {
    title: "Understanding GST invoices and billing",
    summary: "How to download, verify, and manage your GST-compliant invoices.",
    updated: "Feb 15, 2026",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    readTime: "4 min read",
  },
  {
    title: "Mail forwarding: Setup and tracking",
    summary: "Configure mail forwarding rules and track deliveries in real time.",
    updated: "Feb 12, 2026",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=400&h=250&fit=crop",
    readTime: "3 min read",
  },
  {
    title: "KYC verification requirements",
    summary: "Documents required for identity and business verification.",
    updated: "Feb 10, 2026",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
    readTime: "4 min read",
  },
  {
    title: "How to cancel or reschedule a booking",
    summary: "Step-by-step guide to modifying your workspace reservations.",
    updated: "Feb 8, 2026",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=250&fit=crop",
    readTime: "2 min read",
  },
];

const faqGroups = [
  {
    label: "General",
    faqs: [
      { q: "What is FlashSpace?", a: "FlashSpace is a B2B workspace platform offering virtual offices, coworking spaces, on-demand workspaces, and business setup services across 68+ cities in India." },
      { q: "How do I create an account?", a: "Click 'Get Started' on the homepage, enter your business email, verify it, and complete your profile. You can start booking workspaces immediately." },
      { q: "Is FlashSpace available in my city?", a: "We operate in 68+ cities across India. Use the Locations page or search by city name to check availability in your area." },
    ],
  },
  {
    label: "Booking",
    faqs: [
      { q: "How do I book a meeting room?", a: "Navigate to 'Book Workspace', select 'Meeting Room', choose your city, location, date, and time slot, then confirm your booking. You'll receive a confirmation email instantly." },
      { q: "Can I cancel a booking?", a: "Yes. Go to 'My Bookings', select the booking, and click 'Cancel'. Cancellations made 24+ hours in advance receive a full refund. See our cancellation policy for details." },
      { q: "What types of workspaces can I book?", a: "You can book hot desks, dedicated desks, private offices, meeting rooms, and conference rooms — available on hourly, daily, or monthly plans." },
    ],
  },
  {
    label: "Virtual Office",
    faqs: [
      { q: "What does a virtual office include?", a: "A virtual office gives you a registered business address, mail handling and forwarding, GST registration support, and access to meeting rooms on demand." },
      { q: "Can I change my registered office address?", a: "Yes. Contact support or submit a request through your dashboard. Our team will handle the compliance paperwork for the address change." },
      { q: "How does mail forwarding work?", a: "All mail received at your registered address is logged in your dashboard. You can request forwarding to any Indian address, with tracking provided for each shipment." },
    ],
  },
  {
    label: "Payments",
    faqs: [
      { q: "What payment methods are accepted?", a: "We accept UPI, credit/debit cards, net banking, and wire transfers. Enterprise clients can also set up invoice-based billing with NET-30 terms." },
      { q: "How do I download my invoice?", a: "Go to 'Payments' in your dashboard, find the relevant transaction, and click the download icon. All invoices are GST-compliant." },
      { q: "What is the refund policy?", a: "Refunds are processed within 5–7 business days. Eligibility depends on the cancellation timeline and service type. See our detailed refund policy for specifics." },
    ],
  },
  {
    label: "Business Setup",
    faqs: [
      { q: "What business setup services do you offer?", a: "We offer company registration (Pvt Ltd, LLP, OPC), GST registration, MSME registration, trademark filing, and annual compliance management." },
      { q: "How long does company registration take?", a: "Typically 7–15 business days depending on the entity type and document readiness. Our team handles all filings with the MCA." },
      { q: "Do you handle annual compliance?", a: "Yes. We provide end-to-end annual compliance including ROC filings, annual returns, and financial statement submissions." },
    ],
  },
];

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState("General");
  const [feedbackGiven, setFeedbackGiven] = useState<Record<string, boolean>>({});

  const handleFeedback = (articleTitle: string) => {
    setFeedbackGiven((prev) => ({ ...prev, [articleTitle]: true }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero — Search Primary */}
        <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h1 className="text-3xl lg:text-5xl font-medium tracking-tight text-foreground mb-3 leading-[1.15]">
                How can we help you?
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg mb-8">
                Search our knowledge base or browse categories below.
              </p>

              <div className="relative max-w-xl mx-auto mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for articles, topics, or questions..."
                  className="pl-12 h-14 text-base rounded-xl border-border bg-background shadow-sm focus-visible:ring-primary"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {quickSuggestions.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1.5 text-sm rounded-full border border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Browse by Category */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight mb-2">
                Browse by category
              </h2>
              <p className="text-muted-foreground">
                Find answers organized by topic.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                        <Icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground">{cat.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 pl-12">
                      {cat.links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                          >
                            {link.endsWith("→") ? (
                              <span className="font-medium text-primary">{link}</span>
                            ) : (
                              <>
                                <ChevronRight className="w-3 h-3 shrink-0" />
                                {link}
                              </>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trending Articles */}
        <section className="py-14 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight mb-2">
                Popular articles
              </h2>
              <p className="text-muted-foreground">
                Most viewed by FlashSpace users this month.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingArticles.map((article, i) => (
                <motion.a
                  key={article.title}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-xl border border-border bg-card hover:shadow-lg transition-shadow group overflow-hidden flex flex-col"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4 flex-1">
                      {article.summary}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground/60">
                      <span>{article.updated}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight mb-2 text-center">
                Frequently asked questions
              </h2>
              <p className="text-muted-foreground text-center">
                Quick answers to common questions.
              </p>
            </motion.div>

            {/* Group tabs */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {faqGroups.map((group) => (
                <button
                  key={group.label}
                  onClick={() => setActiveGroup(group.label)}
                  className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                    activeGroup === group.label
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground bg-background"
                  }`}
                >
                  {group.label}
                </button>
              ))}
            </div>

            {faqGroups
              .filter((g) => g.label === activeGroup)
              .map((group) => (
                <div key={group.label} className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="w-full">
                    {group.faqs.map((faq, idx) => (
                      <AccordionItem
                        key={idx}
                        value={`${group.label}-${idx}`}
                        className="border-b border-border"
                      >
                        <AccordionTrigger className="hover:no-underline text-left py-5">
                          <span className="font-medium text-foreground">{faq.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                          {faq.a}
                          <div className="mt-4 flex items-center gap-3">
                            {feedbackGiven[`${group.label}-${idx}`] ? (
                              <span className="text-xs text-muted-foreground/60">Thanks for your feedback</span>
                            ) : (
                              <>
                                <span className="text-xs text-muted-foreground/60">Was this helpful?</span>
                                <button
                                  onClick={() => handleFeedback(`${group.label}-${idx}`)}
                                  className="p-1 rounded hover:bg-secondary transition-colors"
                                >
                                  <ThumbsUp className="w-3.5 h-3.5 text-muted-foreground" />
                                </button>
                                <button
                                  onClick={() => handleFeedback(`${group.label}-${idx}`)}
                                  className="p-1 rounded hover:bg-secondary transition-colors"
                                >
                                  <ThumbsDown className="w-3.5 h-3.5 text-muted-foreground" />
                                </button>
                              </>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-14 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-10">
                <h2 className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight mb-2">
                  Still need help?
                </h2>
                <p className="text-muted-foreground">
                  Our support team is here to assist you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl border border-border bg-card text-center">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Live Chat</h3>
                  <p className="text-xs text-muted-foreground mb-3">Avg. response: 2 min</p>
                  <Button size="sm" variant="outline" className="w-full">Start Chat</Button>
                </div>

                <div className="p-5 rounded-xl border border-border bg-card text-center">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Email Support</h3>
                  <p className="text-xs text-muted-foreground mb-3">support@flashspace.com</p>
                  <Button size="sm" variant="outline" className="w-full">Send Email</Button>
                </div>

                <div className="p-5 rounded-xl border border-border bg-card text-center">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Phone / WhatsApp</h3>
                  <p className="text-xs text-muted-foreground mb-3">+91 1800-123-4567</p>
                  <Button size="sm" variant="outline" className="w-full">Call Now</Button>
                </div>

                <div className="p-5 rounded-xl border border-border bg-card text-center">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-3">
                    <TicketCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Submit Ticket</h3>
                  <p className="text-xs text-muted-foreground mb-3">Avg. resolution: 4 hrs</p>
                  <Button size="sm" variant="outline" className="w-full">Create Ticket</Button>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  Support hours: Monday – Saturday, 9:00 AM – 7:00 PM IST
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
