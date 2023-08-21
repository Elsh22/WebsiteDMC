import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar";
import Hero from '../componets/Hero';
import SundaySpot from '../componets/SundaySpot';



function Home (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <div className="hero-styles">
        <Hero cName="hero"  
        title="Developing Men of Color" 
        location="At Virginia Commonwealth University (VCU) "
        extraText="" 
        url="https://vcu.campusgroups.com/DMC/club_signup" 
        btnClass="show" 
        buttonText="Join"
        videoTitle="DmcV5"
        videoWidth={`800px`} 
        videoHeight={`450px`}/>
        <div className="sports-container">
        </div>
        <div className="spot">
        <SundaySpot  
        nextName="Zion Segars"
        nextReason="DMC wants to recognize Zion Segars for earning the VCU Board of Visitors scholarship and an Internship with VCU’s MARC Research program."
        />
        </div>
        </div>
        </>
    )
}

export default Home;