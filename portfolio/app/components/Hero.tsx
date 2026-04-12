"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { Hero } from "../type";

const HeroSection = ({ heroContent }: { heroContent: Hero }) => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-36">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">{heroContent.name}</motion.h1>
                        <motion.span
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.75 }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.1 }}
                            drag="x"
                            dragConstraints={{ left: -100, right: 100 }} className="bg-linear-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">{heroContent.title ?? "Full Stack Developer"}</motion.span>
                        <motion.p
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="my-2 max-w-xl py-6 font-light tracking-tighter text-lg">{heroContent.description}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="flex justify-center">
                        <Image
                            src="/images/hp2.png"
                            alt="profile_pic"
                            width={480}
                            height={480}
                            className="rounded-2xl object-cover h-auto"
                            loading="eager"
                        />
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection