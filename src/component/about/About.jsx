import React from 'react'
import Image from 'next/image'


const About = () => {
    return (
        <section className="bg-[#1C1C1C] min-h-screen flex items-center justify-center px-6">
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">

                {/* Left Side - Image area */}
                <div className="flex-1">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/image2.png"
                            alt="Profile"
                            width={500}
                            height={500}
                            className="rounded-full shadow-2xl shadow-amber-700"
                        />
                    </div>
                </div>

                {/* Right Side - Text area */}
                <div className="flex-1">
                    <p className="text-amber-700 font-semibold mb-3 text-2xl">I'm a Developer</p>
                    <h1 className="text-3xl md:text-4xl text-white font-bold mb-4">
                      I Build Websites That Inspire and Engage
                    </h1>
                    <p className="text-gray-400 mb-4">
                        I am a frontend developer skilled in building responsive, optimized
                        websites with HTML, CSS, and JavaScript. I excel in framework like
                        React.js, ensuring dynamic and scalable application.
                    </p>
                    <p className="text-gray-400 mb-4">
                        I prioritize both design and performance, collaborating effectively
                        with designers and back-end developers to deliver seamless user
                        experiences. Proficient in version control (Git) and using tools like
                        Webpack, I stay updated with industry trends to provide innovative
                        solutions.
                    </p>
                    <button className="-fuchsia-300 hover:bg-[#1C1C1C] text-white px-6 py-3 rounded-md font-semibold shadow-md border-4 border-amber-700">
                        View Portfolio
                    </button>
                </div>

            </div>

        </section>
    )
}

export default About
