import { Mesh } from "https://cdn.skypack.dev/three@0.132.2";

import { createSkyScraperGeometries } from "./geometries.js";
import { createSkyScraperMaterials } from "./materials.js";


/**
Geometry + Material = Mesh 
Mesh is what we can render in the scene 
*/
function createSkyScraperMeshes() 
{
    const geometries = createSkyScraperGeometries(); // Grab all the previous created Geometries
    const materials = createSkyScraperMaterials(); // Grab all the previous created Materials

    // as of now we only need one mesh
    const skyScraperMesh = new Mesh(geometries.cube, materials.skyscaperWrapping); // cube wrapped with MSM
    skyScraperMesh.castShadow = true;
    
    const skyScraperRoofMesh = new Mesh(geometries.cube, materials.skyScraperRoofMaterial);
    skyScraperRoofMesh.scale.y = 0.2;

    // Another mesh for cylinder buildings
    const skyScraperCylinderMesh = new Mesh(geometries.cylinder, materials.skyScraperCylinderMaterial);

    // another mesh for more types of buildings
    const skyScraperGlassMesh = new Mesh(geometries.cube, materials.glassMaterial);

    return {skyScraperMesh, skyScraperCylinderMesh, skyScraperGlassMesh, skyScraperRoofMesh};
}

export { createSkyScraperMeshes };