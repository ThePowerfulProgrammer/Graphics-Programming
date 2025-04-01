import {
    PerspectiveCamera
} from "https://cdn.skypack.dev/three@0.132.2";

function createCamera() 
{
    const container = document.querySelector("#scene-container");
    const cWidth = container.clientWidth;
    const cHeight = container.clientHeight;

    const fov = 35;
    const aspect = cWidth/cHeight; 
    const near = 0.1;
    const far = 100;
    const perspectiveCam = new PerspectiveCamera(fov, aspect,near, far);

    perspectiveCam.position.set(0,0,20);

    return perspectiveCam
}

export {createCamera};