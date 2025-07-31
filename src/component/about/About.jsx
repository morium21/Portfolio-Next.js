import React from 'react'

const About = () => {
    return (
        <section className="bg-black py-70 px-5">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-left">
                {/* Profile Image */}
                <div className="flex justify-center w-auto h-auto">
                    <img src="/bannerimg.png" alt="Profile" className="rounded-full shadow-lg shadow-orange-600" />

                </div>
                  {/* About Content */}
                  <div className="carousel left flex">
                    <h2 className="text-3xl font-bold text-white md:4 items-start">About Me</h2>
                    <p className="text-lg text-white md:4 mt-15">
                         I'm a passionate Front-End Developer with experience in building responsive websites <br /> 
                         using technologies like React.js, Next.js, and Tailwind CSS.

                    </p>

                  </div>
            </div>

        </section>


    )
}

export default About
