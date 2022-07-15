import React from "react";
import CheatSheetImage from "../config/CheatSheetImage";

import cheatimage from '../config/Image/DSA.png';

// const HomeCardLg = (props)=>{
//     return(
//         <>
//             <div className="flex justify-center items-center">
//                 <div className="grid grid-cols-3 my-3 gap-10">
//                                 <Poster {...props}/>
//                                 <Poster {...props}/>
//                                 <Poster {...props}/>
//                 </div>
//             </div>
//         </>
//     );
    
// }
// const HomeCardMd = (props)=>{
//     return(
//         <>
//             <div className="flex justify-center items-center">
//                 <div className="grid grid-cols-2 w-4/5 my-3 gap-3">
//                                 <Poster {...props}/>
//                                 <Poster {...props}/>
//                 </div>
//             </div>
//         </>
//     );
// }
// const HomeCardSm = (props)=>{
//     return(
//         <>
//             <div className="flex justify-center items-center">
//                 <div className="grid grid-cols-1 py-3 gap-4">
//                     <Poster {...props}/>
//                 </div>
//             </div>
//         </>
//     );
// }
const CheatSheetPage = ()=>{
    return(
        <>
            <div>
                {
                    CheatSheetImage.map((image)=>(
                        <>
                            <div className="flex lg:hidden md:hidden container mx-auto px-3">
                                <div className="flex w-full justify-center items-center gap-3">
                                    <div className="w-72 h-72 py-2">
                                        <img src={cheatimage} alt="cheatsheetimage" className="w-full h-full"/>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:flex lg:hidden flex-wrap w-full container mx-auto px-3">
                                <div className="w-full flex justify-center items-center gap-4">
                                    <div className="md:w-72 md:h-72 md:py-3 hover:shadow-2xl cursor-pointer rounded-xl">
                                        <img src={cheatimage} alt="cheatsheetimage" className="w-full h-full"/>
                                    </div>
                                    <div className="md:w-72 md:h-72 md:py-3 hover:shadow-2xl cursor-pointer rounded-xl">
                                        <img src={cheatimage} alt="cheatsheetimage" className="w-full h-full"/>
                                    </div>
                                    <div className="md:w-72 md:h-72 md:py-3 hover:shadow-2xl cursor-pointer rounded-xl">
                                        <img src={cheatimage} alt="cheatsheetimage" className="w-full h-full"/>
                                    </div>
                                </div>
                            
                            </div> 
                            <div className="hidden lg:block">
                            
                                    <div className="flex justify-center items-center gap-5">
                                            <div className="w-80 h-80 py-4 hover:shadow-2xl cursor-pointer rounded-xl">
                                                <img src={cheatimage} alt="cheatsheetimage" className="w-full h-full"/>
                                            </div>
                                            <div className="w-80 h-80 py-4 hover:shadow-2xl cursor-pointer rounded-xl">
                                                <img src={cheatimage} alt="cheatsheetimage" className="w-full h-full"/>
                                            </div>
                                            <div className="w-80 h-80 py-4 hover:shadow-2xl cursor-pointer rounded-xl">
                                                <img src={cheatimage} alt="cheatsheetimage" className="w-full h-full"/>
                                            </div>
                                            <div className="w-80 h-80 py-4 hover:shadow-2xl cursor-pointer rounded-xl">
                                                <img src={cheatimage} alt="cheatsheetimage" className="w-full h-full"/>
                                            </div>
                                    </div>
                                </div>
                        </>
                        
                    ))
                }
            </div>
        </>
    );
}

export default CheatSheetPage;