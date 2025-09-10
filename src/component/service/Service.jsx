import React from 'react'
import { FaEnvelope, FaPaintBrush, FaLaptopCode   } from 'react-icons/fa'

const Service = () => {
  return (
    <section className="bg-[#0f0f0f] py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-7xl font-extrabold mb-20 relative inline-bolck">
          <span className="text-white">What I </span>
          <span className="text-amber-700">PROVIDE</span>
        </h2>


        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border border-amber-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <FaEnvelope className="text-6xl mx-auto mb-4 text-amber-700" />
            <h3 className="text-xl font-semibold mb-3 text-white">Email Signature</h3>
            <p className="text-gray-300 text-sm">
              Transform your digital presence with our tailored email signature service.
              It's not just contact info—it's a potent branding tool. Stand out, leaving a lasting
              impression on clients and colleagues with our expertly crafted signatures.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-amber-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <FaPaintBrush className="text-6xl mx-auto mb-4 text-amber-700" />
            <h3 className="text-xl font-semibold mb-3">Web Design</h3>
            <p className="text-gray-300 text-sm">
              In today’s business world, growth means using lead-generating websites that engage
              customers and search engines. Your website is a vital marketing asset, shaping your
              digital presence and delivering business results.
            </p>
          </div>

           {/* Card 3 */}
          <div className="border border-amber-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <FaLaptopCode className="text-6xl mx-auto mb-4 text-amber-700" />
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-300 text-sm">
              In our tech-driven world, globalization’s rapid advancement affects various sectors.
              Whether a small or large business, software simplifies operations, enabling effective
              management and facilitating success.
            </p>
          </div>









        </div>
      </div>

    </section>
  )
}

export default Service
