import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import signatureImg from "@/assets/signature-detail.jpg";
import maintenanceImg from "@/assets/maintenance-detail.jpg";
import fullDetailImg from "@/assets/full-detail.jpg";
import ultimateDetailImg from "@/assets/ultimate-detail.jpg";

const services = [
  {
    title: "SIGNATURE DETAIL",
    description: "A thorough clean & protection package for first-time clients. Covers every aspect of your vehicle's exterior and interior to deliver a showroom-ready finish.",
    image: signatureImg,
    price: "£70",
    features: [
      "Pre-wash, safe hand wash & ceramic sealant",
      "Wheels, barrels, tyres & inner arches cleaned",
      "Full interior vacuum, surfaces cleaned & dressed",
      "Glass cleaned, tyres dressed & scent applied",
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
      "Pre-wash & safe hand wash",
      "Wheel faces, barrels & tyres cleaned",
      "Ceramic sealant applied",
      "Full vacuum & interior surfaces cleaned",
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
      "Paint Decontamination: Iron & Tar Removal",
      "Floor mats & carpets shampooed & steamed",
      "Leather seats deep cleaned & conditioned",
      "Complementary air freshener",
    ],
    faqs: [
      { q: "What's the difference between this and a basic clean?", a: "This includes deep cleaning, decontamination, and protection — not just a wash." },
      { q: "Will my car look like new?", a: "It will look significantly improved, but deeper defects require paint correction." },
      { q: "How long does it take?", a: "Typically 4–6 hours." },
    ],
  },
  {
    title: "ULTIMATE DETAIL",
    description: "The perfect service to make your vehicle feel like it's truly yours! Covers every aspect, including interior deep clean, exterior clay paintwork, gloss enhancement polish, and engine bay detail.",
    image: ultimateDetailImg,
    price: "£200",
    features: [
      "Full Detail package included",
      "Engine bay detail",
      "Clay paintwork & gloss enhancement polish",
      "Roof liner & seat belt cleaned",
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
