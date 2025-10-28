import React from 'react'
import Image from 'next/image';

const skills = [
       {
        name: "HTML5",
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
        name: "Bootstrap",
        img: "/.png",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    },
   




]

const Skills = () => {
    return (
        <section className="bg-[#1C1C1C]  taxt-white py-20">
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
                            className="flex items-center gap-3 bg-[#111827] px-6 py-4 rounded-2xl shadow-md hover:scale-105 transition-transform">
                            
                                <Image
                                    scr={skill.icon}
                                    alt={skill.name}
                                    width={40}
                                    height={40} 
                                   
                                    />
                                    <span className="text-lg font-semibold">{skill.name}</span>
                           </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Skills




