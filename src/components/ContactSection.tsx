import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-primary font-display font-bold text-xs tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight mb-4">
            READY TO TRANSFORM<br />YOUR VEHICLE?
          </h2>
          <p className="text-muted-foreground text-base mb-10">
            Contact us today to book your appointment or get a personalised quote for your vehicle.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-card border border-border rounded-sm p-6 text-center">
              <p className="text-primary font-display font-bold text-xs tracking-[0.2em] uppercase mb-2">
                Phone
              </p>
              <p className="text-foreground font-display font-bold text-lg">
                [unknown information]
              </p>
            </div>
            <div className="bg-card border border-border rounded-sm p-6 text-center">
              <p className="text-primary font-display font-bold text-xs tracking-[0.2em] uppercase mb-2">
                Email
              </p>
              <p className="text-foreground font-display font-bold text-lg">
                [unknown information]
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-sm p-6 mb-10">
            <p className="text-primary font-display font-bold text-xs tracking-[0.2em] uppercase mb-2">
              Location
            </p>
            <p className="text-foreground font-display font-bold text-lg mb-1">
              Glasgow, Scotland
            </p>
            <p className="text-muted-foreground text-sm">
              [unknown information]
            </p>
          </div>

          <div className="bg-card border border-primary/20 rounded-sm p-6">
            <p className="text-primary font-display font-bold text-xs tracking-[0.2em] uppercase mb-2">
              Opening Hours
            </p>
            <p className="text-muted-foreground text-sm">
              [unknown information]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
