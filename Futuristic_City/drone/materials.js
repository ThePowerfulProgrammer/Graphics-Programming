import { MeshStandardMaterial, DoubleSide,
    TextureLoader,
 } from "https://cdn.skypack.dev/three@0.132.2";

function createDroneMaterials() 
{
    // do I want my drone to be one color only?
    // what about roughness and metalness
    // I will use the same Material for the drone
    const material = new MeshStandardMaterial({
        color: '#2b2b2b',     // Charcoal/jet black – stealthy and tactical
        metalness: 0.8,        // High metalness for a reflective, metallic body
        roughness: 0.3         // Some smoothness for a slick, polished surface
    })

    const wingMaterial = new MeshStandardMaterial({
        color: "#8B0000",
        metalness: 0.7,
        roughness: 0.4
    });

    return {material, wingMaterial};

}

export {createDroneMaterials};