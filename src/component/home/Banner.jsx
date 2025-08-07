import React from 'react'
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import bannerimg from '../../../public/bannerimg.png';
import Image from "next/image";



const Banner = () => {
    return (
        <section className="py-30 mt-0 bg-fuchsia-50">
            <div className="container mx-auto px-6">
                <div className="carousel-left">
                    <div className="sm:flex-col space-between">
                        <h3 className="font-bold text-5xl py-10 mt-10">Hello <span className="text-amber-700">I'm</span></h3>
                        <h2 className="font-bold text-4xl py-0"><span className="text-amber-700">Morium</span> Akter</h2>
                        <p className="text-xl text-black-200 mt-4 mb-6 py-5"> Front-End Developer focused on building responsive and interactive <br />
                            websites using React, Next.js, and Tailwind CSS.</p>

                        {/* Social Icons */}
                        <div className="flex justify-left gap-6 text-3xl coursor-pointer">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>

                        </div>




                        <div className="mt-8">
                            <button className="bg-amber-700 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition">
                                DOWNLOAD RESUME
                                <span className="text-xl">⬇️</span>
                            </button>
                        </div>





                    </div>

                </div>

                {/* Image area */}
                <div className="">

                </div>




            </div>

        </section>


    )
}

export default Banner
