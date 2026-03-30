import { useState } from "react";
import { MessageCircle } from "lucide-react";
import QuoteDialog from "./QuoteDialog";

const FloatingQuoteButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-6 z-40 flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold text-xs tracking-widest px-5 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
      >
        <MessageCircle className="h-4 w-4" />
        GET A QUICK QUOTE
      </button>
      <QuoteDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default FloatingQuoteButton;
