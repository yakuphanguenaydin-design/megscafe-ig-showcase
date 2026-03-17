import { useEffect, useRef, useState } from "react";

const VisitSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="visit" style={{ background: "hsl(var(--primary))" }}>
      <div
        ref={ref}
        className={`container mx-auto max-w-6xl py-28 px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16" style={{ background: "hsl(var(--secondary))" }} />
            <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "hsl(var(--secondary))" }}>Besuche uns</span>
            <div className="h-px w-16" style={{ background: "hsl(var(--secondary))" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "hsl(var(--dark-fg))" }}>
            Komm und sitz bei uns
          </h2>
          <p className="font-body text-base mt-4" style={{ color: "hsl(var(--dark-muted))" }}>
            Wir freuen uns auf dich. Hier findest du uns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {/* Adresse */}
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
              style={{ background: "hsl(120 14% 28%)", color: "hsl(var(--secondary))" }}
            >
              ◎
            </div>
            <h3 className="font-display text-xl font-semibold" style={{ color: "hsl(var(--dark-fg))" }}>Adresse</h3>
            <p className="font-body text-base leading-relaxed" style={{ color: "hsl(var(--dark-muted))" }}>
              Karl-Heine-Straße<br />
              Leipzig, Deutschland
            </p>
            <a
              href="https://maps.google.com/?q=Karl-Heine-Straße+Leipzig"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-medium tracking-widest uppercase underline underline-offset-4 transition-opacity hover:opacity-60"
              style={{ color: "hsl(var(--secondary))" }}
            >
              Route planen
            </a>
          </div>

          {/* Öffnungszeiten */}
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
              style={{ background: "hsl(120 14% 28%)", color: "hsl(var(--secondary))" }}
            >
              ◷
            </div>
            <h3 className="font-display text-xl font-semibold" style={{ color: "hsl(var(--dark-fg))" }}>Öffnungszeiten</h3>
            <div className="font-body text-base space-y-1" style={{ color: "hsl(var(--dark-muted))" }}>
              <div className="flex justify-between gap-10">
                <span>Täglich</span>
                <span className="font-medium" style={{ color: "hsl(var(--dark-fg))" }}>08:00 – 16:00</span>
              </div>
            </div>
            <p className="font-body text-xs mt-1" style={{ color: "hsl(var(--dark-muted) / 0.7)" }}>
              Küche schließt 15:30 · Letzter Kaffee 15:50
            </p>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
              style={{ background: "hsl(120 14% 28%)", color: "hsl(var(--secondary))" }}
            >
              ◈
            </div>
            <h3 className="font-display text-xl font-semibold" style={{ color: "hsl(var(--dark-fg))" }}>Kontakt</h3>
            <div className="font-body text-base space-y-2" style={{ color: "hsl(var(--dark-muted))" }}>
              <p>
                <a
                  href="mailto:hallo@megscafe.de"
                  className="transition-opacity hover:opacity-70"
                  style={{ color: "hsl(var(--dark-fg))" }}
                >
                  hallo@megscafe.de
                </a>
              </p>
              <p>
                <a
                  href="tel:+493412345678"
                  className="transition-opacity hover:opacity-70"
                  style={{ color: "hsl(var(--dark-fg))" }}
                >
                  +49 341 234 5678
                </a>
              </p>
            </div>
            <a
              href="https://instagram.com/megscafe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-medium tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{ background: "hsl(var(--dark-fg))", color: "hsl(var(--primary))" }}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              @megscafe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
