import React from 'react'

const About = () => {
    return (
      <section className="bg-[#1C1C1C] text-white py-80 px-6 md:px-20">
        <div className="text-center mb-10 mt-0">
            <h2 className="text-5xl font-bold">
                {/* <span className="opacity-20">RESUME</span> */}
                <span className="relative text-white mx-2">ABOUT</span>
                <span className="text-amber-700">ME</span>
            </h2>
       </div>


       <div className="grid md:grid-cols-2 gap-10">
        {/* left Column - personal info */}
        <div>
          <h3 className="text-2xl font-bold mb-6">PERSONAL INFOS</h3>
          <div className="grid grid-cols-2 gap-y-4 text-sm md:text-base">

          </div>
        </div>

           </div>

      </section>



    )
}

export default About
