import { PROJECTS } from "../constants"
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">Projects.</motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1.5 }}
                            className="w-full lg:w-1/4 flex justify-center sm:justify-start">
                            <motion.img
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                src={project.image} alt={project.title} width={150} height={150} className="mb-6 rounded border-2" />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1.5 }} className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold flex justify-center sm:justify-normal">{project.title}</h6>
                            <p className="mb-4 text-neutral-400 flex text-center sm:text-start">{project.description}</p>
<div className="mt-2 flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className={`mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-bold ${index % 2 === 0 ?
                                    "text-red-800" :
                                    index % 3 === 0 ? "text-green-800" : "text-blue-800"
                                    }`}>{tech}</span>
                            ))}
                           </div> 
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects