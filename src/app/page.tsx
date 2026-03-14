import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Research } from "@/components/Research";
import { Members } from "@/components/Members";
import { Publications } from "@/components/Publications";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Research />
      <Members />
      <Publications />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
