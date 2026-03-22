import MegsNavbar from "@/components/MegsNavbar";
import VisitSection from "@/components/VisitSection";
import FooterSection from "@/components/FooterSection";

const ReservationPage = () => {
  return (
    <main className="overflow-x-hidden">
      <MegsNavbar />
      <VisitSection showVisitDetails={false} />
      <FooterSection />
    </main>
  );
};

export default ReservationPage;
