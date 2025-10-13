"use client";

import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: "/skills/html.svg" },
    { name: "CSS", icon: "/skills/css.svg" },
    { name: "JavaScript", icon: "/skills/javascript.svg" },
    { name: "React", icon: "/skills/react.svg" },
    { name: "Node.js", icon: "/skills/nodejs.svg" },
    { name: "Python", icon: "/skills/python.svg" },
    { name: "Tailwind", icon: "/skills/tailwind.svg" },
    { name: "Git", icon: "/skills/git.svg" },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Skills & Abilities
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center bg-white rounded-2xl ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-20 h-20 mb-3 rounded-xl overflow-hidden shadow-md bg-white transition-all duration-300 group-hover:shadow-lg">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain p-4 transition-all duration-500"
                />
              </div>
              <p className="text-gray-700 font-medium group-hover:text-indigo-600 transition-colors duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
