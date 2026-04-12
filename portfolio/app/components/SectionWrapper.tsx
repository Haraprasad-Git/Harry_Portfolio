"use client"

import About from "./About";
import Contact from "./Contact";
import ExperienceSection from "./Experience";
import Navbar from "./Navbar"
import Projects from "./Projects";
import Technologies from "./Technologies";
import HeroSection from "./Hero";
import { PortfolioContent } from "../type";
import { useState } from "react";

const SectionWrapper = ({ content }: { content: PortfolioContent }) => {
  const [visible, setVisible] = useState(false);
  return (<div className="container mx-auto sm:px-16 px-8 ">
    <Navbar links={content.links} setVisible={setVisible} />
    <HeroSection heroContent={content.hero} />
    <About about={content.about} />
    <Technologies />
    <ExperienceSection experiences={content.experiences} />
    <Projects projects={content.projects} />
    <Contact contactInfo={content.contact} visible={visible} setVisible={setVisible} />
  </div>)
}

export default SectionWrapper