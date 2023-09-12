import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import ContactForm from "../componets/ContactC/ContactForm";
import Footer from '../componets/FooterC/Footer';



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