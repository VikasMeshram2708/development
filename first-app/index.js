import * as THREE from "three";

const scene = new THREE.Scene();
// angle and aspect ratio(nothing but ratio of window e.g 16:9 etc),nazdeek ka mesurement and dur ka mesaurement
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// setting camera position
// shoud lie between the number we quote like (  0.1,1000)
camera.position.z = 5;

// Create a Renderer which will work with canvas
const renderer = new THREE.WebGLRenderer(); // height, width
renderer.setSize(window.innerWidth, window.innerHeight); // this will generate a canvas
document.body.appendChild(renderer.domElement);

// Creating a box
// shape
const gemoetry = new THREE.BoxGeometry(1, 1, 1); // height,width,depth
// setting the color
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
});

// create a object of Mesh

const cube = new THREE.Mesh(gemoetry, material); // shape, material(how the item looks)

scene.add(cube); // adding object to scene

renderer.render(scene, camera);

// function animate() {
//   requestAnimationFrame(animate);

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }

// animate();
