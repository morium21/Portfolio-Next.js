import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="bg-[#1C1C1C] py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-12 relative">
                <h2 className="text-7xl font-extrabold">
                    <span className="text-white">GET IN </span>
                    <span className="text-amber-700">TOUCH</span>
                </h2>
             </div>

             {/* Grid Layout */}
             <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Side */}
              <div>
                <h3 className="text-2xl font-bold mb-4">DON'T BE SHY!</h3>
                <p className="text-gray-300 mb-6">
                  Feel free to reach out anytime for ideas, projects, 
                  or collaboration. Whether you have a small question 
                  or a big project, I’m always happy to connect
                </p>

                {/* Mail */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-amber-700 p-3 rounded-lg">
                    <FaEnvelope className="text-black text-xl"/>
                  </div>
                  <div>
                    <p className="font-semibold">MAIL ME</p>
                    <a href="mailto:moriumakter912003@gmail.com"
                    className="text-amber-700 underline"
                    >

                      moriumakter912003@gmail.com
                    </a>
                  </div>
                  </div>


                  {/* Phone */}
                  <div className="flex items-center gap-4 mb-6j                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ">
                    <div className="bg-amber-700 p-3 rounded-lg">
                      <FaPhone className="text-black text-xl" />
                   </div>
                  </div>
                   <div>
                      <p className="font-semibold">CALL ME</p>
                     <a href="tel:+8801967-005476"
                     className="text-amber-700 underline"
                     >

                        +8801967-005476

                     </a>
                   </div>
                  </div>
                 </div>

                 {/* Right Form */}
          


        </div>
    </section>
  )
}

export default Contact
