import { useEffect, useRef, useState } from "react";
import latteImg from "@/assets/atmosphere-latte.jpg";
import outdoorImg from "@/assets/atmosphere-outdoor.jpg";
import burrataImg from "@/assets/menu-burrata.jpg";
import smoothieImg from "@/assets/menu-smoothie-bowl.jpg";
import espressoImg from "@/assets/drink-espresso-tonic.jpg";
import matchaImg from "@/assets/drink-matcha.jpg";

const photos = [
  { src: latteImg,    alt: "Latte Art",          tall: true  },
  { src: burrataImg,  alt: "Burrata Toast",       tall: false },
  { src: espressoImg, alt: "Espresso Tonic",      tall: false },
  { src: outdoorImg,  alt: "Café Außenbereich",   tall: true  },
  { src: smoothieImg, alt: "Smoothie Bowl",       tall: false },
  { src: matchaImg,   alt: "Iced Matcha Latte",   tall: false },
];

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-28 px-6" style={{ background: "hsl(var(--muted))" }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16" style={{ background: "hsl(var(--primary))" }} />
            <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "hsl(var(--primary))" }}>Atmosphäre</span>
            <div className="h-px w-16" style={{ background: "hsl(var(--primary))" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "hsl(var(--primary))" }}>
            Komm so wie du bist
          </h2>
          <p className="font-body text-base mt-4 max-w-xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            Ein Einblick in die MEGS-Welt – Essen, Drinks und die Menschen, die sie lieben.
          </p>
        </div>

        <div
          ref={ref}
          className={`columns-2 md:columns-3 gap-4 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          {photos.map((photo, i) => (
            <div
              key={photo.alt}
              className="break-inside-avoid mb-4 overflow-hidden rounded-2xl shadow-card group"
              style={{ transitionDelay: `${i * 80}ms`, transition: "opacity 0.7s, transform 0.7s" }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${photo.tall ? "aspect-[3/4]" : "aspect-square"}`}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://instagram.com/megscafe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Folge @megscafe
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
