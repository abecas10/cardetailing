import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  features?: string[];
  index: number;
}

const ServiceCard = ({ title, description, image, price, features, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-sm bg-card border border-border hover:border-primary/30 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-primary text-primary-foreground font-display font-bold text-xs px-3 py-1.5 rounded-sm">
            FROM {price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-black text-lg mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
        {features && features.length > 0 && (
          <ul className="space-y-1.5">
            {features.slice(0, 4).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
