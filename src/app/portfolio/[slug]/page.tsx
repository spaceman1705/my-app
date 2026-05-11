import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto py-24 px-6">

        <div className="mb-10">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
            style={{ color: "var(--muted)", textDecoration: "none" }}
          >
            <ArrowLeft size={18} />
            <span className="font-semibold text-sm">Back to Portfolio</span>
          </Link>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden mb-6" style={{ height: 420 }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
          <div className="mb-8">
            <h1
              className="text-3xl font-extrabold mb-2"
              style={{ color: "var(--text)", letterSpacing: -1 }}
            >
              {project.title}
            </h1>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              {project.description}
            </p>
            {project.year && (
              <span className="text-xs mt-1 inline-block" style={{ color: "var(--soft)" }}>
                {project.year}
              </span>
            )}
          </div>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-lg"
                style={{
                  background: "rgba(124,58,237,0.08)",
                  color: "var(--violet)",
                  border: "1px solid rgba(124,58,237,0.18)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          className="rounded-2xl p-7 mb-8"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="text-lg font-bold mb-4" style={{ color: "var(--text)" }}>
            Tentang Project
          </h2>
          <p
            className="text-sm leading-relaxed whitespace-pre-line"
            style={{ color: "var(--muted)", lineHeight: 1.9 }}
          >
            {project.details}
          </p>
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4" style={{ color: "var(--text)" }}>
              Screenshots
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {project.screenshots.map((src, i) => (
                <div
                  key={i}
                  className="relative rounded-xl overflow-hidden"
                  style={{ height: 200 }}
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 flex-wrap">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "var(--text)",
              border: "1px solid rgba(255,255,255,0.15)",
              textDecoration: "none",
            }}
          >
            <Github size={16} />
            GitHub Repo
          </a>

          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-80"
              style={{
                background: "linear-gradient(135deg, #14b8a6, #06b6d4)",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(20,184,166,0.3)",
              }}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </main>
  );
}