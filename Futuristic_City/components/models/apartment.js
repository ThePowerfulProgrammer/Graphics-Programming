import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/DRACOLoader.js";
import { setUpModelNoAnimation } from "./setupModel.js";
import * as THREE from "https://cdn.skypack.dev/three@0.132.2";



async function loadApartment() 
{
    const loader = new GLTFLoader();
    const apartmentData = await loader.loadAsync("./components/models/SKY_apartments.glb");
    console.log("A DATA: ", apartmentData);
    console.log("Apartment Scene:", apartmentData.scene.children);
    console.log(typeof(apartmentData.scene.children[0]));

    const skybox = apartmentData.scene.children.find(obj => obj.name === "Skybox");    
    const skyboxMesh = skybox.children.find(obj => obj instanceof THREE.Mesh);
    
    console.log("Mesh SB: ",skyboxMesh);
    console.log(typeof(skybox));


    const testData = await loader.loadAsync("./components/models/Skyscraper.glb");
    console.log("Type" , typeof(testData));
    console.log("SS DATA", testData);
    console.log("SKYSCRAOER SCENE: ",testData.scene);
    const ss = testData.scene.children.find(obj => obj instanceof THREE.Mesh);
    console.log("SS? ",ss);


    try {
        const apartment = setUpModelNoAnimation(testData);    
        if (apartment) 
        {
            console.log("TYPE: ", typeof(apartment));
        }
        else 
        {
            console.log("UNDFINED");
        }

    } catch (error) {
        console.log(error);
    }

    return ss;

}

export {loadApartment};