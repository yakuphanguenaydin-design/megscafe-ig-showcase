import { useState, useEffect } from "react";
import logoImg from "@/assets/megs-logo.png";

const MegsNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Speisekarte", href: "#menu"    },
    { label: "Getränke",    href: "#drinks"  },
    { label: "Galerie",     href: "#gallery" },
    { label: "Besuche uns", href: "#visit"   },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "hsl(120 15% 21% / 0.97)" : "hsl(120 15% 21% / 0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid hsl(120 12% 30%)" : "1px solid transparent",
      }}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="MEGS Café"
            className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm font-medium tracking-widest uppercase transition-all duration-200 hover:opacity-60"
              style={{ color: "hsl(var(--dark-fg))" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            className="font-body text-sm font-medium tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105 border"
            style={{
              background: "hsl(var(--dark-fg))",
              color: "hsl(var(--primary))",
              borderColor: "hsl(var(--dark-fg))",
            }}
          >
            Tisch reservieren
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <span className="block w-6 h-0.5 transition-all duration-300" style={{ background: "hsl(var(--dark-fg))" }} />
          <span className="block w-6 h-0.5 transition-all duration-300" style={{ background: "hsl(var(--dark-fg))" }} />
          <span className="block w-6 h-0.5 transition-all duration-300" style={{ background: "hsl(var(--dark-fg))" }} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden py-6 px-6 flex flex-col gap-5 animate-fade-in border-t"
          style={{ background: "hsl(120 15% 18%)", borderColor: "hsl(var(--dark-border))" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: "hsl(var(--dark-fg))" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            onClick={() => setMenuOpen(false)}
            className="font-body text-sm font-medium tracking-widest uppercase px-5 py-3 rounded-full text-center transition-all duration-300"
            style={{ background: "hsl(var(--dark-fg))", color: "hsl(var(--primary))" }}
          >
            Tisch reservieren
          </a>
        </div>
      )}
    </header>
  );
};

export default MegsNavbar;
