import React,{useEffect,useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ProfilePage = ()=>{

    let navigate = useNavigate();
    const [homeVisit,setHomeVisit] = useState();

    useEffect(()=>{
        // console.log("yess home page",localStorage.getItem('token'));

        const fun = async() => {
            // console.log(localStorage.getItem('token'));
            // let url = 'https://fineskills.herokuapp.com/list';
            // let options = {
            //     method:'GET',
            //     url:url,
            //     Headers:{
            //         'Authorization' : `Bearer ${localStorage.getItem('token')}`
            //     }
            // }
            try {
                const localToken = localStorage.getItem('token');
                // let response = await axios(options);
                console.log(localToken);
                if(localToken){

                    let response = await axios(options);
                    setHomeVisit(response);
                    navigate("/");
                }
                else{
                    navigate("/login");
                }
                
            } catch (e) {
                navigate("/login");
            }
        };
        fun();

        
    },[])
    return(
        <>
            <div className="flex flex-col justify-start gap-3 container mx-auto w-full px-4 my-10">
                <div className="flex justify-start">

                    <h1 className="font-bold text-lg lg:text-2xl">Contact Us</h1>
                </div>
                <div className="flex flex-col gap-3">
                    <input type="text" name="username" id="username" placeholder="Enter Your Name" className="px-4 py-2 outline-none rounded-sm"/>
                    <input type="email" name="usermail" id="usermail" placeholder="Enter Your mail"className="px-4 py-2 outline-none rounded-sm"/>
                    <input type="text" name="usermessage" id="usermessage" placeholder="Write Your message here.." className="px-4 py-2 outline-none rounded-sm"/>
                    <div className="bg-tara-0 px-4 py-2 flex justify-center items-center text-white rounded-sm cursor-pointer">
                        <button className="font-bold text-sm lg:text-lg">Submit</button>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default ProfilePage;