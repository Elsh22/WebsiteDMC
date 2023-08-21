import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import IMG1 from "../newassest/sports.jpg";
import IMG2 from "../newassest/sports2.jpg";
import IMG3 from "../newassest/sports4.jpg";
import IMG4 from "../newassest/sports3.jpg";
import VIDEO1 from "../newassest/video1.mp4";
import './sports.scss'

function Sports() {
  const images = [IMG1, IMG2, IMG3, IMG4];
  const videos = [VIDEO1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const geometryRef = useRef(null);

  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // Add geometry to create the 3D background
    const geometry = new THREE.BoxBufferGeometry(10, 10, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    geometryRef.current = geometry;

    // Update the scene on scroll
    const handleScroll = () => {
      const scrollPos = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
      geometry.attributes.position.array.forEach((vertex, index) => {
        if (index % 3 === 2) {
          vertex += Math.sin(index * 0.1 + scrollPos * Math.PI * 2) * 2;
          geometry.attributes.position.needsUpdate = true;
        }
      });
    };
    window.addEventListener('scroll', handleScroll);

    // Render the scene
    const renderScene = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(renderScene);
    };
    renderScene();

    return () => {
      // Cleanup
      window.removeEventListener('scroll', handleScroll);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => { 
      setCurrentIndex(currentIndex => (currentIndex + 1) % (images.length + videos.length));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Inside your useEffect hook
const scene = new THREE.Scene();
scene.background = new THREE.Color('blue'); // Change background color to white


  return (
    <div className="container" ref={containerRef}>
      <div className="text-container">
        <h1>Sports</h1>
        <p>Intramurals to DMC is a great way to connect and build community amongst men of color and to show how the organization plays multiple sports </p>
      </div>
      <div className="image-slider">
        <div className="image-row" >
          {images.map((image, index) => (
            <img src={image} alt={`Slide ${index + 1}`} className={`slide ${index === currentIndex ? 'active' : ''}`} key={index} />
          ))}
        </div>
        <div className="video-container">
      {videos.map((video, index) => (
        <video src={video} alt={`Slide ${index + images.length + 1}`} className={`slide ${index + images.length === currentIndex ? 'active' : ''}`} key={index + images.length} controls />
      ))}
    </div>
  </div>
</div>
);
};

export default Sports;
