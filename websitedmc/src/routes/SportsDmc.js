import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import SportsMain from "../componets/Sports/SportsMain";
import SportsAbout from "../componets/Sports/SportsAbout";
import SportsExplore from "../componets/Sports/SportsExplore";
import SportsSteps from "../componets/Sports/SportsSteps";
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
