import Image, { StaticImageData } from "next/image";
import imgPnas2023 from "../../public/images/publications/pnas-2023.jpg";
import imgPrl2023Dong from "../../public/images/publications/prl-2023-dong.png";
import imgPrl2021 from "../../public/images/publications/prl-2021.png";
import imgOe2020 from "../../public/images/publications/oe-2020.png";
import imgPrf2020 from "../../public/images/publications/prf-2020.png";
import imgPrl2019 from "../../public/images/publications/prl-2019.png";

type Publication = {
  authors: string;
  title: string;
  venue: string;
  url: string;
  image: StaticImageData;
};

const publications: Publication[] = [
  {
    authors: "Mengfei He, Vincent Démery and Joseph D. Paulsen",
    title: "Cross sections of doubly curved sheets as confined elastica",
    venue: "Proc. Natl. Acad. Sci. USA 120 (11) (2023)",
    url: "https://doi.org/10.1073/pnas.2216786120",
    image: imgPnas2023,
  },
  {
    authors: "Pan Dong, Mengfei He, Nathan Keim and Joseph D. Paulsen",
    title: "A wrinkled cylindrical shell as a tunable locking material",
    venue: "Phys. Rev. Lett. 131, 148201 (2023)",
    url: "https://doi.org/10.1103/PhysRevLett.131.148201",
    image: imgPrl2023Dong,
  },
  {
    authors:
      "Yousra Timounay, Alexander R. Hartwell, Mengfei He, D. Eric King, Lindsay K. Murphy, Vincent Démery, and Joseph D. Paulsen",
    title: "Sculpting Liquids with Ultrathin Shells",
    venue: "Phys. Rev. Lett. 127, 108002 (2021)",
    url: "https://doi.org/10.1103/PhysRevLett.127.108002",
    image: imgPrl2021,
  },
  {
    authors: "Mengfei He and Sidney R. Nagel",
    title:
      "Determining the Refractive Index, Absolute Thickness and Local Slope of a Thin Transparent Film Using Multi-wavelength and Multi-incident-angle Interference",
    venue: "Opt. Express 28, 24198 (2020)",
    url: "https://doi.org/10.1364/OE.397736",
    image: imgOe2020,
  },
  {
    authors: "Mengfei He",
    title: "Long-time Evolution of Interfacial Structure of Partial Wetting",
    venue: "Phys. Rev. Fluids 5, 114001 (2020)",
    url: "https://doi.org/10.1103/PhysRevFluids.5.114001",
    image: imgPrf2020,
  },
  {
    authors: "Mengfei He and Sidney R. Nagel",
    title: "Characteristic Structure behind a Rapidly Moving Contact Line",
    venue: "Phys. Rev. Lett. 122, 018001 (2019)",
    url: "https://doi.org/10.1103/PhysRevLett.122.018001",
    image: imgPrl2019,
  },
];

export function Publications() {
  return (
    <section id="publications" className="py-8 px-6 bg-white border-b border-gray-100">
      <div className="max-w-site mx-auto">
        <p className="section-label">Academic Output</p>
        <h2 className="section-title">Publications</h2>
        <div className="section-rule" />

        <ol className="space-y-4">
          {publications.map((pub, i) => (
            <li key={i} className="group flex gap-5 items-start">
              {/* Thumbnail */}
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-44 h-28 overflow-hidden border border-gray-200 group-hover:border-lab-blue transition-colors block"
              >
                <Image
                  src={pub.image}
                  alt={pub.title}
                  width={176}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </a>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm leading-snug mb-1 group-hover:text-lab-blue transition-colors">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {pub.title}
                  </a>
                </h4>
                <p className="text-gray-500 text-xs mb-1">{pub.authors}</p>
                <p className="text-gray-400 text-xs italic">{pub.venue}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
