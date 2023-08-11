import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import AboutTeam from "../componets/About/AboutTeam";
import Mission from "../componets/About/Mission";

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