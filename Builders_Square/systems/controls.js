import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas) 
{
    const controls = new OrbitControls(camera, canvas); // Camera so we can view our world, canvas is the world 

    controls.target.set(0,6,0); // default 
    controls.enableDamping = true;
    controls.minDistance = 1; // z
    controls.maxDistance = 20;    // z

    controls.tick  = () => controls.update();
    return controls; // Allows us to move around in our world
} 

export {createControls};