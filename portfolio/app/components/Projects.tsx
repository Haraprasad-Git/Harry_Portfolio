"use client"
import { motion, useInView } from "framer-motion";
import { Project } from "../type";
import { useRef } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})


const SmallCard = ({ project, index, num }: { project: Project; index: number; num: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group border border-white/[0.07] rounded-2xl bg-white/3 p-5 flex flex-col gap-3 hover:border-white/[0.14] transition-colors duration-200 overflow-hidden relative"
    >
      {/* image strip */}
      {project.image && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <img
            src={`/images/projects/${project.image}`}
            alt=""
            className="w-full h-full object-fill opacity-100"
          />
        </div>
      )}

      <div className="flex items-center justify-between relative z-10">
        <span className="text-[11px] text-white/20 font-medium">
          {num}
        </span>

      </div>

      <div className="relative z-10 group-hover:opacity-0">
        <h3 className="text-sm font-semibold text-white/80 mb-1.5">{project.title}</h3>
        <p className="text-xs text-white/30 leading-relaxed line-clamp-3">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/5 relative z-10 group-hover:opacity-0">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="text-[10px] text-white/20 border border-white/6 bg-white/2 px-2 py-0.5 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Projects.
      </motion.h1>



      {projects.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project, i) => (
            <SmallCard key={i} project={project} index={i} num={i + 2} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;




// <div className="flex flex-col gap-24">
//   {projects.map((project, index) => {
//     const isReverse = index % 2 !== 0;

//     return (
//       <div
//         key={index}
//         className={`flex flex-col lg:flex-row items-center gap-10 px-4 lg:px-16 ${isReverse ? "lg:flex-row-reverse" : ""
//           }`}
//       >
//         {/* Image */}
//         <motion.div
//           initial={{ opacity: 0, x: isReverse ? 80 : -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full lg:w-1/2"
//         >
//           <div className="overflow-hidden rounded-2xl border border-neutral-800">
//             <motion.img
//               src={`/images/projects/${project.image}`}
//               alt={project.title}
//               className="w-full h-65 lg:h-80 object-fill"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.4 }}
//             />
//             {/* <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent" /> */}
//           </div>
//         </motion.div>

//         {/* Content */}
//         <motion.div
//           initial={{ opacity: 0, x: isReverse ? -80 : 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full lg:w-1/2"
//         >
//           <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
//             {project.title}
//           </h2>

//           <p className="text-neutral-400 mb-6 leading-relaxed">
//             {project.description}
//           </p>

//           {/* Tech Stack */}
//           <div className="flex flex-wrap gap-3">
//             {project.technologies.map((tech, i) => (
//               <span
//                 key={i}
//                 className="text-xs uppercase tracking-wide text-neutral-500 border-b border-neutral-700 pb-1"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     );
//   })}
// </div>