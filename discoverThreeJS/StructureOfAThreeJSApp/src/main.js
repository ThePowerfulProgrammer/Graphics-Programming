import { World } from '../../src/World/World.js'




function main() 
{
  console.log("Running");
  const container = document.querySelector("#scene-container");

  const world = new World(container);

  // no more calling out world.render() we instead need to create an animation loop
  world.start();
}

let button = document.getElementById("btn");
button.addEventListener("click", function() 
{
  main();
})