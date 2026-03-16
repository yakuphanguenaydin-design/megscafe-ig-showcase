import heroImg from "@/assets/hero-breakfast.jpg";
import logoImg from "@/assets/megs-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImg}
        alt="MEGS Café breakfast plate"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Forest-green tinted gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, hsl(127 18% 8% / 0.25) 0%, hsl(127 18% 6% / 0.70) 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Logo badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <img
            src={logoImg}
            alt="MEGS Café"
            className="w-24 h-24 object-contain rounded-full"
          />
        </div>
        <p className="font-body text-xs tracking-[0.4em] uppercase mb-6 animate-fade-in" style={{ color: "hsl(var(--secondary))" }}>
          Leipzig · Germany
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-white mb-6 animate-fade-in-up">
          Modern Breakfast &
          <span className="block italic font-normal mt-1" style={{ color: "hsl(var(--secondary))" }}>
            Specialty Coffee
          </span>
        </h1>
        <p className="font-body text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto animate-fade-in-up delay-200">
          Enjoy creative brunch dishes and great coffee at MEGS Café — your favourite morning spot in Leipzig.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a
            href="#visit"
            className="font-body font-medium tracking-widest uppercase text-sm px-8 py-4 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
          >
            Visit Us
          </a>
          <a
            href="#menu"
            className="font-body font-medium tracking-widest uppercase text-sm px-8 py-4 rounded-full border border-white/60 text-white transition-all duration-300 hover:bg-white/10"
          >
            Our Menu
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
        <span className="font-body text-xs tracking-widest uppercase text-white/50">Scroll</span>
        <div className="w-px h-10 bg-white/30" />
      </div>
    </section>
  );
};

export default HeroSection;
