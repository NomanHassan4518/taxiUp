import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center h-72" style={{ backgroundImage: `url("https://driver-up-company.vercel.app/heading_02.jpg")` }} >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <p className="text-white text-5xl font-light p-8">Contact Us</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 ">
        <div className='space-y-8 lg:px-20 px-5 py-20'>
          <p className='text-2xl text-gray-600'>AutoRide <br />
            Transportation Services</p>
          <p className='text-xl text-gray-500 font-light'>
            2507 Parker Boulevard <br />
            Oakland, CA 76107
          </p>
          <p className='text-xl text-gray-500 font-light'>
            Phone: (620) 255 7005 <br />
            Toll Free: (825) 840 0440
          </p>
          <p className='text-xl text-gray-500 font-light'>
            Email: info@autoride.com
          </p>
        </div>

        <div className='bg-[#f3f4f6] space-y-8 px-20 py-20'>
          <p className='text-2xl text-gray-600'>Chairman of the Board</p>
          <p className='text-xl text-gray-500 font-light'> Mark Peter <br />
            Phone: (620) 252 8021, Fax: (620) 252 8022 <br />
            Email: mark.peter@autoride.com</p>
          <p className='text-2xl text-gray-600'>Director of Development</p>
          <p className='text-xl text-gray-500 font-light'>John Green <br />
            Phone: (620) 252 8021, Fax: (620) 252 8022 <br />
            Email: mark.peter@autoride.com</p>
        </div>
      </div>

      <div className="lg:px-20 px-5 mt-20">
        <div className='grid lg:grid-cols-2 grid-cols-1 border border-gray-300 '>
          <div className='border-r-2 border-gray-300'>
            <div class="relative z-0 w-full mb-6 group border-b-2 border-gray-300 px-8 py-4">
              <p className='mt-3 text-gray-900'>Your email</p>
              <input type="email" name="floating_email" id="floating_email" class="block mt-2 py-2.5 px-2.5 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none rounded-sm dark:text-white dark:border-gray-600 dark:focus:border-none focus:outline-none focus:ring-2 focus:ring-black focus:border-blue-600 " placeholder=" name@flowbite.com" required />
            </div>
            <div class="relative z-0 w-full mb-6 group border-b-2 border-gray-300 px-8 py-1">
              <p className=' text-gray-900'>Your email</p>
              <input type="email" name="floating_email" id="floating_email" class="block mt-2 py-2.5 px-2.5 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none rounded-sm dark:text-white dark:border-gray-600 dark:focus:border-none focus:outline-none focus:ring-2 focus:ring-black focus:border-blue-600 mb-4" placeholder=" name@flowbite.com" required />
            </div>
            <div class="relative z-0 w-full mb-6 group lg:border-none border-b-2 border-gray-300  px-8 py-1">
              <p className=' text-gray-900'>Your email</p>
              <input type="email" name="floating_email" id="floating_email" class="block mt-2 py-2.5 px-2.5 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none rounded-sm dark:text-white dark:border-gray-600 dark:focus:border-none focus:outline-none focus:ring-2 focus:ring-black focus:border-blue-600 mb-2  " placeholder=" name@flowbite.com" required />
            </div>
          </div>
          <div>
            <div className='px-5'>
              <p className="mt-3 text-gray-900">Your message</p>
              <textarea name="" id="" cols="10" rows="6" className='block mt-4 py-2.5 px-2.5 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none rounded-sm dark:text-white dark:border-gray-600 dark:focus:border-none focus:outline-none focus:ring-2 focus:ring-black focus:border-blue-600 mb-2' placeholder='Leave a comment'></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4">
        <Link to="/contact" className="inline-flex uppercase justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-amber-600 hover:bg-amber-800 ">
          Contact Us
        </Link>
      </div>



    </div>
  )
}

export default Contact
