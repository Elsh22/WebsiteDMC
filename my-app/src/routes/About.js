import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar";
import AboutTeam from "../componets/AboutTeam";
import Mission from "../componets/Mission";

function About (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <Mission />
        <AboutTeam />
        </>
    )
}

export default About;