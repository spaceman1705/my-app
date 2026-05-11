"use client";

import Image from "next/image";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js",     icon: "/skills/nextjs.svg"     },
      { name: "React",       icon: "/skills/react.svg"      },
      { name: "TailwindCSS", icon: "/skills/tailwind.svg"   },
      { name: "HTML",        icon: "/skills/html.svg"       },
      { name: "CSS",         icon: "/skills/css.svg"        },
    ],
  },
  {
    category: "Language",
    skills: [
      { name: "TypeScript",  icon: "/skills/typescript.svg" },
      { name: "JavaScript",  icon: "/skills/javascript.svg" },
      { name: "Python",      icon: "/skills/python.svg"     },
      { name: "C++",         icon: "/skills/cpp.svg"        },
      { name: "C#",          icon: "/skills/csharp.svg"     },
      { name: "Java",        icon: "/skills/java.svg"       },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js",     icon: "/skills/nodejs.svg"     },
      { name: "Express.js",  icon: "/skills/express.svg"    },
      { name: "GraphQL",     icon: "/skills/graphql.svg"    },
      { name: "NextAuth",    icon: "/skills/nextjs.svg"   },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL",  icon: "/skills/postgresql.svg" },
      { name: "Supabase",    icon: "/skills/supabase.svg"   },
      { name: "Prisma ORM",  icon: "/skills/prisma.svg"     },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "GitHub",      icon: "/skills/github.svg"     },
      { name: "Git",         icon: "/skills/github.svg"        },
      { name: "Postman",     icon: "/skills/postman.svg"    },
      { name: "VS Code",     icon: "/skills/vscode.svg"     },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--violet)" }}>
            Skills
          </p>
          <h2 className="text-4xl font-extrabold" style={{ color: "var(--text)", letterSpacing: -1 }}>
            Tech yang saya{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0ea5e9, #10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              kuasai
            </span>
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          {skillCategories.map((group) => (
            <div key={group.category}>

              <div className="flex items-center gap-3 mb-5">
                <div
                  className="h-px flex-1"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(124,58,237,0.1)",
                    color: "var(--violet)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  {group.category}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-center gap-3 p-4 rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.border = "1px solid rgba(124,58,237,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                    }}
                  >
                    <div className="relative w-12 h-12">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <p
                      className="text-xs font-semibold text-center transition-colors duration-300"
                      style={{ color: "var(--muted)" }}
                    >
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}