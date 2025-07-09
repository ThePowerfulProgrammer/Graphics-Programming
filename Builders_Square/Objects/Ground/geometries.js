import {BoxBufferGeometry } from "https://cdn.skypack.dev/three@0.132.2";

// Ground is very simple to implement: A box geometry that will be scaled

function createGroundGeometry() 
{
    const cube = new BoxBufferGeometry(1,1,1);

    return {cube};
}

export {createGroundGeometry};