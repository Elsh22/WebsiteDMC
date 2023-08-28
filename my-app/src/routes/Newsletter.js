import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar";
import News from "../componets/News";
import LatestNewsletter from "../componets/LatestNewsletter";
import Footer from '../componets/Footer';



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