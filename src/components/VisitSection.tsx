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
    <section id="visit" style={{ background: "hsl(var(--background))" }}>
      {/* Top divider */}
      <div className="w-full h-px" style={{ background: "hsl(var(--border))" }} />

      <div
        ref={ref}
        className={`container mx-auto max-w-6xl py-28 px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16" style={{ background: "hsl(var(--secondary))" }} />
            <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "hsl(var(--secondary))" }}>Find Us</span>
            <div className="h-px w-16" style={{ background: "hsl(var(--secondary))" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "hsl(var(--primary))" }}>
            Come Sit With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {/* Address */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ background: "hsl(var(--muted))", color: "hsl(var(--primary))" }}>
              ◎
            </div>
            <h3 className="font-display text-xl font-semibold" style={{ color: "hsl(var(--primary))" }}>Address</h3>
            <p className="font-body text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Bloßstraße 33<br />
              04103 Leipzig<br />
              Germany
            </p>
            <a
              href="https://maps.google.com/?q=Bloßstraße+33+Leipzig"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-medium tracking-widest uppercase underline underline-offset-4 transition-opacity hover:opacity-60"
              style={{ color: "hsl(var(--primary))" }}
            >
              Get Directions
            </a>
          </div>

          {/* Opening hours */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ background: "hsl(var(--muted))", color: "hsl(var(--primary))" }}>
              ◷
            </div>
            <h3 className="font-display text-xl font-semibold" style={{ color: "hsl(var(--primary))" }}>Opening Hours</h3>
            <div className="font-body text-base space-y-1" style={{ color: "hsl(var(--muted-foreground))" }}>
              <div className="flex justify-between gap-10">
                <span>Mon – Fri</span>
                <span className="font-medium" style={{ color: "hsl(var(--foreground))" }}>8:00 – 17:00</span>
              </div>
              <div className="flex justify-between gap-10">
                <span>Saturday</span>
                <span className="font-medium" style={{ color: "hsl(var(--foreground))" }}>9:00 – 18:00</span>
              </div>
              <div className="flex justify-between gap-10">
                <span>Sunday</span>
                <span className="font-medium" style={{ color: "hsl(var(--foreground))" }}>9:00 – 16:00</span>
              </div>
            </div>
          </div>

          {/* Contact / Social */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ background: "hsl(var(--muted))", color: "hsl(var(--primary))" }}>
              ◈
            </div>
            <h3 className="font-display text-xl font-semibold" style={{ color: "hsl(var(--primary))" }}>Connect</h3>
            <div className="font-body text-base space-y-2" style={{ color: "hsl(var(--muted-foreground))" }}>
              <p>
                <a href="mailto:hello@megscafe.de" className="hover:underline transition-opacity hover:opacity-70" style={{ color: "hsl(var(--foreground))" }}>
                  hello@megscafe.de
                </a>
              </p>
              <p>
                <a href="tel:+493412345678" className="hover:underline transition-opacity hover:opacity-70" style={{ color: "hsl(var(--foreground))" }}>
                  +49 341 234 5678
                </a>
              </p>
            </div>
            <a
              href="https://instagram.com/megscafe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-medium tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 hover:opacity-90"
              style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              @megscafe
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 border-t" style={{ borderColor: "hsl(var(--border))" }}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-display text-lg font-semibold" style={{ color: "hsl(var(--primary))" }}>
            MEGS Café Leipzig
          </p>
          <p className="font-body text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            © {new Date().getFullYear()} MEGS Café · Bloßstraße 33, Leipzig · All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
