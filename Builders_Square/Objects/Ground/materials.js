import { MeshStandardMaterial
 } from "https://cdn.skypack.dev/three@0.132.2";


 function createGroundMaterial() 
{

    const groundWrapping = new MeshStandardMaterial(
        {
            color: '#2C3E50',
            roughness: 0.50,
            metalness: 0.30,
            emissive: '#0f0f1f',
            emissiveIntensity: 0.2
        }
    );

    return {groundWrapping};
}

 export {createGroundMaterial};