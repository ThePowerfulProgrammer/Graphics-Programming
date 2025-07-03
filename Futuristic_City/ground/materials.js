import { MeshStandardMaterial, DoubleSide,
    TextureLoader,
 } from "https://cdn.skypack.dev/three@0.132.2";

/**
    The material we will wrapped our geometry with
*/

function createAsphaltMaterial() 
{
    // What parts make up a skyscraper?
    // for now just the entire building

    const textureLoader = new TextureLoader();
    const texture = textureLoader.load("../textures/Asphalt.jpg");

    const asphaltWrapping = new MeshStandardMaterial(
        {
            map:texture,
            color: '#2F4F4F'
        }
    )

    return {asphaltWrapping};
}

export {createAsphaltMaterial};