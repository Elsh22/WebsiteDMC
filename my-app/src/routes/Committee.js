import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar";
import CommitteeTab from "../componets/CommitteeTab";
import Footer from '../componets/Footer';


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