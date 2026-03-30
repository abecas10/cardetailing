import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import signatureImg from "@/assets/signature-detail.jpg";
import maintenanceImg from "@/assets/maintenance-detail.jpg";
import fullDetailImg from "@/assets/full-detail.jpg";
import ultimateDetailImg from "@/assets/ultimate-detail.jpg";

const services = [
  {
    title: "SIGNATURE DETAIL",
    description: "A thorough clean & protection package for first-time clients.",
    image: signatureImg,
    price: "£70",
    features: [
      "Exterior:",
      "Pre-Wash",
      "Wheel faces, barrels and tyres cleaned",
      "Inner arches scrubbed and flushed",
      "Safe hand wash",
      "Door shuts cleaned and flushed",
      "Ceramic sealant applied",
      "Soft towel dried",
      "Glass cleaned",
      "Tyres dressed",
      "Interior:",
      "Full vacuum of interior and boot area",
      "All interior surfaces cleaned and dressed",
      "Interior glass cleaned",
      "Scent applied",
      "Complementary air freshener"
    ],
    faqs: [
      { q: "Is this suitable for first-time customers?", a: "Yes — this is the perfect entry package for new clients." },
      { q: "Does it include polishing?", a: "No machine polishing, but it includes a gloss-enhancing finish." },
      { q: "How long does it take?", a: "Usually around 2–3 hours depending on the vehicle condition." },
    ],
  },
  {
    title: "MAINTENANCE DETAIL",
    description: "Keep on top of your vehicle with our Maintenance Package every 4 to 8 weeks after your Full Detail service. A Full Detail is required before joining our Maintenance Program.",
    image: maintenanceImg,
    price: "£50",
    features: [
      "Exterior:",
      "Pre-Wash",
      "Wheel faces, barrels and tyres cleaned",
      "Inner arches scrubbed and flushed",
      "Safe hand wash",
      "Door shuts cleaned and flushed",
      "Ceramic sealant applied",
      "Soft towel dried",
      "Glass cleaned",
      "Tyres dressed",
      "Interior:",
      "Full vacuum of interior and boot area",
      "All interior surfaces cleaned and dressed",
      "Interior glass cleaned",
      "Scent applied",
      "Complementary air freshener"
    ],
    faqs: [
      { q: "Who is this package for?", a: "This is for returning clients who have already had a Full or Ultimate Detail." },
      { q: "How often should I book it?", a: "Every 4–8 weeks to maintain the finish and protection." },
      { q: "Does it remove scratches?", a: "No — this is a maintenance clean, not a correction service." },
      { q: "Will it keep my ceramic coating working properly?", a: "Yes — it helps maintain and extend the life of your coating." },
    ],
  },
  {
    title: "FULL DETAIL",
    description: "The perfect initial service before moving on to our Maintenance Detail. Our Full Detail covers all aspects of your vehicle, including a deep clean of interior and exterior.",
    image: fullDetailImg,
    price: "£120",
    features: [
      "Exterior:",
      "Pre-Wash",
      "Wheel faces, barrels and tyres cleaned",
      "Inner arches scrubbed and flushed",
      "Safe hand wash",
      "Paint Decontamination: Iron & Tar Removal Treatment",
      "Door shuts cleaned and flushed",
      "Ceramic sealant applied",
      "Soft towel dried",
      "Glass cleaned",
      "Tyres dressed",
      "Interior:",
      "Full vacuum of interior and boot area",
      "All interior surfaces deep scrubbed and dressed",
      "Interior glass cleaned",
      "Floor mats and carpets shampooed, scrubbed, steames & extracted",
      "Upholstery shampooed, scrubbed, steamed & extracted",
      "Leather seats deep cleaned & conditioned",
      "Glass cleaned",
      "Scent applied",
      "Complementary air freshener"
    ],
    faqs: [
      { q: "What's the difference between this and a basic clean?", a: "This includes deep cleaning, decontamination, and protection — not just a wash." },
      { q: "Will my car look like new?", a: "It will look significantly improved, but deeper defects require paint correction." },
      { q: "How long does it take?", a: "Typically 4–6 hours." },
    ],
  },
  {
    title: "ULTIMATE DETAIL",
    description: "The perfect service to make your vehicle feel like it's truly yours! Our Ultimate Detail covers every aspect, including a deep clean of the interior (roof lining and seat belts), exterior (clay paintwork and gloss enhancement polish), and engine bay detail.",
    image: ultimateDetailImg,
    price: "£200",
    features: [
      "Exterior:",
      "Our ‘Full Detail’ package - Exterior",
      "+ Engine bay detail",
      "+ Clay paintwork",
      "+ Gloss enahancement polish (Non-Correctional)",
      "+ 6 weeks wax applied",
      "Interior:",
      "Our ‘Full Detail’ package - Interior",
      "+ Roof liner cleaned",
      "+ Seat belt cleaned"
    ],
    faqs: [
      { q: "Is this your best package?", a: "Yes — it's the most complete and detailed service we offer." },
      { q: "Does it remove scratches?", a: "Light imperfections can be improved, but for full removal we recommend paint correction." },
      { q: "Who is this for?", a: "Perfect for enthusiasts or anyone wanting near showroom condition." },
    ],
  },
];

const DetailingSection = () => {
  return (
    <section id="detailing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="Detailing Packages"
          title="COMPLETE CAR CARE"
          subtitle="From routine maintenance to the ultimate transformation, we have the right package for your vehicle."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailingSection;
