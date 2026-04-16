import bowingBear from "../../public/images/bow15.gif";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-site mx-auto">

        {/* Header row: title on left, bear in white space on right */}
        <div className="flex items-start gap-6 mb-0">
          <div>
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Contact</h2>
            <div className="section-rule" />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bowingBear.src} width={90} height={90} alt="" className="flex-shrink-0" />
        </div>

        {/* Contact details */}
        <p className="text-gray-600 leading-relaxed mb-8">
          We welcome inquiries from prospective students, postdocs, collaborators, and
          anyone interested in our research. Feel free to reach out!
        </p>
        <ul className="grid sm:grid-cols-2 gap-5">
          <li className="flex gap-4">
            <span className="flex-shrink-0 text-xl">
              ✉️
            </span>
            <div>
              <span className="text-sm text-gray-800">hemf_at_sustech.edu.cn</span>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 text-xl">
              📍
            </span>
            <div>
              <p className="text-sm text-gray-800">南方科技大学工学院北楼</p>
            </div>
          </li>
        </ul>

      </div>
    </section>
  );
}
