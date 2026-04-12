"use client"
import Image from "next/image";
import { motion } from "framer-motion";


const About = ({ about }: { about: string }) => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500">
                    &nbsp;Me.
                </span>
            </motion.h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        <Image
                            src="/images/about.jpeg"
                            alt="profile_img"
                            width={224}
                            height={224}
                            className="rounded-full lg:rounded-2xl object-cover lg:h-80 lg:w-80"
                            loading="eager"
                        />
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 text-normal lg:text-lg">{about}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About