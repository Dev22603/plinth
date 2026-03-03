import Navbar from "../components/nav/Navbar";
import Hero from "../components/sections/Hero";
import Manifesto from "../components/sections/Manifesto";
import Services from "../components/sections/Services";
import Work from "../components/sections/Work";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <Manifesto />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
