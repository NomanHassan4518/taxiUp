import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
       <>
        <div className='lg:flex justify-between items-center lg:px-12 px-4 py-5 bg-[#f3f4f6] text-gray-500'>
            <div className='md:flex md:flex-col lg:flex-row items-center lg:space-x-10  text-start mt-0 '>
                <div className="flex space-x-2 items-center">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="w-5 h-5 text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                    <p>2507 Parker Boulevard, Oakland, CA 76107</p>
                </div>

                <div className="flex space-x-2 items-center mt-4 lg:mt-0">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="w-5 h-5 text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>
                    <p>(0481) 123 987 2411</p>
                </div>

                <div className="flex space-x-2 items-center mt-4 lg:mt-0">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-5 h-5 text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                    <p>Mon-Sat: 07:00 - 17:00</p>
                </div>
            </div>

            <div className='flex md:justify-center items-center space-x-5 mt-4 lg:mt-0 '>
                <span ><FaFacebook className='w-6 h-6'/></span>
                <span ><FaInstagram  className='w-6 h-6'/></span>
                <span ><FaWhatsapp  className='w-6 h-6'/></span>
            </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between lg:px-12 px-3 py-7 items-center">
            <div className='mt-4 md:mt-0'>
              <Link to='/'>
              <img src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.b26f9ed4.png&w=256&q=75" alt="" />
              </Link>
            </div>
            <div className='mt-4 md:mt-0'>
                <ul className='flex space-x-6 text-gray-500 uppercase'>
                    <li><Link to="/" className='text-[#ca8a04]'>Home</Link></li>
                    <li><Link to="/about" className='hover:text-[#ca8a04]'>About</Link></li>
                    <li><Link to="/services" className='hover:text-[#ca8a04]'>Services</Link></li>
                    <li><Link to="/contact" className='hover:text-[#ca8a04]'>Contact</Link></li>
                </ul>
            </div>
            <div className='mt-4 md:mt-0'>
                <button className='border-2 border-yellow-500 rounded-3xl py-2.5 px-5 text-center hover:text-white hover:bg-yellow-600 text-gray-700'>GET A QUOTE</button>
            </div>
        </div>
       </>
    )
}

export default Navbar
