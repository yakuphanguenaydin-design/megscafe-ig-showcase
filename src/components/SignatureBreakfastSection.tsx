import { useEffect, useRef, useState } from "react";

const dishes = [
  {
    image: "/images/sourdough-bread.jpg",
    title: "Sourdough Bread",
    description: "Frisch gebackener Sauerteig mit knuspriger Kruste und luftiger Krume.",
  },
  {
    image: "/images/matcha-marble-cake.jpg",
    title: "Matcha Marble Cake",
    description: "Saftiger Marmorkuchen mit feiner Matcha-Note und cremiger Textur.",
  },
  {
    image: "/images/linzer-cake.jpg",
    title: "Linzer Cake",
    description: "Zarter Kuchen mit fruchtiger Füllung und klassischer Linzer-Charakteristik.",
  },
  {
    image: "/images/glutenfree-chocolate-cake.jpg",
    title: "Glutenfree Chocolate Cake",
    description: "Intensiver Schokoladenkuchen, glutenfrei und wunderbar weich gebacken.",
  },
];

const SignatureBreakfastSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-28 px-6" style={{ background: "hsl(var(--muted))" }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16" style={{ background: "hsl(var(--primary))" }} />
            <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "hsl(var(--primary))" }}>
              Signature Breakfast
            </span>
            <div className="h-px w-16" style={{ background: "hsl(var(--primary))" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "hsl(var(--primary))" }}>
            Unsere Frühstücks-Favoriten
          </h2>
          <p className="font-body text-base mt-4 max-w-xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            Handgemacht, saisonal gedacht und für entspannte Morgen serviert.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {dishes.map((dish, index) => (
            <article
              key={dish.title}
              className="bg-white rounded-2xl overflow-hidden shadow-card"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.title}
                  loading="lazy"
                  className="w-full h-full max-w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "hsl(var(--primary))" }}>
                  {dish.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureBreakfastSection;
