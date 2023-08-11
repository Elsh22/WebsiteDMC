import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import Galleryphoto from "../componets/Gallery/galleryphoto";
import Instagram from "../componets/Gallery/instagram";


function Gallery (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar />
        <div className="carousel-container-con">
        <Galleryphoto />
        </div>
        <Instagram />
        </>
    )
}

export default Gallery;