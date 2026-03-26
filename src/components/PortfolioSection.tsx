import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useState } from "react";

const portfolioItems = [
  {
    type: "video" as const,
    src: "/portfolio/video.mp4",
    alt: "",
  },
  {
    type: "video" as const,
    src: "/portfolio/video1.mp4",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/engine.png",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/boot.png",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/floor.png",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/backseat.png",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/img1.jpeg",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/img2.jpeg",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/img3.jpeg",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/img4.jpeg",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/img5.jpeg",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/img6.jpeg",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/img7.jpeg",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/img8.jpeg",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/img9.jpeg",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/img10.jpeg",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/img11.png",
    alt: "",
  },
  {
    type: "image" as const,
    src: "/portfolio/img12.png",
    alt: "",
  },
];

const PortfolioSection = () => {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="Our Work"
          title="PORTFOLIO"
          subtitle="Real results on real cars. See the difference professional detailing makes."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              onClick={() => setSelectedItem(item)}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover max-h-[350px] group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover h-[180px] md:h-[200px] group-hover:scale-105 transition-transform duration-700"
                />
              )}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500 flex items-end">
                <p className="p-3 text-foreground font-display text-xs font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "video" ? (
              <video
                src={selectedItem.src}
                muted
                autoPlay
                loop
                playsInline
                className="w-full max-h-[85vh] object-contain rounded-sm"
              />
            ) : (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="w-full max-h-[85vh] object-contain rounded-sm"
              />
            )}
            <p className="text-center text-muted-foreground text-sm mt-3 font-display tracking-wider">
              {selectedItem.alt}
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
