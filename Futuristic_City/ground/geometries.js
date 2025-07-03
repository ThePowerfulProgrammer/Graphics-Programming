import {BoxBufferGeometry, CylinderBufferGeometry,Shape,ShapeGeometry } from "https://cdn.skypack.dev/three@0.132.2";


/**
The geometry that defines a skyscraper
*/
function createAsphaltGeometry() 
{
    // For now we just need cubes that we will transform in a flat surface
    const cube = new BoxBufferGeometry(1,1,1);    
    
    return {cube};
}

export { createAsphaltGeometry };