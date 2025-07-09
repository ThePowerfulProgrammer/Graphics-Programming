import { Group, MathUtils } from "https://cdn.skypack.dev/three@0.132.2";

import { createGroundMesh } from "./meshes.js";

class Ground extends Group 
{
    constructor() 
    {
        super(); // call parent ctor

        this.meshes = createGroundMesh();

        this.add(this.meshes.groundMesh);

        this.ground = (this.meshes.groundMesh);
    }

    changePosition(x,y,z) 
    {
        this.position.set(x,y,z);
    }

    scaleY(scale) 
    {
        this.scale.y = scale;
        this.changePosition(this.position.x,scale/2, this.position.z );
    }

    scaleX(scale) 
    {
        this.scale.x = scale;
    }

    scaleZ(scale) 
    {
        this.scale.z = scale;
    }    

    tick(delta) 
    {

    }

}

export {Ground};