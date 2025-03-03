import { WebGLRenderer } from "https://cdn.skypack.dev/three@0.132.2";

// If the scene is a tiny universe, and the camera is a telescope pointed at that universe, then the renderer is an artist who 
// looks through the telescope and draws what they see onto a <canvas>, incredibly fast
function createRenderer() 
{
    const renderer =  new WebGLRenderer(
        {antialisa: true}
    );

    renderer.physicallyCorrectLights = true; // turn on the physically correct lighting model
    
    return renderer;
}

export { createRenderer };