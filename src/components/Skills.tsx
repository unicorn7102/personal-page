const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML & CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "REST APIs", "GraphQL", "PostgreSQL"],
  },
  {
    category: "Tools & Infra",
    skills: ["Git", "Docker", "Vercel", "AWS", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4 text-center">
          Skills
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-14 max-w-xl mx-auto">
          Technologies and tools I work with regularly.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-sm uppercase tracking-wider font-mono">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
