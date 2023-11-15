import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
       <>
        <div className='bg-[#f3f4f6] py-10 lg:px-20 px-7 mt-20'>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-16">
                <div className="flex space-x-2">
                    <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="w-10 h-10 text-amber-600 p-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg></span>
                    <span className='space-y-1'>
                        <p className='text-gray-500'>ADDRESS</p>
                        <p className='text-gray-600 font-medium'>2507 PARKER BOULEVARD OAKLAND, CA 76107</p>
                    </span>
                </div>
                <div className="flex space-x-2">
                    <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-10 h-10 text-amber-600 p-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg></span>
                    <span className='space-y-1'>
                        <p className='text-gray-500'>PHONES</p>
                        <p className='text-gray-600 font-medium'>BOOK A RIDE: (0481) 123 987 2411 OFFICE: (0481) 123 987 2412</p>
                    </span>
                </div>
                <div className="flex space-x-2">
                    <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-10 h-10 text-amber-600 p-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg></span>
                    <span className='space-y-1'>
                        <p className='text-gray-500'>WORKING HOURS</p>
                        <p className='text-gray-600 font-medium'>MON-SAT: 07:00 - 17:00 SUN: CLOSED</p>
                    </span>
                </div>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mt-16">
                <div>
                    <img src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.b26f9ed4.png&w=256&q=75" alt="" />
                    <p className='mt-8 text-gray-500'>DriverUP has provided car services in Oakland area since 2005. What started as a small company has grown into a premier limousine and private transportation company.</p>
                </div>
                <div>
                    <p className='text-gray-600 font-medium'>OUR SERVICES</p>
                    <p className='border-solid border border-amber-500 w-1/4 mt-2'></p>
                    <ul className="mt-7 space-y-1">
                        <li className=' text-gray-500 flex items-center '>
                            <span><RiArrowRightSLine className='w-9 h-9' /></span>
                            <span>Experiential Tours</span>
                        </li>
                        <li className=' text-gray-500 flex items-center '>
                            <span><RiArrowRightSLine className='w-9 h-9' /></span>
                            <span>Wedding Limousine</span>
                        </li>
                        <li className=' text-gray-500 flex items-center '>
                            <span><RiArrowRightSLine className='w-9 h-9' /></span>
                            <span>Corporate Travel</span>
                        </li>
                        <li className=' text-gray-500 flex items-center '>
                            <span><RiArrowRightSLine className='w-9 h-9' /></span>
                            <span>Airport Transportation</span>
                        </li>
                        <li className=' text-gray-500 flex items-center '>
                            <span><RiArrowRightSLine className='w-9 h-9' /></span>
                            <span>Nationwide Transportation</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='text-gray-600 font-medium'>DriverUP</p>
                    <p className='border-solid border border-amber-500 w-1/4 mt-2'></p>
                    <ul className="mt-7 space-y-4">
                        <li className=' text-gray-500 flex items-center space-x-2 '>
                            <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" className="w-6 h-6 text-gray-500 font-light" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></span>
                            <span>2507 Parker Boulevard, Oakland</span>
                        </li>
                        <li className=' text-gray-500 flex items-center space-x-2'>
                            <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-6 h-6 text-gray-500 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg></span>
                            <span>(0481) 123 987 2411</span>
                        </li>
                        <li className=' text-gray-500 flex items-center space-x-2'>
                            <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="w-6 h-6 text-gray-500 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"></path></svg></span>
                            <span>(0481) 123 987 2412</span>
                        </li>
                        <li className=' text-gray-500 flex items-center space-x-2'>
                            <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="w-6 h-6 text-gray-500 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 128a144 144 0 0 0-119.74 224H263.74A144 144 0 1 0 144 416h352a144 144 0 0 0 0-288zM64 272a80 80 0 1 1 80 80 80 80 0 0 1-80-80zm432 80a80 80 0 1 1 80-80 80 80 0 0 1-80 80z"></path></svg></span>
                            <span>contact@autoride.com</span>
                        </li>
                        <li className=' text-gray-500 flex items-center space-x-2 '>
                            <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="w-6 h-6 text-gray-500 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg></span>
                            <span>Mon-Sat: 07:00 - 17:00</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='text-gray-600 font-medium'>SUBSCRIBE</p>
                    <p className='border-solid border border-amber-500 w-1/4 mt-2'></p>
                    <div className="mt-7">
                        <input type="email" className='p-2.5 bg-gray-50 border border-gray-500 w-full focus:border-blue-700 focus:ring-blue-700' placeholder='name@flowbite.com' />
                        <button type='submit' className='bg-amber-700 w-full mt-4 p-2.5 text-center font-medium text-white hover:bg-amber-800'>Submit</button>
                    </div>
                </div>

            </div>

          
        </div>

        <div className="py-6 flex items-center justify-between lg:px-12 px-3">
                <p>Copyright 2021 DriverUp Theme by Wael Hassine</p>
                <div className='flex md:justify-center items-center text-gray-600 space-x-3 mt-4 lg:mt-0 '>
                <span ><FaFacebook className='w-6 h-6'/></span>
                <span ><FaInstagram  className='w-6 h-6'/></span>
                <span ><FaWhatsapp  className='w-6 h-6'/></span>
            </div>
            </div>
       </>
    )
}

export default Footer
