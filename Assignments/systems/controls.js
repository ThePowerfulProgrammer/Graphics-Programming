import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";


function createControls(camera, canvas) {

    const controls = new OrbitControls(camera, canvas);

    controls.target.set(0,0,2);
    controls.enableDamping = true;
    controls.minDistance = 1;
    controls.maxDistance = 80;

    
    controls.tick = () => 
        {
            controls.update();
        }
    return controls;
}

export {createControls};