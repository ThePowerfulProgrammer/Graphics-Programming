import {BoxBufferGeometry, CylinderBufferGeometry,Shape,ShapeGeometry } from "https://cdn.skypack.dev/three@0.132.2";


/**
The geometry that defines a skyscraper
*/
function createSkyScraperGeometries() 
{
    // For now we just need cubes that we will transform
    const cube = new BoxBufferGeometry(1,1,1);    

    // Adding a cylinder for rounded skyscrapers
    const cylinder = new CylinderBufferGeometry(1,1,1, 32,1);

    // add a geometry for the top of the skyscraper
    

    return {cube, cylinder};
}

export { createSkyScraperGeometries };