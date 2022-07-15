import React from "react";
import Nav from "../Components/Navbar/nav";
import SubNavbar from "../Components/SubNavbar/SubNavbar.component";

const DefaultLayout = (props)=>{
    return(
        <>
            <Nav />
            <SubNavbar />
            {props.children}
        </>
        
    );
}

export default DefaultLayout;