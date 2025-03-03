
import {
    BoxBufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
  
} from "https://cdn.skypack.dev/three@0.132.2";


// The basic idea of gp


const container = document.querySelector("#scene-container");

const scene = new Scene();

scene.background = new Color("skyblue");

// create a camera
const fieldOfView = 35;
const aspect = container.clientWidth / container.clientHeight; // ratio of screens width to height
const near = 0.1; // the near clipping plane: anything closer than this to the camera will be invisible
const far = 100; // the far clipping plane: Anything further away from the camera than this will be invisible

const camera = new PerspectiveCamera(fieldOfView,aspect, near, far); // created a viewing frustum

// every object is initally created at (x,y,z) = (0,0,0)
// move the camera back so we can see the scene
camera.position.set(0,0,10);

// create a geometry
const geometry = new BoxBufferGeometry(2,2,2);

// create a default (white) Basic material
const material = new MeshBasicMaterial();

// create a Mesg containing the Geometry and material
const cube = new Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube);

// create the renderer 
const renderer = new WebGLRenderer();

// now set the renderer to the same same as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// finally set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// render a still image of the scene
renderer.render(scene,camera);
