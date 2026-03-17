import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Best brunch in Leipzig! The food is beautifully presented and every bite is pure happiness.",
    author: "Julia M.",
    detail: "Regular since 2019",
  },
  {
    quote: "Amazing coffee and beautiful food. MEGS is the kind of place you want to come back to every weekend.",
    author: "Tobias K.",
    detail: "Google Review ★★★★★",
  },
  {
    quote: "Love the cozy atmosphere — it's warm, stylish, and the staff genuinely cares. My favourite spot in the city.",
    author: "Nina R.",
    detail: "Verified Guest",
  },
  {
    quote: "The Turkish eggs and flat white are absolutely divine. Nothing compares.",
    author: "Lena B.",
    detail: "Google Review ★★★★★",
  },
];

const StarRow = () => (
  <div className="flex gap-1 justify-center mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "hsl(var(--secondary))" }}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-28 px-6 overflow-hidden" style={{ background: "hsl(var(--background))" }}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16" style={{ background: "hsl(var(--primary))" }} />
            <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "hsl(var(--primary))" }}>
              Guest Stories
            </span>
            <div className="h-px w-16" style={{ background: "hsl(var(--primary))" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "hsl(var(--primary))" }}>
            What Our Guests Say
          </h2>
          <p className="font-body text-base mt-4 max-w-xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            Real words from the people who make MEGS what it is.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className="flex flex-col items-center text-center px-6 py-8 rounded-2xl"
              style={{
                background: "hsl(var(--card))",
                boxShadow: "var(--shadow-card)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Open quote mark */}
              <span
                className="font-display text-5xl leading-none mb-3 select-none"
                style={{ color: "hsl(var(--primary) / 0.15)" }}
              >
                "
              </span>
              <StarRow />
              <p
                className="font-body text-sm leading-relaxed mb-6 flex-1 italic"
                style={{ color: "hsl(var(--foreground))" }}
              >
                {t.quote}
              </p>
              <div>
                <p className="font-display text-base font-semibold" style={{ color: "hsl(var(--primary))" }}>
                  {t.author}
                </p>
                <p className="font-body text-xs mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating badge */}
        <div className="flex justify-center mt-14">
          <div
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full"
            style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: "hsl(var(--secondary))" }}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="font-body text-sm font-medium tracking-wide">
              4.9 · Rated Excellent on Google
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
