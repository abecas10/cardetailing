import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";

const BOOKING_URL = "https://calendar.app.google/e9cxrNKQW64LAgWJ6";

const BookingSection = () => {
  return (
    <section id="booking" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-primary font-display font-bold text-xs tracking-[0.3em] uppercase mb-3">
            Book Your Appointment
          </p>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight mb-4">
            SCHEDULE YOUR<br />DETAIL TODAY
          </h2>
          <p className="text-muted-foreground text-base mb-10">
            Pick a time that works for you and we'll take care of the rest.
          </p>

          <div className="bg-background border border-border rounded-sm p-8 mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <p className="text-primary font-display font-bold text-xs tracking-[0.2em] uppercase">
                Business Hours
              </p>
            </div>
            <p className="text-foreground font-display font-bold text-2xl mb-1">
              9:00 AM — 5:00 PM
            </p>
            <p className="text-muted-foreground text-sm">
              Monday to Sunday
            </p>
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-bold text-sm px-10 py-4 rounded-sm hover:bg-primary/90 transition-all duration-300 glow-lime tracking-widest"
          >
            <Calendar className="h-5 w-5" />
            BOOK NOW
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
