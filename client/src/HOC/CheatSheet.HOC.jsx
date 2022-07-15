import React from "react";
import CommonLayout from "../Layouts/Common.layout";
import CheatSheetPage from "../Page/CheatSheet.page";


const CheatSheetHOC = ()=>{
    return(
        <>
            <CommonLayout />
            <CheatSheetPage />
        </>
    );
}

export default CheatSheetHOC;