import React from 'react'
import Offer from './Offer'

const Services = () => {
  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center h-72" style={{ backgroundImage: `url("https://driver-up-company.vercel.app/heading_02.jpg")` }} >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <p className="text-white text-5xl font-light p-8">Our Services</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:px-20 px-5 mt-16">
        <div className='space-y-8 text-gray-600'>
          <p className='text-2xl font-medium'>AutoRide Transportation Services</p>
          <p>A family-owned business since its incorporation in 1995, the company has grown from 5 vehicles to more than 150 vehicles today. Thanks to Chairman and CEO Anna Criado’s innovative business strategies of over the last two and a half decades, AutoRide has enjoyed continued growth.</p>
        </div>

        <div className="flex space-x-2">
          <p>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-8 h-8 mt-7 text-amber-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 0C460.22 3.56 96.44 38.2 71.01 287.61c-3.09 26.66-4.84 53.44-5.99 80.24l178.87-178.69c6.25-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94 9.38 9.37 24.59 9.37 33.98 0l57.13-57.07c42.09-.14 84.15-2.53 125.96-7.36 53.48-5.44 97.02-26.47 132.58-56.54H255.74l146.79-48.88c11.25-14.89 21.37-30.71 30.45-47.12h-81.14l106.54-53.21C500.29 132.86 510.19 26.26 512 0z"></path></svg>
          </p>
          <div>
            <p className='text-4xl font-light text-gray-600'>I founded this company in 1995 with the vision of offering the highest quality luxury transportation service. I invite you to try our service and I personally guarantee you will have a fully satisfied experience.</p>
            <p className='mt-2 text-2xl font-light lg:text-end text-center text-gray-500'>ANNA CRIADO - CHAIRMAN & CEO</p>
          </div>
        </div>
      </div>

      <div className='bg-gray-50 py-10 mt-24 lg:px-20'>
        <div className='text-center'>
          <p className='text-4xl font-light text-gray-600 mt-3'>The perfect collection of vehicles – whatever your occasion is choose our service</p>
        </div>
        <Offer />
      </div>
    </div>
  )
}

export default Services
