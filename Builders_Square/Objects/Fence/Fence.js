import { Group, MathUtils, Object3D } from "https://cdn.skypack.dev/three@0.132.2";
import { createFenceMesh } from "./meshes.js";

class Fence extends Object3D {

    constructor() 
    {
        super();

        this.meshes = createFenceMesh();

        this.add(this.meshes.fenceMesh);

        this.fence = this.meshes.fenceMesh;

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

export {Fence};