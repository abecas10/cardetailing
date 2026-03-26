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
    src: "/portfolio/img6.png",
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
  const [showAll, setShowAll] = useState(false);

  // Determine which items to show based on state (6 items initially)
  const displayedItems = showAll ? portfolioItems : portfolioItems.slice(0, 6);

  return (
    <section id="portfolio" className="py-24 bg-secondary">
      {/* Changed to max-w-7xl to prevent the grid from stretching too wide on massive monitors */}
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Our Work"
          title="PORTFOLIO"
          subtitle="Real results on real cars. See the difference professional detailing makes."
        />

        {/* Increased columns to lg:grid-cols-5 and gap to gap-4 to naturally shrink the items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {displayedItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.1 }}
              className={`group relative overflow-hidden rounded-sm cursor-pointer aspect-square ${
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
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500 flex items-end">
                <p className="p-3 text-foreground font-display text-xs font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.alt || "Portfolio Item"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More / See Less Button */}
        {portfolioItems.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 border border-foreground/20 hover:border-foreground/60 text-foreground font-display text-sm tracking-wider uppercase rounded-sm transition-colors duration-300"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
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