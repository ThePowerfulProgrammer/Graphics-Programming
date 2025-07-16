import { PerspectiveCamera } from "https://cdn.skypack.dev/three@0.132.2";

function createCamera() 
{
    const camera = new PerspectiveCamera(
        110,
        window.innerWidth/window.innerHeight,
        0.01,
        200
    ); // fov,aspect, near, far

    // Field of View
    // Type: Number (Degrees)
    // Vertical field of view in degrees. Defines how 'wide' the camera lens is : Camera view is our view
    // smaller values means zoomed in and vice versa

    // Aspect Ratio
    // Type: Number
    // Ratio of width to height
    // use the typically innerWidth/innerHeight to prevent stretching/squashing of the screen

    // Near (near clipping plane)
    // Type: Number
    // Objects closer than this value are not rendered, so if near = 10 and an object is added (5,11,5) this object will not be rendered
    // Near and Far work with the Z-Axis

    // Far 
    // Type: Number
    // Objects further than this are not rendered
    // Vice versa of near

    // ADJUST POSITION OF OUR CAMERA: DEFAULT IS (0,0,0) AS ALL OBJECTS IN 3JS --> THIS IS NOT WHERE THE CAMERA TARGETS!
    camera.position.set(0,15,50); // move the camera 2 meters up and 12 meters toward us
    

    return camera; 
}

export {createCamera};