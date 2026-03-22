import logoImg from "@/assets/megs-logo.png";

const FooterSection = () => {
  return (
    <footer style={{ background: "hsl(var(--primary))" }}>
      <div className="h-px w-full" style={{ background: "hsl(120 12% 28%)" }} />

      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Marke */}
          <div className="flex flex-col gap-5">
            <a href="/" className="flex items-center gap-3 group w-fit">
              <img
                src={logoImg}
                alt="MEGS Café"
                className="h-12 w-12 object-contain opacity-90 transition-opacity group-hover:opacity-100"
              />
              <span
                className="font-display text-xl font-bold tracking-wide"
                style={{ color: "hsl(var(--dark-fg))" }}
              >
                MEGS Café
              </span>
            </a>
            <p
              className="font-body text-sm leading-relaxed max-w-xs"
              style={{ color: "hsl(var(--dark-muted))" }}
            >
              Modernes Frühstück & Specialty Coffee im Herzen von Leipzig. Eine gemütliche Ecke, wo sich jeder Morgen wie ein Wochenende anfühlt.
            </p>
            <a
              href="https://www.instagram.com/megs_leipzig/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-70 w-fit"
              style={{ color: "hsl(var(--secondary))" }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @megs_leipzig
            </a>
          </div>

          {/* Besuche uns */}
          <div className="flex flex-col gap-4">
            <h4
              className="font-body text-xs tracking-[0.35em] uppercase font-semibold mb-2"
              style={{ color: "hsl(var(--secondary))" }}
            >
              Besuche uns
            </h4>
            <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(var(--dark-muted))" }}>
              Karl-Heine-Str. 56b<br />
              Leipzig, Deutschland
            </p>
            <a
              href="https://maps.google.com/?q=Karl-Heine-Str.+56b+Leipzig"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs font-medium tracking-widest uppercase underline underline-offset-4 transition-opacity hover:opacity-60 w-fit"
              style={{ color: "hsl(var(--secondary))" }}
            >
              In Maps öffnen
            </a>
          </div>

          {/* Öffnungszeiten */}
          <div className="flex flex-col gap-4">
            <h4
              className="font-body text-xs tracking-[0.35em] uppercase font-semibold mb-2"
              style={{ color: "hsl(var(--secondary))" }}
            >
              Öffnungszeiten
            </h4>
            <div className="space-y-2 font-body text-sm" style={{ color: "hsl(var(--dark-muted))" }}>
              <div className="flex justify-between gap-8">
                <span>Täglich</span>
                <span className="font-medium" style={{ color: "hsl(var(--dark-fg))" }}>08:00 – 16:00 Uhr</span>
              </div>
            </div>
            <p className="font-body text-xs mt-2" style={{ color: "hsl(var(--dark-muted) / 0.7)" }}>
              Küche schließt 15:30 · Letzter Kaffee 15:50
            </p>
          </div>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "hsl(120 12% 28%)" }}>
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs" style={{ color: "hsl(var(--dark-muted))" }}>
            © {new Date().getFullYear()} MEGS Café Leipzig · Alle Rechte vorbehalten
          </p>
          <p className="font-body text-xs" style={{ color: "hsl(var(--dark-muted) / 0.6)" }}>
            Mit ♥ gemacht in Leipzig
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
