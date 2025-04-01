import {
    WebGLRenderer
} from  "https://cdn.skypack.dev/three@0.132.2";

function createRenderer() 
{
    const container = document.querySelector("#scene-container");

    const renderer =  new WebGLRenderer(
        {antialias: true}
    );
    
    renderer.physicallyCorrectLights = true;
    renderer.setSize(container.clientWidth, container.clientHeight); // consume the entire container
    renderer.setPixelRatio(window.devicePixelRatio);
    
    return renderer;
}

export {createRenderer};