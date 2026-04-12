"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { BiArrowBack } from "react-icons/bi";

const Mail = ({ setVisible }) => {
    const formRef = useRef(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // basic validation (don’t skip this)
        if (!form.name || !form.email || !form.message) {
            alert("Please fill all fields");
            return;
        }

        setLoading(true);

        try {
            const data = await emailjs.send("service_3it3zqd", "template_dvlqo0h", {
                title: "Contacted from portfolio",
                name: form.name,
                time: new Date(),
                message: form.message,
                email: form.email,
            },
                {
                    publicKey: "xmUPkz6snmXEAVDoj"
                }
            );
            console.log(data)

            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            alert("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative mt-12 flex flex-col gap-8"
        >
            <div className="pointer-events-none absolute -inset-10 flex justify-end me-10">
                <div
                    className="pointer-events-auto bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    title="Back"
                    onClick={() => setVisible((prev) => !prev)}
                >
                    <BiArrowBack className="w-2/3 h-2/3 text-white" />
                </div>
            </div>

            <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Name</span>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
            </label>

            <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Email</span>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className="bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
            </label>

            <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Message</span>
                <textarea
                    rows={3}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you want to say?"
                    className="bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
            </label>

            <button
                type="submit"
                disabled={loading}
                className="bg-[#151030] py-3 px-4 w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:opacity-50"
            >
                {loading ? "Sending..." : "Send"}
            </button>
        </form>
    );
};

export default Mail;