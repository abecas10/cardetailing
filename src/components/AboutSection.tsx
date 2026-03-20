import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Check } from "lucide-react";

const bullets = [
  "4+ years professional experience",
  "Premium detailing products only",
  "Based in Glasgow",
  "Attention to every detail",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          label="Who We Are"
          title="About Us"
        />

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 text-center font-body"
            style={{ textWrap: "pretty" }}
          >
            At Revive &amp; Refine, we specialise in high-end car detailing, paint correction, and ceramic coating services across Glasgow. Fully equipped mobile detailing service, bringing professional results directly to your location. With years of hands-on experience and a passion for perfection, we treat every vehicle as if it were our own. From daily drivers to luxury and performance cars, our goal is simple — to restore, protect, and enhance every detail. Using only premium products from leading brands such as Koch Chemie, CarPro, Gtechniq, and DIY Detail, we deliver outstanding finishes with long-lasting protection and unmatched attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
          >
            {bullets.map((bullet, i) => (
              <motion.div
                key={bullet}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-foreground font-body text-sm font-medium">{bullet}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-foreground font-display font-bold text-lg md:text-xl tracking-tight"
          >
            Your car deserves more than a basic wash —{" "}
            <span className="text-primary">it deserves perfection.</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
