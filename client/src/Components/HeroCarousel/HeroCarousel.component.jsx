import React from "react";
import HeroSlide from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow,PrevArrow } from "../Arrows/Arrows.component";

const HeroCarousel = ()=>{
    const settings ={
        Arrows: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const settingsLG={
        arrows: true,
            dots: true,
            autoplay: true,
            centerMode:true,
            centerPadding:"250px",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
    };
    const HeroImages = [
        "https://cdnwp.mobidea.com/academy/wp-content/uploads/2018/04/best-seo-training-courses-760x428-1.png",
        "https://blog.verzeo.com/wp-content/uploads/2020/12/best-AI-courses.jpeg",
        "https://e-gmat.com/blogs/wp-content/uploads/2020/03/MBA-Courses-Syllabus-and-Curriculum.jpg",
        "https://cdnwp.mobidea.com/academy/wp-content/uploads/2018/04/best-seo-training-courses-760x428-1.png",
        "https://blog.verzeo.com/wp-content/uploads/2020/12/best-AI-courses.jpeg",
        "https://e-gmat.com/blogs/wp-content/uploads/2020/03/MBA-Courses-Syllabus-and-Curriculum.jpg",
        
    ];
    return (
        <>
            <div className="lg:hidden mb-5">
                <HeroSlide {...settings}>
                    {
                        HeroImages.map((image)=>(
                            <div className="h-52 w-full py-1 md:py-2 md:h-80">
                                <img src={image} alt="hero images" className="w-full h-full"/>
                            </div>
                        ))
                    }
                </HeroSlide>
            </div>
            <div className="hidden lg:block mb-14">
                <HeroSlide {...settingsLG}>
                    {
                        HeroImages.map((image)=>(
                            <div className="w-full h-96 px-14 my-3">
                                <img src={image} alt="hero images" className="w-full h-full rounded-xl"/>
                            </div>
                        ))
                    }
                </HeroSlide>
            </div>
        </>
    );
}
export default HeroCarousel;