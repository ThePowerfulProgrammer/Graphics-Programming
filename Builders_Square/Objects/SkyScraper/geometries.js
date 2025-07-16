import {BoxBufferGeometry,
    CylinderBufferGeometry
 } from "https://cdn.skypack.dev/three@0.132.2";


function createSkyScraperGeometries() 
{
    const cubeBuildingBody = new BoxBufferGeometry(1,1,1); // Our skyscrapers will be different sizes so need to set scale elsewhere
    const cubeBuildingRoof = new BoxBufferGeometry(1,1,1); // The roof of the skyScraper

    const cylinderBuildingBody = new CylinderBufferGeometry(1,1,1,32,1);

    return {cubeBuildingBody,cubeBuildingRoof ,cylinderBuildingBody};
}

export {createSkyScraperGeometries};