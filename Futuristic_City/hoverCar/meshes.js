import { Mesh } from "https://cdn.skypack.dev/three@0.132.2";

import { createHoverCarGeometry } from "./geometries.js";
import { createHovercarMaterials } from './materials.js'

function createHovercarMeshes() 
{
    const geometries = createHoverCarGeometry();
    const materials = createHovercarMaterials();

    const hovercarMesh = new Mesh(geometries.cube, materials.hovercarMaterial );


    return {hovercarMesh};
}

export {createHovercarMeshes};
