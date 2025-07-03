import { World } from "./World.js";

async function renderUniverse() 
{
    console.log("Universe has been rendered");
    // we will create world here and run it
    const container = document.getElementById("scene-container");
    

    const world = new World(container);

    // complete async tasks
    await world.init();

    world.start();
}

renderUniverse().catch((err) => {
    console.error(err);
});