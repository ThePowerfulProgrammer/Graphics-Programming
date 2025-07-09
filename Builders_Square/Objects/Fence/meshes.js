import { Mesh } from "https://cdn.skypack.dev/three@0.132.2";

import { createFenceGeometry } from "./geometries.js";
import { createFenceMaterial } from "./materials.js";

function createFenceMesh() 
{
    const geometries = createFenceGeometry();
    const materials = createFenceMaterial();

    const fenceMesh = new Mesh(geometries.cube, materials.fenceWrapping);
    fenceMesh.receiveShadow = true;

    return {fenceMesh};
}

export {createFenceMesh};