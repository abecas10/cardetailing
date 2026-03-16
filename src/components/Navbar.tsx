import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/revive-refine-logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Detailing", href: "#detailing" },
  { label: "Paint Correction", href: "#paint-correction" },
  { label: "Ceramic Coating", href: "#ceramic" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <a href="#hero" className="flex items-center" aria-label="Revive & Refine Auto Detailing home">
          <img
            src={logo}
            alt="Revive & Refine Auto Detailing logo"
            className="h-12 w-auto object-contain sm:h-14"
          />
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
            href="#contact"
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
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground font-display font-bold text-center px-6 py-3 rounded-sm mt-2"
              >
                BOOK NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
