import { MeshStandardMaterial } from "https://cdn.skypack.dev/three@0.132.2";

// this module creates the materials that will be used for our shapes

/*	Defines how the object looks (color, texture, shininess)	Dictates appearance under light*/

function createMaterials() 
{
    const body = new MeshStandardMaterial(
        {color: 'firebrick', 
            flatShading: true,
        });

    const detail = new MeshStandardMaterial( 
        {
            color: 'darkslategray',
            flatShading: true,
        } )

    return {body, detail};
}

export { createMaterials };