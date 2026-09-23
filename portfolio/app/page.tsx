
import FloatingResume from "./components/FloatingResume";
import SectionWrapper from "./components/SectionWrapper";
import { PortfolioContent } from "./type";
import { getContent } from "@/lib/content";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const content: PortfolioContent = await getContent();

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,184,166,0.25),rgba(0,0,0,0))]" /></div>

      <SectionWrapper content={content} />
      <FloatingResume resume={content.links.resume} />

    </div>
  );
}
