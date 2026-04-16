import Image from "next/image";
import heroImg from "../../public/hero.jpg";

export function Hero() {
  return (
    <section className="pt-16 min-h-[90vh] flex items-center bg-white border-b border-gray-100">
      <div className="max-w-site mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            HE Lab
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
            Our research is inspired by biomechanical and industrial production
            problems, focusing on fluid instabilities, complex pattern formation,
            and the elasticity of slender structures. We combine experiments with
            theory to uncover fundamental principles in complex systems and
            discover new functions and applications.
          </p>
          {/* <div className="flex flex-wrap gap-4">
            <a
              href="#research"
              className="px-5 py-2.5 bg-lab-blue text-white text-sm font-semibold rounded hover:bg-lab-blue-dark transition-colors"
            >
              Our Research
            </a>
            <a
              href="#publications"
              className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded hover:border-lab-blue hover:text-lab-blue transition-colors"
            >
              Publications
            </a>
          </div> */}
        </div>

        {/* Hero image */}
        <div className="hidden md:flex justify-center">
          <div className="w-full max-w-sm aspect-[4/3] overflow-hidden">
            <Image
              src={heroImg}
              alt="Water drop creating ripples — capillarity and fluid dynamics"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
