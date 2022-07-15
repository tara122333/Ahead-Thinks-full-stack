import React from "react"
const CheatSheetPoster = (props)=>{
    return(
        <>
                <div className="w-60 h-60 py-2 md:w-72 md:h-72 lg:w-80 lg:h-80 md:py-3 lg:py-4">
                    <img src={props.src} alt="cheatsheetimage" className="w-full h-full"/>
                </div>
        </>
    );
}

export default CheatSheetPoster;