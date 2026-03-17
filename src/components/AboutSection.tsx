import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-28 px-6" style={{ background: "hsl(var(--background))" }}>
      <div
        ref={ref}
        className={`container mx-auto max-w-4xl text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16" style={{ background: "hsl(var(--primary))" }} />
          <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "hsl(var(--primary))" }}>Unsere Geschichte</span>
          <div className="h-px w-16" style={{ background: "hsl(var(--primary))" }} />
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8" style={{ color: "hsl(var(--primary))" }}>
          Wo jeder Morgen
          <span className="block italic font-normal mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>wie ein Wochenende fühlt</span>
        </h2>

        <p className="font-body text-lg leading-relaxed mb-6" style={{ color: "hsl(var(--foreground))" }}>
          Das MEGS Café ist ein modernes Brunch-Lokal im Herzen von Leipzig – entstanden aus einer Leidenschaft für wunderschön zubereitetes Essen und außergewöhnlichen Kaffee. Wir beziehen unsere Zutaten mit Bedacht, bereiten alles mit Sorgfalt zu und servieren es in einem warmen, einladenden Raum, in dem die Zeit einfach stehen bleibt.
        </p>

        <p className="font-body text-lg leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
          Von frisch gebackenem Sauerteigbrot bis hin zu Specialty-Espresso-Getränken – jedes Detail spiegelt unsere Liebe zur Qualität wider. Ob für eine entspannte Arbeitssession, einen ausgedehnten Brunch mit Freunden oder einfach nur für den perfekten Flat White – MEGS ist dein Ort.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            { number: "2017", label: "Gegründet in Leipzig" },
            { number: "100%", label: "Täglich frische Zutaten" },
            { number: "♥",    label: "Mit Liebe gemacht" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "hsl(var(--primary))" }}
              >
                <span className="font-display text-xl font-bold" style={{ color: "hsl(var(--primary-foreground))" }}>
                  {item.number}
                </span>
              </div>
              <span className="font-body text-sm tracking-widest uppercase" style={{ color: "hsl(var(--muted-foreground))" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
