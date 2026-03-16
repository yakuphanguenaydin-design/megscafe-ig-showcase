import { useEffect, useRef, useState } from "react";
import espressoImg from "@/assets/drink-espresso-tonic.jpg";
import matchaImg from "@/assets/drink-matcha.jpg";

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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16" style={{ background: "hsl(var(--primary))" }} />
            <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "hsl(var(--primary))" }}>Specialty Drinks</span>
            <div className="h-px w-16" style={{ background: "hsl(var(--primary))" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "hsl(var(--primary))" }}>
            Crafted with Care
          </h2>
        </div>

        {/* Split layout */}
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Left — photos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl shadow-card aspect-[3/4]">
              <img
                src={espressoImg}
                alt="Espresso Tonic"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-card aspect-[3/4] mt-8">
              <img
                src={matchaImg}
                alt="Iced Matcha Latte"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right — text */}
          <div className="flex flex-col justify-center lg:pl-4">
            <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "hsl(var(--secondary-foreground) / 0.6)" }}>
              Coffee Philosophy
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{ color: "hsl(var(--primary))" }}>
              Beyond the <span className="italic font-normal">Ordinary Cup</span>
            </h3>
            <p className="font-body text-base leading-relaxed mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
              At MEGS, we take specialty coffee seriously. Every drink on our menu is crafted using carefully sourced single-origin beans, precise extraction and a genuine love for the craft.
            </p>

            <div className="space-y-6">
              {[
                {
                  name: "Espresso Tonic",
                  desc: "A bold shot of espresso layered over sparkling tonic water with a citrus peel garnish. Refreshing, complex and utterly unique.",
                },
                {
                  name: "Iced Matcha Latte",
                  desc: "Ceremonial-grade Japanese matcha whisked to a vibrant green, poured over cold oat milk and ice. Earthy, smooth, beautiful.",
                },
                {
                  name: "MEGS Flat White",
                  desc: "Our signature — perfectly extracted espresso with silky microfoam latte art. The daily ritual for our regulars.",
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
