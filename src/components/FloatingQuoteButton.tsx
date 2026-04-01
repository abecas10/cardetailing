import { useState } from "react";
import { MessageCircle } from "lucide-react";
import QuoteDialog from "./QuoteDialog";

const FloatingQuoteButton = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setQuoteOpen(true)}
        className="fixed right-4 bottom-6 z-40 flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:opacity-90 transition-all hover:scale-105"
        aria-label="Get a quick quote"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default FloatingQuoteButton;
