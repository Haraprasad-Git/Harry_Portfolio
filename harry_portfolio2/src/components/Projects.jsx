import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Selected Work.
      </motion.h1>

      <div className="flex flex-col gap-24">
        {PROJECTS.map((project, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-10 px-4 lg:px-16 ${
                isReverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isReverse ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="overflow-hidden rounded-2xl border border-neutral-800">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[260px] lg:h-[320px] object-fill"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: isReverse ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                  {project.title}
                </h2>

                <p className="text-neutral-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs uppercase tracking-wide text-neutral-500 border-b border-neutral-700 pb-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;