import {BoxBufferGeometry } from "https://cdn.skypack.dev/three@0.132.2";


function createFenceGeometry() 
{
    const cube = new BoxBufferGeometry(1,1,1);
    return {cube};
}

export {createFenceGeometry};