import { motion } from "framer-motion";
import maintenanceImg from "@/assets/maintenance-detail.jpg";
import paintImg from "@/assets/paint-corrections.jpg";
import ceramicImg from "@/assets/ceramic-coating.jpg";
import engineImg from "@/assets/engine-bay.jpg";

const categories = [
  {
    title: "DETAILING PACKAGES",
    description: "Maintenance, Full & Ultimate Detail packages",
    image: maintenanceImg,
    href: "#detailing",
  },
  {
    title: "PAINT CORRECTION",
    description: "Gloss enhancement & multi-step correction",
    image: paintImg,
    href: "#paint-correction",
  },
  {
    title: "CERAMIC COATING",
    description: "1 to 8 year ceramic protection",
    image: ceramicImg,
    href: "#ceramic",
  },
  {
    title: "ADDITIONAL SERVICES",
    description: "Engine bay, dechrome, calipers & more",
    image: engineImg,
    href: "#additional",
  },
];

const ServicesOverview = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-bold text-xs tracking-[0.3em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight mb-4">
            OUR SERVICES
          </h2>
          <div className="mt-6 mx-auto w-16 h-0.5 bg-primary/50" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href={cat.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-80 overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent group-hover:from-background/90 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display font-black text-lg tracking-tight mb-1 group-hover:text-primary transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {cat.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-primary text-xs font-display font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  VIEW MORE →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
