import { MeshStandardMaterial
} from "https://cdn.skypack.dev/three@0.132.2";


function createRoadMaterial() 
{

    const roadWrapping = new MeshStandardMaterial({
        color: "#1A1A1A", 
        roughness: 0.90,
        metalness: 0.10,
        emissive: "#111122",
        emissiveIntensity: 0.10
    });

    const roadMarkerWrapping = new MeshStandardMaterial({
        color: "#2B1035",
        roughness: 0.40,
        metalness: 0.30,
        emissive: "#9B30FF",
        emissiveIntensity: 0.60
    });

    return {roadWrapping, roadMarkerWrapping};

}

export {createRoadMaterial};
