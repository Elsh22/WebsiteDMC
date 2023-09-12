import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import LinkdInInterships from "../componets/EventC/LinkdInIntership";
import PlayGame from "../componets/EventC/PlayGame";
import Interview from "../componets/EventC/Interview";
import Suitday from "../componets/EventC/Suitday";
import CalendarWrapper from "../componets/EventC/calendar";
import Footer from '../componets/FooterC/Footer';


function Event (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <div className="link">
        <CalendarWrapper />
        <LinkdInInterships />
        <PlayGame />
        <Interview />
        <Suitday />
        </div>
        <Footer  />
        </>
    )
}

export default Event;