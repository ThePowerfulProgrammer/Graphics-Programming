import {World} from './World.js'


console.log("Render Universe");
async function renderUniverse() 
{
    const container = document.getElementById("scene-container");
    
    const world = new World(container);

    // complete async tasks
    await world.init();

    world.start();
}

renderUniverse()