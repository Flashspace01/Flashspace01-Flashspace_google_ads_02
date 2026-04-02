import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a VPOB and why do I need one?",
    answer: "A Virtual Place of Business (VPOB) is a verified address that allows you to register for GST in any Indian state without having a physical office there. It's essential for e-commerce sellers who want to store inventory and sell through marketplaces like Amazon and Flipkart across multiple states.",
  },
  {
    question: "Do I need separate GST registration for each state?",
    answer: "Yes. If you store inventory or have a place of business in multiple states, you need GST registration in each of those states. Our VPOB service makes this simple — we provide verified addresses and handle the entire registration process.",
  },
  {
    question: "What happens if I sell in a state without GST registration?",
    answer: "You risk losing TCS credits, facing penalties and interest from the tax department, and potential suspension of your marketplace listings. The financial losses can run into lakhs — far exceeding the cost of proper compliance.",
  },
  {
    question: "How long does multi-state GST registration take?",
    answer: "With our streamlined process, we typically complete VPOB setup and GST registration in 7–14 business days per state. We handle all documentation, verification, and follow-ups with the tax authorities.",
  },
  {
    question: "Can I claim TCS and TDS credits without state-level registration?",
    answer: "No. TCS deducted by marketplaces and TDS deducted on payments can only be claimed if you have valid GST registration in the respective state. Without it, this money is permanently lost.",
  },
  {
    question: "Do you help with ongoing GST filing and compliance?",
    answer: "Yes. We offer complete accounting and filing services — monthly GST returns, annual filings, TDS/TCS reconciliation, and income tax returns. Our team ensures you stay compliant across all registered states.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="text-primary">+</span> FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-foreground leading-[1.15] tracking-tight mb-5">
              Common questions<br />about VPOB & GST compliance.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              Have a different question? Reach out and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                  <AccordionTrigger className="text-left text-foreground font-medium text-base lg:text-lg hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
