// ko9l_generate_a_scal.js

// Import required libraries
import * as THREE from 'three';

// Create a scene, camera, and renderer
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas'),
  antialias: true
});

// Define default module simulator settings
let settings = {
  modules: 5,
  moduleSize: 1,
  spacing: 0.5,
  axisLength: 10
};

// Function to generate a single module
function generateModule(size, color) {
  let geometry = new THREE.BoxGeometry(size, size, size);
  let material = new THREE.MeshBasicMaterial({ color: color });
  return new THREE.Mesh(geometry, material);
}

// Function to generate the module simulator
function generateSimulator(settings) {
  for (let i = 0; i < settings.modules; i++) {
    let module = generateModule(settings.moduleSize, 0xffffff);
    module.position.x = (i % settings.axisLength) * (settings.moduleSize + settings.spacing);
    module.position.z = Math.floor(i / settings.axisLength) * (settings.moduleSize + settings.spacing);
    scene.add(module);
  }
}

// Initialize the simulator
generateSimulator(settings);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();