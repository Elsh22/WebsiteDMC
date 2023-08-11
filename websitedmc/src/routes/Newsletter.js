import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import News from "../componets/News/News";
import LatestNewsletter from "../componets/News/LatestNewsletter";



function Newsletter (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <LatestNewsletter />
        <News />
        </>
    )
}

export default Newsletter;