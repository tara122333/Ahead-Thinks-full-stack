import React from "react";
import Poster from "../Components/Poster/Poster.component";
const HomePage = ()=>{

    // let navigate = useNavigate();
    // const [homeVisit,setHomeVisit] = useState();

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
    return(
        <>
            <div className="container mx-auto w-full px-4 py-4 flex justify-center items-center  relative">
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-12 ">
                    <Poster limit={50}>

                    </Poster>
                </div>
            </div>
        </>
    );
}

export default HomePage;