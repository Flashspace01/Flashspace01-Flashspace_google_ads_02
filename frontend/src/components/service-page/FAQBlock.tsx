import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@/data/pageContent";

interface FAQBlockProps {
  faqs: FAQ[];
}

export const FAQBlock = ({ faqs }: FAQBlockProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-foreground mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-border rounded-xl px-5 data-[state=open]:bg-muted/30"
          >
            <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
