import { useEffect, useRef, useState } from "react";

const gingerTeaImg = "/images/ginger-tea-drink.jpg";

const DrinksSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="drinks" className="py-28 px-6" style={{ background: "hsl(var(--background))" }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16" style={{ background: "hsl(var(--primary))" }} />
            <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "hsl(var(--primary))" }}>Specialty Drinks</span>
            <div className="h-px w-16" style={{ background: "hsl(var(--primary))" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "hsl(var(--primary))" }}>
            Mit Leidenschaft zubereitet
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="overflow-hidden rounded-2xl shadow-card aspect-[4/5]">
            <img
              src={gingerTeaImg}
              alt="Ginger Tea Drink"
              loading="lazy"
              className="w-full h-full max-w-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right — text */}
          <div className="flex flex-col justify-center lg:pl-4">
            <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "hsl(var(--secondary-foreground) / 0.6)" }}>
              Unsere Kaffee-Philosophie
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{ color: "hsl(var(--primary))" }}>
              Weit über die <span className="italic font-normal">gewöhnliche Tasse</span> hinaus
            </h3>
            <p className="font-body text-base leading-relaxed mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
              Bei MEGS nehmen wir Specialty Coffee ernst. Jedes Getränk auf unserer Karte wird mit sorgfältig ausgewählten Single-Origin-Bohnen, präziser Extraktion und echter Leidenschaft für das Handwerk zubereitet.
            </p>

            <div className="space-y-6">
              {[
                {
                  name: "Ginger Tea Drink",
                  desc: "Frischer Ingweraufguss mit leichter Schärfe, Zitrusnote und angenehmer Wärme.",
                },
                {
                  name: "MEGS Flat White",
                  desc: "Unser Signature-Drink – perfekt extrahierter Espresso mit samtigem Mikroschaum und Latte-Art. Das tägliche Ritual unserer Stammgäste.",
                },
                {
                  name: "Seasonal Tea Special",
                  desc: "Wechselnde Teekreationen mit Kräutern und Gewürzen, abgestimmt auf die Jahreszeit.",
                },
              ].map((drink) => (
                <div
                  key={drink.name}
                  className="border-l-2 pl-5 py-1"
                  style={{ borderColor: "hsl(var(--primary))" }}
                >
                  <h4 className="font-display text-lg font-semibold mb-1" style={{ color: "hsl(var(--primary))" }}>
                    {drink.name}
                  </h4>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {drink.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrinksSection;
