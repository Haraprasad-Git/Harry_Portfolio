"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Mail from "./Mail";
import { Contact } from "../type";

const ContactSection = ({ contactInfo }: { contactInfo: Contact }) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="border-b border-neutral-900 pb-20 m-10">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }} className="my-10 text-center text-4xl">Get In <span className="text-neutral-500">
                    Touch.
                </span></motion.h1>
            <div className='flex flex-wrap overflow-hidden justify-center items-center gap-5'
                id='mail'
            >
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="text-center tracking-tighter xl:flex-[0.75]">
                    <motion.p
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        className="my-4 ">{contactInfo.address1}</motion.p>
                    <motion.p
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="my-4 ">{contactInfo.address2}</motion.p>
                    <motion.p
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        className="my-4 ">{contactInfo.phoneNo}</motion.p>
                    <motion.a
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        href="#mail" className="border-b hover:text-cyan-500"
                        onClick={() => {
                            setVisible(prev => !prev);
                            const ele = document.getElementById('mail');
                            if (!ele) return;
                            ele.scrollTop = ele?.scrollHeight ?? 0;
                        }}
                    >{contactInfo.email}</motion.a>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}

                    className={`flex-1 bg-black-100 p-8 rounded-2xl w-full justify-start lg:max-w-125 bg-black-100 ${visible ? "" : "hidden"}`}>
                    <Mail setVisible={setVisible} />
                </motion.div>

            </div>

        </div>
    )
}

export default ContactSection;