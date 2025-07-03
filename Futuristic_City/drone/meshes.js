import { Mesh } from "https://cdn.skypack.dev/three@0.132.2";


import { createDroneGeometries } from "./geometries.js";
import {  createDroneMaterials} from "./materials.js";

function createDroneMeshes() 
{
    const geometries = createDroneGeometries(); // all the geo's we need
    const materials = createDroneMaterials(); // all the materials we nedd

    const droneBodyMesh = new Mesh(geometries.droneBody, materials.material);
    droneBodyMesh.rotation.x = Math.PI/2;

    const droneWingsMesh = new Mesh(geometries.droneWings, materials.wingMaterial);
    droneWingsMesh.rotation.z = Math.PI/2;
    droneWingsMesh.position.set(0,0,-1);
    droneWingsMesh.scale.y = 12;
    droneWingsMesh.scale.x = 0.05;


    return {droneBodyMesh, droneWingsMesh};
}

export {createDroneMeshes};