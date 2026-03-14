type Publication = {
  year: number;
  title: string;
  authors: string;
  venue: string;
  tags?: string[];
  doi?: string;
  pdf?: string;
};

const publications: Publication[] = [
  {
    year: 2025,
    title: "Title of Your Most Recent Paper",
    authors: "HE Mengfei, Author Two, Author Three",
    venue: "Nature / Science / Conference Name, 2025",
    tags: ["Featured"],
    doi: "#",
    pdf: "#",
  },
  {
    year: 2024,
    title: "Title of Another Paper on an Interesting Topic",
    authors: "Author One, HE Mengfei, Author Three",
    venue: "Journal of [Field], Vol. 12, 2024",
    doi: "#",
    pdf: "#",
  },
  {
    year: 2024,
    title: "A Third Publication Demonstrating Research Breadth",
    authors: "HE Mengfei, Author Two",
    venue: "Proceedings of [Conference], 2024",
    pdf: "#",
  },
  {
    year: 2023,
    title: "Earlier Work That Laid the Foundation",
    authors: "Author One, Author Two, HE Mengfei",
    venue: "Physical Review Letters, 2023",
    doi: "#",
  },
];

const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

export function Publications() {
  return (
    <section id="publications" className="py-20 px-6 bg-white">
      <div className="max-w-site mx-auto">
        <p className="section-label">Academic Output</p>
        <h2 className="section-title">Publications</h2>
        <div className="section-rule" />

        <div className="space-y-10">
          {years.map((year) => (
            <div key={year}>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                {year}
              </h3>
              <div className="space-y-5">
                {publications
                  .filter((p) => p.year === year)
                  .map((pub) => (
                    <div
                      key={pub.title}
                      className="flex gap-4 group"
                    >
                      <div className="w-1 bg-gray-200 group-hover:bg-lab-blue rounded flex-shrink-0 transition-colors" />
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900 text-sm group-hover:text-lab-blue transition-colors">
                            {pub.title}
                          </h4>
                          {pub.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-lab-blue text-white text-xs rounded font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-500 text-xs mb-1">{pub.authors}</p>
                        <p className="text-gray-400 text-xs italic mb-2">{pub.venue}</p>
                        <div className="flex gap-3">
                          {pub.doi && (
                            <a href={pub.doi} className="text-xs text-lab-blue hover:underline font-medium">
                              DOI
                            </a>
                          )}
                          {pub.pdf && (
                            <a href={pub.pdf} className="text-xs text-lab-blue hover:underline font-medium">
                              PDF
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
