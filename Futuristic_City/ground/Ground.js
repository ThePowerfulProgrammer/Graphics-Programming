import { Group, MathUtils } from "https://cdn.skypack.dev/three@0.132.2";

import { createGroundMesh } from "./meshes.js";

class Ground extends Group 
{
    constructor() 
    {
        super()

        this.meshes = createGroundMesh();
        
        this.add(this.meshes.asphaltMesh);

        this.ground = (this.meshes.asphaltMesh);

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