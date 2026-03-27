import { useEffect, useRef, useState } from "react";
const menuImages = [
  { image: "/images/menu-breakfast-1.jpg", name: "Breakfast Menu 1" },
  { image: "/images/menu-breakfast-2.jpg", name: "Breakfast Menu 2" },
  { image: "/images/menu-breakfast-extras.jpg", name: "Breakfast Extras" },
];

const MenuSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="menu" className="py-28 px-6" style={{ background: "hsl(var(--primary))" }}>
      <div className="container mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16" style={{ background: "hsl(var(--secondary))" }} />
            <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "hsl(var(--secondary))" }}>Was wir servieren</span>
            <div className="h-px w-16" style={{ background: "hsl(var(--secondary))" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "hsl(var(--dark-fg))" }}>
            Unsere Highlights
          </h2>
          <p className="font-body text-base mt-4 max-w-xl mx-auto" style={{ color: "hsl(var(--dark-muted))" }}>
            Jedes Gericht mit saisonalen Zutaten und echter Sorgfalt zubereitet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuImages.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setSelectedImage(item.image)}
              className={`group overflow-hidden rounded-2xl shadow-card transition-all duration-700 text-left ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-full max-w-full object-cover aspect-[4/5] transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
            role="button"
            aria-label="Lightbox schließen"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
                setSelectedImage(null);
              }
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 rounded-full px-3 py-1 text-sm"
              style={{ color: "hsl(var(--dark-fg))", background: "hsl(120 15% 21% / 0.75)" }}
              aria-label="Lightbox schließen"
            >
              Schließen
            </button>
            <img
              src={selectedImage}
              alt="Vergrößerte Speisekarte"
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
