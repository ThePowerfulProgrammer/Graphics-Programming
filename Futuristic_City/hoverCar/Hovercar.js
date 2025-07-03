import { Group, MathUtils } from "https://cdn.skypack.dev/three@0.132.2";


import { createHovercarMeshes } from "./meshes.js";


const NinetyDegreesLeft = MathUtils.degToRad(-90); // y axis

let counter = 0;

class Hovercar extends Group 
{
    constructor(posX=0, posY=0, posZ=0) 
    {
        super();        
        this.meshes = createHovercarMeshes();

        this.add(this.meshes.hovercarMesh);

        this.hovercar = (
            this.meshes.hovercarMesh
        );


        this.position.set(posX,posY,posZ);
    }

    changePosition(x,y,z) 
    {
        this.position.set(x,y,z);
    }    

    getPosition() 
    {
        const x = this.position.x;
        const y = this.position.y;
        const z = this.position.z;
        return {x,y,z}
    }


    scaleY(scale) 
    {
        this.scale.y = scale;
        if (scale >= 1) 
            {
                this.changePosition(this.position.x,scale/2, this.position.z );
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

    scaleXYZ(x,y,z) 
    {
        this.scale.set(x,y,z);

    }    

    rotate(value, axis) 
    {
        const rads = MathUtils.degToRad(value); // convert value to rads

        if (axis == 'x') 
            {
                this.rotation.x += rads;
            }
        else if (axis == 'y') 
            {
                this.rotation.y += rads;
            }
        else if (axis == 'z') 
            {
                this.rotation.z += rads;
            }

    }

    // tick(delta) 
    // {
    //     if (this.position.z < 12 && this.rotation.y != (NinetyDegreesLeft * 2)) 
    //         {
    //             console.log("First if is running");
    //             this.position.z += delta * 6;
    //         }
        
    //     if (this.position.z >= 12 && this.rotation.y == 0) 
    //         {
    //             this.rotation.y += NinetyDegreesLeft;
    //         }

    //     if (this.rotation.y == NinetyDegreesLeft && this.position.x > -12) 
    //         {
    //             this.position.x -= delta * 6;
    //         }

    //     if (this.position.x <= -12 && this.rotation.y == NinetyDegreesLeft) 
    //         {
    //             this.rotation.y += NinetyDegreesLeft;
    //         }
        
    //     if (this.rotation.y == (NinetyDegreesLeft * 2)  && this.position.z > -12) 
    //         {
    //             console.log("Before:", this.position.z);
    //             this.position.z -= delta * 6;
    //             console.log("After:", this.position.z);
    //             counter += 1;
    //         }
        
    //     // if (this.position.z <= -12 && this.rotation.y == (NinetyDegreesLeft * 2))
    //     //     {
    //     //         this.rotation.y += NinetyDegreesLeft;
    //     //     }

    //     if (this.position.z <= -12) 
    //         {
    //             this.position.x += delta * 0.05;
    //         }

    // }

}

export {Hovercar};