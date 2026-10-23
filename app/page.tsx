import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import TechStack from "@/components/sections/tech-stack";
import Journey from "@/components/sections/journey";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
