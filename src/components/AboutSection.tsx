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
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16" style={{ background: "hsl(var(--secondary))" }} />
          <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "hsl(var(--secondary))" }}>Our Story</span>
          <div className="h-px w-16" style={{ background: "hsl(var(--secondary))" }} />
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8" style={{ color: "hsl(var(--primary))" }}>
          Where Every Morning
          <span className="block italic font-normal mt-1">Feels Like a Weekend</span>
        </h2>

        <p className="font-body text-lg leading-relaxed mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
          MEGS Café is a modern brunch spot in the heart of Leipzig, born from a passion for beautifully crafted food and exceptional coffee. We source our ingredients thoughtfully, prepare everything with care, and serve it in a warm, welcoming space where time slows down.
        </p>

        <p className="font-body text-lg leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
          From our freshly baked sourdough to our specialty espresso drinks — every detail reflects our love for quality. Whether you're here for a solo work session, a lazy brunch with friends, or just a perfect flat white, MEGS is your place.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            { number: "2017", label: "Founded in Leipzig" },
            { number: "100%", label: "Fresh Ingredients Daily" },
            { number: "♥", label: "Made with Love" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <span className="font-display text-4xl font-bold" style={{ color: "hsl(var(--primary))" }}>
                {item.number}
              </span>
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
