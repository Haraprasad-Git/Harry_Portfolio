"use client";
import { motion } from "framer-motion";
import {
  RiReactjsLine,
  RiJavascriptFill,
  RiSvelteFill,
  RiNextjsFill,
} from "react-icons/ri";
import {
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoGit,
  BiLogoCss3,
} from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiVitest, SiPostman } from "react-icons/si";

const tech = [
  { name: "React", Icon: RiReactjsLine, color: "text-cyan-400" },
  { name: "Node", Icon: FaNodeJs, color: "text-green-500" },
  { name: "Sveltekit", Icon: RiSvelteFill, color: "text-[#ff3c00]" },
  { name: "NEXT.js", Icon: RiNextjsFill, color: "text-[#000000]" },
  { name: "JavaScript", Icon: RiJavascriptFill, color: "text-yellow-400" },
  { name: "TypeScript", Icon: BiLogoTypescript, color: "text-blue-500" },
  { name: "Tailwind", Icon: BiLogoTailwindCss, color: "text-cyan-400" },
  { name: "HTML", Icon: AiFillHtml5, color: "text-orange-500" },
  { name: "CSS", Icon: BiLogoCss3, color: "text-blue-400" },
  { name: "Git", Icon: BiLogoGit, color: "text-orange-600" },
  { name: "Postman", Icon: SiPostman, color: "text-orange-600" },
  { name: "Vitest ", Icon: SiVitest, color: "text-lime-400" },
];

export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 py-24 px-4">
      <h1 className="text-4xl text-center mb-16">Technologies.</h1>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {tech.map(({ name, Icon, color }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{
              scale: 1.08,
              rotateX: 6,
              rotateY: -6,
            }}
            className="
              group relative
              rounded-2xl p-6
              bg-white/5 backdrop-blur-lg
              border border-white/10
              hover:border-white/20
              transition
            "
          >
            {/* glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-cyan-500/20 to-purple-500/20 blur-xl" />
            </div>

            <div className="relative flex flex-col items-center gap-3">
              <Icon className={`text-5xl ${color}`} />
              <p className="text-sm text-neutral-300">{name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}