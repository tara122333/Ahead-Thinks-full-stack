import React from "react";
import Nav from "../Components/Navbar/nav";
import SubNavbar from "../Components/SubNavbar/SubNavbar.component";

const CommonLayout = (props)=>{
    return(
        <>
            <Nav />
            <SubNavbar />
            {props.children}
        </>
        
    );
}

export default CommonLayout;