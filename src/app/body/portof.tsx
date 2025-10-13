"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          My Portfolio
        </h2>
        <p className="text-gray-500 mb-12">
          A collection of projects that I&apos;ve worked on recently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="relative group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-56 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center space-x-4">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="text-white hover:text-indigo-400"
                  >
                    <ExternalLink size={22} />
                  </Link>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-indigo-400"
                  >
                    <Github size={22} />
                  </a>
                </div>
              </div>

              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
