import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ServicesOverview from "@/components/ServicesOverview";
import DetailingSection from "@/components/DetailingSection";
import PaintCorrectionSection from "@/components/PaintCorrectionSection";
import CeramicCoatingSection from "@/components/CeramicCoatingSection";
import AdditionalServicesSection from "@/components/AdditionalServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FAQSection from "@/components/FAQSection";
import ReviewsSection from "@/components/ReviewsSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ServicesOverview />
      <DetailingSection />
      <PaintCorrectionSection />
      <CeramicCoatingSection />
      <AdditionalServicesSection />
      <WhyChooseUsSection />
      <FAQSection />
      <ReviewsSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
