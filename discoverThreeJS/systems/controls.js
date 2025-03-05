//new module in our app to handle setting up the controls.

import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas) 
{
    const controls = new OrbitControls(camera, canvas);
    return controls;
}

export { createControls };