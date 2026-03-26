import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Car } from "lucide-react";
import heroImg from "@/assets/ultimate-detail.jpg";
import QuoteDialog from "./QuoteDialog";

const HeroSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Professional car detailing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Mobile Detailing badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-display font-bold tracking-widest text-primary">
              <Car className="h-4 w-4" /> MOBILE AUTO DETAILING
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-display font-bold tracking-widest text-primary">
              <MapPin className="h-4 w-4" /> WE COME TO YOU
            </span>
          </div>

          <p className="text-primary font-display font-bold text-sm tracking-[0.3em] uppercase mb-6">
            Glasgow premium mobile car detailing
          </p>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6 tracking-tight">
            PERFECTION
            <br />
            IN EVERY
            <br />
            <span className="text-gradient-lime">DETAIL</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 font-body">
            Premium mobile car detailing, paint correction & ceramic coating services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="bg-primary text-primary-foreground font-display font-bold text-sm px-10 py-4 rounded-sm hover:bg-primary/90 transition-all duration-300 glow-lime tracking-widest"
          >
            EXPLORE SERVICES
          </a>
          <button
            onClick={() => setQuoteOpen(true)}
            className="border border-foreground/20 text-foreground font-display font-bold text-sm px-10 py-4 rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-300 tracking-widest"
          >
            GET A QUOTE
          </button>
        </motion.div>

        {/* Promo badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 inline-block border border-primary/30 bg-primary/5 px-6 py-3 rounded-sm"
        >
          <p className="text-primary font-display font-bold text-sm tracking-wide">
            🎉 10% OFF YOUR FIRST BOOKING
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-foreground/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>

      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </section>
  );
};

export default HeroSection;
