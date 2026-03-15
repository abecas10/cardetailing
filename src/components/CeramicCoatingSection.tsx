import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ceramic1Img from "@/assets/ceramic-1year.jpg";
import ceramic3Img from "@/assets/ceramic-3year.jpg";
import ceramic5Img from "@/assets/ceramic-5year.jpg";
import ceramic8Img from "@/assets/ceramic-8year.jpg";
import interiorCeramicImg from "@/assets/interior-ceramic.jpg";

const coatings = [
  {
    title: "1 YEAR COATING",
    chemical: "CarPro Lite",
    price: "£140",
    durability: "Up to 1+ Year",
    image: ceramic1Img,
    features: ["High gloss", "\"Self cleaning\" properties", "UV & acid rain protection"],
  },
  {
    title: "2/3 YEAR COATING",
    chemical: "CarPro CQ UK 3.0",
    price: "£200",
    durability: "Up to 3+ Years",
    image: ceramic3Img,
    features: ["Deep gloss", "Highly smooth feeling", "\"Self cleaning\" properties"],
  },
  {
    title: "5 YEAR COATING",
    chemical: "DIY DETAIL 5 YEAR COATING",
    price: "£250",
    durability: "Up to 5+ Years",
    image: ceramic5Img,
    features: ["Crystal clear finish", "\"Self cleaning\" properties", "Scratch & swirl resistant"],
  },
  {
    title: "7/8 YEAR COATING",
    chemical: "DIY DETAIL 8 YEAR COATING",
    price: "£350",
    durability: "Up to 8+ Years",
    image: ceramic8Img,
    features: ["Crystal clear finish", "Maximum durability", "Ultimate protection"],
  },
];

const CeramicCoatingSection = () => {
  return (
    <section id="ceramic" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="Ceramic Coating Protection"
          title="PERMANENT PROTECTION"
          subtitle="A permanent layer of protection with different variations of durability. Preparation Required: Paint must be clean and swirl-free (we recommend paint correction before coating)."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {coatings.map((coating, i) => (
            <motion.div
              key={coating.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-sm bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={coating.image}
                  alt={coating.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="bg-primary text-primary-foreground font-display font-bold text-[10px] px-2 py-1 rounded-sm">
                    FROM {coating.price}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-black text-sm mb-1 tracking-tight group-hover:text-primary transition-colors">
                  {coating.title}
                </h3>
                <p className="text-primary/70 text-[10px] font-display font-bold tracking-wider mb-2">
                  {coating.chemical}
                </p>
                <p className="text-muted-foreground text-xs mb-3">
                  Durability: {coating.durability}
                </p>
                <ul className="space-y-1">
                  {coating.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                      <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interior Ceramic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <div className="relative h-72 lg:h-auto overflow-hidden rounded-sm">
            <img
              src={interiorCeramicImg}
              alt="Interior Ceramic Protection"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card/60 to-transparent" />
          </div>
          <div className="flex flex-col justify-center p-8 bg-card rounded-sm border border-border">
            <p className="text-primary font-display font-bold text-xs tracking-[0.3em] uppercase mb-3">
              Interior Protection
            </p>
            <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight mb-4">
              INTERIOR CERAMIC COATING
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Enhance and protect your vehicle's interior with our premium ceramic coating. This advanced protection forms an invisible barrier on leather, plastics, and fabrics, guarding against stains, UV damage, and daily wear while preserving the original look and feel of the materials.
            </p>
            <a
              href="#contact"
              className="self-start bg-primary text-primary-foreground font-display font-bold text-sm px-8 py-3 rounded-sm hover:bg-primary/90 transition-colors tracking-widest"
            >
              ENQUIRE NOW
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeramicCoatingSection;
