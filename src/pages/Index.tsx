import MegsNavbar from "@/components/MegsNavbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import DrinksSection from "@/components/DrinksSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisitSection from "@/components/VisitSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <MegsNavbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <DrinksSection />
      <GallerySection />
      <TestimonialsSection />
      <VisitSection />
      <FooterSection />
    </main>
  );
};

export default Index;
