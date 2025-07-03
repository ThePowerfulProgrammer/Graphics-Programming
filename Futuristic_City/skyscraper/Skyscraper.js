import { Group, MathUtils } from "https://cdn.skypack.dev/three@0.132.2";

import { createSkyScraperMeshes } from "./meshes.js";


class SkyScraper extends Group
{


    constructor(type) 
    {
        super()
        this.meshes = createSkyScraperMeshes(); // gets me access to all meshes from the function

        if (type == "cube") 
            {                
                this.add(
                    this.meshes.skyScraperMesh,
                    this.meshes.skyScraperRoofMesh

                );

                this.skyScraper = [
                    this.meshes.skyScraperMesh,
                    this.meshes.skyScraperRoofMesh
                ];
            }
        else if (type == "cylinder") 
            {
                this.add(
                    this.meshes.skyScraperCylinderMesh

                );

                this.skyScraper = [
                    this.meshes.skyScraperCylinderMesh
                ];

            }
        else if (type == "glassTower") 
            {
                this.add(this.meshes.skyScraperGlassMesh,
                    this.meshes.skyScraperRoofMesh
                );

                this.skyScraper = [this.meshes.skyScraperGlassMesh,
                    this.meshes.skyScraperRoofMesh
                ];

            }

        console.log(this.skyScraper.length >= 2);
    }

    changePosition(x,y,z) 
    {
        this.position.set(x,y,z);
    }    

    scaleY(scale) 
    {
        // I only want to scale the skyScraper body not the roof
        this.skyScraper[0].scale.y = scale;
        this.changePosition(this.position.x, scale/2, this.position.z);

        // After scaling the body of the skyScraper I need to reposition the roof to the top of the SS
        if (this.skyScraper.length == 2) 
            {
                this.skyScraper[1].position.y += scale/2 + 0.1;
            }
        
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

export { SkyScraper };