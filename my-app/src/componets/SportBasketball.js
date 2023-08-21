import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './SportBasketball.scss';

function SportBasketball() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const basketballRef = useRef(null);
  const hoopRef = useRef(null);
  const textContainerRef = useRef(null);
  const ballDirectionRef = useRef(1);
  const ballSpeedRef = useRef(0.01);

  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xadd8e6);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;
    camera.position.y = 3;
    camera.lookAt(new THREE.Vector3(0, 1, 0));
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // Add basketball
    const basketballGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const basketballMaterial = new THREE.MeshPhongMaterial({ color: 0xffd700 });
    const basketball = new THREE.Mesh(basketballGeometry, basketballMaterial);
    basketball.position.set(0, 2, 0);
    scene.add(basketball);
    basketballRef.current = basketball;

    // Add hoop
    const hoopGeometry = new THREE.TorusGeometry(2, 0.5, 32, 32);
    const hoopMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const hoop = new THREE.Mesh(hoopGeometry, hoopMaterial);
    hoop.rotation.x = Math.PI / 2;
    hoop.position.set(0, 0, -5);
    scene.add(hoop);
    hoopRef.current = hoop;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(-1, 2, 4);
    scene.add(directionalLight);

    // Render the scene
    const renderScene = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(renderScene);
      basketball.position.z += ballDirectionRef.current * ballSpeedRef.current;
      if (basketball.position.z > 2 || basketball.position.z < -2) {
        ballDirectionRef.current *= -1;
      }
      if (hoopRef.current && basketballRef.current) {
        if (basketballRef.current.position.distanceTo(hoopRef.current.position) < 1) {
          basketballRef.current.position.set(0, 2, 0);
        }
      }
    };
    renderScene();

    return () => {
      // Cleanup
      basketballGeometry.dispose();
      basketballMaterial.dispose();
      hoopGeometry.dispose();
      hoopMaterial.dispose();
    };
  }, []);
  
    return (
      <div className="sport-baseball-container" ref={containerRef}>
        <div className="sport-baseball-text-container" ref={textContainerRef}>
          <h1>Basketbball</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis massa euismod, rhoncus tellus vitae, fermentum purus. Sed lobortis euismod ullamcorper.</p>
      </div>
    </div>
  );
};

export default SportBasketball;

