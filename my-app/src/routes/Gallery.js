import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar";
import Galleryphoto from "../componets/galleryphoto";
import Instagram from "../componets/instagram";
import Footer from '../componets/Footer';


function Gallery (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <div className="carousel-container-con">
        <Instagram />
        </div>
        <Galleryphoto />
        <Footer  />
        </>
    )
}

export default Gallery;