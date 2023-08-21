import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar";
import ContactForm from "../componets/ContactForm";



function Contact (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <ContactForm />
        </>
    )
}

export default Contact;