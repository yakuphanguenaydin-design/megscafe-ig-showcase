import MegsNavbar from "@/components/MegsNavbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import DrinksSection from "@/components/DrinksSection";
import GallerySection from "@/components/GallerySection";
import VisitSection from "@/components/VisitSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <MegsNavbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <DrinksSection />
      <GallerySection />
      <VisitSection />
    </main>
  );
};

export default Index;
