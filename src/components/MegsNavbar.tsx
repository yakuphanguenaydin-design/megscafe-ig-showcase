import { useState, useEffect } from "react";

const MegsNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Menu", href: "#menu" },
    { label: "Drinks", href: "#drinks" },
    { label: "Gallery", href: "#gallery" },
    { label: "Visit Us", href: "#visit" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-2xl font-bold tracking-wide"
          style={{ color: scrolled ? "hsl(var(--primary))" : "#fff" }}
        >
          MEGS
          <span className="block text-xs font-body font-normal tracking-[0.25em] uppercase" style={{ color: scrolled ? "hsl(var(--secondary))" : "hsl(var(--secondary))" }}>
            Café Leipzig
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-body text-sm font-medium tracking-widest uppercase transition-colors duration-200 hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            className="font-body text-sm font-medium tracking-widest uppercase px-5 py-2 rounded-full transition-all duration-300 hover:opacity-90"
            style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
          >
            Book a Table
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-foreground" : "bg-white"}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-foreground" : "bg-white"}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-foreground" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border py-6 px-6 flex flex-col gap-4 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm font-medium tracking-widest uppercase text-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default MegsNavbar;
