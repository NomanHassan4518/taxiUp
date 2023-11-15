import React from 'react'
import { Link } from 'react-router-dom'

const CustomerServices = () => {
    return (
        <div className='text-center mt-6'>
            <div className="flex flex-col justify-center items-center lg:px-12 px-5 space-y-6">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="w-12 h-12 text-amber-600 p-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z"></path></svg>

                <p className='md:text-3xl text-xl font-light lg:px-48 px-5 text-gray-600'>I invite you to try our service and I personally guarantee you will
                    have a fully satisfied experience.</p>
                <p className='text-xl font-semibold text-gray-500'>ANDRO Tomas - CHAIRMAN CEO</p>
            </div>
            
                <div className='mt-20 grid lg:grid-cols-2 grid-cols-1 space-x-4 items-center lg:px-20 px-5'>
                    <div className='space-y-8'>
                        <h1 className='text-3xl font-medium text-gray-600'>Exceptional Customer Service</h1>
                        <p className='text-2xl font-light text-gray-500'>By offering exceptional service with no detail unattended, we have been fortunate enough to have developed into the leading provider of ground transportation in the area. Our goal is to make your travels safe, effortless and on schedule.</p>
                        <Link to="/" className="inline-flex uppercase justify-center items-center py-3 px-5 text-base  text-center text-white rounded-full bg-amber-600 hover:bg-amber-800 ">
                            Contact Us
                        </Link>
                    </div>

                    <div className='grid grid-cols-2 space-x-3 mt-12 lg:mt-0'>
                        <div className='w-full'>
                            <img className='w-[100%]' src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_10-1.a691d225.jpg&w=384&q=75" alt="" />
                        </div>
                        <div className='md:space-y-12 space-y-6'>
                            <div className='w-full'>
                                <img className='w-[100%]' src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_10-2.49b0dd86.jpg&w=384&q=75" alt="" />
                            </div>
                            <div className='w-full'>
                                <img className='w-[100%]' src="https://driver-up-company.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_03-2.6ad4dcc2.jpg&w=384&q=75" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                </div>
    )
}

export default CustomerServices
