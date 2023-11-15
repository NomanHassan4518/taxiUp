import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center h-72" style={{ backgroundImage: `url("https://driver-up-company.vercel.app/heading_02.jpg")` }} >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <p className="text-white text-5xl font-light p-8">Contact Us</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 ">
        <div className='space-y-8 px-20 py-20'>
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

      <div>
     
      </div>

    </div>
  )
}

export default Contact
