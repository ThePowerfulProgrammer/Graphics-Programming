import { DirectionalLight,
    SpotLight,
    AmbientLight,
 } from "https://cdn.skypack.dev/three@0.132.2";

function createLight() 
{
    const dLight = new DirectionalLight("white", 8);
    dLight.position.set(10,10,10); // where the light is
    dLight.position.target  = (0,0,2);

    const bottomLight = new DirectionalLight("white", 8);
    bottomLight.position.set(0,0,-2);

    const spotLight = new SpotLight("white", 10);
    spotLight.position.set(0,1000,2);
    spotLight.position.target = (0,0,2);
    
    var lights  = new Object();
    lights['top'] = dLight;
    lights['bottom'] = bottomLight;
    lights['spot'] = spotLight;


    const aLight = new AmbientLight("white", 3);

    return aLight;
}

export {createLight}; // make available elsewhere 