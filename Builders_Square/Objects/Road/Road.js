import { Group, MathUtils, Object3D } from "https://cdn.skypack.dev/three@0.132.2";
import { createRoadMesh } from "./meshes.js";


class Road extends Group {

    constructor() 
    {
        super();

        this.meshes = createRoadMesh();

        this.add(this.meshes.road, this.meshes.roadWrapping);

        this.road = (this.meshes.road, this.meshes.roadWrapping);
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

export {Road};

