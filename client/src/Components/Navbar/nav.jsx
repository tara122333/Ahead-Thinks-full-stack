import React from "react";
import {BiSearch} from 'react-icons/bi';
import { NavLink } from "react-router-dom";


const NavSm = ()=>{

    // const [buttonPopup, setButtonPopup] = useState(false);
    // const [timePopup, setTimePopup] = useState(false);

    // setTimeout(() => {
    //     setTimePopup(true);
    // }, 3000);

    return(
        <>
            <div className="flex justify-between items-center gap-3 p-3 md:p-4">
                <NavLink to="/">
                <div className="flex gap-3 justify-center items-center">
                    <div className="h-8 w-8 md:h-14 md:w-14">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/2048px-Vanamo_Logo.svg.png" alt="logo" className="w-full h-full"/>
                    </div>
                    <h3 className="font-bold text-xl md:text-3xl">FineSkills</h3>
                </div>
                </NavLink>
                <div className="flex justify-center items-center">
                <NavLink to="/login">
                    <button className="bg-tara-0 text-white px-4 py-2 rounded-sm text-sm font-bold hover:bg-red-700">Login</button>
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
            <div className="flex justify-between gap-3 px-5 py-2 items-center mt-4">
                <NavLink to="/">
                <div className="flex items-center gap-1 cursor-pointer">
                    <div className="h-8 w-8">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/2048px-Vanamo_Logo.svg.png" alt="logo" className="w-full h-full"/>
                        </div>
                        <h3 className="font-bold text-xl">FineSkills</h3> 
                </div>
                </NavLink>
                <div className="flex items-center w-1/2 px-2 rounded-sm bg-white" >
                    <BiSearch className="text-xl font-bold cursor-not-allowed text-black" />
                    <input type="search" placeholder="Explore" className="w-full px-3 py-1 bg-transparent focus:outline-none text-black font-bold"/>
                </div>
                <div className="flex items-center ">
                    <NavLink to="/login">
                        <button className=" bg-white text-tara-0 text-sm px-6 py-1 rounded-sm font-bold hover:border-2 hover:border-white hover:bg-tara-0 hover:text-white">Login</button>
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