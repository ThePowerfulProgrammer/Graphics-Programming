import { MeshStandardMaterial, DoubleSide,
    TextureLoader,
 } from "https://cdn.skypack.dev/three@0.132.2";

function createHovercarMaterials() 
{
    // Right now 1 material for our hover car

    const hovercarMaterial = new MeshStandardMaterial({
        color: '#001f4d',   // Stylish, deep blue
        roughness: 0.3,
        metalness: 0.8,
        // emissive: "#00baff",
    })

    return {hovercarMaterial};
}

export {createHovercarMaterials};