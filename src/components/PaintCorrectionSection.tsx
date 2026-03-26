import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import glossImg from "@/assets/gloss-enhancement.jpg";
import oneStepImg from "@/assets/one-step-correction.jpg";
import twoStepImg from "@/assets/two-step-correction.jpg";

const services = [
  {
    title: "GLOSS ENHANCEMENT",
    description: "A gloss enhancement polish provides a brilliant, high-gloss finish that revitalises surfaces, enhancing their natural shine while offering protection against wear and tear.",
    image: glossImg,
    price: "£120",
    features: [
      "Ideally suited to those working within budget",
      "20% Defects removal",
      "Paint decontamination: Iron, Tar & Clay bar",
      "4-6 weeks ceramic sealant applied",
    ],
    faqs: [
      { q: "What is gloss enhancement?", a: "A single-stage machine polish to improve shine and reduce light swirls." },
      { q: "Does it remove all scratches?", a: "No — it improves the overall finish but doesn't remove deep scratches." },
      { q: "How long does it last?", a: "Results last depending on maintenance and driving conditions." },
    ],
  },
  {
    title: "1 STEP CORRECTION",
    description: "Efficiently removes minor scratches, swirls, and imperfections from your vehicle's paintwork, restoring clarity and shine with a smooth, glossy finish.",
    image: oneStepImg,
    price: "£200",
    features: [
      "Ideally suited to relatively new used cars",
      "60%+ Defects removal",
      "Paintwork smooth like glass",
      "DA polishing machine applied",
    ],
    faqs: [
      { q: "What's the difference between 1 stage and 2 stage?", a: "1 stage improves gloss and removes light defects. 2 stage provides deeper correction and a higher-quality finish." },
      { q: "Will it remove all scratches?", a: "Most defects can be removed or significantly reduced, depending on depth." },
      { q: "Is it safe for my paint?", a: "Yes — we use professional techniques and measure paint thickness when needed." },
      { q: "How long does it take?", a: "From 1 full day up to 2 days depending on the level." },
    ],
  },
  {
    title: "2 STEP CORRECTION",
    description: "A meticulous process using cutting compound to remove imperfections, then polishing compound to refine for a flawless, mirror-like appearance.",
    image: twoStepImg,
    price: "£280",
    features: [
      "Suited for dull paintwork & medium scratches",
      "90% Defects removal",
      "Heavy cutting + finishing polish",
      "Mirror-like appearance",
    ],
    faqs: [
      { q: "What's the difference between 1 stage and 2 stage?", a: "1 stage improves gloss and removes light defects. 2 stage provides deeper correction and a higher-quality finish." },
      { q: "Will it remove all scratches?", a: "Most defects can be removed or significantly reduced, depending on depth." },
      { q: "Is it safe for my paint?", a: "Yes — we use professional techniques and measure paint thickness when needed." },
      { q: "How long does it take?", a: "From 1 full day up to 2 days depending on the level." },
    ],
  },
];

const PaintCorrectionSection = () => {
  return (
    <section id="paint-correction" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="Paint Enhancement & Correction"
          title="FLAWLESS FINISH"
          subtitle="Removing defects and imperfections from the surface of the paint. Increase gloss and clarity of paintwork."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaintCorrectionSection;
