"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiFileDownloadFill } from "react-icons/ri";

const FloatingResume = ({ resume }: { resume?: string }) => {
    const [expanded, setExpanded] = useState(true);

    // Auto collapse after initial reveal
    useEffect(() => {
        // if (window.innerWidth < 640) return;
        const timer = setTimeout(() => {
            setExpanded(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (!resume) return null;

    // className="
    // flex items-center text-white shadow-lg rounded-full overflow-hidden border border-neutral-700
    // bg-gradient-to-br from-cyan-500/60 to-purple-500/60
    // sm:from-cyan-500/20 sm:to-purple-500/20
    // "
    return (
        <div className="fixed z-50 
                bottom-6 left-1/2 -translate-x-1/2 
                sm:left-auto sm:translate-x-0 sm:right-6">
            <motion.a
                href={`/resume/${resume}`}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-linear-to-br from-cyan-500/20 to-purple-500/20 text-white shadow-lg rounded-full overflow-hidden border border-neutral-700"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => setExpanded(false)}

            >
                {/* TEXT */}
                <AnimatePresence>
                    {expanded && (
                        <motion.span
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            transition={{
                                duration: 0.4,
                            }}
                            exit={{ width: 0, opacity: 0 }}
                            className="whitespace-nowrap pl-4 pr-2 text-sm"
                        >
                            Download Resume
                        </motion.span>
                    )}
                </AnimatePresence>

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center">
                    <RiFileDownloadFill className="text-xl" />
                </div>
            </motion.a>
        </div>
    );
};

export default FloatingResume;