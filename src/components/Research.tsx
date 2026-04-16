const areas = [
  {
    icon: "💧",
    title: "Capillarity, Droplets & High-Speed Wetting",
    description:
      "Investigating capillary-driven phenomena, droplet dynamics, and the physics of rapid wetting processes at fluid–solid interfaces.",
  },
  {
    icon: "🪶",
    title: "Elasticity of Thin Shells & Ultrathin Films",
    description:
      "Studying the mechanical behavior of thin elastic shells and ultrathin membranes, including buckling, wrinkling, and shape selection.",
  },
  {
    icon: "🩺",
    title: "Fluid–Structure Instabilities in Physiological Flows",
    description:
      "Exploring flow-induced elastic instabilities in internal physiological flows, with implications for biological and biomedical systems.",
  },
  {
    icon: "🌊",
    title: "Other Fluid & Elastic Phenomena",
    description:
      "Broader investigations into fluid mechanics and elasticity, including pattern formation, complex instabilities, and coupled phenomena.",
  },
];

export function Research() {
  return (
    <section id="research" className="py-20 px-6 bg-white border-b border-gray-100">
      <div className="max-w-site mx-auto">
        <p className="section-label">What We Do</p>
        <h2 className="section-title">Research</h2>
        <div className="section-rule" />

        <div className="grid sm:grid-cols-2 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="p-6 border-2 border-gray-400 hover:border-lab-blue hover:shadow-sm transition-all group"
            >

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
