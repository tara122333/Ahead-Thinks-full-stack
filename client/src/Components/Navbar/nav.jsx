import React from "react";
import {BiSearch} from 'react-icons/bi';
import { NavLink } from "react-router-dom";
import { SubNavbarSm } from "../SubNavbar/SubNavbar.component";


const NavSm = ()=>{

    // const [buttonPopup, setButtonPopup] = useState(false);
    // const [timePopup, setTimePopup] = useState(false);

    // setTimeout(() => {
    //     setTimePopup(true);
    // }, 3000);

    return(
        <>
            <div className="flex justify-between items-center gap-3 p-3 md:p-4 bg-tara-0 text-white">
                <NavLink to="/">
                <div className="flex gap-3 justify-center items-center">
                    <h3 className="font-bold text-xl md:text-3xl">FineSkills</h3>
                </div>
                </NavLink>
                <div className="flex justify-center items-center">
                <NavLink to="/login">
                    <button className="bg-white text-tara-0 px-4 py-2 rounded-sm text-sm font-bold hover:bg-red-700">Login</button>
                    {/* <LoginComponent trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <LoginPage />
                    </LoginComponent> */}
                    
                </NavLink>
                </div>
                
            </div>
        </>
    );
};

const NavLg = ()=>{
    // const [buttonPopup, setButtonPopup] = useState(false);
    // const [timePopup, setTimePopup] = useState(false);

    // setTimeout(() => {
    //     setTimePopup(true);
    // }, 3000);

    return(
        <>
        <div className="w-full px-3 bg-tara-0 text-white">
            <div className="flex justify-between gap-3 py-2 px-5 items-center">
                <NavLink to="/">
                <div className="flex items-center gap-1 cursor-pointer">
                    <h3 className="font-bold text-xl">FineSkills</h3> 
                </div>
                </NavLink>
                <div>
                    <SubNavbarSm />
                </div>
                <div className="flex items-center ">
                    <NavLink to="/login">
                        <button className=" bg-white text-tara-0 text-sm border-2 border-tara-0 px-6 py-1 rounded-sm font-bold hover:border-2 hover:border-white hover:bg-tara-0 hover:text-white">Login</button>
                        {/* <LoginComponent trigger={buttonPopup} setTrigger={setButtonPopup}>
                            <LoginPage />
                        </LoginComponent> */}

                    </NavLink>
                </div>
                
            </div>
        </div> 
        </>
    );
};


const NavBar = ()=>{
    return(
        <>
            <div className="lg:hidden">
                <NavSm />
            </div>
            <div className="hidden lg:flex">
                <NavLg />
            </div>
        </>
    );
}

export default NavBar;