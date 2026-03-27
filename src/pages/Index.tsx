import MegsNavbar from "@/components/MegsNavbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SignatureBreakfastSection from "@/components/SignatureBreakfastSection";
import GallerySection from "@/components/GallerySection";
import VisitSection from "@/components/VisitSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <MegsNavbar />
      <HeroSection />
      <AboutSection />
      <SignatureBreakfastSection />
      <GallerySection />
      <VisitSection showReservationForm={false} />
      <FooterSection />
    </main>
  );
};

export default Index;
