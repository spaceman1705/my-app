"use client";

export default function HeroClass() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none z-0">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="mx-8 text-[6rem] md:text-[9rem] font-extrabold tracking-tight"
              style={{ color: "var(--marquee-color)" }}
            >
              AWANG SYAHSIAH
            </span>
          ))}
        </div>
      </div>
      <div className="z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
          style={{ color: "var(--text)", letterSpacing: -2 }}
        >
          Hai, saya{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #14b8a6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Awang
          </span>
        </h1>

        <p
          className="text-lg md:text-xl font-medium mb-10"
          style={{ color: "var(--muted)" }}
        >
          Saya seorang{" "}
          <span style={{ color: "var(--text)", fontWeight: 700 }}>
            Full Stack Developer
          </span>{" "}
          yang passionate membangun produk web yang cepat dan indah.
        </p>

        <div className="flex gap-3 flex-wrap justify-center md:justify-start">
          <a
            href="/#portfolio"
            className="px-6 py-3 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-80"
            style={{
              background: "linear-gradient(135deg, #14b8a6, #06b6d4)",
              boxShadow: "0 4px 14px rgba(20,184,166,0.3)",
              textDecoration: "none",
            }}
          >
            Lihat Proyek →
          </a>
          <a
            href="/#contact"
            className="px-6 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "var(--text)",
              textDecoration: "none",
            }}
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}