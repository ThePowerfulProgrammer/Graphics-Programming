import { Group, MathUtils } from "https://cdn.skypack.dev/three@0.132.2";

import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";
import { createMeshes } from "./meshes.js";

const wheelSpeed = MathUtils.degToRad(24);


class Train extends Group 
{
    constructor() 
    {
        super();

        this.meshes = createMeshes(); // add a meshes attribute to all Train objects

        this.add(
            this.meshes.nose,
            this.meshes.cabin,
            this.meshes.chimney,
            this.meshes.smallWheelRear,
            this.meshes.smallWheelCenter,
            this.meshes.smallWheelFront,
            this.meshes.bigWheel
          );
          
        this.train = (
            this.meshes.nose,
            this.meshes.cabin,
            this.meshes.chimney,
            this.meshes.smallWheelRear,
            this.meshes.smallWheelCenter,
            this.meshes.smallWheelFront,
            this.meshes.bigWheel
        );

    }


    tick(delta) 
    {
    this.meshes.bigWheel.rotation.y += wheelSpeed * delta * 1.5;
    this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta *1.5;
    this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta *1.5;
    this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta *1.5;  
    this.position.x -=  5 * wheelSpeed * delta; // move the entire group
    if (this.position.x <= -27.34 ) 
        {

            this.position.x = 0;
        }

    }
}
// I need to alter the position of the train and reduce the opacity of objects which I can do as 
// the objects are stored

export { Train };