const areas = [
  {
    icon: "⚗️",
    title: "Research Area One",
    description:
      "A brief description of this research area, covering the key questions being investigated and the methods used.",
  },
  {
    icon: "🧬",
    title: "Research Area Two",
    description:
      "A brief description of this research area, highlighting the novel approaches and expected outcomes.",
  },
  {
    icon: "💡",
    title: "Research Area Three",
    description:
      "A brief description of this research area, explaining the broader impact and applications of the work.",
  },
  {
    icon: "🌐",
    title: "Research Area Four",
    description:
      "A brief description of this research area, detailing the interdisciplinary connections and collaborations.",
  },
];

export function Research() {
  return (
    <section id="research" className="py-20 px-6 bg-white">
      <div className="max-w-site mx-auto">
        <p className="section-label">What We Do</p>
        <h2 className="section-title">Research</h2>
        <div className="section-rule" />

        <p className="text-gray-600 leading-relaxed max-w-2xl mb-12">
          Our lab focuses on cutting-edge research across several interconnected
          areas. We combine theoretical foundations with experimental validation
          to address fundamental and applied challenges.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="p-6 border border-gray-200 rounded-lg hover:border-lab-blue hover:shadow-sm transition-all group"
            >
              <span className="text-3xl mb-4 block">{area.icon}</span>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-lab-blue transition-colors text-sm">
                {area.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
