import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import DetailingSection from "@/components/DetailingSection";
import PaintCorrectionSection from "@/components/PaintCorrectionSection";
import CeramicCoatingSection from "@/components/CeramicCoatingSection";
import AdditionalServicesSection from "@/components/AdditionalServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesOverview />
      <DetailingSection />
      <PaintCorrectionSection />
      <CeramicCoatingSection />
      <AdditionalServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
