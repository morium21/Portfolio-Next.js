import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import bannerimg from '../../../public/bannerimg.png';



const Banner = () => {
    return (
        <section className="py-4 mt-0 bg-fuchsia-50">
            <div className="container mx-auto px-6">
                <div className="carousel-left">
                    <div className="sm:flex-col space-between">
                        <h3 className="font-bold text-5xl py-10 mt-10">Hello <span className="text-amber-700">I'm</span></h3>
                        <h2 className="font-bold text-4xl py-0"><span className="text-amber-700">Morium</span> Akter</h2>
                        <p className="text-xl text-black-200 mt-4 mb-6 py-5"> Front-End Developer focused on building responsive and interactive <br />
                            websites using React, Next.js, and Tailwind CSS.</p>

                        {/* Social Icons */}
                        <div className="flex justify-left gap-6 text-3xl coursor-pointer">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>

                        </div>
                        <div className="cv">
                            <a className="inline-block bg-black text-white px-6 py-3 mt-15 rounded-lg hover:bg-amber-700 transition" href="">Download CV</a>
                        </div>

                    </div>

                </div>

                {/* Image area */}

                <div className="carousel-right flex justify-center relative ">
                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                        <div className="sm:flex-col ">
                            <div classname="md:w-1/2 mt- md:mt-0 flex justify-center ">
                                <img src="bannerimg.png" alt="Morium Akter" className="" />
                                {/*                                 
                                <Image className="rounded-full border8 border-orange-500 shadow-lg" scr={bannerimg} alt="" width={7} height={8} /> */}

                            </div>
                        </div>


                    </div>

                </div>


            </div>

        </section>


    )
}

export default Banner
