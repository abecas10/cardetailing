import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import QuoteDialog from "./QuoteDialog";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Detailing", href: "#detailing" },
  { label: "Ceramic Coating", href: "#ceramic" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-20 gap-4">
        <a href="#hero" className="min-w-0" aria-label="Revive & Refine Auto Detailing home">
          <div className="flex flex-col leading-none">
            <span className="truncate font-display text-base font-black tracking-[0.18em] text-foreground sm:text-lg lg:text-xl">
              REVIVE <span className="text-primary">&</span> REFINE
            </span>
            <span className="truncate pt-1 text-[0.58rem] font-body font-semibold uppercase tracking-[0.36em] text-muted-foreground sm:text-[0.68rem] lg:text-[0.72rem]">
              Auto Detailing
            </span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendar.app.google/e9cxrNKQW64LAgWJ6"
            target="_blank"
            rel="noreferrer"
            className="bg-primary text-primary-foreground font-display font-bold text-sm px-6 py-2.5 rounded-sm hover:bg-primary/90 transition-colors"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-display font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://calendar.app.google/e9cxrNKQW64LAgWJ6"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground font-display font-bold text-center px-6 py-3 rounded-sm mt-2"
              >
                BOOK NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </nav>
  );
};

export default Navbar;
