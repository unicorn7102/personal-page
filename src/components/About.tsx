export function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Avatar placeholder */}
        <div className="flex justify-center md:justify-start">
          <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-500 dark:from-brand-900 dark:to-brand-600 flex items-center justify-center shadow-lg">
            <span className="text-7xl">👋</span>
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Hi! I&apos;m a software developer passionate about crafting clean,
            performant, and user-friendly web applications. I love turning
            complex problems into elegant, simple solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open source, or enjoying a good book.
          </p>
          <div className="flex flex-wrap gap-3">
            {["📍 Your City", "💼 Open to work", "☕ Coffee enthusiast"].map(
              (item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
