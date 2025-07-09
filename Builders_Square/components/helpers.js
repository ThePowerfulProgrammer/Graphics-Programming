import { AxesHelper, GridHelper } from "https://cdn.skypack.dev/three@0.132.2";


function createAxesHelper() 
{
    const helper = new AxesHelper(16); // Represents the x,y,z axis and the length of the lines that define the axes
    helper.position.set(-14,0,-14);
    return helper;
}

function createGridHelper() 
{
    const helper = new GridHelper(25,25, 0x00ffff, 0x00ffff); // Represents tiles drawn as a grid, helps with positioning
    return helper;
}

export {createAxesHelper, createGridHelper};