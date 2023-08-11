import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import CommitteeTab from "../componets/Committee/CommitteeTab";


function Committee (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <CommitteeTab />
        </>
    )
}

export default Committee;