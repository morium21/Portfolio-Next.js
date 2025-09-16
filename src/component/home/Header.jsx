"use client";
import { useState } from 'react'
import { Menu, X } from "lucide-react"; 

const Header = () => {
     const [open, setOpen] = useState(false);
  return (
      <header className="bg-[#1C1C1C] py-8 text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-4xl font-bold text-white">Morium <span className="text-amber-700">Akter</span></h1>

        <nav className="hidden md:flex space-x-6">
          <a href="#home" className=" hover:text-amber-700">Home</a>
          <a href="#about" className=" hover:text-amber-700">About</a>
          <a href="#portfolio" className="  hover:text-amber-700">Portfolio</a>
          <a href="#service" className=" hover:text-amber-700">Services</a>
          <a href="#contact" className=" hover:text-amber-700">Contact</a>
        </nav>

        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-white focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">About</a>
           <a href="#" className="block text-gray-700 hover:text-indigo-600">Portfolio</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">Services</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">Contact</a>
        </div>
      )}
  </header>
  )
}

export default Header