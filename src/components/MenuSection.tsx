import { useEffect, useRef, useState } from "react";
import burrataImg from "@/assets/menu-burrata.jpg";
import smoothieImg from "@/assets/menu-smoothie-bowl.jpg";
import brownieImg from "@/assets/menu-brownie.jpg";
import macaronsImg from "@/assets/menu-macarons.jpg";
import turkishEggsImg from "@/assets/menu-turkish-eggs.jpg";

const dishes = [
  {
    image: turkishEggsImg,
    name: "Turkish Eggs",
    tag: "Signature",
    description: "Poached eggs on whipped labneh with chilli butter, roasted vegetables and sourdough toast.",
  },
  {
    image: burrataImg,
    name: "Burrata Toast",
    tag: "Savory",
    description: "Toasted sourdough with fresh burrata, cherry tomatoes, basil & balsamic.",
  },
  {
    image: smoothieImg,
    name: "Smoothie Bowl",
    tag: "Healthy",
    description: "Vibrant açaí base with seasonal fruits, granola, coconut & honey.",
  },
  {
    image: brownieImg,
    name: "Fudge Brownie",
    tag: "Dessert",
    description: "Our famous dense chocolate brownie — rich, fudgy and homemade daily.",
  },
  {
    image: macaronsImg,
    name: "Macarons",
    tag: "Patisserie",
    description: "French-style macarons in rotating seasonal flavours. Always a treat.",
  },
];

const MenuCard = ({ dish, delay }: { dish: typeof dishes[0]; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group cursor-default transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="overflow-hidden rounded-2xl mb-5 aspect-square shadow-card">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      {/* Tag */}
      <div className="mb-2">
        <span
          className="font-body text-xs tracking-[0.3em] uppercase px-3 py-1 rounded-full"
          style={{ background: "hsl(var(--secondary))", color: "hsl(var(--primary))" }}
        >
          {dish.tag}
        </span>
      </div>
      <h3 className="font-display text-xl font-semibold mt-3 mb-1" style={{ color: "hsl(var(--dark-fg))" }}>
        {dish.name}
      </h3>
      <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(var(--dark-muted))" }}>
        {dish.description}
      </p>
    </div>
  );
};

const MenuSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="menu" className="py-28 px-6" style={{ background: "hsl(var(--primary))" }}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16" style={{ background: "hsl(var(--secondary))" }} />
            <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "hsl(var(--secondary))" }}>What We Serve</span>
            <div className="h-px w-16" style={{ background: "hsl(var(--secondary))" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "hsl(var(--dark-fg))" }}>
            Menu Highlights
          </h2>
          <p className="font-body text-base mt-4 max-w-xl mx-auto" style={{ color: "hsl(var(--dark-muted))" }}>
            Every dish crafted with seasonal ingredients and genuine care.
          </p>
        </div>

        {/* Grid — 5 cards, responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {dishes.map((dish, i) => (
            <MenuCard key={dish.name} dish={dish} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
