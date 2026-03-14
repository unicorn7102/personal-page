const projects = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web app that solves a real-world problem with a clean UX and fast performance.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "#",
    repo: "#",
  },
  {
    title: "Project Beta",
    description:
      "An open-source library that simplifies a common development workflow, with 500+ GitHub stars.",
    tags: ["Node.js", "TypeScript", "Open Source"],
    href: "#",
    repo: "#",
  },
  {
    title: "Project Gamma",
    description:
      "A mobile-first dashboard for visualising and exploring datasets interactively.",
    tags: ["React", "Tailwind CSS", "D3.js"],
    href: "#",
    repo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4 text-center">
          Projects
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-14 max-w-xl mx-auto">
          A selection of things I&apos;ve built.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col p-6 rounded-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.href}
                  className="text-sm text-brand-600 dark:text-brand-500 hover:underline"
                >
                  Live demo →
                </a>
                <a
                  href={project.repo}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
