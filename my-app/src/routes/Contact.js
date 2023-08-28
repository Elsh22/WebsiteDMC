import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar";
import ContactForm from "../componets/ContactForm";
import Footer from '../componets/Footer';



function Contact (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <ContactForm />
        <Footer  />
        </>
    )
}

export default Contact;