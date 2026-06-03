import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Contact,
  Footer,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indrajeet Kumar — Magento 2 Developer & E-Commerce Specialist" },
      { name: "description", content: "Portfolio of Indrajeet Kumar, a Magento 2 backend and PHP developer in Siliguri, India, specializing in custom modules, technical SEO, and e-commerce optimization." },
      { property: "og:title", content: "Indrajeet Kumar — Magento 2 Developer" },
      { property: "og:description", content: "Magento 2 backend developer, PHP & e-commerce specialist building scalable production systems." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
