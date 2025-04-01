import {
    Scene,
    Color
} from "https://cdn.skypack.dev/three@0.132.2";

function createScene() 
{

    const scene = new Scene();
    scene.background = new Color("rgb(2, 6, 44)");
    
    return scene;
}

export { createScene };