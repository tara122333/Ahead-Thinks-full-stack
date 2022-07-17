import React from "react";
// import {BiChevronDown} from 'react-icons/bi';
import { NavLink } from "react-router-dom";
let activeClassName = "underline";

export const SubNavbarSm = ()=>{

    
    return(
        <>
            <div className="px-3 border-b-tara-0 bg-tara-0 text-white">
            <div className="flex justify-center items-center md:gap-6">
                    <div className="flex justify-between gap-1 px-5 py-1 items-center cursor-pointer hover:bg-white hover:text-tara-0 font-bold">
                                <NavLink to="/" className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                        }><h3 className="md:text-base">Course</h3></NavLink>
                    </div>
                    <div className="flex justify-between gap-1 px-5 py-1 items-center cursor-pointer hover:bg-white hover:text-tara-0 font-bold">
                                <NavLink to="/profile" className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                        }><h3 className="md:text-base">Profile</h3></NavLink>
                    </div>
                    <div className="flex justify-between gap-1 px-5 py-1 items-center cursor-pointer hover:bg-white hover:text-tara-0 font-bold">
                                <NavLink to="/contact" className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                        }><h3 className="md:text-base">Contact Us</h3></NavLink>
                    </div>
                </div>
        </div>
        </>
    );
};

// const SubNavbarLg = ()=>{
//     return(
//         <>
//         <div className="px-3 w-full bg-tara-0 text-white py-2">
//             <div className="flex justify-center items-center gap-4">
//                 <div className="flex justify-between gap-1 px-3 py-2 items-center cursor-pointer hover:bg-white hover:text-tara-0 hover:rounded-sm font-bold">
                    
//                     <NavLink to="/" className={({ isActive }) =>
//               isActive ? activeClassName : undefined
//             }><h3 className="text-sm">COURSES</h3></NavLink>
//                     {/* <BiChevronDown /> */}
//                 </div>
//                 <div className="flex justify-between gap-1 px-3 py-2 items-center cursor-pointer hover:bg-white hover:text-tara-0 hover:rounded-sm font-bold">
//                 <NavLink to="/profile" className={({ isActive }) =>
//               isActive ? activeClassName : undefined
//             }><h3 className="text-sm">PROFILE</h3></NavLink>
                    
//                     {/* <BiChevronDown /> */}
//                 </div>
//                 <div className="flex justify-between gap-1 px-3 py-2 items-center cursor-pointer hover:bg-white hover:text-tara-0 hover:rounded-sm font-bold">
//                 <NavLink to="/contact" className={({ isActive }) =>
//               isActive ? activeClassName : undefined
//             }> <h3 className="text-sm">CONTACT US</h3></NavLink>
//                 </div>
//             </div>
//         </div> 
//         </>
//     );
// };


const SubNavbar = ()=>{
    return(
        <>
            <div className="lg:hidden border-2">
                <SubNavbarSm />
            </div>
        </>
    );
}

export default SubNavbar;