export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-site mx-auto">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Contact</h2>
        <div className="section-rule" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-8">
              We welcome inquiries from prospective students, collaborators, and
              anyone interested in our research. Feel free to reach out!
            </p>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="w-9 h-9 rounded bg-lab-blue-light flex items-center justify-center text-lab-blue flex-shrink-0">
                  ✉️
                </span>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:lab@university.edu" className="text-sm text-gray-800 hover:text-lab-blue transition-colors">
                    lab@university.edu
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-9 h-9 rounded bg-lab-blue-light flex items-center justify-center text-lab-blue flex-shrink-0">
                  📍
                </span>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-sm text-gray-800">
                    Building Name, Room 000<br />
                    University Name<br />
                    City, Country
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-9 h-9 rounded bg-lab-blue-light flex items-center justify-center text-lab-blue flex-shrink-0">
                  🎓
                </span>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Prospective Students</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We are always looking for motivated PhD students and postdocs.
                    Please email with your CV and research interests.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social / links */}
          <div className="flex flex-col justify-start gap-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Find Us Online</h3>
            {[
              { label: "Google Scholar", href: "#", icon: "📚" },
              { label: "GitHub", href: "#", icon: "💻" },
              { label: "Twitter / X", href: "#", icon: "🐦" },
              { label: "Lab Newsletter", href: "#", icon: "📰" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-lab-blue hover:text-lab-blue transition-colors group"
              >
                <span>{link.icon}</span>
                {link.label}
                <span className="ml-auto text-gray-300 group-hover:text-lab-blue transition-colors">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
