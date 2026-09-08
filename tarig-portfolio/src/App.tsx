import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import GithubCta from "@/components/sections/GithubCta";
import Contact from "@/components/sections/Contact";

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-accent focus:text-bg"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <GithubCta />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
