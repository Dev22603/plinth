import Navbar from "../components/nav/Navbar";
import Hero from "../components/sections/Hero";
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
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
