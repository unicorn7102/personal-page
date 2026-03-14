const photos = [
  { caption: "Lab retreat 2024", emoji: "🏔️" },
  { caption: "Experiment setup", emoji: "🔬" },
  { caption: "Group photo 2024", emoji: "👥" },
  { caption: "Conference presentation", emoji: "🎤" },
  { caption: "Lab equipment", emoji: "⚙️" },
  { caption: "Team workshop", emoji: "📊" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 bg-gray-50">
      <div className="max-w-site mx-auto">
        <p className="section-label">Life in the Lab</p>
        <h2 className="section-title">Gallery</h2>
        <div className="section-rule" />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative rounded-lg overflow-hidden bg-lab-blue-light border border-lab-blue/10 flex flex-col items-center justify-center aspect-[4/3] hover:shadow-md transition-shadow group cursor-pointer ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <span className={`${i === 0 ? "text-7xl" : "text-4xl"} mb-2`}>
                {photo.emoji}
              </span>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white text-xs font-medium">{photo.caption}</p>
              </div>
              <p className="text-gray-400 text-xs mt-1 group-hover:opacity-0 transition-opacity">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 text-center mt-6">
          Replace placeholder tiles with real photos by updating the{" "}
          <code className="bg-gray-100 px-1 rounded">Gallery.tsx</code> component.
        </p>
      </div>
    </section>
  );
}
