"use client"

import { motion } from "framer-motion";
import { Experience } from "../type";

const ExperienceSection = ({ experiences }: { experiences: Experience[] }) => {
    return (
        <div className="border-b border-neutral-800 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">Experience.</motion.h1>
            <div>
                {experiences.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1.5 }} className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1.5 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold ">{experience.role}-
                                <span className="text-sm text-purple-100">{experience.company}</span></h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        key={tech}
                                        className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold
        ${index % 2 === 0
                                                ? "bg-green-900/40 text-green-300"
                                                : index % 3 === 0
                                                    ? "bg-red-900/40 text-red-300"
                                                    : "bg-purple-900/40 text-purple-300"
                                            }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperienceSection



// "use client"

// import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import { Experience } from "../type"

// const tagStyles = ["bg-purple-900/20 text-purple-300 border border-purple-500/20", "bg-teal-900/20 text-teal-300 border border-teal-500/20", "bg-coral-900/20 text-orange-300 border border-orange-500/20"]

// const ExperienceItem = ({ experience, index }: { experience: Experience; index: number }) => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-80px" })

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 28 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
//       className="grid grid-cols-[7rem_1px_1fr] gap-x-6 mb-10"
//     >
//       {/* Year */}
//       <div className="text-right pt-1">
//         <span className="text-[11px] font-medium tracking-wide text-neutral-500 uppercase">
//           {experience.year}
//         </span>
//       </div>

//       {/* Timeline line + dot */}
//       <div className="relative flex justify-center">
//         <div
//           className="w-2.5 h-2.5 rounded-full bg-purple-500 mt-1 shrink-0 z-10"
//           style={{ boxShadow: "0 0 0 3px #0a0a0a, 0 0 0 4.5px rgba(167,139,250,0.25)" }}
//         />
//       </div>

//       {/* Content */}
//       <div className="pb-8">
//         <h3 className="text-sm font-semibold text-neutral-100 mb-0.5">{experience.role}</h3>
//         <p className="text-xs text-purple-400 mb-3 font-medium">{experience.company}</p>
//         <p className="text-sm text-neutral-400 leading-relaxed mb-4">{experience.description}</p>
//         <div className="flex flex-wrap gap-1.5">
//           {experience.technologies.map((tech, i) => (
//             <span
//               key={tech}
//               className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${tagStyles[i % tagStyles.length]}`}
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// const ExperienceSection = ({ experiences }: { experiences: Experience[] }) => {
//   return (
//     <div className="border-b border-neutral-800 pb-4">
//       <motion.h2
//         initial={{ opacity: 0, y: -18 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className="my-20 text-center text-4xl font-medium"
//       >
//         Experience
//       </motion.h2>

//       {/* Timeline container */}
//       <div className="relative max-w-2xl mx-auto px-6">
//         {/* Vertical line */}
//         <div className="absolute left-[calc(1.5rem+7rem+1.5rem)] top-0 bottom-0 w-px bg-neutral-800" />

//         {experiences.map((experience, index) => (
//           <ExperienceItem key={index} experience={experience} index={index} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ExperienceSection