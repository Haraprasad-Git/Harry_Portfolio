"use client";

import { motion, AnimatePresence } from "framer-motion";
import Mail from "./Mail";
import { Contact } from "../type";

const ContactSection = ({ contactInfo, visible, setVisible }: {
    contactInfo: Contact,
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}) => {


    const contactItems = [
        contactInfo.address1,
        contactInfo.address2,
        contactInfo.phoneNo,
    ];

    return (
        <div className="border-b border-neutral-900 pb-20 mb-10">
            {/* TITLE */}
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.2 }}
                className="my-10 text-center text-4xl"
            >
                Get In{" "}
                <span className="text-neutral-500">
                    Touch.
                </span>
            </motion.h1>

            {/* CONTACT INFO */}
            <div className="flex flex-wrap justify-center items-center gap-5">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -80 }}
                    transition={{ duration: 1 }}
                    className="text-center tracking-tighter xl:flex-[0.75]"
                >
                    {contactItems.map((item, i) => (
                        <motion.p
                            key={i}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                            transition={{ duration: 0.8 }}
                            className="my-4"
                        >
                            {item}
                        </motion.p>
                    ))}

                    {/* EMAIL BUTTON */}
                    <motion.button
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setVisible(true)}
                        className="border-b hover:text-cyan-500 transition-colors"
                    >
                        {contactInfo.email}
                    </motion.button>
                </motion.div>
            </div>

            {/* SLIDE PANEL */}
            <AnimatePresence>
                {visible && (
                    <>
                        {/* BACKDROP */}
                        <motion.div
                            className="fixed inset-0 bg-black/60 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setVisible(false)}
                        />

                        {/* PANEL */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="fixed right-0 top-0 h-full w-full sm:w-112.5 bg-neutral-950 z-50 p-6 shadow-2xl overflow-y-auto"
                        >
                            <Mail setVisible={setVisible} />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactSection;