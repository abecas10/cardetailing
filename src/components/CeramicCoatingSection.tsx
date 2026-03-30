import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ServiceDetailDialog from "./ServiceDetailDialog";
import ceramic1Img from "@/assets/ceramic-1year.jpg";
import ceramic3Img from "@/assets/ceramic-3year.jpg";
import ceramic5Img from "@/assets/ceramic-5year.jpg";
import ceramic8Img from "@/assets/ceramic-8year.jpg";
import interiorCeramicImg from "@/assets/interior-ceramic.jpg";

const ceramicFaqs = [
  { q: "What does ceramic coating do?", a: "It protects your paint, adds gloss, and makes the car easier to clean." },
  { q: "How long does it last?", a: "We offer coatings from 1 year up to 5+ years." },
  { q: "Do I need paint correction before coating?", a: "Recommended for best results, but not mandatory." },
  { q: "Is it better than wax?", a: "Yes — it is much more durable and long-lasting." },
];

const coatings = [
  {
    title: "2/3 YEAR COATING",
    chemical: "CarPro CQ UK 3.0",
    price: "£150",
    description: "A four-year ceramic coating delivers extended protection and a lasting glossy finish, shielding surfaces from dirt, water, and environmental contaminants while preserving the vehicle's shine and ease of maintenance for up to 4 years.",
    durability: "Up to 3+ Years",
    image: ceramic3Img,
    features: ["Protects from various environmental factors, such as UV rays, acid rain, & bird droppings", "Excellent resistant to scratches and swirl marks", "Prevent fading and oxidation over time", "Deep gloss", "Highly smooth feeling", "\"Self cleaning\" properties", "Durability: Up to 3+ Years (With good maintenance)"],
  },
  {
    title: "5 YEAR COATING",
    chemical: "DIY DETAIL 5 YEAR COATING",
    price: "£200",
    durability: "Up to 5+ Years",
    description: "A seven-year ceramic coating offers long-lasting protection and a deep, glossy finish, shielding surfaces from environmental damage, UV rays, and contaminants, while maintaining a like-new appearance for up to seven years.",
    image: ceramic5Img,
    features: [],
  },
  {
    title: "7/8 YEAR COATING",
    chemical: "DIY DETAIL 8 YEAR COATING",
    price: "£260",
    durability: "Up to 8+ Years",
    image: ceramic8Img,
    features: ["Crystal clear finish", "Maximum durability", "Ultimate protection"],
  },
];

const CeramicCoatingSection = () => {
  const [selectedCoating, setSelectedCoating] = useState<number | null>(null);

  return (
    <section id="ceramic" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="Ceramic Coating Protection"
          title="PERMANENT PROTECTION"
          subtitle="A permanent layer of protection with different variations of durability."
        />

        {/* CHANGED: Switched from grid to flex with justify-center */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {coatings.map((coating, i) => (
            <motion.div
              key={coating.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              // Added w-full and md:max-w-[320px] to ensure they don't grow too large while centered
              className="group relative overflow-hidden rounded-sm bg-card border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer w-full md:max-w-[320px]"
              onClick={() => setSelectedCoating(i)}
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
                <p className="text-muted-foreground text-xs mb-3">
                  {coating.description}
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

        {selectedCoating !== null && (
          <ServiceDetailDialog
            open={selectedCoating !== null}
            onOpenChange={(open) => !open && setSelectedCoating(null)}
            title={coatings[selectedCoating].title}
            description={`${coatings[selectedCoating].chemical} — Durability: ${coatings[selectedCoating].durability} \n\n ${coatings[selectedCoating].description}`}
            price={coatings[selectedCoating].price}
            features={coatings[selectedCoating].features}
            faqs={ceramicFaqs}
          />
        )}

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