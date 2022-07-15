import DefaultLayout from "../Layouts/Default.layout";
import FooterLayout from "../Layouts/Footer.Layout";
import ContactPage from "../Page/Contact.page";


const ContactHOC = ()=>{
    return(
        <>
            <DefaultLayout />
            <div>
                <ContactPage />
            </div>
            <div style={{backgroundColor:"#8E9CCD"}}>
                <FooterLayout />
            </div>
        </>
    );
}

export default ContactHOC;