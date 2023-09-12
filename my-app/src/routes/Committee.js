import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import CommitteeTab from "../componets/CommitteeC/CommitteeTab";
import Footer from '../componets/FooterC/Footer';


function Committee (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <CommitteeTab />
        <Footer  />
        </>
    )
}

export default Committee;