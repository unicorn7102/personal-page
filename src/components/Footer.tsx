export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-site mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div>
          <p className="font-bold text-white mb-1">HE Lab</p>
          <p>© {year} HE Mengfei. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
