import { Mesh } from "https://cdn.skypack.dev/three@0.132.2";
import { MathUtils} from "https://cdn.skypack.dev/three@0.132.2";


import { createSkyScraperGeometries } from "./geometries.js";
import { createSkyScraperWrapping } from "./materials.js";

function createSkyScrapperMesh() 
{
    const allGeometries = createSkyScraperGeometries();
    const allMaterials = createSkyScraperWrapping();

    const cubeBuilding = new Mesh(allGeometries.cubeBuildingBody, allMaterials.cubeBuildingWrapping);
    
    const cubeResidentBuilding = new Mesh(allGeometries.cubeBuildingBody, allMaterials.cubeResidentialWrapping);

    const cylinderBuilding = new Mesh(allGeometries.cylinderBuildingBody, allMaterials.cylinderBuildingWrapping);

    const cubeTextureBuilding = new Mesh(allGeometries.cubeBuildingBody, allMaterials.textureMaterial);

    return {cubeBuilding, cylinderBuilding, cubeTextureBuilding, cubeResidentBuilding};
}

export {createSkyScrapperMesh};