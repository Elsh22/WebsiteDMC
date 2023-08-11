import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import LinkdInInterships from "../componets/Events/LinkdInIntership";
import PlayGame from "../componets/Events/PlayGame";
import Interview from "../componets/Events/Interview";
import Suitday from "../componets/Events/Suitday";
import CalendarWrapper from "../componets/Events/calendar";


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
        </>
    )
}

export default Event;