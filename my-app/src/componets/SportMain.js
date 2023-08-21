import React, { useEffect, useRef } from 'react';
import soccerBallImg from '../newassest/soccerBall.png';
import cloud1Img from '../newassest/cloud1.png';
import cloud2Img from '../newassest/cloud1.png';
import * as THREE from 'three';
import './sports.scss';

function SportMain() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const soccerBallRef = useRef(null);
  const cloud1Ref = useRef(null);
  const cloud2Ref = useRef(null);

  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xadd8e6);
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // Add soccer ball
    const soccerBallGeometry = new THREE.PlaneGeometry(2, 2);
    const soccerBallTexture = new THREE.TextureLoader().load(soccerBallImg);
    const soccerBallMaterial = new THREE.MeshBasicMaterial({ map: soccerBallTexture, side: THREE.DoubleSide });
    const soccerBall = new THREE.Mesh(soccerBallGeometry, soccerBallMaterial);
    soccerBall.rotation.x = Math.PI / 2;
    scene.add(soccerBall);
    soccerBallRef.current = soccerBall;

    // Add clouds
    const cloudGeometry1 = new THREE.PlaneGeometry(2, 1);
    const cloudTexture1 = new THREE.TextureLoader().load(cloud1Img);
    const cloudMaterial1 = new THREE.MeshBasicMaterial({ map: cloudTexture1, transparent: true });
    const cloud1 = new THREE.Mesh(cloudGeometry1, cloudMaterial1);
    cloud1.position.set(1, 1, -4);
    scene.add(cloud1);
    cloud1Ref.current = cloud1;

    const cloudGeometry2 = new THREE.PlaneGeometry(2, 1);
    const cloudTexture2 = new THREE.TextureLoader().load(cloud2Img);
    const cloudMaterial2 = new THREE.MeshBasicMaterial({ map: cloudTexture2, transparent: true });
    const cloud2 = new THREE.Mesh(cloudGeometry2, cloudMaterial2);
    cloud2.position.set(-2, -1, -3);
    scene.add(cloud2);
    cloud2Ref.current = cloud2;

    // Render the scene
    const renderScene = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(renderScene);
      soccerBall.rotation.y += 0.01;
      cloud1.position.x -= 0.005;
      cloud2.position.x += 0.005;
      if (cloud1.position.x < -2) {
        cloud1.position.x = 2;
      }
      if (cloud2.position.x > 2) {
        cloud2.position.x = -2;
      }
    };
    renderScene();

    return () => {
      // Cleanup
      soccerBallGeometry.dispose();
      soccerBallMaterial.dispose();
      cloudGeometry1.dispose();
      cloudMaterial1.dispose();
      cloudGeometry2.dispose();
    };
  }, []);

  return (
    <div className="sports-container" ref={containerRef}>
      <div className="sports-text-container">
        <h1>Sports</h1>
        <p>Intramurals to DMC is a great way to connect and build community amongst men of color and to show how the organization plays multiple sports</p>
      </div>
    </div>
  );
};

export default SportMain;
