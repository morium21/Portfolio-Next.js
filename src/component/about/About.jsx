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
                        I Develop Website That Help People
                    </h1>


                </div>

            </div>

        </section>
    )
}

export default About
