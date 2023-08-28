import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar";
import LinkdInInterships from "../componets/LinkdInIntership";
import PlayGame from "../componets/PlayGame";
import Interview from "../componets/Interview";
import Suitday from "../componets/Suitday";
import CalendarWrapper from "../componets/calendar";
import Footer from '../componets/Footer';


function Event (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <div className="link">
        <LinkdInInterships />
        <PlayGame />
        <Interview />
        <Suitday />
        <CalendarWrapper />
        </div>
        <Footer  />
        </>
    )
}

export default Event;