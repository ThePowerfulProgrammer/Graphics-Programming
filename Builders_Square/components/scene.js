import {Scene, Color} from "https://cdn.skypack.dev/three@0.132.2";

// The Scene: Is the tiny universe in the xyz place that we will view,render in, and observer
function createScene() 
{
    const scene = new Scene();
    scene.background = new Color().setRGB(25,25,112);
    return scene;
}

export {createScene};