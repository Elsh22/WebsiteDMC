import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import Cards from "../componets/Mentor/Mentor";
import Leader from "../componets/Mentor/LeaderMentor";
import Img1 from "../assets/7.png"
import CardList from "../componets/Mentor/MentorGoogle";


function Mentorship (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <Leader name="Adam Haidari" image={Img1} url="https://www.linkedin.com/in/adam-haidari789/" Leader="Leadership role: Mentorship Director" />
        <Cards/>
        <div className="forms">
        <CardList />
        </div>

        </>
    )
}

export default Mentorship;