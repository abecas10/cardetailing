import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ label, title, subtitle }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="text-primary font-display font-bold text-xs tracking-[0.3em] uppercase mb-3">
        {label}
      </p>
      <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-base">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-16 h-0.5 bg-primary/50" />
    </motion.div>
  );
};

export default SectionHeading;
