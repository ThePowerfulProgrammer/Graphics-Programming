import {BoxBufferGeometry, CylinderBufferGeometry,Shape,ShapeGeometry } from "https://cdn.skypack.dev/three@0.132.2";


function createHoverCarGeometry() 
{
    // for now we just need a cube that we will scale later

    const cube = new BoxBufferGeometry(1,1,1);

    return {cube};

}

export {createHoverCarGeometry};