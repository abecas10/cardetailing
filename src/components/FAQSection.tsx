import SectionHeading from "./SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How long does a service take?",
    a: "Depending on the package, services can take anywhere from 1.5 hours up to a full day.",
  },
  {
    q: "Do you come to me?",
    a: "Yes — we offer fully mobile detailing services across Glasgow. We come to your location.",
  },
  {
    q: "Do I need to provide water or electricity?",
    a: "No — our van is fully equipped with water, power, and professional equipment.",
  },
  {
    q: "How do I book?",
    a: "Simply send us a message or book through our website. We'll confirm your appointment quickly.",
  },
  {
    q: "What products do you use?",
    a: "We use premium brands such as Koch Chemie, CarPro, Gtechniq, and more.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="FAQ"
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="Everything you need to know about our services."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-sm bg-card px-6"
              >
                <AccordionTrigger className="font-display font-bold text-sm tracking-tight hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
