import React from 'react'

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
                  Feel free to reach out anytime for ideas, projects, or collaboration.

                </p>
              </div>

             </div>

        </div>
    </section>
  )
}

export default Contact
