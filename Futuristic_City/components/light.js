import { DirectionalLight, PointLight, AmbientLight, HemisphereLight } from "https://cdn.skypack.dev/three@0.132.2";


function createPointLight() 
{
    const light = new DirectionalLight("white", 12);
    light.position.set(-12,10,12);
    light.castShadow = true;

    const lightTwo = new DirectionalLight("white", 12);
    lightTwo.position.set(10,10,12);

    return {light, lightTwo};
}

export {createPointLight};