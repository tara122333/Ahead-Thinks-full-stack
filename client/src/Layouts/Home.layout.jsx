import React from "react";
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.component";
import HomePage from "../Page/Home.page";
import DefaultLayout from "./Default.layout";
import FooterLayout from "./Footer.Layout";

const HomeLayout = (props)=>{
    return(
        <>
            <DefaultLayout />
            <HeroCarousel />
            <HomePage/>
            <div>
                <FooterLayout />
            </div>
            
            
            

            {props.children}
        </>
        
    );
}

export default HomeLayout;