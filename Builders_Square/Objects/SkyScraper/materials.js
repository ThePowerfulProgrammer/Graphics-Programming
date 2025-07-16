import { MeshStandardMaterial,TextureLoader
} from "https://cdn.skypack.dev/three@0.132.2";


function createSkyScraperWrapping() 
{

    const cubeBuildingWrapping = new MeshStandardMaterial({
        color: '#1a1a2e',             // deep steel-blue, cold and dark
        roughness: 0.4,               // smooth enough to reflect lights but not mirror-like
        metalness: 0.8,               // gives a metallic sheen typical of high-tech surfaces
        emissive: '#111133',          // subtle eerie purple-blue glow
        emissiveIntensity: 0.25,      // not too bright, just enough for a night-lit vibe
        transparent: false,            // optional: allows glow through some parts
        opacity: 0.95                 // just slightly see-through for style
    })

    const cubeResidentialWrapping = new MeshStandardMaterial({
        color: '#2f3542',             // urban dark gray-blue (think concrete at night)
        roughness: 0.75,              // rougher = softer reflections, reacts to light more diffusely
        metalness: 0.2,               // barely metallic, more like painted concrete/plaster
        emissive: '#0f0f1f',          // subtle dark glow, if any
        emissiveIntensity: 0.1,       // barely visible glow
        transparent: false,
        opacity: 1.0                  // fully opaque — no glassiness        
    }) 

    const cubeBuildingRoofWrapping = new MeshStandardMaterial({
        
    })

    const cylinderBuildingWrapping = new MeshStandardMaterial({
        color: '#0d1b2a',             // cold, dark bluish tone
        roughness: 0.2,               // smoother than skyscrapers → more reflective
        metalness: 0.9,               // very metallic, futuristic surface
        emissive: '#001f33',          // subtle tech-blue glow
        emissiveIntensity: 0.35,      // slightly brighter glow than skyscrapers
        transparent: true,
        opacity: 0.92                 // slightly more glassy        
    })


    // texture materials
    const textureLoader = new TextureLoader();

    const textureMaterial = new MeshStandardMaterial({
        map: textureLoader.load("../textures/Building_Square_Textures/color.png"),
        normalMap: textureLoader.load("../textures/Building_Square_Textures/normalDx.png"),
        roughnessMap: textureLoader.load("../textures/Building_Square_Textures/roughness.png"),
        metalnessMap: textureLoader.load("../textures/Building_Square_Textures/metalness.png"),
        displacementMap: textureLoader.load("../textures/Building_Square_Textures/displacement.png"),
        // metalness: 0.8, //lower value means less metallic therefore more reflective,
        // roughness: 1, //higher value therefore more  rough more shiny
        displacementScale: 0                // higher values will displace the sides of the cube


    })

    return {cubeBuildingWrapping, cylinderBuildingWrapping, textureMaterial, cubeResidentialWrapping};

}

export {createSkyScraperWrapping};