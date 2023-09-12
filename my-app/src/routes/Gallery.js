import React, { useEffect } from 'react';
import Navbar from "../componets/Navbar/Navbar";
import Galleryphoto from "../componets/GalleryC/galleryphoto";
import Instagram from "../componets/GalleryC/instagram";
import Footer from '../componets/FooterC/Footer';


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
        <Footer  />
        </>
    )
}

export default Gallery;