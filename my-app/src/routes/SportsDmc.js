import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import SportsMain from "../componets/SportsDmcC/SportsMain";
import SportsAbout from "../componets/SportsDmcC/SportsAbout";
import SportsExplore from "../componets/SportsDmcC/SportsExplore";
import SportsSteps from "../componets/SportsDmcC/SportsSteps";
import Footer from '../componets/FooterC/Footer';



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
        <Footer  />
      </div>
    </>
  );
}

export default SportsDmc;
