import { Group, MathUtils, Object3D } from "https://cdn.skypack.dev/three@0.132.2";

import { createSkyScrapperMesh } from "./meshes.js";

class Skyscraper extends Group
{
    constructor(type) 
    {
        super();
        this.meshes = createSkyScrapperMesh();
        
        if (type === "cube") 
            {
                // we have a cube building

                this.add(this.meshes.cubeBuilding);

                this.skyScraper = (this.meshes.cubeBuilding);
            }
        else if (type === "textureCube") 
            {
                // we have a texture cubed building

                this.add(this.meshes.cubeTextureBuilding);

                this.skyScraper = (this.meshes.cubeTextureBuilding);

            }
        else if (type == "residentCube") 
            {
                this.add(this.meshes.cubeResidentBuilding);

                this.skyScraper = (this.meshes.cubeResidentBuilding);
            }
        
    }

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

    tick(delta) 
    {
        // if we ever decide to implement functionality
        // eg: Blinking lights
    }    
}

export {Skyscraper};