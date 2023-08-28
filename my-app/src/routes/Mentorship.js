import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar";
import Cards from "../componets/Mentor";
import Leader from "../componets/LeaderMentor";
import Img1 from "../assets/7.png"
import CardList from "../componets/MentorGoogle";
import Footer from '../componets/Footer';


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
        <Footer  />
        </div>

        </>
    )
}

export default Mentorship;