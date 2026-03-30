import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import engineBayImg from "@/assets/engine-bay.jpg";
import headlightImg from "@/assets/headlight-restoration.jpg";
import dechromeImg from "@/assets/dechrome.jpg";
import calipersImg from "@/assets/calipers-respray.jpg";
import headlightTintImg from "@/assets/headlight-tint.jpg";

const services = [
  {
    title: "ENGINE BAY DETAIL",
    description: "A deep cleanse of the engine bay, restoring a new factory finish.",
    image: engineBayImg,
    price: "£50",
  },
  {
    title: "HEADLIGHT RESTORATION",
    description: "Our Professional Headlight Restoration Services can renew headlights affected by oxidation, enhancing both their clarity and appearance. This not only improves light quality but also prevents potential NCT failure, ensuring safer driving conditions.",
    image: headlightImg,
    price: "£80",
  },
  {
    title: "DECHROME (CHROME DELETE)",
    description: "Transform the look of your vehicle with our professional Dechroming Service. Whether you want a cleaner, sportier, or more aggressive appearance, dechroming replaces the factory chrome trims with sleek, modern finishes like gloss black, satin black, or matte black.",
    image: dechromeImg,
    price: "£140",
  },
  {
    title: "BRAKE CALIPER RESPRAY",
    description: "Give your car a bold, sporty, and premium look with our Brake Caliper Painting service. Whether you’re looking to make a statement with bright red calipers or prefer a more subtle, elegant finish, custom-painted calipers instantly enhance the appearance of your vehicle.",
    image: calipersImg,
    price: "£140",
  },
  {
    title: "HEADLIGHT TINT / PPF", 
    description: "We offer four different shades of light tint, allowing you to customize your headlights and taillights to achieve the perfect look for your car. Whether you prefer a light smoke for a subtle touch or a darker shade for a bold, aggressive appearance, we have the right option for you. All shades are available at the same price, so you don’t need to decide in advance—you can pick your preferred shade on the day of your appointment.",
    image: headlightTintImg,
    price: "£60",
  },
];

const AdditionalServicesSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="additional" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="Additional Services"
          title="BEYOND DETAILING"
          subtitle="Complete your vehicle's transformation with our range of additional services."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              onClick={() => setSelected(i)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="bg-primary text-primary-foreground font-display font-bold text-[10px] px-2 py-1 rounded-sm mb-2 inline-block">
                    FROM {service.price}
                  </span>
                  <h3 className="font-display font-black text-base tracking-tight mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <Dialog open={true} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto bg-card border-border">
            <DialogHeader>
              <DialogTitle className="font-display font-black text-xl tracking-tight">
                {services[selected].title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
                {services[selected].description}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="rounded-sm overflow-hidden">
                <img
                  src={services[selected].image}
                  alt={services[selected].title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="inline-block bg-primary text-primary-foreground font-display font-bold text-xs px-3 py-1.5 rounded-sm">
                FROM {services[selected].price}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default AdditionalServicesSection;