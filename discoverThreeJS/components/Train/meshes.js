import { Mesh } from "https://cdn.skypack.dev/three@0.132.2";

import { createGeometries  } from "./geometries.js";
import { createMaterials } from "./materials.js";

/**	A combination of Geometry + Material	The actual renderable object in the scene */

function createMeshes() 
{
    const geometries = createGeometries(); // create the geometries for out meshes : returns an object of size 2
    const materials = createMaterials(); // create the materials for our meshes :  returns an object of size 4

    const cabin = new Mesh(geometries.cabin, materials.body);
    cabin.position.set(1.5,1.4,0);

    const chimney = new Mesh(geometries.chimney, materials.detail);
    chimney.position.set(-2,1.9,0);

    const nose = new Mesh(geometries.nose, materials.body);
    nose.position.set(-1, 1, 0);
    nose.rotation.z = Math.PI / 2;    


    const smallWheelRear = new Mesh(geometries.wheel, materials.detail);
    smallWheelRear.position.y = 0.5;
    smallWheelRear.rotation.x = Math.PI/2;

    const smallWheelCenter = smallWheelRear.clone();
    smallWheelCenter.position.x = -1;
  
    const smallWheelFront = smallWheelRear.clone();
    smallWheelFront.position.x = -2;

    const bigWheel = smallWheelRear.clone();
    bigWheel.position.set(1.5, 0.9, 0);
    bigWheel.scale.set(2, 1.25, 2);    

    return {
        nose,
        cabin,
        chimney,
        smallWheelRear,
        smallWheelCenter,
        smallWheelFront,
        bigWheel,
      };    
}

export { createMeshes };