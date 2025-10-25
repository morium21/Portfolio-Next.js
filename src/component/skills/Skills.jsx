import React from 'react'
import Image from 'next/image'

const skills = [
    {
        name: "HTML 5",
        img: "/.png",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    },
    {
        name: "CSS 3",
        img: "/.png",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    },
    {
        name: "JavaScript",
        img: "/.png",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    },
        {
        name: "",
        img: "/.png",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    },
   




]

const Skills = () => {
    return (
        <section className="bg-[#1C1C1C]  taxt-white py-12">
            <div className="max-w-6xl mx-auto px-4 text-center">
                {/* Heading */}
                <h2 className="text-6xl font-eaxtrabold text-center mb-12 relative inline-block">
                    {/* My Skills */}
                    <span className="text-white">My</span>
                    <span className="text-amber-700">Skills</span>
                </h2>

                {/* map area */}
                <div className="flex flex-cols-1 sm:flex-cols-2 md:flex-cols-3 gap-15">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="text center flex flex-col items-center">
                            <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full shadow-md">
                                <Image
                                    scr={skill.index}
                                    alt={skill.name}
                                    width={50}
                                    height={50} />
                            </div>
                            <h3 className="text-lg text-amber-700 font-semibold">{skill.name}</h3>
                            <p className="text-gray-500 text-sm mt-2">{skill.desc}</p>
                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Skills
