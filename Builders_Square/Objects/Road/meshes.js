import { Mesh } from "https://cdn.skypack.dev/three@0.132.2";
import { MathUtils} from "https://cdn.skypack.dev/three@0.132.2";


import { createRoadGeometry } from "./geometries.js";
import { createRoadMaterial } from "./materials.js";


function createRoadMesh() 
{
    const allGeometries = createRoadGeometry();
    const allMaterials = createRoadMaterial();

    const road = new Mesh(allGeometries.roadGeometry, allMaterials.roadWrapping);
    const roadWrapping = new Mesh(allGeometries.roadMarkerGeometry, allMaterials.roadMarkerWrapping);

    road.position.set(26.5,0.25,-9);
    road.rotation.y += MathUtils.degToRad(90);

    roadWrapping.position.set(26.5,0.45,-9); // should be above the road
    roadWrapping.rotation.y += MathUtils.degToRad(90);

    return {road, roadWrapping};
}

export {createRoadMesh};