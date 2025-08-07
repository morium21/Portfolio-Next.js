import React, {  } from 'react'


const Header = () => {

 
  return (
    <header className="bg-[#1C1C1C] text-white py-8 text-center">
      <div className="cotainer mx-auto flex justify-between items-center max-w-7xl px- py-3">
        <h1 className="text-4xl font-bold">Morium <span className="text-amber-700">Akter</span></h1>
       
      <div className="flex"> 
          <nav classname="flex items-center">
          <ul className="flex items-center gap-15">
            <li><a href="#home" className="hover:text-amber-700">Home</a></li>
            <li><a href="#about" className="hover:text-amber-700">About</a></li>
            <li><a href="#portfolio" className="hover:text-amber-700">Portfolio</a></li>
            <li><a href="#service" className="hover:text-amber-700">Service</a></li>
            <li><a href="#contact" className="hover:text-amber-700">Contact</a></li>
          </ul>
        </nav>
      </div>
      </div>

    </header>


  )
}

export default Header
