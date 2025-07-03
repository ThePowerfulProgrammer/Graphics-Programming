import {Scene, Color} from "https://cdn.skypack.dev/three@0.132.2";


// The scene: Is the tiny universe in the xyz plane
function createScene() 
{
    const scene = new Scene();
    scene.background = new Color().setRGB(255,228,196);
    return scene;
}

export {createScene};