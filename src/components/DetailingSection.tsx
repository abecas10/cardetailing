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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailingSection;
