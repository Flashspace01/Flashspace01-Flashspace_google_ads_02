import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to set up a company in the UAE?",
    answer:
      "Depending on the jurisdiction, company formation can take as little as 3–5 working days for free zones and 7–10 working days for mainland setups. Flash Space handles all documentation and government liaison to ensure the fastest possible turnaround.",
  },
  {
    question: "Can I own 100% of my company as a foreign national?",
    answer:
      "Yes. All UAE free zones allow 100% foreign ownership, and recent mainland reforms also permit full foreign ownership in most business activities. Our team will advise you on the best structure for your specific needs.",
  },
  {
    question: "What is the difference between mainland and free zone?",
    answer:
      "Mainland companies can trade directly within the UAE market without restrictions, while free zone companies operate within their designated zone and typically require a local distributor for UAE market trade. Free zones offer benefits like 0% corporate tax guarantees and simplified setup.",
  },
  {
    question: "Do I need to be physically present in the UAE to start?",
    answer:
      "Not necessarily. Many free zones allow remote incorporation where documents can be attested and submitted digitally. However, you will need to visit the UAE for your Emirates ID and visa stamping. Flash Space coordinates the entire process so your visit is as short as possible.",
  },
  {
    question: "What are the ongoing costs after company formation?",
    answer:
      "Annual costs typically include trade license renewal, visa renewals, office lease, and optional services like accounting and PRO support. Flash Space provides a transparent cost breakdown upfront so there are no surprises.",
  },
  {
    question: "Does Flash Space help with opening a bank account?",
    answer:
      "Absolutely. We assist with corporate bank account opening at leading UAE banks including Emirates NBD, ADCB, Mashreq, and RAKBANK. We prepare your documentation and accompany you to the bank meeting to ensure a smooth process.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="text-primary">+</span> Common questions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-foreground leading-[1.15] tracking-tight mb-5">
              Everything you
              <br />
              need to know.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              Have a different question? Reach out to our team and we'll get
              back to you within 24 hours.
            </p>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-border/50"
                >
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
