import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import AboutTeam from "../componets/AboutC/AboutTeam";
import Mission from "../componets/AboutC/Mission";
import Footer from '../componets/FooterC/Footer';

function About (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <Mission />
        <AboutTeam />
        <Footer />
        </>
    )
}

export default About;