"use client"
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="my-16 text-center text-4xl font-semibold"
      >
        Projects.
      </motion.h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-lg shadow-lg"
          >
            {/* Image as background */}
            <div className="relative h-48 w-full overflow-hidden">
              <motion.img
                src={`/images/projects/${project.image}`}
                alt={project.title}
                className="h-full w-full object-fill transition-transform duration-500 "
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-neutral-400 line-clamp-3">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300 hover:bg-neutral-800 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover overlay (optional premium touch) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/40 hidden items-center justify-center">
              <span className="text-sm text-white border px-4 py-2 rounded-lg">
                View Details
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;