import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import News from "../componets/NewsletterC/News";
import LatestNewsletter from "../componets/NewsletterC/LatestNewsletter";
import Footer from '../componets/FooterC/Footer';



function Newsletter (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <LatestNewsletter />
        <News />
        <Footer  />
        </>
    )
}

export default Newsletter;