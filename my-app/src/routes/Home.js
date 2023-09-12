import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import Hero from '../componets/HomeC/Hero';
import SundaySpot from '../componets/HomeC/SundaySpot';
import CalendarWrapper from "../componets/EventC/calendar";
import Footer from '../componets/FooterC/Footer';



function Home (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <div className='hero-body'>
        <Hero cName="hero"  
        title="Developing Men of Color" 
        location="At Virginia Commonwealth University (VCU) "
        url="https://vcu.campusgroups.com/DMC/club_signup" 
        buttonText="Join On Rams Connect"
        videoTitle="DmcV5"
        videoWidth={`800px`} 
        videoHeight={`450px`}/>
        <SundaySpot />
        <CalendarWrapper />
        </div>
        <Footer  />
        </>
    )
}

export default Home;