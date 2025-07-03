import { AxesHelper, GridHelper } from "https://cdn.skypack.dev/three@0.132.2";

function createAxesHelper() 
{
    const helper = new AxesHelper(16);
    helper.position.set(-14, 0,-14);
    return helper;
}

function createGridHelper() 
{
    const helper = new GridHelper(25,25, 0x00ffff, 0x00ffff);
    return helper;
}

export { createAxesHelper, createGridHelper};