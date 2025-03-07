//new module in our app to handle setting up the controls.

import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas) 
{
    const controls = new OrbitControls(camera, canvas);

    controls.target.set(0,0,0);
    controls.enableDamping = true;
    controls.minDistance = 1;
    controls.maxDistance = 20;



    // another monkey method
    controls.tick = () => controls.update();
    return controls;
}

export { createControls };