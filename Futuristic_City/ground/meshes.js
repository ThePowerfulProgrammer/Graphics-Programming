import { Mesh } from "https://cdn.skypack.dev/three@0.132.2";

import { createAsphaltGeometry } from "./geometries.js";
import { createAsphaltMaterial } from "./materials.js";

/**
Geometry + Material = Mesh 
Mesh is what we can render in the scene 
*/
function createGroundMesh() 
{
    const geometries = createAsphaltGeometry(); // Grab all the previous created Geometries
    const materials = createAsphaltMaterial(); // Grab all the previous created Materials

    // as of now we only need one mesh
    const asphaltMesh = new Mesh(geometries.cube, materials.asphaltWrapping); // cube wrapped with MSM
    asphaltMesh.receiveShadow = true;

    return {asphaltMesh};
}

export { createGroundMesh };