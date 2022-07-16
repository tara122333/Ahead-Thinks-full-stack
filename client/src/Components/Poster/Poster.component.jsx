import React from "react";
import CourseDetails from "../../config/course";

const Poster = ()=>{

        // const [isReadMoreShown,setReadMoreShown] = useState(false);

        // const toggleBtn = ()=>{
        //     setReadMoreShown(prevState=> !prevState);
        // }
    //     const [homeVisit,setHomeVisit] = useState();

    //     let navigate = useNavigate();

    // useEffect(()=>{
    //     // console.log("yess home page",localStorage.getItem('token'));

    //     const fun = async() => {
    //         // console.log(localStorage.getItem('token'));
    //         let url = 'http://localhost:4000/list';
    //         let options = {
    //             method:'GET',
    //             url:url,
    //             Headers:{
    //                 'Authorization' : `Bearer ${localStorage.getItem('token')}`
    //             }
    //         }
    //         try {
    //             const localToken = localStorage.getItem('token');
    //             // let response = await axios(options);
    //             console.log(localToken);
    //             if(localToken){

    //                 let response = await axios(options);
    //                 setHomeVisit(response);
    //                 navigate("/");
    //             }
    //             else{
    //                 navigate("/login");
    //             }
                
    //         } catch (e) {
    //             navigate("/login");
    //         }
    //     };
    //     fun();

        
    // },[])
    let isValid = false;
        const validOrNotUser = ()=>{
            const usertoken = localStorage.getItem('token');
            console.log(usertoken);
            if(usertoken){
                isValid = true;
            }
        }
        validOrNotUser();

    return(
        <>
            {// eslint-disable-next-line
                CourseDetails.map((props)=>(
                    <div className="w-full h-full flex rounded-lg shadow-lg lg:hover:shadow-2xl lg:w-72 md:flex-col bg-white">
                        <div className="w-96 h-full md:w-full md:h-60 lg:h-72">
                            <img src={props.src} alt="posterimage" className="w-full h-full lg:rounded-t-lg"/>
                        </div>
                        <div className="px-2 w-full py-2 gap-1">
                            <div className="my-1 py-2">
                                {/* <h3 className="text-sm font-bold">{
                                    !isReadMoreShown ? props.dis : props.dis.substr(0,limit)
                                }
                                    <button onClick={toggleBtn}>{isReadMoreShown ? '...Read Less' : '...Read More'}</button>
                                </h3> */}
                                <h3 className="text-sm font-bold">{
                                   props.dis
                                }
                                </h3>
                            </div>
                            <div className="flex justify-center items-center w-full h-8">
                                <button className="w-full h-full bg-white text-tara-0 text-sm px-3 py-1 rounded-sm border-2 hover:bg-tara-0 border-black font-bold hover:text-white"><a href={isValid ? props.link : "/login" } target="_blank" rel="fnfd" className="w-full h-full">GET COURSE</a></button>
                            </div>
                            <div className="flex justify-center items-center w-full h-8 my-2 gap-4">
                                <h3 className=" text-tara-0 px-3 py-1 text-sm rounded-sm h-full border-2 border-black font-bold w-full text-center">{props.company}</h3>
                                <h3 className="px-3 py-1 text-sm rounded-sm h-full border-2 border-black font-bold w-full text-center" style={{color:"#8E9CCD"}} >CERTIFIED</h3>
                            </div>
                            <div className="flex justify-start items-center gap-1">
                                <h3 className="font-bold text-tara-0">Credit-</h3>
                                <span>{props.credit}</span>
                            </div>
                            
                        </div>
                </div>
                ))
            }

        </>
    );
}

export default Poster;