import React from 'react'

const About = () => {
    return (
      <section className="bg-[#1C1C1C] text-white py-80 px-6 md:px-20">
        <div className="text-center mb-10 mt-0">
            <h2 className="text-5xl font-bold">
                <span className="opacity-15">RESUME </span>
                <span className="relative text-white mx-2">ABOUT</span>
                <span className="text-amber-700">ME</span>
            </h2>
       </div>


       <div className="grid md:grid-cols-2 gap-10">
        {/* left Column - personal info */}
        <div>
          <h3 className="text-2xl font-bold mb-6">PERSONAL INFOS</h3>
          <div className="grid grid-cols-2 gap-y-4 text-sm md:text-base">
            <p><strong>First Name :</strong> Morium </p>
            <p><strong>Address :</strong> Dhaka</p>
            <p><strong>Last Name :</strong> Akter</p>
            <p><strong>Phone :</strong> +880 1605-551692</p>
            <p><strong>Age :</strong> <span className="text-white">22 Years</span></p>
            <p><strong>Email :</strong> moriumakter912003@gmail.com</p>
            <p><strong>Nationality :</strong> Bangladeshi</p>
            <p><strong>LinkedIn :</strong> Morium Akter</p>
            <p><strong>Freelance :</strong> <span className="text-green-400">Available</span></p>
            <p><strong>Language :</strong> English, Bengali</p>
        </div>


        <div className="mt-8">
          <button className="bg-amber-700 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition">
              DOWNLOAD RESUME
              <span className="text-xl">⬇️</span>
          </button>
        </div>
      







        </div>

           </div>

      </section>



    )
}

export default About
