import React from 'react'
import { Link } from 'react-router-dom'

const Offer = () => {

    return (
        <>
            <div >
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-16 ">

                    <div className="relative " style={{ width: "100%", height: "15rem", backgroundImage: `url("https://driver-up-company.vercel.app/image_01-4.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
                        <div className=" bg-black bg-opacity-30 hover:bg-opacity-5 w-full h-full">
                            <p className='absolute left-4 bottom-6 text-2xl font-medium text-white'>AIRPORT TRANSFER</p>
                        </div>
                    </div>

                    <div className="relative " style={{ width: "100%", height: "15rem", backgroundImage: `url("	https://driver-up-company.vercel.app/image_02-4.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
                        <div className=" bg-black bg-opacity-30 hover:bg-opacity-5 w-full h-full">
                            <p className='absolute left-4 bottom-6 text-2xl font-medium text-white'>
                                WORLDWIDE TRANSPORTATION</p>
                        </div>
                    </div>

                    <div className="relative " style={{ width: "100%", height: "15rem", backgroundImage: `url("https://driver-up-company.vercel.app/image_02-4.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
                        <div className=" bg-black bg-opacity-30 hover:bg-opacity-5 w-full h-full">
                            <p className='absolute left-4 bottom-6 text-2xl font-medium text-white'>CORPORATE TRAVEL</p>
                        </div>
                    </div>

                    <div  >
                        <div className='flex lg:space-x-3 lg:flex-row flex-col'>
                            <div className="relative " style={{ width: "100%", height: "15rem", backgroundImage: `url("https://driver-up-company.vercel.app/image_04-4.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
                                <div className=" bg-black bg-opacity-30 hover:bg-opacity-5 w-full h-full">
                                    <p className='absolute left-4 bottom-6 text-2xl font-medium text-white'>CHARTER SERVICE</p>
                                </div>
                            </div> 
                            <div className="relative lg:mt-0 mt-7 " style={{ width: "100%", height: "15rem", backgroundImage: `url("https://driver-up-company.vercel.app/image_05-2.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
                                <div className=" bg-black bg-opacity-30 hover:bg-opacity-5 w-full h-full">
                                    <p className='absolute left-4 bottom-6 text-2xl font-medium text-white'>SPECIAL EVENT LIMOUSINE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <Link to="/contact" className="inline-flex uppercase justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-amber-600 hover:bg-amber-800 ">
                        Contact Us
                    </Link>
                </div>
            </div>

           
        </>

    )
}

export default Offer
