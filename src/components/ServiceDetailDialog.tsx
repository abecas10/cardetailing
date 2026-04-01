import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface ServiceFAQ {
  q: string;
  a: string;
}

interface ServiceDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  price: string;
  features?: string[];
  faqs?: ServiceFAQ[];
}

const ServiceDetailDialog = ({
  open,
  onOpenChange,
  title,
  description,
  price,
  features,
  faqs,
}: ServiceDetailDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display font-black text-xl tracking-tight">
            {title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="inline-block bg-primary text-primary-foreground font-display font-bold text-xs px-3 py-1.5 rounded-sm">
            FROM {price}
          </div>

          {features && features.length > 0 && (
            <ul className="space-y-2">
              {features.map((f, i) => {
                const isHeader = f.endsWith(":");

                return (
                  <li
                    key={i}
                    className={`flex items-start gap-2 text-sm ${
                      isHeader
                        ? "text-primary font-bold uppercase tracking-widest mt-6 mb-2 first:mt-0"
                        : "text-muted-foreground"
                    }`}
                  >
                    {!isHeader && (
                      <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                    )}
                    {f}
                  </li>
                );
              })}
            </ul>
          )}

          {faqs && faqs.length > 0 && (
            <div className="pt-4">
              <p className="text-primary font-display font-bold text-xs tracking-[0.2em] uppercase mb-3">
                FAQ
              </p>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`sfaq-${i}`}
                    className="border border-border rounded-sm bg-secondary/50 px-4"
                  >
                    <AccordionTrigger className="font-display font-bold text-xs tracking-tight hover:no-underline hover:text-primary transition-colors py-3 text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailDialog;