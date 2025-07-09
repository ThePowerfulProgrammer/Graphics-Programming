import { Mesh } from "https://cdn.skypack.dev/three@0.132.2";

import { createGroundGeometry } from "./geometries.js";
import { createGroundMaterial } from "./materials.js";

function createGroundMesh() 
{
    const geometries = createGroundGeometry(); // return an array of all geo's that make up the ground
    const materials = createGroundMaterial(); // return an array of all mat's that wrap the ground

    const groundMesh = new Mesh(geometries.cube, materials.groundWrapping);
    groundMesh.receiveShadow = true; 

    return {groundMesh};
}

export {createGroundMesh};