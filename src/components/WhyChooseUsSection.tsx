import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, Sparkles, Eye, ThumbsUp, MapPin } from "lucide-react";

const reasons = [
  { icon: Award, label: "Professional results every time" },
  { icon: Sparkles, label: "High-quality products" },
  { icon: Eye, label: "Attention to detail" },
  { icon: ThumbsUp, label: "Customer satisfaction guaranteed" },
  { icon: MapPin, label: "Serving Glasgow & surrounding areas" },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-card/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          label="The Difference"
          title="Why Choose Us"
        />

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.label}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-[border-color,box-shadow] duration-300 hover:shadow-[0_0_24px_-6px_hsl(var(--primary)/0.12)]"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-display font-semibold text-sm tracking-wide">
                  {reason.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
