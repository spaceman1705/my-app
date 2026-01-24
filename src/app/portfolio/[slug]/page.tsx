import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
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
    <section className="max-w-4xl mx-auto py-20 px-6">
      <div className="mb-6">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          <span className="font-medium">Back to Portfolio</span>
        </Link>
      </div>

      <Image
        src={project.image}
        alt={project.title}
        width={900}
        height={500}
        className="rounded-xl shadow-md mb-8"
      />

      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {project.title}
      </h1>

      <p className="text-gray-500 leading-relaxed whitespace-pre-line">
        {project.details}
      </p>

      {project.deployUrl && (
        <p className="mt-6 text-gray-700">
          Link deploy:{" "}
          <a
            href={project.deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:underline break-all"
          >
            {project.deployUrl}
          </a>
        </p>
    )}
    </section>
  );
}
