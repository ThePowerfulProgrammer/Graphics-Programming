import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js";
import { setUpModel } from "./setupModel.js";


async function loadBirds() 
{
    const loader = new GLTFLoader();
    
    const data = await loader.loadAsync("./components/models/parrot.glb");
    
    console.log("RAHHH \n", data);    
    console.log("Scene:", data.scene.children);
    console.log(typeof(data.scene.children[0]));

    const bird = setUpModel(data);

    return {bird};
}

export { loadBirds };