import React from 'react'
import Offer from './Offer'

function About() {
  const fleet = [
    {
      img: "	https://driver-up-company.vercel.app/image_10-1-768x512.jpg",
      name: "Audi A8",
      icon1: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 192 512" class="w-5 h-5 text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"></path></svg>,
      number: "4",
      icon2: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="w-5 h-5 text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
    },
    {
      img: "	https://driver-up-company.vercel.app/image_10-1-768x512.jpg",
      name: "Audi A8",
      icon1: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 192 512" class="w-5 h-5 text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"></path></svg>,
      number: "4",
      icon2: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="w-5 h-5 text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
    },
    {
      img: "	https://driver-up-company.vercel.app/image_10-1-768x512.jpg",
      name: "Audi A8",
      icon1: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 192 512" class="w-5 h-5 text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"></path></svg>,
      number: "4",
      icon2: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="w-5 h-5 text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
    },
  ]
  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center h-72" style={{ backgroundImage: `url("https://driver-up-company.vercel.app/heading_02.jpg")` }} >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <p className="text-white text-5xl font-light p-8">About Us</p>
        </div>
      </div>

      <div className="mt-20 lg:px-16 md:px-10 px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className='space-y-8 text-gray-800'>
            <p className='text-xl font-medium'>For over a dozen years we have been providing the best transport services. We offer bus, passenger transport and limousine rental.</p>
            <p className='text-gray-500'>We address our offer to all who want to travel in comfortable conditions. We have over 120 top-class vehicles, so our customers can be assured of comfort and safety.</p>
            <div className='space-y-3'>
              <p className='space-x-4 flex items-center'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-9 h-9 border rounded-full text-amber-500 p-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                <p>Professionally Trained Chauffeurs</p>
              </p>
              <p className='space-x-4 flex items-center'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-9 h-9 border rounded-full text-amber-500 p-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                <p>24/7 Full-Service Transportation</p>
              </p>
              <p className='space-x-4 flex items-center'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-9 h-9 border rounded-full text-amber-500 p-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                <p>Global network of Transportation Partners</p>
              </p>
            </div>
          </div>

          <div>
            <img src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_01-6.65fd56b3.jpg&w=640&q=75" alt="" />
          </div>
        </div>
      </div>

      <div className='bg-gray-50 lg:px-24 px-4 pt-16 pb-32 mt-20'>
        <div className='text-center'>
          <p className='font-medium text-amber-600 text-xl'>COMMITMENT TO WORK</p>
          <p className='text-4xl font-light text-gray-600 mt-2'>Our Competences</p>

          <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <img className='w-full' src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_06.6e4e3ab2.jpg&w=640&q=75" alt="" />
              <div className='bg-white py-8 px-12 space-y-4 pt-12'>
                <p className='text-xl font-medium text-amber-600'>PROFESSIONALISM</p>
                <p className='text-gray-600'>Our experienced staff and highly professional chauffeurs are committed to providing safe, reliable transportation, exceptional customer service, and consistent pricing. We provide in-house dispatchers who support our clients.</p>
              </div>
            </div>
            <div>
              <img className='w-full' src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_07.5d6ed008.jpg&w=640&q=75" alt="" />
              <div className='bg-white py-8 px-12 space-y-4 pt-12'>
                <p className='text-xl font-medium text-amber-600'>COMMITMENT</p>
                <p className='text-gray-600'>Our office is open twenty four hours a day, seven days a week. You name the occasion – we’ll make the ride flawless. Whether you require a chauffeured vehicle for business or pleasure, close to home or in a new city we are always there.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-20'>
        <div className='text-center'>
          <p className='font-medium text-amber-600 text-xl'>OUR FLEET</p>
          <p className='text-4xl font-light text-gray-600 mt-2'>Browse Our Limos</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 grid-cols-1 gap-5 lg:px-12 px-4">
          {
            fleet.map((item, index) => (
             <div key={index} className='border border-gray-300'>
               <div className="bg-no-repeat bg-cover bg-center relative h-72" style={{ backgroundImage: `url(${item.img})` }} >
                <div className="bg-black bg-opacity-50 w-full h-full ">
                  <p className="text-white text-xl font-medium absolute left-4 bottom-6">{item.name}</p>
                </div>
              </div>
              <div className="flex mt-5 pb-3 items-center justify-center space-x-4">
                <p>{item.icon1}</p>
                <p className='border border-gray-200 p-2 rounded-xl'>{item.number}</p>
                <p>{item.icon2}</p>
                <p className='border border-gray-200 p-2 rounded-xl'>{item.number}</p>
              </div>
             </div>
            ))
          }
        </div>
      </div>

      
    </div>
  )
}

export default About
