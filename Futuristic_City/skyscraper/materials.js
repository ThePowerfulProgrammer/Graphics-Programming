import { MeshStandardMaterial, DoubleSide,
    TextureLoader,
 } from "https://cdn.skypack.dev/three@0.132.2";

/**
    The material we will wrapped our geometry with
*/

function createSkyScraperMaterials() 
{
    // What parts make up a skyscraper?
    // for now just the entire building

    const textureLoader = new TextureLoader();
    const texture = textureLoader.load("../textures/Roughness.png");

    // do not need this in assignment 2) -> I will keep it here and update for assignment 4 :)  
    // const skyscaperWrapping = new MeshStandardMaterial(
    //     {
    //         map:texture
    //     }
    // )

    const skyscaperWrapping = new MeshStandardMaterial(
            {
                map:texture,
                metalness: 0.67,
                roughness: 0.85
            }
        )    

    // additional skyScraperMaterial
    const glassMaterial = new MeshStandardMaterial({
    map: textureLoader.load("../textures/SkyScraper_One/map.jpg"),
    emissiveMap: textureLoader.load("../textures/SkyScraper_One/emmissive.jpg"),
    metalnessMap: textureLoader.load("../textures/SkyScraper_One/metalness.jpg"),
    normalMap:textureLoader.load("../textures/SkyScraper_One/normal.jpg"),
    roughnessMap: textureLoader.load("../textures/SkyScraper_One/roughness.jpg"),
    aoMap: textureLoader.load("../textures/SkyScraper_One/ambient.jpg"),
    displacementMap: textureLoader.load("../textures/SkyScraper_One/displacement.jpg"),
    color: '#2c2f33',     // Dark slate-like or near-black (urban, sleek)
    metalness: 0.2,        // High metalness for reflective, modern surface
    roughness: 1,         // Lower roughness = shinier, but not a mirror
    displacementScale: 0                // higher values will displace the sides of the cube

    })



    // Material for the cylinder
    const skyScraperCylinderMaterial = new MeshStandardMaterial({
        
        color: '#708090',
        metalness: 0.8,        // High metalness for shiny, reflective feel
        roughness: 0.2,        // Low roughness for polished surface
        emissive: '#0ff',      // Cyan glow to simulate tech energy lines
        emissiveIntensity: 0.3 // Subtle neon-like glow        
    }) ;

    // Material for the roof
    const skyScraperRoofMaterial =  new MeshStandardMaterial({
        color: '#1f1f1f',          // Dark neutral grey
        metalness: 0.5,            // Highly metallic for reflections
        roughness: 0.5,           // Smooth and shiny, not mirror-like
    })


    return {skyscaperWrapping, skyScraperCylinderMaterial, glassMaterial, skyScraperRoofMaterial};
}

export {createSkyScraperMaterials};