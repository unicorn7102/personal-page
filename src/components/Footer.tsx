export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400 dark:text-gray-500">
        <p>© {year} HE Mengfei. All rights reserved.</p>
        <p className="font-mono text-xs">
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            Next.js
          </a>{" "}
          &{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            Tailwind CSS
          </a>
          . Deployed on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            Vercel
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
