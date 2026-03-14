export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-site mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div>
          <p className="font-bold text-white mb-1">HE Mengfei Research Lab</p>
          <p>© {year} HE Mengfei. All rights reserved.</p>
        </div>
        <p className="text-xs">
          Built with{" "}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-lab-blue hover:underline">
            Next.js
          </a>{" "}
          &{" "}
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-lab-blue hover:underline">
            Tailwind CSS
          </a>
        </p>
      </div>
    </footer>
  );
}
