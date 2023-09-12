import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import Cards from "../componets/MentorshipC/Mentor";
import Leader from "../componets/MentorshipC/LeaderMentor";
import Img1 from "../assets/Josh.jpg"
import CardList from "../componets/MentorshipC/MentorGoogle";
import Footer from '../componets/FooterC/Footer';


function Mentorship (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <Leader name="Josh Hines" image={Img1} url="https://www.linkedin.com/in/joshhines4/" Leader="Leadership role: Mentorship Director" />
        <Cards/>
        <div className="forms">
        <CardList />
        </div>
        <Footer  />

        </>
    )
}

export default Mentorship;