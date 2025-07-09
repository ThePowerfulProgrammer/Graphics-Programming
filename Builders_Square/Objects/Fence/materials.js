import { MeshStandardMaterial
 } from "https://cdn.skypack.dev/three@0.132.2";


function createFenceMaterial() 
{

    const fenceWrapping = new MeshStandardMaterial(
        {
            color: "#4A4A5A",
            roughness: 0.70,
            metalness: 0.30,
            emissive: "#222244",
            emissiveIntensity: 0.20,
        }
    );

    return {fenceWrapping};

}

export {createFenceMaterial};

 