import React from "react";
import {ImLinkedin,ImFacebook2} from 'react-icons/im';
import {BsInstagram,BsYoutube} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
const FooterLayout = (props)=>{
    return(
        <>
            <div className="flex flex-col gap-4 mt-6  md:w-full sticky" style={{backgroundColor:"#8E9CCD"}}>
                <div className="flex justify-between gap-3 my-3 w-full lg:gap-5">
                    {/* top */}
                    <div className="flex flex-col text-white mx-3">
                        <h3 className="text-xl font-bold text-white lg:text-2xl">FineSkills</h3>
                        <div className="flex flex-col my-2">
                            <span className="text-white font-bold">about</span>
                            <span className="text-white font-bold">What we offers</span>
                            <span className="text-white font-bold">career</span>
                            <span className="text-white font-bold">leadership</span>
                            <span className="text-white font-bold">catalog</span>
                            <span className="text-white font-bold">fineskiils plus</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-white lg:text-2xl">Contact us</h3>
                        <div className="flex flex-col my-2">
                            <span className="text-white font-bold">tara420@gmail.com</span>
                            <span className="text-white font-bold">+91 1234567890</span>
                            <span className="text-white font-bold">jaipur, Rajasthan</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="h-12 lg:h-16 lg:w-40">
                            <img src="https://www.freepnglogos.com/uploads/play-store-logo-png/play-store-logo-nisi-filters-australia-11.png" alt="googleplaystore" className="w-full h-full" />
                        </div>
                        <div className="h-16 lg:h-20 lg:w-48">
                            <img src="https://de.maplesoft.com/products/MapleCalculator/images/app-store-icons-apple-app-store.png" alt="appleistore" className="w-full h-full" />
                        </div>

                    </div>

                </div>
                <div className="flex justify-between mx-3 mb-5 my-2">
                    {/* Bottom */}
                    <div>
                        <span className="font-bold text-lg lg:text-2xl">&copy; 2022 FineSkills. All rights reserved</span>
                    </div>
                    <div className="flex gap-3">
                        <ImLinkedin  className="h-6 w-6 lg:h-8 lg:w-8"/>
                        <ImFacebook2 className="h-6 w-6 lg:h-8 lg:w-8"/>
                        <BsInstagram className="h-6 w-6 lg:h-8 lg:w-8"/>
                        <AiFillTwitterCircle className="h-6 w-6 lg:h-8 lg:w-8" />
                        <BsYoutube className="h-6 w-6 lg:h-8 lg:w-8" />
                    </div>

                </div>
            </div>
        </>
        
    );
}

export default FooterLayout;