"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Banner() {
    return (
        <section className="bg-fuchsia-100 text-black w-full min-h-screen flex items-center justify-center px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left side */}
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl  font-bold leading-tight">
                        Morium Akter
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        I'm a <span className="text-amber-700">Front-End Developer</span>
                    </h2>
                    <p className="text-gray-700 max-w-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores facilis tenetur corrupti itaque ipsum velit
                        deleniti in atque blanditiis modi asperiores.
                    </p>

                    {/* Button */}
                    <button className="px-6 py-3 bg-black hover:bg-amber-700 text-white font-semibold rounded-full shadow-lg transition">
                        Download CV
                    </button>

                    {/* Social Icons */}
                    <div className="flex space-x-4 pt-4">
                        <a href="#" className="p-3 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition">
                            <FaGithub />
                        </a>
                        <a href="#" className="p-3 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="p-3 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition">
                            <FaFacebook />
                        </a>
                        <a href="#" className="p-3 border-2 border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Right side (Profile Image with Circle Border) */}
                <div className="flex justify-center relative">
                    <div className="relative w-64 h-64 md:w-100 md:h-100 rounded-full flex items-center justify-center">
                        {/* amber Circular Border */}
                        <div className="absolute inset-0 rounded-full border-[6px] border-amber-700 animate-spin-slow"></div>

                        {/* Profile Image */}
                        <Image
                            src="/image1.png"
                            alt="profile"
                            width={320}
                            height={320}
                            className="rounded-full object-cover"
                        />
                    </div>
                </div>


            </div>
        </section>
    );
}