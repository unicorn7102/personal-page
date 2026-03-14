export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 text-center">
      <div className="animate-fade-in">
        <p className="font-mono text-sm text-brand-600 dark:text-brand-500 mb-4 tracking-widest uppercase">
          Hello, world. I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
          HE Mengfei
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Full-stack developer building thoughtful digital experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-gray-500 dark:hover:border-gray-400 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
