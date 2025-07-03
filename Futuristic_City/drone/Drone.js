import { Group, MathUtils } from "https://cdn.skypack.dev/three@0.132.2";

import { createDroneMeshes } from "./meshes.js";


// Best use for Group as a drone is composed of various objects, we can
// control them in a group
class Drone extends Group 
{
    constructor() 
    {
        super()
        this.meshes = createDroneMeshes();

        this.add(this.meshes.droneBodyMesh,
            this.meshes.droneWingsMesh
        );

        this.drone = (
            this.meshes.droneBodyMesh,
            this.meshes.droneWingsMesh
        );
    }   

    // remember these type of functions will move the entire drone
    changePosition(x,y,z) 
    {
        this.position.set(x,y,z);
    } 

    scaleY(scale) 
    {
        this.scale.y = scale;
        this.changePosition(this.position.x, scale/2, this.position.z);
    }

    scaleX(scale) 
    {
        this.scale.x = scale;
    }

    scaleZ(scale) 
    {
        this.scale.z = scale;
    }

    scaleXYZ(x,y,z) 
    {
        this.scale.set(x,y,z);

    }

    tick(delta) 
    {
        // we will rotate the drone and maybe more movements
        this.rotation.y += 1.5 * delta;
    }
}

export {Drone};