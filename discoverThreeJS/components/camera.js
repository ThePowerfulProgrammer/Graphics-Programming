import { PerspectiveCamera } from "https://cdn.skypack.dev/three@0.132.2";

// A telescope pointed at our universe
function createCamera() 
{
    const camera = new PerspectiveCamera(
        35, 
        1, 
        0.1,
        100
    );

    camera.position.set(0,0, 10);

    // camera.zoom = 0.5; // zoom in/out default is 1
    // addding a monkey tick method here

    let zoomout = true;
    camera.tick = (delta) => 
        {

        }

    return camera;
}

export { createCamera };