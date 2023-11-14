import React from 'react'
import { Link } from 'react-router-dom'

const Offer = () => {

    return (
        <>
            <div className='bg-gray-50 py-10 mt-24 px-20'>

                <div className='text-center'>
                    <p className='text-xl font-medium text-amber-600'>WHAT WE OFFER</p>
                    <p className='text-4xl font-light text-gray-600 mt-3'>See What We Can Do for You</p>
                </div>


                <div className="grid grid-cols-2 gap-4 mt-16 ">

                    <div className="relative " style={{ width: "100%", height: "15rem", backgroundImage: `url("https://driver-up-company.vercel.app/image_01-4.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
                        <div className=" bg-black bg-opacity-30 hover:bg-opacity-5 w-full h-full">
                            <p className='absolute left-4 bottom-6 text-2xl font-medium text-white'>Hassan</p>
                        </div>
                    </div>

                    <div className="relative " style={{ width: "100%", height: "15rem", backgroundImage: `url("	https://driver-up-company.vercel.app/image_02-4.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
                        <div className=" bg-black bg-opacity-30 hover:bg-opacity-5 w-full h-full">
                            <p className='absolute left-4 bottom-6 text-2xl font-medium text-white'>Hassan</p>
                        </div>
                    </div>

                    <div className="relative " style={{ width: "100%", height: "15rem", backgroundImage: `url("https://driver-up-company.vercel.app/image_02-4.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
                        <div className=" bg-black bg-opacity-30 hover:bg-opacity-5 w-full h-full">
                            <p className='absolute left-4 bottom-6 text-2xl font-medium text-white'>Hassan</p>
                        </div>
                    </div>

                    <div  >
                        <div className='flex space-x-3'>
                            <div className="relative " style={{ width: "100%", height: "15rem", backgroundImage: `url("https://driver-up-company.vercel.app/image_04-4.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
                                <div className=" bg-black bg-opacity-30 hover:bg-opacity-5 w-full h-full">
                                    <p className='absolute left-4 bottom-6 text-2xl font-medium text-white'>Hassan</p>
                                </div>
                            </div>
                            <div className="relative " style={{ width: "100%", height: "15rem", backgroundImage: `url("https://driver-up-company.vercel.app/image_05-2.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
                                <div className=" bg-black bg-opacity-30 hover:bg-opacity-5 w-full h-full">
                                    <p className='absolute left-4 bottom-6 text-2xl font-medium text-white'>Hassan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <Link to="/" className="inline-flex uppercase justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-amber-600 hover:bg-amber-800 ">
                        Contact Us
                    </Link>
                </div>
            </div>

            <div className='text-center mt-12'>
                <p className='text-xl font-medium text-amber-600'>WHY CHOOSE US</p>
                <p className='text-4xl font-light text-gray-600 mt-3'>Proudly Serving the Oakland Area Since 2007</p>
            </div>
        </>

    )
}

export default Offer
