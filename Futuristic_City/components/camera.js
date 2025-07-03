import { PerspectiveCamera } from "https://cdn.skypack.dev/three@0.132.2";

// a telescope pointing at the universe we will create
function createCamera() 
{
    const camera = new PerspectiveCamera(
        80,
        window.innerWidth/window.innerHeight, 
        0.01,
        200
    );

    // 3d: (x,y,z)
    camera.position.set(-10,8,25);
    
    camera.tick = (delta) => 
        {
            // exists but does nothing

        }

    return camera;

}

export { createCamera };