import heroImg from "@/assets/hero-breakfast.jpg";
import logoImg from "@/assets/megs-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="MEGS Café Frühstück"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, hsl(120 15% 8% / 0.45) 0%, hsl(120 15% 6% / 0.82) 100%)" }}
      />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="flex justify-center mb-8 animate-fade-in">
          <img src={logoImg} alt="MEGS Café" className="w-28 h-28 object-contain" />
        </div>
        <p
          className="font-body text-xs tracking-[0.5em] uppercase mb-6 animate-fade-in"
          style={{ color: "hsl(110 10% 79%)" }}
        >
          Leipzig · Deutschland
        </p>
        <h1
          className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up"
          style={{ color: "hsl(45 14% 93%)" }}
        >
          Modernes Frühstück &
          <span className="block italic font-normal mt-1" style={{ color: "hsl(110 10% 79%)" }}>
            Specialty Coffee
          </span>
        </h1>
        <p
          className="font-body text-lg md:text-xl mb-10 max-w-xl mx-auto animate-fade-in-up delay-200"
          style={{ color: "hsl(45 14% 93% / 0.75)" }}
        >
          Kreative Brunch-Gerichte, hochwertige Zutaten und eine gemütliche Café-Atmosphäre im Herzen von Leipzig.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a
            href="#visit"
            className="font-body font-medium tracking-widest uppercase text-sm px-8 py-4 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ background: "hsl(45 14% 93%)", color: "hsl(120 15% 21%)" }}
          >
            MEGS Café besuchen
          </a>
          <a
            href="#menu"
            className="font-body font-medium tracking-widest uppercase text-sm px-8 py-4 rounded-full border transition-all duration-300 hover:bg-white/10"
            style={{ borderColor: "hsl(45 14% 93% / 0.5)", color: "hsl(45 14% 93%)" }}
          >
            Speisekarte entdecken
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
        <span className="font-body text-xs tracking-widest uppercase" style={{ color: "hsl(45 14% 93% / 0.45)" }}>Scrollen</span>
        <div className="w-px h-10" style={{ background: "hsl(45 14% 93% / 0.30)" }} />
      </div>
    </section>
  );
};

export default HeroSection;
