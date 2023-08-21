import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar";
import SportsMain from "../componets/SportsMain";
import SportsAbout from "../componets/SportsAbout";
import SportsExplore from "../componets/SportsExplore";
import SportsSteps from "../componets/SportsSteps";
// import SportsContact from "../componets/SportsContact";


function SportsDmc() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="body-container">
        <SportsMain />
        <SportsAbout />
        <SportsSteps />
        <SportsExplore />
      </div>
    </>
  );
}

export default SportsDmc;
