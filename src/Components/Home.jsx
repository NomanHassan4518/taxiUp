import React from 'react'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import CustomerServices from './CustomerServices';
import Offer from './Offer';
const Home = () => {

  const services = [
    {
      icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32c477.6 0 366.6 317.3 367.1 366.3L448 480h-26l-70.4-71.2c-39 4.2-124.4 34.5-214.4-37C47 300.3 52 214.7 0 32zm79.7 46c-49.7-23.5-5.2 9.2-5.2 9.2 45.2 31.2 66 73.7 90.2 119.9 31.5 60.2 79 139.7 144.2 167.7 65 28 34.2 12.5 6-8.5-28.2-21.2-68.2-87-91-130.2-31.7-60-61-118.6-144.2-158.1z"></path></svg>,
      name: "Safety First",
      desc: "Experienced staff and professionally trained chauffeurs",
    },
    {
      icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path></svg>,
      name: "Reasonable Rates",
      desc: "We can offer you the right vehicle at the right price to fit your budget",
    },
    {
      icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M488 128h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8c-13.25 0-24 10.74-24 24v80c0 13.25 10.75 24 24 24h8v160c0 17.67 14.33 32 32 32v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h192v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h6.4c16 0 25.6-12.8 25.6-25.6V256h8c13.25 0 24-10.75 24-24v-80c0-13.26-10.75-24-24-24zM160 72c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H168c-4.42 0-8-3.58-8-8V72zm-48 328c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm128-112H128c-17.67 0-32-14.33-32-32v-96c0-17.67 14.33-32 32-32h112v160zm32 0V128h112c17.67 0 32 14.33 32 32v96c0 17.67-14.33 32-32 32H272zm128 112c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>,
      name: "Largest Fleet",
      desc: "We offer an extensive fleet of vehicles including sedans, limousines and coach buses",
    },
    {
      icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M384 352c-.35 0-.67.1-1.02.1l-39.2-65.32c5.07-9.17 8.22-19.56 8.22-30.78s-3.14-21.61-8.22-30.78l39.2-65.32c.35.01.67.1 1.02.1 35.35 0 64-28.65 64-64s-28.65-64-64-64c-23.63 0-44.04 12.95-55.12 32H119.12C108.04 44.95 87.63 32 64 32 28.65 32 0 60.65 0 96c0 23.63 12.95 44.04 32 55.12v209.75C12.95 371.96 0 392.37 0 416c0 35.35 28.65 64 64 64 23.63 0 44.04-12.95 55.12-32h209.75c11.09 19.05 31.49 32 55.12 32 35.35 0 64-28.65 64-64 .01-35.35-28.64-64-63.99-64zm-288 8.88V151.12A63.825 63.825 0 0 0 119.12 128h208.36l-38.46 64.1c-.35-.01-.67-.1-1.02-.1-35.35 0-64 28.65-64 64s28.65 64 64 64c.35 0 .67-.1 1.02-.1l38.46 64.1H119.12A63.748 63.748 0 0 0 96 360.88zM272 256c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16-16-7.18-16-16zM400 96c0 8.82-7.18 16-16 16s-16-7.18-16-16 7.18-16 16-16 16 7.18 16 16zM64 80c8.82 0 16 7.18 16 16s-7.18 16-16 16-16-7.18-16-16 7.18-16 16-16zM48 416c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16-16-7.18-16-16zm336 16c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z"></path></svg>,
      name: "Nationwide Service",
      desc: "We provide our transportation services nationwide",
    },
  ]

  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div>
        <Slider {...settings}>

          <div>
            <div className="bg-blend-multiply bg-gray-400" style={{ width: "100%", backgroundImage: `url("https://driver-up-company.vercel.app/img01.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", }}>
              <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"> First Class . WorldWide</h1>
                <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">A chauffer Service for Any Purpose.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                  <Link to="/contact" className="inline-flex uppercase justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-amber-600 hover:bg-amber-800 ">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-blend-multiply bg-gray-400" style={{ width: "100%", backgroundImage: `url("https://driver-up-company.vercel.app/img02.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", }}>
              <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"> First Class . WorldWide</h1>
                <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">A chauffer Service for Any Purpose.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                  <Link to="/contact" className="inline-flex uppercase justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-amber-600 hover:bg-amber-800 ">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-blend-multiply bg-gray-400" style={{ width: "100%", backgroundImage: `url("https://driver-up-company.vercel.app/img03.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", }}>
              <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"> First Class . WorldWide</h1>
                <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">A chauffer Service for Any Purpose.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                  <Link to="/contact" className="inline-flex uppercase justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-amber-600 hover:bg-amber-800 ">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className='lg:mt-28 mt-20 lg:px-20 px-5'>
        <div className="grid lg:grid-cols-4 grid-cols-1 space-x-5">
          {
            services.map((item, index) => (
              <div key={index} className='flex flex-col items-center text-gray-600 pt-12 lg:pt-0'>
                <p>{item.icon}</p>
                <p className='my-3 text-2xl font-medium '>{item.name}</p>
                <p className='text-center'>{item.desc}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="my-24 flex lg:flex-row flex-col w-full md:px-20 px-5 ">
        <div className='w-full'>
          <img className=' w-[100%] object-cover ' src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_01-6.65fd56b3.jpg&w=640&q=75" alt="" />
        </div>
        <div className='w-full mt-8'>
          <img className='w-[100%] object-cover' src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_01-5.077f961a.jpg&w=640&q=75" alt="" />
        </div>
      </div>

      <div>

        <CustomerServices />
      </div>

      <div className='bg-gray-50 py-10 mt-24 lg:px-20'>
        <div className='text-center'>
          <p className='text-xl font-medium text-amber-600'>WHAT WE OFFER</p>
          <p className='text-4xl font-light text-gray-600 mt-3'>See What We Can Do for You</p>
        </div>
        <Offer />
      </div>

      <div className='text-center mt-12'>
        <p className='text-xl font-medium text-amber-600'>WHY CHOOSE US</p>
        <p className='text-4xl font-light text-gray-600 mt-3'>Proudly Serving the Oakland Area Since 2007</p>
      </div>
    </>
  )
}

export default Home
