
import DefaultLayout from "../Layouts/Default.layout";
import ProfilePage from "../Page/profile.page";


const ProfileHOC = ()=>{
    return(
        <>
            <DefaultLayout />
            <ProfilePage />
        </>
    );
}

export default ProfileHOC;