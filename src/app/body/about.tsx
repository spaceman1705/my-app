import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--violet)" }}>
            About Me
          </p>
          <h2
            className="text-4xl font-extrabold"
            style={{ color: "var(--text)", letterSpacing: -1 }}
          >
            Kenalan sama{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #14b8a6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              saya
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="flex justify-center md:justify-start">
            <div
              className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden group"
              style={{
                boxShadow: "0 24px 64px rgba(20,184,166,0.15)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Image
                src="/pp.webp"
                alt="Foto Profil"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div
                className="absolute inset-0 transition-all duration-500 group-hover:opacity-0"
                style={{ background: "rgba(4,13,18,0.4)" }}
              />
            </div>
          </div>
          <div>
            <h3
              className="text-2xl font-extrabold mb-1"
              style={{ color: "var(--text)" }}
            >
              Awang Syahsiah Adyatma
            </h3>

            <p
              className="text-sm font-bold mb-6 uppercase tracking-widest"
              style={{
                background: "linear-gradient(135deg, #14b8a6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Full Stack Developer
            </p>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--muted)", lineHeight: 1.9 }}
            >
              Hi, I&apos;m Awang — a passionate Full Stack Web Developer who loves
              to turn ideas into interactive experiences. Bagi saya, kode bukan
              hanya barisan logika, tapi medium untuk bercerita dan menghadirkan
              sesuatu yang bermakna. Dengan setiap baris kode, saya berusaha
              menciptakan solusi yang tidak hanya berfungsi dengan baik, tapi
              juga memberikan kesan yang menyenangkan bagi penggunanya.
            </p>

            <div
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {[
                { label: "Email", value: "asyahsiah4@gmail.com" },
                { label: "Location", value: "Sidoarjo, Jawa Timur, Indonesia" },
                { label: "Status", value: "Open to work" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span
                    className="text-xs font-bold uppercase tracking-widest w-20 flex-shrink-0"
                    style={{ color: "var(--soft)" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="w-px h-4"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-6 flex-wrap">
              <Link
                href="/cv.pdf"
                download
                className="px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-80"
                style={{
                  background: "linear-gradient(135deg, #14b8a6, #06b6d4)",
                  boxShadow: "0 4px 14px rgba(20,184,166,0.3)",
                  textDecoration: "none",
                }}
              >
                Download CV ↓
              </Link>
              <Link
                href="/#contact"
                className="px-5 py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "var(--text)",
                  textDecoration: "none",
                }}
              >
                Hubungi Saya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}