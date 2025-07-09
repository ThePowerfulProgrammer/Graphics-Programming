import {World} from './World.js'


console.log("Render Universe");
function renderUniverse() 
{
    const container = document.getElementById("scene-container");
    
    const world = new World(container);


    world.start();
}

renderUniverse()