import {
    WebGLRenderer
} from  "https://cdn.skypack.dev/three@0.132.2";

// Render means Draw :) 

function createRenderer() 
{
    const container = document.querySelector("#scene-container"); // grab the div with id = scene-container

    const renderer = new WebGLRenderer( {
        antialias: true // prevents jagedness?
    });

    renderer.physicallyCorrectLights = true; // light behaves in a more realistic manner
    renderer.setSize(container.clientWidth, container.clientHeight); // renderer will consume the entire container, our container consumes Everything!
    renderer.setPixelRatio(window.devicePixelRatio); // Ensures sharp rendering on high-DPI (e.g., Retina) displays.
    renderer.shadowMap.enabled = true; //Enables shadow rendering. Required for lights like DirectionalLight or SpotLight to cast shadows. shadows need to active in many places


    return renderer; // how we draw our 3d scne to the DOM inside a container
}

export {createRenderer};