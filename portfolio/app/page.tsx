import About from "./components/About";
import Contact from "./components/Contact";
import ExperienceSection from "./components/Experience";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import fs from "fs/promises";
import path from "path";
import { PortfolioContent } from "./type";
import HeroSection from "./components/Hero";

export default async function Home() {
  const filePath = path.join(process.cwd(), "/app/data/content.json");
  const json = await fs.readFile(filePath, "utf-8");
  const content: PortfolioContent = JSON.parse(json);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,184,166,0.25),rgba(0,0,0,0))]" /></div>

      <div className="container mx-auto sm:px-16 px-8 ">
        <Navbar links={content.links} />
        <HeroSection heroContent={content.hero} />
        <About about={content.about} />
        <Technologies />
        <ExperienceSection experiences={content.experiences} />
        <Projects projects={content.projects} />
        <Contact contactInfo={content.contact} />
      </div>

    </div>
  );
}
