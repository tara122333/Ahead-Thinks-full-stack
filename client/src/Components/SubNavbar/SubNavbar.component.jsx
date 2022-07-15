import React from "react";
// import {BiChevronDown} from 'react-icons/bi';
import { NavLink } from "react-router-dom";
let activeClassName = "underline";

const SubNavbarSm = ()=>{

    
    return(
        <>
            <div className="px-3 border-2 border-b-tara-0">
            <div className="flex justify-center items-center md:gap-8">
                    <div className="flex justify-between gap-1 px-2 py-2 items-center cursor-pointer hover:text-blue-800 font-bold">
                                <NavLink to="/" className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                        }><h3 className="md:text-xl">Course</h3></NavLink>
                    </div>
                    <div className="flex justify-between gap-1 px-2 py-2 items-center cursor-pointer hover:text-blue-800 font-bold">
                                <NavLink to="/profile" className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                        }><h3 className="md:text-xl">Profile</h3></NavLink>
                    </div>
                    <div className="flex justify-between gap-1 px-2 py-2 items-center cursor-pointer hover:text-blue-800 font-bold">
                                <NavLink to="/contact" className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                        }><h3 className="md:text-xl">Contact Us</h3></NavLink>
                    </div>
                </div>
        </div>
        </>
    );
};

const SubNavbarLg = ()=>{
    return(
        <>
        <div className="px-3 w-full bg-tara-0 text-white py-2">
            <div className="flex justify-center items-center gap-4">
                <div className="flex justify-between gap-1 px-3 py-2 items-center cursor-pointer hover:bg-white hover:text-tara-0 hover:rounded-sm font-bold">
                    
                    <NavLink to="/" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }><h3 className="text-sm">COURSES</h3></NavLink>
                    {/* <BiChevronDown /> */}
                </div>
                <div className="flex justify-between gap-1 px-3 py-2 items-center cursor-pointer hover:bg-white hover:text-tara-0 hover:rounded-sm font-bold">
                <NavLink to="/profile" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }><h3 className="text-sm">PROFILE</h3></NavLink>
                    
                    {/* <BiChevronDown /> */}
                </div>
                <div className="flex justify-between gap-1 px-3 py-2 items-center cursor-pointer hover:bg-white hover:text-tara-0 hover:rounded-sm font-bold">
                <NavLink to="/contact" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }> <h3 className="text-sm">CONTACT US</h3></NavLink>
                </div>
            </div>
        </div> 
        </>
    );
};


const SubNavbar = ()=>{
    return(
        <>
            <div className="lg:hidden">
                <SubNavbarSm />
            </div>
            <div className="hidden lg:flex">
                <SubNavbarLg />
            </div>
        </>
    );
}

export default SubNavbar;